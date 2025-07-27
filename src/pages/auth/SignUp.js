import { Form, Link, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginBG from "../../assets/login-bg.png";

export default function SignUp() {
  const actionData = useActionData();
  const [fieldErrors, setFieldErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  useEffect(() => {
    if (actionData && !actionData.success && actionData.errors) {
      setFieldErrors(actionData.errors);
    }
  }, [actionData]);

  const clearFieldError = (fieldName) => {
    if (fieldErrors[fieldName]) {
      setFieldErrors((prev) => ({
        ...prev,
        [fieldName]: null,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    clearFieldError(name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="w-[90vw] h-[40vw] max-w-6xl flex flex-col bg-white rounded-xl md:flex-row overflow-hidden relative z-10 border-2 border-purple-100 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-10 py-12 md:px-6 lg:px-10">
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
                Create Account
              </h1>
              <p className="text-sm text-gray-600">
                Create your account to get started.
              </p>
            </div>

            <Form method="post" className="space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your pg/hostel name"
                  className={`w-full px-2.5 py-1.5 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    fieldErrors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300"
                  }`}
                  required
                />
                {fieldErrors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full px-2.5 py-1.5 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                    fieldErrors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300"
                  }`}
                  required
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className={`w-full px-2.5 py-1.5 pr-10 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                      fieldErrors.password
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L8.464 11.293m4.242 4.242l1.414 1.414m-1.414-1.414L11.293 8.464"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {fieldErrors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.password}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full px-2.5 py-1.5 pr-10 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm ${
                      fieldErrors.confirmPassword
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L8.464 11.293m4.242 4.242l1.414 1.414m-1.414-1.414L11.293 8.464"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                {fieldErrors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {fieldErrors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className={`w-4 h-4 text-purple-600 border-gray-300 rounded ${
                    fieldErrors.terms ? "border-red-500" : ""
                  }`}
                  required
                />
                <div className="flex flex-col">
                  <label htmlFor="terms" className="text-xs text-gray-600">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-purple-600 hover:text-purple-700"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                  {fieldErrors.terms && (
                    <p className="text-red-500 text-xs mt-1">
                      {fieldErrors.terms}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-medium text-sm transition-colors"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </Form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full m-6 md:w-1/2 hidden md:flex items-center justify-center bg-purple-300 rounded-2xl">
          <div className="w-full max-w-2xl aspect-[4/3]">
            <img
              src={LoginBG}
              alt="Sign up"
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
