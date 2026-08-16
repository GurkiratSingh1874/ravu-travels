"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import TextField from "@/components/ui/TextField";
import Select from "@/components/ui/newSelect";
import { createRecord } from "@/features/records/actions/create-record";

type Car = {
  id: string;
  name: string;
};

type Props = {
  tourTitle: string;
  cars: Car[];
};

export default function BookingForm({

  tourTitle,
  cars,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [pickup, setPickup] = useState("");
  const [car, setCar] = useState("");

  async function bookNow() {
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!date) {
      toast.error("Please select your travel date.");
      return;
    }

    if (!pickup.trim()) {
      toast.error("Please enter pickup location.");
      return;
    }

    if (!car) {
      toast.error("Please select a car.");
      return;
    }

    const message = `Hello RAVU TRAVELS,

I want to book the following tour.

Tour: ${tourTitle}
Car: ${car}

Name: ${name}
Phone: ${phone}
Travel Date: ${date}
Pickup Location: ${pickup}

Please contact me.`;

    const selectedCar = cars.find(
      (item) => item.name === car
    );

    await createRecord({
  customerName: name,
  phone,

  bookingType: "Tour",

  tourName: tourTitle,
  carName: car,

  travelDate: date,

  message,
});

    

    toast.success("Redirecting to WhatsApp...");

    window.open(
      `https://wa.me/9988393184?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setName("");
    setPhone("");
    setDate("");
    setPickup("");
    setCar("");
  }

  return (
    <div className="mt-24 rounded-[32px] bg-white p-10 shadow-2xl">
      <h2 className="heading mb-10 text-5xl font-bold">
        Book This Tour
      </h2>

      <TextField
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="h-4" />

      <TextField
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="h-4" />

      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="h-4" />

      <TextField
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />

      <div className="h-4" />

      <Select
        value={car}
        onChange={(e) => setCar(e.target.value)}
      >
        <option value="">Select Car</option>

        {cars.map((item) => (
          <option
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </Select>

      <div className="h-8" />

      <button
        onClick={bookNow}
        className="w-full rounded-2xl bg-amber-500 py-4 text-lg font-semibold text-white transition hover:bg-slate-900"
      >
        Book on WhatsApp
      </button>
    </div>
  );
}