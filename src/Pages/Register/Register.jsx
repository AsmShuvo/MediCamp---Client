import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const { createUser, logOut, user, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data.email);
    const email = data.email;
    const name = data.username;
    const password = data.password;
    const confirmPass = data.confirmPassword;
    const image = data.photoURL;
    const registeredUser = {
      email,
      name,
      image,
    };
    console.log(registeredUser);
    createUser(email, password)
      .then((res) => {
        console.log("Logged in user", res.user);
        const userCredential = res.user;
        updateProfile(userCredential, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("Creaetd user : ", userCredential);
            console.log(userCredential.email);
            console.log(userCredential.displayName);
            console.log(userCredential.photoURL);
            alert("Registration Successfuil");
            logOut();
          })
          .catch((err) => {
            console.log("Error while updating profile: ", err);
            alert("Profile is not updated");
            return;
          });
      })
      .catch((err) => {
        console.log("Err: ", err);
        alert("Registration Failed! Your email is already in use");
        return;
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              {...register("username", { required: "Username is required" })}
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
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
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                validate: (value) => {
                  const hasNumber = /\d/.test(value);
                  const hasUpperCase = /[A-Z]/.test(value);
                  const hasLowerCase = /[a-z]/.test(value);
                  if (!hasNumber || !hasUpperCase || !hasLowerCase) {
                    return "Password must contain a number, an uppercase letter, and a lowercase letter";
                  }
                  return true;
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords must match",
              })}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              id="photoURL"
              {...register("photoURL", {
                required: "Photo URL is required",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Invalid URL",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none"
            />
            {errors.photoURL && (
              <p className="mt-1 text-sm text-red-600">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-bold bg-gray-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Register
          </button>
          <span>
            Already have an account?{" "}
            <Link to="/login">
              <button className="btn btn-link">Login</button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
