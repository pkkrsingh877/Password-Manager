const Signup = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <form action="#" method="POST">
                    {/* <!-- Name Field --> */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Your full name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required></input>
                    </div>

                    {/* <!-- Email Field --> */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="example@email.com"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required></input>
                    </div>

                    {/* <!-- Password Field --> */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required></input>
                    </div>

                    {/* <!-- Confirm Password Field --> */}
                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" required></input>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition duration-300 ease-in-out">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;