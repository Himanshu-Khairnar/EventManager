import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

// Validation Schema
const schema = z
  .object({
    user_name: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setError: setFormError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate  = useNavigate()
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          username: data.user_name,
        }),
      });
      if (res.ok) {
        setSuccess("Account created successfully!");
        navigate("/login")
      }

      setError("");
      console.log(res);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Image Section */}
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Register"
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        {/* Form Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Create an Account
            </h1>

            {!success && error && <p className="mt-2 text-red-500">{error}</p>}
            {!error &&success && <p className="mt-2 text-green-500">{success}</p>}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {/* Username */}
              <div className="col-span-6">
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  {...register("user_name")}
                  className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                />
                {errors.user_name && (
                  <p className="text-red-500 text-xs">
                    {errors.user_name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("password_confirmation")}
                  className="p-2 w-full rounded-md border border-gray-300 bg-white text-sm text-gray-700 shadow-xs"
                />
                {errors.password_confirmation && (
                  <p className="text-red-500 text-xs">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:ring-3 focus:outline-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Create an account"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link to={"/login"} className="text-gray-700 underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Register;
