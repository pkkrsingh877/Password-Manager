const AddPassword = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Save Your Password</h2>

                <form action="#" method="POST">
                    {/* Website Name */}
                    <div className="mb-4">
                        <label htmlFor="website" className="block text-gray-700 text-sm font-semibold mb-2">
                            Website Name
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
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
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>

                    {/* Save Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg font-semibold transition duration-300 ease-in-out"
                    >
                        Save Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddPassword;