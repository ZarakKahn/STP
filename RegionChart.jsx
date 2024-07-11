<div className="flex items-center justify-center min-h-screen bg-gray-200">
  <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
    <div className="relative">
      <img className="w-full h-40 object-cover" src={background} alt="background" />
      <div className="absolute inset-0 bg-gray-900 opacity-25"></div>
    </div>
    <div className="p-5">
      <div className="flex justify-center">
        <IconContext.Provider value={{ size: "150px", color: "#3182ce" }}>
          <PiUserCircleThin />
        </IconContext.Provider>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center border border-gray-300 rounded-md">
          <HiUserCircle className="h-5 w-5 text-gray-500 m-2" />
          <label htmlFor="username" className="sr-only">Username:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email"
            autoComplete="username"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-md">
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
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
        <div className="flex justify-center">
          <Link to="/changepassword" className="text-blue-500 hover:text-blue-700">
            Change Password
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
