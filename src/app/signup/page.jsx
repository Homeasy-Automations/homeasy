import React from "react";
import { Home ,LucideSwatchBook, Shield,Mail, Lock, RefreshCcwDot ,Eye} from "lucide-react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-text-light antialiased">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        {/* <!-- Left Side: Hero / Visual (Hidden on mobile, visible on lg screens) --> */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern smart home living room with cozy lighting and clean furniture"
              className="h-full w-full object-cover opacity-80"
              data-alt="Modern smart home living room with cozy lighting and clean furniture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBw7kE5aptUuqsbf_oNQpJtTDMom7HyMtmexdN_qDo9PUcvMEREBeVCi5tCSl7aEWWpA5U8uMcNyOLZ4Ex1p5HYq2aKCu7UWYCvGMPQpIdAppO5aAYvOtjB1x7JJcHjmEOO4VSaLJNcPCJKTAXZc0EQTq6GqjPePfx8ApRFxcuewLjIXPegBmEbBSwOlhyiQjFp1wXN2CFfYgiJgXfkK2FqTID5jQ8IDyBw_JmJW4BLJwkTVSFoFRl0HzuJLjui8pzZcknTBG5M0gh"
            />
            {/* <!-- Gradient Overlay --> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 max-w-lg text-white">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-white/10">
              <LucideSwatchBook className="material-symbols-outlined text-primary text-3xl"/>
               
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Control your home from anywhere.
            </h1>
            <p className="text-lg text-slate-200 font-normal leading-relaxed">
              Join thousands of users who have simplified their lives with
              Homeasy's intelligent automation.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a smiling young woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSLPDJ2FrTtYBJwBAipmiXMlfdO_1JidNkMlyLLoud_20o1Js_pKFYTJ0FqKTbQP5jiMTuuHBHmAC6Rfoddn-XoUXFTolZ-auPQOjo1SuX9YyW_MVS__xdfjBRDviiJdERkNk5_rAI1wJ9CNnei0fYYGzprg0tX-AzhssNvs3SHUspDdxC6hAEXQ4nqmL1wTuaixwHsxpvj4hxga3wnCIGWeAmvq6joudk1hmzk4d_B3lZD7US3szV5JF7-3B1BswvBR_bN1EFgG55"
                />
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a young man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyGsGz9Icdt5-N-NdbBnik8e4nFj6EZG6p9vCQNK0lVj3NYtI4FrBJdYpYwnvoKhh7TpJSvVcVId4n3mbH3XUNDQcmjjMj-tP9PiKxgYOqGJVRngZql7VZpKFskXY95DidoG34UHySlLG3UMNmQq34nOwV4_2nABS5EefB26JPUlmUYtNc0qjcwoQMfRcooiX3uztl_kv2mEUzPDMUEdFe_X5eImt3vJzH3c2PX_jLEqljvmgHLF7bOwo5-6stqmqOsVTgUQG64gE7"
                />
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a smiling man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrKO6mZL4J2tTWo956PFwdUXs0pOM5m81Y0LLX06nT2DfoTaeP6oAX7zR_JlyVPTr4zHgF0CT1T9df2F9UiDcT0v2bMzlIDVMwl2x5ErfLugljtwEWVG1sS6ZPuSZ0nyEcRAe3HJRyPwOQcGq6aHJAwgJhy3QB2Qpv2Io8fpjv9a9OdqMod-4zRkeryv52o8hFVKeMB_2Ca1vn7WM-r5FFGRjOw-I-JdZwE_1_BrZNFgcNjEp0zEpiJCW48savoabWosszNBAxEyG"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Trusted by 10k+ families
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Right Side: Sign Up Form --> */}
        <div className="flex w-full lg:w-1/2 flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
          <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-20 xl:px-24">
            {/* <!-- Mobile Logo (visible only on small screens) --> */}
            <div className="lg:hidden mb-8 flex items-center gap-2">
              <div className="size-8 text-primary">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewbox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-text-dark dark:text-white text-xl font-bold tracking-tight">
                Homeasy
              </h2>
            </div>
            <div className="mb-8">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-black dark:text-white mb-2">
                Create an account
              </h1>
              <p className="text-base text-slate-500 dark:text-slate-400">
                Start automating your home today. Join us now.
              </p>
            </div>
            {/* <!-- Social Sign Up --> */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-4 py-3 text-sm font-bold text-text-dark dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
                <img
                  alt="Google Logo"
                  className="h-10 w-10"
                  data-alt="Google G Logo"
                  src="https://pluspng.com/img-png/google-logo-png-revised-google-logo-1600.png"
                />
                <span className="hidden sm:inline">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-4 py-3 text-sm font-bold text-text-dark dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
                <img
                  alt="Facebook Logo"
                  className="h-5 w-5"
                  data-alt="Facebook F Logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMbx-geXFCVg71xlvyitX-VVHXRkN5tUfug4QzO3APK_mvZroMlmss2rKs2lbRcZs7pwxo5QbYn4bYrK68P8lVAk2hz6uOQhMT_RySAo2IdBBeQjHLEcm80i1WvVF3PeZdJKlKIYnLoUuGZGNRKbnJNKr0k8hYH8glKs1pAZ8Nv2DTCoP4hQCOiSt_4qees5VLsWninzvZseVx9Fm12_-NyW8a-InHE8KP6iTdXLADav3IpevhanenKT_EsvyOtcoy0jUcuyDnGHy"
                />
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-light dark:border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500">
                  Or sign up with email
                </span>
              </div>
            </div>
            {/* <!-- Form --> */}
            <form className="flex flex-col gap-5">
              {/* <!-- Email Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Email Address
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="name@example.com"
                    type="email"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                </div>
              </label>
              {/* <!-- Password Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="Create a password"
                    type="password"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary transition-colors"
                    type="button"
                  >
                    <Eye className="material-symbols-outlined text-[20px]"/>
                     
                  </button>
                </div>
                {/* <!-- Strength Meter UI --> */}
                <div className="flex gap-2 mt-2 h-1">
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Must be at least 8 characters with 1 special character.
                </p>
              </label>
              {/* <!-- Confirm Password Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="Confirm your password"
                    type="password"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <RefreshCcwDot className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                </div>
              </label>
              {/* <!-- Checklist / Terms --> */}
              <div className="pt-2">
                <label className="flex gap-x-3 items-start cursor-pointer group">
                  <input
                    className="mt-1 h-5 w-5 rounded border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-colors"
                    type="checkbox"
                  />
                  <p className="text-black dark:text-slate-300 text-sm font-normal leading-relaxed">
                    I agree to the{" "}
                    <a
                      className="text-primary hover:text-primary-dark hover:underline font-medium"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-primary hover:text-primary-dark hover:underline font-medium"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </label>
              </div>
              {/* <!-- Submit Button --> */}
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-dark text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg mt-2">
                <span>Create Account</span>
              </button>
            </form>
            {/* <!-- Footer Login Link --> */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?
                <a
                  className="font-bold text-primary hover:text-primary-dark hover:underline ml-1"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Home ,LucideSwatchBook, Shield,Mail, Lock, RefreshCcwDot ,Eye} from "lucide-react";

export default function page() {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display text-text-dark dark:text-text-light antialiased">
      <div className="flex min-h-screen w-full flex-row overflow-hidden">
        {/* <!-- Left Side: Hero / Visual (Hidden on mobile, visible on lg screens) --> */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern smart home living room with cozy lighting and clean furniture"
              className="h-full w-full object-cover opacity-80"
              data-alt="Modern smart home living room with cozy lighting and clean furniture"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBw7kE5aptUuqsbf_oNQpJtTDMom7HyMtmexdN_qDo9PUcvMEREBeVCi5tCSl7aEWWpA5U8uMcNyOLZ4Ex1p5HYq2aKCu7UWYCvGMPQpIdAppO5aAYvOtjB1x7JJcHjmEOO4VSaLJNcPCJKTAXZc0EQTq6GqjPePfx8ApRFxcuewLjIXPegBmEbBSwOlhyiQjFp1wXN2CFfYgiJgXfkK2FqTID5jQ8IDyBw_JmJW4BLJwkTVSFoFRl0HzuJLjui8pzZcknTBG5M0gh"
            />
            {/* <!-- Gradient Overlay --> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 p-12 max-w-lg text-white">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 backdrop-blur-sm border border-white/10">
              <LucideSwatchBook className="material-symbols-outlined text-primary text-3xl"/>
               
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4">
              Control your home from anywhere.
            </h1>
            <p className="text-lg text-slate-200 font-normal leading-relaxed">
              Join thousands of users who have simplified their lives with
              Homeasy's intelligent automation.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a smiling young woman"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSLPDJ2FrTtYBJwBAipmiXMlfdO_1JidNkMlyLLoud_20o1Js_pKFYTJ0FqKTbQP5jiMTuuHBHmAC6Rfoddn-XoUXFTolZ-auPQOjo1SuX9YyW_MVS__xdfjBRDviiJdERkNk5_rAI1wJ9CNnei0fYYGzprg0tX-AzhssNvs3SHUspDdxC6hAEXQ4nqmL1wTuaixwHsxpvj4hxga3wnCIGWeAmvq6joudk1hmzk4d_B3lZD7US3szV5JF7-3B1BswvBR_bN1EFgG55"
                />
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a young man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyGsGz9Icdt5-N-NdbBnik8e4nFj6EZG6p9vCQNK0lVj3NYtI4FrBJdYpYwnvoKhh7TpJSvVcVId4n3mbH3XUNDQcmjjMj-tP9PiKxgYOqGJVRngZql7VZpKFskXY95DidoG34UHySlLG3UMNmQq34nOwV4_2nABS5EefB26JPUlmUYtNc0qjcwoQMfRcooiX3uztl_kv2mEUzPDMUEdFe_X5eImt3vJzH3c2PX_jLEqljvmgHLF7bOwo5-6stqmqOsVTgUQG64gE7"
                />
                <img
                  alt="User portrait"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-slate-900"
                  data-alt="Portrait of a smiling man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVrKO6mZL4J2tTWo956PFwdUXs0pOM5m81Y0LLX06nT2DfoTaeP6oAX7zR_JlyVPTr4zHgF0CT1T9df2F9UiDcT0v2bMzlIDVMwl2x5ErfLugljtwEWVG1sS6ZPuSZ0nyEcRAe3HJRyPwOQcGq6aHJAwgJhy3QB2Qpv2Io8fpjv9a9OdqMod-4zRkeryv52o8hFVKeMB_2Ca1vn7WM-r5FFGRjOw-I-JdZwE_1_BrZNFgcNjEp0zEpiJCW48savoabWosszNBAxEyG"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    star
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Trusted by 10k+ families
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Right Side: Sign Up Form --> */}
        <div className="flex w-full lg:w-1/2 flex-col bg-background-light dark:bg-background-dark overflow-y-auto">
          <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-20 xl:px-24">
            {/* <!-- Mobile Logo (visible only on small screens) --> */}
            <div className="lg:hidden mb-8 flex items-center gap-2">
              <div className="size-8 text-primary">
                <svg
                  className="h-full w-full"
                  fill="none"
                  viewbox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-text-dark dark:text-white text-xl font-bold tracking-tight">
                Homeasy
              </h2>
            </div>
            <div className="mb-8">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-black dark:text-white mb-2">
                Create an account
              </h1>
              <p className="text-base text-slate-500 dark:text-slate-400">
                Start automating your home today. Join us now.
              </p>
            </div>
            {/* <!-- Social Sign Up --> */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-4 py-3 text-sm font-bold text-text-dark dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
                <img
                  alt="Google Logo"
                  className="h-10 w-10"
                  data-alt="Google G Logo"
                  src="https://pluspng.com/img-png/google-logo-png-revised-google-logo-1600.png"
                />
                <span className="hidden sm:inline">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 px-4 py-3 text-sm font-bold text-text-dark dark:text-white transition-colors hover:bg-slate-50 dark:hover:bg-slate-700">
                <img
                  alt="Facebook Logo"
                  className="h-5 w-5"
                  data-alt="Facebook F Logo"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMbx-geXFCVg71xlvyitX-VVHXRkN5tUfug4QzO3APK_mvZroMlmss2rKs2lbRcZs7pwxo5QbYn4bYrK68P8lVAk2hz6uOQhMT_RySAo2IdBBeQjHLEcm80i1WvVF3PeZdJKlKIYnLoUuGZGNRKbnJNKr0k8hYH8glKs1pAZ8Nv2DTCoP4hQCOiSt_4qees5VLsWninzvZseVx9Fm12_-NyW8a-InHE8KP6iTdXLADav3IpevhanenKT_EsvyOtcoy0jUcuyDnGHy"
                />
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </div>
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-light dark:border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background-light dark:bg-background-dark px-2 text-slate-500">
                  Or sign up with email
                </span>
              </div>
            </div>
            {/* <!-- Form --> */}
            <form className="flex flex-col gap-5">
              {/* <!-- Email Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Email Address
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="name@example.com"
                    type="email"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                </div>
              </label>
              {/* <!-- Password Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Password
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="Create a password"
                    type="password"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-primary transition-colors"
                    type="button"
                  >
                    <Eye className="material-symbols-outlined text-[20px]"/>
                     
                  </button>
                </div>
                {/* <!-- Strength Meter UI --> */}
                <div className="flex gap-2 mt-2 h-1">
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="flex-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Must be at least 8 characters with 1 special character.
                </p>
              </label>
              {/* <!-- Confirm Password Field --> */}
              <label className="flex flex-col">
                <p className="text-text-dark dark:text-slate-200 text-sm font-medium leading-normal pb-2">
                  Confirm Password
                </p>
                <div className="relative">
                  <input
                    className="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-text-dark dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light dark:border-border-dark bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-slate-400 p-[15px] pl-11 text-base font-normal leading-normal transition-all"
                    placeholder="Confirm your password"
                    type="password"
                    value=""
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <RefreshCcwDot className="material-symbols-outlined text-[20px]"/>
                      
                  </div>
                </div>
              </label>
              {/* <!-- Checklist / Terms --> */}
              <div className="pt-2">
                <label className="flex gap-x-3 items-start cursor-pointer group">
                  <input
                    className="mt-1 h-5 w-5 rounded border-border-light dark:border-border-dark border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none transition-colors"
                    type="checkbox"
                  />
                  <p className="text-black dark:text-slate-300 text-sm font-normal leading-relaxed">
                    I agree to the{" "}
                    <a
                      className="text-primary hover:text-primary-dark hover:underline font-medium"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-primary hover:text-primary-dark hover:underline font-medium"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </label>
              </div>
              {/* <!-- Submit Button --> */}
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-dark text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg mt-2">
                <span>Create Account</span>
              </button>
            </form>
            {/* <!-- Footer Login Link --> */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?
                <a
                  className="font-bold text-primary hover:text-primary-dark hover:underline ml-1"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
