import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser, googleLogin, signIn } = useContext(AuthContext);
  const nevigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    signIn(email, password)
      .then((res) => {
        console.log("logged in user", res.user);
        alert("Login Successfull");
        reset();
        nevigate("/");
      })
      .catch((err) => {
        console.log("Error in logging in", err.message);
        alert("Login failed. Recheck your email and password");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-bold bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Login
          </button>
          <span>
            Do not have an account?{" "}
            <Link to="/register">
              <button className="btn btn-link">Register</button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
