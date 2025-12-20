import { Home, Eye } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display text-[#0e171b] dark:text-white antialiased">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        {/* <!-- Left Side: Login Form --> */}
        <div className="flex w-full flex-col justify-between p-8 lg:w-1/2 lg:p-12 xl:p-16">
          {/* <!-- Header / Logo --> */}
          <header className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
              <div className="size-6">
                {/* <svg
                  className="size-full"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg> */}
                <Home className="size-full" />
              </div>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-[#0e171b] dark:text-white">
              Homeasy
            </h2>
          </header>
          {/* <!-- Main Form Content --> */}
          <div className="mx-auto flex w-full max-w-[480px] flex-col justify-center py-10">
            {/* <!-- Page Heading --> */}
            <div className="mb-8 flex flex-col gap-2">
              <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-[#0e171b] dark:text-white sm:text-4xl">
                Welcome back
              </h1>
              <p className="text-base font-normal leading-normal text-[#4e7f97] dark:text-gray-400">
                Control your home from anywhere. Please enter your details.
              </p>
            </div>
            {/* <!-- Social Login Buttons --> */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <button className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#d0dfe7] bg-slate-50 px-4 text-sm font-medium text-[#0e171b] transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                <img
                  alt="Google"
                  className="h-5 w-5"
                  data-alt="Google G logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCODk2kLSQ9OWCKBSRv1RXLoyE1SeekLWE7BXfkA6d0E44-ZQrfJNyznTVbhsHxCenioNH_Se_er_axl-U9b2KF7QXpfiwWGhE57Y42zj1_4qUOQ5G8E9-7VmgLZ6T7foOHtVItqDMAySR16nHitCz0pSpWiKL5KpPkg-AH8dU7TaLTQrNTawxWMaAFwysB5OOYaDNu5u85etEgbZR3YDUYMJXFuvRFZnVyDuRdTnJBxlhPA1sHbxvvaT5_ns9DXOBdZL8Px47P8QwF"
                />
                <span>Google</span>
              </button>
              <button className="flex h-12 items-center justify-center gap-3 rounded-lg border border-[#d0dfe7] bg-slate-50 px-4 text-sm font-medium text-[#0e171b] transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                <svg
                  className="h-5 w-5 text-[#1877F2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                <span>Facebook</span>
              </button>
            </div>
            <div className="relative mb-6 flex items-center justify-center">
              <span className="absolute bg-background-light px-2 text-xs font-medium uppercase text-[#4e7f97] dark:bg-background-dark">
                Or
              </span>
              <div className="h-px w-full bg-[#d0dfe7] dark:bg-gray-700"></div>
            </div>
            {/* <!-- Login Fields --> */}
            <form action="#" className="flex flex-col gap-5">
              {/* <!-- Email Field --> */}
              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium leading-normal text-[#0e171b] dark:text-white">
                  Email Address
                </p>
                <input
                  className="form-input h-14 w-full rounded-lg border border-[#d0dfe7] bg-slate-50 p-[15px] text-base font-normal leading-normal text-[#0e171b] placeholder:text-[#4e7f97] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                  placeholder="Enter your email address"
                  type="email"
                />
              </label>
              {/* <!-- Password Field --> */}
              <label className="flex flex-col">
                <div className="flex items-center justify-between pb-2">
                  <p className="text-base font-medium leading-normal text-[#0e171b] dark:text-white">
                    Password
                  </p>
                </div>
                <div className="flex w-full items-stretch rounded-lg">
                  <input
                    className="form-input h-14 w-full flex-1 resize-none rounded-l-lg rounded-r-none border border-r-0 border-[#d0dfe7] bg-slate-50 p-[15px] text-base font-normal leading-normal text-[#0e171b] placeholder:text-[#4e7f97] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="flex cursor-pointer items-center justify-center rounded-r-lg border border-l-0 border-[#d0dfe7] bg-slate-50 pr-[15px] text-[#4e7f97] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    <Eye className="material-symbols-outlined select-none text-xl" />
                  </div>
                </div>
              </label>
              <div className="flex justify-end">
                <a
                  className="text-sm font-medium text-primary underline decoration-transparent transition-all hover:decoration-current"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              {/* <!-- Login Button --> */}
              <button className="mt-2 flex h-14 w-full items-center justify-center rounded-lg bg-primary text-base font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                Log In
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-base text-[#4e7f97] dark:text-gray-400">
                Don't have an account?{" "}
                <a
                  className="font-bold text-primary hover:text-primary/80"
                  href="#"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
          {/* <!-- Footer Text --> */}
          <footer className="text-xs text-[#4e7f97] dark:text-gray-500">
            © 2024 Homeasy Inc. All rights reserved.
          </footer>
        </div>
        {/* <!-- Right Side: Hero Image --> */}
        <div className="hidden w-1/2 bg-slate-50 lg:block dark:bg-background-dark">
          <div className="relative h-full w-full overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <img
              alt="Modern living room with smart devices and minimalist furniture"
              className="h-full w-full object-cover"
              data-alt="Modern cozy living room with smart home context"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYV1gQgpyK_nyBAD1tdIVP2fB4OMMJs2TNERBy25Qj4By4F7ES21B17UyYCmTS8uhYDzsk5AiopcfuA2bON6cPb4F8Yj-DBcWFJNWig_hNQxV4Eg_17gT6wRypGSVKav4zFjRt-LFgMkQCfIPLgXra6tmHAKYPvCmTz66JEp-ksTG3Ft3s_JX8b0frTS8Jlbx574JdmNgucp2CEHM_H7KsXpyaqh_aPMwfSVxLOomFtr3pi-XXo_e3sku9PGgan_FBuoSj4jlQ8Iv2"
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 to-transparent p-12 text-white">
              <blockquote className="max-w-md">
                <p className="mb-4 text-2xl font-bold leading-snug">
                  "Smart living isn't just about technology, it's about
                  reclaiming your time and peace of mind."
                </p>
                <cite className="text-sm font-medium not-italic opacity-80">
                  — The Homeasy Vision
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}