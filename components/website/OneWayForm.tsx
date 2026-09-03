"use client";

import { useState } from "react";
import {toast} from "react-hot-toast";
import { createRecord } from "@/features/records/actions/create-record";

type Car = {
  id: string;
  name: string;
};

type Props = {
  cars: Car[];
};

export default function OneWayForm({ cars }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
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

if (!pickup.trim()) {
  toast.error("Please enter pickup location.");
  return;
}

if (!drop.trim()) {
  toast.error("Please enter drop location.");
  return;
}

if (!date) {
  toast.error("Please select travel date.");
  return;
}

if (!car) {
  toast.error("Please select a car.");
  return;
}
    const message = `Hello RAVU TRAVELS,

I want to book a One Way Trip.

Pickup: ${pickup}
Drop: ${drop}

Travel Date: ${date}

Car: ${car}

Name: ${name}
Phone: ${phone}

Please contact me.`;

    const whatsappNumber = "9988393184";

    await createRecord({
  customerName: name,
  phone,

  bookingType: "One Way",

  tourName: undefined,
  carName: car,

  travelDate: date,

  message,
});
 toast.success("Redirecting to WhatsApp...");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

 

  return (
    <div className="space-y-4">

      <input
        className="w-full border rounded p-2"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />

      <input
        className="w-full border rounded p-2"
        placeholder="Drop Location"
        value={drop}
        onChange={(e) => setDrop(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded p-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="w-full border rounded p-2"
        value={car}
        onChange={(e) => setCar(e.target.value)}
      >
        <option value="">Select Car</option>

        {cars.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <button
        onClick={bookNow}
        className="w-full rounded bg-green-600 py-3 text-white"
      >
        Book on WhatsApp
      </button>

    </div>
  );
}