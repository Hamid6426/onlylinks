  "use client";

  import React, { useState } from "react";
  import { useRouter } from "next/navigation";
  import Image from "next/image";

  const ChooseUsername = () => {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    // Validate username by calling our API endpoint
    const checkUsername = async () => {
      if (username.trim().length < 3) {
        setError("Username must be at least 3 characters");
        return false;
      }
      try {
        const res = await fetch("/api/auth/choose-username", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: username.trim() }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Username is not available");
          return false;
        }
        setError("");
        return true;
      } catch (err) {
        setError("Error checking username");
        return false;
      }
    };

    const handleNext = async (e) => {
      e.preventDefault();
      const isValid = await checkUsername();
      if (!isValid) return;
      // Navigate to the signup page with the chosen username as a query parameter
        router.push(`/signup?username=${encodeURIComponent(username.trim())}`);
    };

    return (
      <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg mx-auto mt-12 w-full max-w-md">
        {/* Logo */}
        <Image src="onlylinks-logo.svg" alt="logo" width={200} height={80} />

        <h2 className="mt-4 text-xl font-bold text-center">
          Claim your Link in Bio!
        </h2>

        <form autoComplete="off" className="mt-3" onSubmit={handleNext}>
          <input autoComplete="off" name="hidden" type="text" className="hidden" />

          <div className="bg-gray-100 p-2 rounded-md flex items-center gap-2">
            <Image
              src="onlylinks-icon.svg"
              className="w-4 h-4"
              width={16}
              height={16}
              alt="icon"
            />
            <span className="font-semibold text-gray-700">onlylinks.com/</span>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              minLength={3}
              maxLength={20}
              className="bg-transparent border-none focus:outline-none flex-grow"
            />
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <button
            type="submit"
            className={`w-full mt-3 p-2 text-white bg-blue-500 rounded-md ${
              username.trim().length >= 3 ? "cursor-pointer" : "cursor-not-allowed opacity-50"
            }`}
            disabled={username.trim().length < 3}
          >
            Next
          </button>
        </form>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-blue-500">
            Login
          </a>
        </p>

        <p className="mt-3 text-xs text-gray-600 text-center">
          By signing up, you agree to our{" "}
          <a href="/terms/" target="_blank" className="text-blue-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy-policy/" target="_blank" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    );
  };

  export default ChooseUsername;
