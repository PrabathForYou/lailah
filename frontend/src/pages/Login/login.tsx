import { useState } from "react";
import logoBackgroundRemoved from "../../assets/logo-background-removed.png";
 
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/auth/auth-background-2.png')] bg-cover bg-center bg-no-repeat py-10 px-4">
      <div className="bg-base-100 shadow-base-300/20 z-10 w-full max-w-md space-y-6 rounded-xl p-6 shadow-md lg:p-8">
 
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoBackgroundRemoved}
            className="size-14"
            alt="brand-logo"
          />
        </div>
 
        {/* Heading */}
        <div>
          <h3 className="text-base-content mb-1.5 text-2xl font-semibold">
            Sign in to Lailah
          </h3>
          <p className="text-base-content/80">
            Ship Faster and Focus on Growth.
          </p>
        </div>
 
 
        {/* Form */}
        <div className="space-y-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="label-text" htmlFor="userEmail">
              Email address*
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input w-full"
              id="userEmail"
              required
            />
          </div>
 
          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="label-text" htmlFor="userPassword">
              Password*
            </label>
            <div className="input flex items-center gap-2 w-full">
              <input
                id="userPassword"
                type={showPassword ? "text" : "password"}
                placeholder="············"
                className="grow outline-none bg-transparent"
                required
              />
              <button
                type="button"
                className="cursor-pointer text-base-content/60 hover:text-base-content transition-colors"
                aria-label="toggle password"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  /* Eye-off icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  /* Eye icon */
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
 
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between gap-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                id="rememberMe"
              />
              <label
                className="label-text text-base-content/80 p-0 text-base cursor-pointer"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="link link-animated link-primary font-normal text-sm"
            >
              Forgot Password?
            </a>
          </div>
 
          {/* Submit Button */}
          <button className="btn btn-lg btn-primary btn-gradient btn-block w-full">
            Sign in to Lailah
          </button>
 
          {/* Register Link */}
          <p className="text-base-content/80 text-center text-sm">
            New on our platform?{" "}
            <a href="#" className="link link-animated link-primary font-normal">
              Create an account
            </a>
          </p>
 
          {/* Divider */}
          <div className="divider text-base-content/50">or</div>
 
          {/* Google Sign In */}
          <button className="btn btn-text btn-block w-full flex items-center justify-center gap-2">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-icon.png"
              alt="google icon"
              className="size-5 object-cover"
            />
            Sign in with Google
          </button>
        </div>
 
      </div>
    </div>
  );
};
 
export default LoginPage;