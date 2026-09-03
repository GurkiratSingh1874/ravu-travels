"use client";

import ImageUpload from "@/features/cars/components/image-upload";
import { createTourAction } from "../actions/create-tour";
import { updateTourAction } from "../actions/update-tour";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import { TourFormData } from "../types/tour";
import { toast } from "react-hot-toast";

type Car = {
  id: string;
  name: string;
};

type Props = {
  cars: Car[];
  tour?: any;
};

export default function TourForm({ cars, tour }: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [featured, setFeatured] = useState(
    tour?.featured ?? false
  );

  const [selectedCars, setSelectedCars] = useState<string[]>(
    tour?.cars?.map((car: any) => car.id) ?? []
  );

  const [coverImage, setCoverImage] = useState(
    tour?.coverImage ?? ""
  );

  const [gallery, setGallery] = useState<string[]>(
    tour?.gallery ?? []
  );

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
    if (!data.title.trim()) {
      toast.error("Please enter tour title.");
      return;
    }

    if (!data.description.trim()) {
      toast.error("Please enter description.");
      return;
    }

    if (!data.days || data.days < 1) {
      toast.error("Days must be at least 1.");
      return;
    }

    if (!data.nights || data.nights < 0) {
      toast.error("Nights cannot be negative.");
      return;
    }

    if (!coverImage) {
      toast.error("Please upload a cover image.");
      return;
    }

    if (gallery.length === 0) {
      toast.error("Please upload at least one gallery image.");
      return;
    }

    if (selectedCars.length === 0) {
      toast.error("Please select at least one car.");
      return;
    }

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

    startTransition(async () => {
      try {
        if (tour) {
          await updateTourAction(tour.id, formData);

          toast.success("Tour updated successfully!");

          router.refresh();

          return;
        }

        await createTourAction(formData);

        toast.success("Tour created successfully!");

        reset();
        setSelectedCars([]);
        setFeatured(false);
        setCoverImage("");
        setGallery([]);

        router.refresh();
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Tour Name */}
      <Input
        placeholder="Tour Name"
        {...register("title")}
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        className="w-full rounded border p-2"
        {...register("description")}
      />

      {/* Days */}
      <Input
        type="number"
        placeholder="Days"
        {...register("days", {
          valueAsNumber: true,
        })}
      />

      {/* Nights */}
      <Input
        type="number"
        placeholder="Nights"
        {...register("nights", {
          valueAsNumber: true,
        })}
      />

      {/* Cover Image */}
      <div>
        <h3 className="mb-2 font-semibold">
          Cover Image
        </h3>

        <ImageUpload
          onUpload={(url) => setCoverImage(url)}
        />

        {coverImage && (
          <img
            src={coverImage}
            alt="Tour cover"
            className="mt-3 h-32 rounded object-cover"
          />
        )}
      </div>

      {/* Gallery Images */}
      <div>
        <h3 className="mb-2 font-semibold">
          Gallery Images
        </h3>

        <ImageUpload
          onUpload={(url) =>
            setGallery((prev) => [...prev, url])
          }
        />

        <div className="mt-3 grid grid-cols-3 gap-2">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="h-28 w-full rounded object-cover"
            />
          ))}
        </div>
      </div>

      {/* Select Cars */}
      <div>
        <h3 className="mb-2 font-semibold">
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
                  setSelectedCars((prev) => [
                    ...prev,
                    car.id,
                  ]);
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

      {/* Featured Tour */}
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

      {/* Submit */}
      <Button type="submit">
        {isPending
          ? "Saving..."
          : tour
          ? "Update Tour"
          : "Save Tour"}
      </Button>
    </form>
  );
}