<div className="relative flex flex-col items-center justify-center bg-gray-100 min-h-screen overflow-auto">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img className="absolute inset-0 object-cover w-full h-full" src={background} alt="background" />
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for contrast */}
  </div>

  {/* Form Container */}
  <div className="bg-white border-2 border-gray-400 p-5 z-10 max-w-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg">
    <div className="flex justify-center mb-8">
      {/* User Icon */}
      <IconContext.Provider value={{ size: "150px", color: "#808080" }}>
        <PiUserCircleThin />
      </IconContext.Provider>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Username Field */}
      <div className="flex border border-gray-300 rounded-md mb-4">
        <HiUserCircle className="h-5 w-5 text-gray-500 m-2" />
        <label htmlFor="username" className="sr-only">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Username"
        />
      </div>

      {/* Password Field */}
      <div className="flex border border-gray-300 rounded-md mb-4">
        <HiKey className="h-5 w-5 text-gray-500 m-2" />
        <label htmlFor="password" className="sr-only">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          placeholder="Password"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Login
      </button>

      {/* Change Password Link */}
      <div className="flex justify-center text-sm">
        <Link to="/changepassword" className="font-medium text-blue-900 hover:text-blue-500">
          Change Password
        </Link>
      </div>
    </form>
  </div>

  {/* Toast Container for Notifications */}
  <ToastContainer containerId='D' />
</div>
