import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../utils/base.js";
import { AuthContext } from "../utils/Auth.js";
import { FiLock, FiMail } from "react-icons/fi";
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full h-100 flex items-center justify-center">
          <div className="w-full sm:w5/6 md:w-2/3 lg:w1/2 xl:w-1/3 2xl:w-1/3 h-full bg-white flex flex-col items-center justify-center">
            <div className="w-full px-12 py-4">
              <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
                Sign in
              </h2>
              <p className="text-center text-sm text-gray-600 mt-2">
                You do not have an account ? &nbsp;
                <a
                  href="/signup"
                  className="text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                >
                  {" "}
                  Sign up
                </a>
              </p>

              <form onSubmit={handleLogin} className=" mt-3 w-[100%]">
                <label className="text-gray-700 text-sm">Email</label>
                <div className="relative mt-1 rounded-md ">
                  <div className="pointer-event-none absolute left-0 top-0.5 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <FiMail />
                    </span>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
                  />
                </div>

                <label className="text-gray-700 text-sm">Password</label>
                <div className="relative mt-1 rounded-md ">
                  <div className="pointer-event-none absolute left-0 top-0.5 inset-y-0 flex items-center pl-3">
                    <span className="text-gray-500 text-sm">
                      <FiLock />
                    </span>
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full py-2 pr-7 pl-8 block rounded-md border border-gray-300 outline-offset-2 outline-transparent focus:border-blue-500 focus:ring-blue-700 focus:ring-2 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="relative w-full inline-flex items-center justify-center px-8 py-3 mt-4 overflow-hidden font-medium bg-blue-500 transition duration-300 ease-out border-2 rounded-md group"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
