import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function FormInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  icon: LeftIcon,
  error,
  success,
  required = false,
  autoComplete,
}){
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}{required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <div className={`relative flex items-center`}>
        {LeftIcon && (
          <LeftIcon className="absolute left-3 h-5 w-5 text-gray-400 pointer-events-none" />
        )}
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoComplete={autoComplete}
          className={`w-full px-10 py-2.5 rounded-lg border outline-none transition
            ${error ? "border-red-400 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"}
            shadow-sm bg-white placeholder:text-gray-400`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 text-gray-500 hover:text-gray-700 transition"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {success && !error && <p className="text-xs text-green-600">{success}</p>}
    </div>
  );
}

export default FormInput;
