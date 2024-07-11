 <div className="flex justify-center w-full">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
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
