import React from "react";
import { Link } from "react-router";

const Contact = () => {
  return (
    <div className="flex items-center justify-center px-3">
      <div>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 bg-white">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Contact Us</h1>
              <p className="text-sm dark:text-gray-600">Create your account</p>
            </div>
            <form noValidate="" action="" className="space-y-12">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Confirm Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="button"
                    className="cursor-pointer w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
                  >
                    Keep in Touch
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-600">
                  Already have an account?
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline dark:text-violet-600"
                  >
                    Sign in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
