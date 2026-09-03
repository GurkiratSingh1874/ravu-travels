"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
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
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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
      `https://wa.me/9988393184?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setLoading(false);
  }

  return (
    <div className="form-card">
      <h2 className="heading text-2xl font-bold mb-1">Book Your Ride</h2>
      <p className="text-slate-500 text-sm mb-8">
        Fill in the details and we'll confirm via WhatsApp.
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
            <label className="field-label">Pickup Location</label>
            <input
              className="field-input"
              placeholder="e.g. Chandigarh"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>
          <div>
            <label className="field-label">Drop Location</label>
            <input
              className="field-input"
              placeholder="e.g. Manali"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </div>
        </div>

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
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "Please wait..." : "📲 Book on WhatsApp"}
        </button>

      </div>
    </div>
  );
}