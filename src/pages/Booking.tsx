import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "bookings"), formData);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: "",
        travelers: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Book Your Trip 🌍
        </h1>

        {success && (
          <p className="bg-green-200 text-green-800 p-3 rounded mb-4 text-center animate-pulse">
            Booking submitted successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Full Name *
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email *
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Phone Number *
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Destination *
            </label>
            <input
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Where do you want to go?"
              required
            />
          </div>

          {/* Travelers */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Number of Travelers *
            </label>
            <input
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="How many travelers?"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Special Requests / Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border w-full p-3 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Optional message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 mt-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;