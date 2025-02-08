import React from "react";
import { Link } from "react-router-dom";
export default function CreateEvent() {
  return (
    <div>
      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl p-2 m-2">
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Create an Event with Occasio
          </h1>

          <form action="#" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="EventName"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name
              </label>

              <input
                type="text"
                id="EventName"
                name="event_name"
                className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Description"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Description{" "}
              </label>

              <textarea
                type="description"
                id="Description"
                name="description"
                className="p-2 w-full rounded-md border border-gray-300  bg-white text-sm text-gray-700 shadow-xs "
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="DateTime"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Date & Time{" "}
              </label>

              <input
                id="DateTime"
                name="datetime"
                type="datetime-local"
                className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
              />
            </div>
            <div className="col-span-6 ">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Date & Time{" "}
              </label>

              <input
                id="image"
                name="image"
                type="file"
                accept="image/png, image/gif, image/jpeg, image/svg"
                className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
              />
            </div>

            <div className="col-span-6 ">
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

            <div className="col-span-6  text-center">
              <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden">
                Create an Event
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
