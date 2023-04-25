import React from "react";
import { FcPicture } from "react-icons/fc";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <h1 className="text-3xl text-center font-bold">Please Login</h1>
        <div className="card mt-8 rounded-lg w-full shadow-md bg-yellow-100 border-2 border-yellow-400">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <input type="file" id="avatar" className="hidden" />
              <label
                htmlFor="avatar"
                className="cursor-pointer flex gap-2 items-center py-2"
              >
                <FcPicture className="text-3xl" />
                <span>Select avatar</span>
              </label>
            </div>
            <div className="form-control mt-2">
              <button
                type="submit"
                className="btn btn-sm text-lg bg-yellow-400 border-0 normal-case hover:bg-yellow-600 duration-300"
              >
                Login
              </button>
            </div>
            <div className="form-control mt-2 btn btn-outline btn-sm text-sm bg-yellow-100 border-2 border-yellow-400 normal-case hover:bg-yellow-400 duration-300 hover:border-yellow-400">
              Continue with Google
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
