"use client";

import { useState } from "react";
import toast from "react-hot-toast";

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
    <div className="form-card">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">
        Secure Your Spot
      </p>
      <h2 className="heading mb-1 text-3xl font-bold">
        Book This Tour
      </h2>
      <p className="text-slate-500 text-sm mb-8">
        Fill in your details and we'll confirm via WhatsApp.
      </p>

      <div className="space-y-5">

        <div>
          <label className="field-label">Your Name</label>
          <input
            className="field-input"
            placeholder="e.g. Gurkirat Singh"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="field-label">Phone Number</label>
          <input
            className="field-input"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label">Travel Date</label>
            <input
              type="date"
              className="field-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label className="field-label">Pickup Location</label>
            <input
              className="field-input"
              placeholder="e.g. Chandigarh"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="field-label">Select Car</label>
          <select
            className="field-input"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          >
            <option value="">Choose a car</option>
            {cars.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={bookNow}
          className="btn-primary"
        >
          📲 Book on WhatsApp
        </button>

      </div>
    </div>
  );
}