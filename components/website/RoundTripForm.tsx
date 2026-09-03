"use client";

import { createRecord } from "@/features/records/actions/create-record";
import { useState } from "react";
import {toast} from "react-hot-toast";

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

    const whatsappNumber = "9988393184"; // Replace with actual number

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
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
    window.open(url, "_blank");
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
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded p-2"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded p-2"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
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
