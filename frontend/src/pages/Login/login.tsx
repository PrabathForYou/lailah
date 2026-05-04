import { useEffect, useState } from "react";
import { loginUser } from "../../services/authService";
import logoBackgroundRemoved from "../../assets/logo-background-removed.png";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    loginUser(email, password).catch((err) => {
      setError("Login Failed becuase of " + err.message);
    });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#242424] px-4 py-10">
      <div className="w-full max-w-[420px] rounded-xl bg-[#2d2a2d] p-8 shadow-lg">
        
        {/* Logo */} 
        <div className="mb-6">
          <img
            src={logoBackgroundRemoved}
            className="h-14 w-14"
            alt="brand-logo"
          />
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white mb-1.5">
            Sign in to Lailah
          </h1>
          <p className="text-sm text-gray-400">
            Ship Faster and Focus on Growth.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="userEmail"
              className="text-sm font-medium text-gray-300"
            >
              Email address*
            </label>
            <input
              type="email"
              id="userEmail"
              placeholder="Enter your email address"
              required
              className="w-full rounded-lg border border-[#3d3a3d] bg-[#2d2a2d] px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="userPassword"
              className="text-sm font-medium text-gray-300"
            >
              Password*
            </label>
            <div className="flex items-center rounded-lg border border-[#3d3a3d] bg-[#2d2a2d] px-4 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500">
              <input
                id="userPassword"
                type={showPassword ? "text" : "password"}
                placeholder="············"
                required
                className="grow bg-transparent py-2.5 text-sm text-white placeholder-gray-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="toggle password"
                className="ml-2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 rounded border-gray-600 bg-[#2d2a2d] text-purple-600 accent-purple-600 focus:ring-purple-500"
              />
              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-400 cursor-pointer"
              >
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#2d2a2d] border border-[#3d3a3d] py-2.5 text-sm font-medium text-white hover:bg-[#3d3a3d] transition-colors"
          >
            Sign in to Lailah
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-400">
            New on our platform?{" "}
            <a
              href="#"
              className="font-medium text-purple-500 hover:text-purple-400 transition-colors"
            >
              Create an account
            </a>
          </p>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#3d3a3d] bg-[#2d2a2d] py-2.5 text-sm font-medium text-white hover:bg-[#3d3a3d] transition-colors"
          >
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/brand-logo/google-icon.png"
              alt="google icon"
              className="h-5 w-5 object-contain"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;