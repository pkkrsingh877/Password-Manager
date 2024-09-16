"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditPassword = () => {
    const [formData, setFormData] = useState({
        website: 'Example Website',
        userid: 'user@example.com',
        password: 'password123',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated Data:', formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Edit Password Information</h2>

                <form onSubmit={handleSubmit}>
                    {/* Website Name */}
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 text-sm font-semibold mb-2">
                            Website Name
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="e.g. Facebook, Gmail"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* User ID */}
                    <div className="mb-4">
                        <label htmlFor="userid" className="block text-gray-700 text-sm font-semibold mb-2">
                            User ID (Email, Phone Number or Login ID)
                        </label>
                        <input
                            type="text"
                            id="userid"
                            name="userid"
                            value={formData.userid}
                            onChange={handleChange}
                            placeholder="e.g. user@example.com or +1234567890"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Update Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition duration-300 ease-in-out"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditPassword;
