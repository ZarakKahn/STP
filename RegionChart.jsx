  <div className="relative flex flex-col items-center justify-center bg-gray-100 overflow-auto">
        <div className="absolute w-full h-full">
          <img className="object-cover w-full h-full" src={background} alt="background" />
        </div>
        <div className="bg-gray-50 border-2 border-gray-400 p-5 z-10 relative">
          <div className="flex justify-center w-full">
            <IconContext.Provider value={{ size: "150px", color: "#808080" }}>
              <PiUserCircleThin />
            </IconContext.Provider>
          </div>
          <div className="flex justify-center w-full">
            <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 space-y-6">
              <div className="flex w-full border border-gray-300 rounded-md mb-2">
                <HiUserCircle className="h-5 w-5 text-gray-500 m-2" />
                <label htmlFor="username" className="sr-only">Username:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email" autoComplete="current-password"
                />
              </div>
              <div className="flex w-full border border-gray-300 rounded-md">
                <HiKey className="h-5 w-5 text-gray-500 m-2" />
                <label htmlFor="password" className="sr-only">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
              <div className="flex text-sm justify-center">
                <Link to="/changepassword" className="font-medium text-blue-900 hover:text-blue-500">
                  Change Password
                </Link>
              </div>
            </form>
          </div>

          <ToastContainer containerId='D' />
        </div>
      </div>

can you design this form in a new design with different colours and resposnive design
