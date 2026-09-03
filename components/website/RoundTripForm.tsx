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

export default function RoundTripForm({ cars }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
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
    if (!destination.trim()) {
      toast.error("Please enter destination.");
      return;
    }
    if (!departureDate) {
      toast.error("Please select departure date.");
      return;
    }
    if (!returnDate) {
      toast.error("Please select return date.");
      return;
    }
    if (new Date(returnDate) < new Date(departureDate)) {
      toast.error("Return date cannot be before departure date.");
      return;
    }
    if (!car) {
      toast.error("Please select a car.");
      return;
    }

    const message = `Hello RAVU TRAVELS,

I want to book a Round Trip.

Pickup: ${pickup}
Destination: ${destination}

Departure Date: ${departureDate}
Return Date: ${returnDate}

Car: ${car}

Name: ${name}
Phone: ${phone}

Please contact me.`;

    setLoading(true);

    await createRecord({
      customerName: name,
      phone,
      bookingType: "Round Trip",
      tourName: undefined,
      carName: car,
      travelDate: departureDate,
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
      <h2 className="heading text-2xl font-bold mb-1">Book Your Round Trip</h2>
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
            <label className="field-label">Destination</label>
            <input
              className="field-input"
              placeholder="e.g. Shimla"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="field-label">Departure Date</label>
            <input
              type="date"
              className="field-input"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>
          <div>
            <label className="field-label">Return Date</label>
            <input
              type="date"
              className="field-input"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
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
          disabled={loading}
          className="btn-primary"
        >
          {loading ? "Please wait..." : "📲 Book on WhatsApp"}
        </button>

      </div>
    </div>
  );
}