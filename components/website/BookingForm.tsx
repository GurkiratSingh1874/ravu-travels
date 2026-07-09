"use client";

import { useState } from "react";

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

  function bookNow() {
    const message = `Hello RAVU TRAVELS,

I want to book the following tour.

Tour: ${tourTitle}
Car: ${car}

Name: ${name}
Phone: ${phone}
Travel Date: ${date}
Pickup Location: ${pickup}

Please contact me.`;

    const whatsappNumber = "9988393184";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`
    );
  }

  return (
    <div className="mt-16 rounded-lg border p-6">

      <h2 className="text-3xl font-bold mb-6">
        Book This Tour
      </h2>

      <input
        className="w-full border rounded p-2 mb-4"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border rounded p-2 mb-4"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded p-2 mb-4"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        className="w-full border rounded p-2 mb-4"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />

      <select
        className="w-full border rounded p-2 mb-4"
        value={car}
        onChange={(e) => setCar(e.target.value)}
      >
        <option value="">
          Select Car
        </option>

        {cars.map((item) => (
          <option
            key={item.id}
            value={item.name}
          >
            {item.name}
          </option>
        ))}
      </select>

      <button
        onClick={bookNow}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Book on WhatsApp
      </button>

    </div>
  );
}