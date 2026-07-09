"use client";

import ImageUpload from "@/features/cars/components/image-upload";
import { createTourAction } from "../actions/create-tour";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { updateTourAction } from "../actions/update-tour";

import { TourFormData } from "../types/tour";

type Car = {
  id: string;
  name: string;
};

type Props = {
  cars: Car[];
};

type Props = {
  cars: {
    id: string;
    name: string;
  }[];

  tour?: any;
};

export default function TourForm({cars,tour,}: Props) {
  const [featured, setFeatured] = useState(
  tour?.featured ?? false
    );
  const [selectedCars, setSelectedCars] =
  useState<string[]>(
    tour?.cars?.map((car: any) => car.id) ?? []
  );
  const [coverImage, setCoverImage] = useState(
  tour?.coverImage ?? ""
  );
  const [gallery, setGallery] = useState<string[]>(
  tour?.gallery ?? []
  );

  const router = useRouter();
  const [isPending] = useTransition();

  const {
  register,
  handleSubmit,
  reset,
  } = useForm<TourFormData>({
  defaultValues: tour
    ? {
        title: tour.title,
        description: tour.description,
        days: tour.days,
        nights: tour.nights,
      }
    : undefined,
  });

  async function onSubmit(data: TourFormData) {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("days", data.days.toString());
  formData.append("nights", data.nights.toString());

  formData.append("featured", featured.toString());

  formData.append("coverImage", coverImage);

  selectedCars.forEach((id) => {
    formData.append("cars", id);
  });

  gallery.forEach((image) => {
    formData.append("gallery", image);
  });

  if (tour) {
  await updateTourAction(tour.id, formData);
  return;
    }

  await createTourAction(formData);

  reset();

  setSelectedCars([]);
  setFeatured(false);
  setCoverImage("");
  setGallery([]);

  router.refresh();
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <Input
        placeholder="Tour Name"
        {...register("title")}
      />

      <textarea
        placeholder="Description"
        className="w-full rounded border p-2"
        {...register("description")}
      />

      <Input
        type="number"
        placeholder="Days"
        {...register("days", {
          valueAsNumber: true,
        })}
      />

      <Input
        type="number"
        placeholder="Nights"
        {...register("nights", {
          valueAsNumber: true,
        })}
      />

      <div>
  <h3 className="font-semibold mb-2">
    Cover Image
  </h3>

  <ImageUpload
    onUpload={(url) => setCoverImage(url)}
  />

  {coverImage && (
    <img
      src={coverImage}
      className="mt-3 h-32 rounded"
    />
  )}
</div>

    <div>
  <h3 className="font-semibold mb-2">
    Gallery Images
  </h3>

  <ImageUpload
    onUpload={(url) =>
      setGallery((prev) => [...prev, url])
    }
  />

  <div className="grid grid-cols-3 gap-2 mt-3">
    {gallery.map((image, index) => (
      <img
        key={index}
        src={image}
        className="h-28 rounded object-cover"
      />
    ))}
  </div>
</div>

      <div>
        <h3 className="font-semibold mb-2">
          Select Cars
        </h3>

        {cars.map((car) => (
          <label
            key={car.id}
            className="flex items-center gap-2"
          >
            <input
            type="checkbox"
            value={car.id}
            checked={selectedCars.includes(car.id)}
            onChange={(e) => {
                if (e.target.checked) {
                setSelectedCars((prev) => [...prev, car.id]);
                } else {
                setSelectedCars((prev) =>
                    prev.filter((id) => id !== car.id)
                );
                }
            }}
            />

            {car.name}
          </label>
        ))}
      </div>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={featured}
          onChange={(e) =>
            setFeatured(e.target.checked)
          }
        />

        Featured Tour
      </label>

      <Button
        type="submit"
      >
        {isPending
            ? "Saving..."
            : tour
            ? "Update Tour"
            : "Save Tour"}
      </Button>
    </form>
  );
}