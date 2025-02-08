import React, { useState } from "react";
import { Filter } from "lucide-react";

export default function Model() {
      const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div >
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-4 py-1 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
        type="button"
      >
        <Filter />
      </button>

      {isOpen && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-xl bg-white rounded-lg shadow-sm border-2 border-gray-400    ">
            {/* Modal Header */}
            <div className="flex flex-col items-center ">
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-500 hover:text-gray-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
              <h1 className="my-6 text-xl font-semibold text-gray-900    md:text-2xl">
                Filter Event
              </h1>

              <div className="w-[50%] ">
                <label
                  for="category"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Select a Category:
                </label>

                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-sm w-full border-gray-300 bg-white text-sm text-gray-700"
                >
                  <option value="tech">Tech</option>
                  <option value="development">Development</option>
                  <option value="business">Business</option>
                  <option value="networking">Networking Entertainment</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="music">Music</option>
                  <option value="health">Health</option>
                  <option value="wellness">Wellness</option>
                  <option value="education">Education</option>
                  <option value="workshops">Workshops</option>
                </select>
              </div>
              <div className="w-[50%] ">
                <label
                  htmlFor="Date"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Date{" "}
                </label>

                <input
                  id="Date"
                  name="date"
                  type="date"
                  className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center p-4 md:p-5 rounded-b gap-4 justify-center  ">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
