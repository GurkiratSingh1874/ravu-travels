"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { CarFormData } from "../types/car";
import { createCarAction } from "../actions/create-car";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import ImageUpload from "./image-upload";
import { updateCarAction } from "../actions/update-car";

type Props = {
  car?: CarFormData & {
    id: string;
    images: string[];
  };
};

export default function CarForm({ car }: Props) {
  const router = useRouter();

  const [images, setImages] = useState<string[]>(
  car?.images ?? []
);
  const [isPending, startTransition] = useTransition();

  const {
  register,
  handleSubmit,
  reset,
} = useForm<CarFormData>({
  defaultValues: car
    ? {
        name: car.name,
        category: car.category,
        seats: car.seats,
        fuelType: car.fuelType,
        transmission: car.transmission,
      }
    : undefined,
});

  async function onSubmit(data: CarFormData) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("seats", data.seats.toString());
    formData.append("fuelType", data.fuelType);
    formData.append("transmission", data.transmission);

    images.forEach((image) => {
      formData.append("images", image);
    });

    startTransition(async () => {
      if (car) {
      await updateCarAction(car.id, formData);
      return;
    }

    await createCarAction(formData);

      reset();
      setImages([]);
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        placeholder="Car Name"
        {...register("name")}
      />

      <Select {...register("category")}>
        <option value="">Select Category</option>
        <option value="SEDAN">Sedan</option>
        <option value="SUV">SUV</option>
        <option value="MUV">MUV</option>
        <option value="HATCHBACK">Hatchback</option>
        <option value="LUXURY">Luxury</option>
        <option value="TEMPO_TRAVELLER">
          Tempo Traveller
        </option>
      </Select>

      <Input
        type="number"
        placeholder="Seats"
        {...register("seats", {
          valueAsNumber: true,
        })}
      />

      <Select {...register("fuelType")}>
        <option value="">Select Fuel Type</option>
        <option value="PETROL">Petrol</option>
        <option value="DIESEL">Diesel</option>
        <option value="CNG">CNG</option>
        <option value="ELECTRIC">Electric</option>
        <option value="HYBRID">Hybrid</option>
      </Select>

      <Select {...register("transmission")}>
        <option value="">Select Transmission</option>
        <option value="MANUAL">Manual</option>
        <option value="AUTOMATIC">Automatic</option>
      </Select>

      <ImageUpload
        onUpload={(url) =>
          setImages((prev) => [...prev, url])
        }
      />

      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Car ${index + 1}`}
              className="h-28 w-full rounded object-cover"
            />
          ))}
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save Car"}
      </Button>
    </form>
  );
}