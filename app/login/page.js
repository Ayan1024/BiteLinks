"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Input, Button, Typography } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function LoginComponent() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleMode = () => {
    setIsLogin((prev) => !prev);
    setError(null);
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError("Invalid email or password.");
      }
    } else {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (!res.ok) {
          setError(data.error || "Registration failed");
          return;
        }

        // Auto login after successful registration
        await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
      } catch (err) {
        setError("Something went wrong");
      }
    }
  };

  if (session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className=" shadow-lg rounded-lg p-8 text-center max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Welcome</h1>
          <p className="mb-6">
            Signed in as{" "}
            <span className="font-medium">{session.user.email}</span>
          </p>
          <Button  className="flex justify-center bg-blue-400 text-black font-semibold w-fit px-6 py-2 rounded-md mx-auto cursor-pointer"onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="grid h-screen items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 max-w-md w-full">
        <Typography variant="h3" color="blue-gray" className="text-center mb-2">
          {isLogin ? "Sign In" : "Register"}
        </Typography>
        <Typography className="mb-6 text-center text-gray-600 dark:text-gray-400">
          {isLogin
            ? "Enter your email and password"
            : "Create a new account"}
        </Typography>

        {/* OAuth Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => signIn("github")}
            className="bg-white p-3 cursor-pointer rounded-md hover:opacity-80 transition"
          >
            <Image src="/github.png" width={30} height={30} alt="GitHub" />
          </button>
          <button
            onClick={() => signIn("google")}
            className="bg-white p-3 cursor-pointer rounded-md hover:opacity-80 transition"
          >
            <Image src="/google.png" width={30} height={30} alt="Google" />
          </button>
          <button
            onClick={() => signIn("twitter")}
            className="bg-white p-3 cursor-pointer rounded-md hover:opacity-80 transition"
          >
            <Image src="/x.png" width={30} height={30} alt="Twitter/X" />
          </button>
          <button
            onClick={() => signIn("linkedin")}
            className="bg-white p-3 cursor-pointer rounded-md hover:opacity-80 transition"
          >
            <Image src="/link.png" width={30} height={30} alt="LinkedIn" />
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600" />
          <span className="mx-4 text-gray-500 dark:text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600" />
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="py-1.5">Email</p>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              className="!border-gray-300 dark:!border-gray-700 focus:!border-blue-500 p-3"
              placeholder="Email address"
              labelProps={{ className: "hidden" }}
              containerProps={{ className: "min-w-full" }}
            />
          </div>
          <div className="w-full">
            <p className="py-1.5">Password</p>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="lg"
                className="!border-gray-300 dark:!border-gray-700 focus:!border-blue-500 pr-12 p-3"
                placeholder="Password"
                labelProps={{ className: "hidden" }}
                containerProps={{ className: "min-w-full" }}
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? (
                  <EyeIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" />
                )}
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
  type="submit"
  className="flex justify-center bg-blue-400 text-black font-semibold w-fit px-6 py-2 rounded-md mx-auto cursor-pointer"
>
  {isLogin ? "Login" : "Register"}
</Button>

        </form>

        <Typography variant="small" color="gray" className="mt-6 text-center">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleMode}
            className="text-blue-600 font-medium cursor-pointer"
          >
            {isLogin ? "Register here" : "Login here"}
          </span>
        </Typography>
      </div>
    </section>
  );
}
