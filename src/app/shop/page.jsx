"use client";

import React from "react";
import {
   ShoppingCart,
  Search,
  Heart as Favorite,
  Plus as AddShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
export default function shop() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-white overflow-x-hidden font-['Space_Grotesk','Noto_Sans',sans-serif]">
        <div className="flex h-full grow flex-col">
       

          {/* Main Content */}
          <div className="flex flex-1 justify-center py-8 px-4 md:px-10 bg-white">
            <div className="flex flex-col max-w-[1200px] flex-1">
              <div className="flex flex-col gap-4 mb-8">
                <h1 className="text-black tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                  Smart Home Products
                </h1>
                <p className="text-[#93b6c8] text-lg font-normal leading-normal max-w-2xl">
                  Discover our comprehensive range of intelligent devices
                  designed to elevate your comfort, security, and lifestyle.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#93b6c8] text-[20px]" />
                    <input
                      className="w-full h-10 pl-10 pr-4 bg-white border border-[#243b47] rounded-lg text-black placeholder-[#5a7a8a] text-sm focus:outline-none focus:border-[#19a2e6] focus:ring-1 focus:ring-[#19a2e6]"
                      placeholder="Search products..."
                      type="text"
                    />
                  </div>

                  {/* Categories */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black font-bold text-sm uppercase tracking-wider">
                      Categories
                    </h3>
                    <div className="flex flex-col gap-1">
                      {[
                        "All Products",
                        "Lighting",
                        "Security",
                        "Climate",
                        "Entertainment",
                      ].map((cat, i) => (
                        <label
                          key={cat}
                          className="flex items-center gap-3 py-1 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            defaultChecked={i === 0}
                            className="form-checkbox rounded bg-white border-[#243b47] text-[#19a2e6] focus:ring-0 focus:ring-offset-0"
                          />
                          <span className="text-[#93b6c8] group-hover:text-black text-sm transition-colors">
                            {cat}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black font-bold text-sm uppercase tracking-wider">
                      Price Range
                    </h3>
                    <div className="flex flex-col gap-1">
                      {["Under ₹50", "₹50 - ₹100", "₹100 - ₹200", "₹200+"].map(
                        (range) => (
                          <label
                            key={range}
                            className="flex items-center gap-3 py-1 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              className="form-checkbox rounded bg-white border-[#243b47] text-[#19a2e6] focus:ring-0 focus:ring-offset-0"
                            />
                            <span className="text-[#93b6c8] group-hover:text-black text-sm transition-colors">
                              {range}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-black font-bold text-sm uppercase tracking-wider">
                      Brands
                    </h3>
                    <select className="w-full bg-white border border-[#243b47] text-[#93b6c8] text-sm rounded-lg focus:ring-[#19a2e6] focus:border-[#19a2e6] block p-2.5">
                      <option>All Brands</option>
                      <option value="homeasy">Homeasy</option>
                      <option value="philips">Partner Brand A</option>
                      <option value="nest">Partner Brand B</option>
                    </select>
                  </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#243b47]">
                    <p className="text-black text-sm font-medium">
                      Showing{" "}
                      <span className="text-[#19a2e6] font-bold">8</span>{" "}
                      results
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#93b6c8] text-sm">Sort by:</span>
                      <select className="bg-transparent border-none text-black text-sm font-bold focus:ring-0 cursor-pointer p-0 pr-6">
                        <option>Featured</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest Arrivals</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Product Cards */}
                    {[
                      {
                        name: "Smart LED Bulb",
                        price: "₹24.99",
                        desc: "Control your lights from anywhere with adjustable brightness and color settings.",
                        badge: "Bestseller",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbAd7bghEn8ggWXTMbAJDIl6JCf9Jl95K80Q0jEyaFuJyKLtt-6jGuau0NCsxdk5o5G0GdeLU5EdqvMHOJ1-KEzPvkE9D2Wm9SQvNSATB0S4LWrWxoaJ2XARo1W2pzT0N79hau_ITE3JexoPN3wr4u6P40MjozfXNz7PPKCGDhb8E7jBZD4z24HBAlf7HqQoDT2pMM7wj1XBuYZZwaMj_Ew0Y3zVdSjeZKquqMB1A1WRfIxpjJJGr1iN2L8ZMYTHxLYQaLkkBaAwO",
                      },
                      {
                        name: "Wireless Security Camera",
                        price: "₹129.99",
                        desc: "Keep an eye on your home, inside and out, with 1080p HD video and night vision.",
                        badge: "New",
                        badgeColor: "bg-green-500",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbUdqVEt-vVRD1233O4ev-Z0U05EcUmJvtokBHbmN8MP49g2VxykRSPRFxFaTPA4Rij3jpAgKZGAnrKQ_eJak6TtBx6KsxHOCBtPOrRbfClh2v2R1WQRzlACVd7Yz7M6LmJCYY1Bvd2u-TRUuApEdbY8iea5S4Xp6VfUBvr_EGGHg0_avhGq0aeVpC0jXgc0vtX1CEg14na7vHW1wXxxqFvV-2Z1Wbs0vFfgi6E-CmwhZuy57g0C0YhQoddO9MNM93x-K_3NPK7MMZ",
                      },
                      {
                        name: "Smart Thermostat",
                        price: "₹199.00",
                        desc: "Set the perfect temperature automatically and save energy with smart scheduling.",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBneuAoeTInXn9vitPHgrAsGsv7H2CG7riAwI8kMNx2cKzwO8897C80z0XJvkVAqhhcwCN7LYTUCFCgb9itRCY3iGaHoG8j8WYtUKzM8IuU0cvn2xuBwiR8Qjcpl3sjmJe3KfqkzuYQ6W4Q3QKaVOmeVrRBUx4q8c4VENibJGfLgGolo7clSoLnTVMYYUA1DdgtnQ-oMUFMllBtV8jrZ0M3vIcqHKm0_5ty5kCPmj7oD9xH3_UoVSzzJSOnrk2tLSf2zqQETZjgszvk",
                      },
                      {
                        name: "Smart TV",
                        price: "₹699.00",
                        desc: "Stream your favorite shows in stunning 4K quality with built-in voice control.",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPtq7wdVYaR2j2L4Kmez7lK5XVsKyNoGMqVQiTQyuMVJ2Zz8LPDqFTdzVlo5mWauGuFOa0F23pIXcPnw4akK6bFu6n78G6ntKtSp0wKKbA5njI0aKIcFxH_HTggGrKYRyOyQf1qNM9EBRJHw1GE1QyMCVzdyovpNDKPkdQpb8ZAMYLvIn5br20_JKf-I0l_DgsBUBmse8ZZXqa8Pb1HcJcNv4Ub-7DJGJDA9W0jMogMMholiSQh3OWmF_D6tnV9UUUpwn0KVwAQAaE",
                      },
                      {
                        name: "Smart Doorbell",
                        price: "₹149.99",
                        desc: "See and speak to visitors at your door from anywhere via your smartphone.",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEVqXUir2_R_FDwRJDG4TEN9SUCENIQgO62ssB5p3yw1cyF-w8Tz81MFaDOXnETo-Byc0EcA3GdiSkXu94EDFaMyLUyYvIF030tgqbXiBa2XKtOwqnrldwlN5sb0goR8doXmXoYoT8AkL2KxBCfFASOYJLz-GFqLog7dGtV2mFduY6oFRJqFxw4jlph4OsNLUEj0zGQzAHdMklE0QxU_uuzt0xSKvje9jhpwhIhiISiMrifhRh6ZMBiP9QWW2t4_C6c7K0qsW6Kjvz",
                      },
                      {
                        name: "Smart Lock",
                        price: "₹169.00",
                        oldPrice: "₹199.00",
                        desc: "Lock and unlock your door securely without keys using your phone.",
                        badge: "-15%",
                        badgeColor: "bg-red-500",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK9XSmv2yInWWWJVDIkWC-diCi1uy2xv8rqg0Xg1nfCYaouiHdsYY_SmYkFRA_q7u2_EQ0f_AI5U3Hq8uJ0C0Y32dvISvR44X4YlH4Z8olrJ1HR8UNm_uJ3XnRah_W5WrfD4aMrlcnq5yPDQ3ZiREp_oszA2sRbHR8rC51Lf_EFDDDy3K5fe-cJcdmB323eBR-ZxhR7ZHOjr6yaEcsUlz9jAQ_xpmnWDx8VpH99ZnZxbYDV8uD1IuM1Sh9QRMOxeMPvD6s7xYOmTR4",
                      },
                      {
                        name: "Smart Speaker",
                        price: "₹89.00",
                        desc: "Enjoy rich, immersive sound throughout your home with multi-room audio support.",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEash6h_WofxYKfWqLharb5zLTqu1oAGmQ3CoTX1o1_Q-n7SVQ3aGiuncNYz200z7dXT7lqFOLgCfhfpZnVm_1q3M57OmsuPYRS_MyTqOAehjeGPtklg2VMsqkLqshyJi7TxW2JCxW1rJ8Qc2zLIbeaEsO-0lnseyMnIDBmtgba-I2QMamds72g6TE9DGYTOXd-kVsokAopdH-rxSkQfhh_8lFHxleSYjvEvF11HyXmxXfeEsu5g8-q26wguJ7IW3dSkBk_obBgL7r",
                      },
                      {
                        name: "Smart Plug",
                        price: "₹19.99",
                        desc: "Automate your traditional appliances with a simple tap or voice command.",
                        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUmveocxv9bTMgpR-4EJf_ffJtP_pn1BVOR7Ofw9gDGYbchhPyIUBQfL5QywJPmczSLxarsjR-b-coDZpnlrocfoOudqpOyWw_wSw7Dn-BTFVgkDN_jQU4oIEHZh-GgHCa3DkCkyjLE5wPHP-9XseyYDhXT4HmQ7UfF4kw9KQKtv9belmghMQ4-kct_i6Ybx4BwN6F8B3qJPhvNJGg6moCEqxYPbxWHb7SdL_Hj_SQb9JKES7LvqedKhNxm8KDAnEfL2h1CcskVUh0",
                      },
                    ].map((product) => (
                      <div
                        key={product.name}
                        className="group flex flex-col bg-[#19a2e6]/50 rounded-xl overflow-hidden border border-[#243b47] hover:border-[#19a2e6] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#19a2e6]/10"
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <div
                            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url("${product.img}")` }}
                          />
                          {product.badge && (
                            <div
                              className={`absolute top-3 left-3 ${
                                product.badgeColor || "bg-[#19a2e6]"
                              } text-white text-xs font-bold px-2 py-1 rounded`}
                            >
                              {product.badge}
                            </div>
                          )}
                          <button className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-[#19a2e6] rounded-full text-white backdrop-blur-sm transition-colors">
                            <Favorite className="text-[18px]" />
                          </button>
                        </div>
                        <div className="p-4 flex flex-col gap-2 flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-white text-lg font-bold leading-tight group-hover:text-[#19a2e6] transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex flex-col items-end">
                              <p className="text-white font-bold">
                                {product.price}
                              </p>
                              {product.oldPrice && (
                                <p className="text-[#5a7a8a] text-xs line-through">
                                  {product.oldPrice}
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="text-[#93b6c8] text-sm line-clamp-2">
                            {product.desc}
                          </p>
                          <div className="mt-auto pt-4 flex gap-2">
                            <button className="flex-1 bg-[#243b47] hover:bg-[#345565] text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                              View Details
                            </button>
                            <button className="p-2 bg-[#19a2e6] hover:bg-[#158bbd] text-white rounded-lg transition-colors flex items-center justify-center">
                              <AddShoppingCart className="text-[20px]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-center py-8">
                    <nav
                      aria-label="Pagination"
                      className="flex items-center gap-2"
                    >
                      <a
                        className="flex items-center justify-center size-10 rounded-lg border border-[#243b47] bg-[#1a2c36] text-[#93b6c8] hover:bg-[#243b47] hover:text-white transition-colors"
                        href="#"
                      >
                        <ChevronLeft className="text-[20px]" />
                      </a>
                      <a
                        className="flex items-center justify-center size-10 rounded-lg bg-[#19a2e6] text-white font-bold shadow-lg shadow-[#19a2e6]/20"
                        href="#"
                      >
                        1
                      </a>
                      {[2, 3].map((n) => (
                        <a
                          key={n}
                          className="flex items-center justify-center size-10 rounded-lg border border-[#243b47] bg-[#1a2c36] text-[#93b6c8] hover:bg-[#243b47] hover:text-white transition-colors"
                          href="#"
                        >
                          {n}
                        </a>
                      ))}
                      <span className="flex items-center justify-center size-10 text-[#93b6c8]">
                        ...
                      </span>
                      <a
                        className="flex items-center justify-center size-10 rounded-lg border border-[#243b47] bg-[#1a2c36] text-[#93b6c8] hover:bg-[#243b47] hover:text-white transition-colors"
                        href="#"
                      >
                        10
                      </a>
                      <a
                        className="flex items-center justify-center size-10 rounded-lg border border-[#243b47] bg-[#1a2c36] text-[#93b6c8] hover:bg-[#243b47] hover:text-white transition-colors"
                        href="#"
                      >
                        <ChevronRight className="text-[20px]" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
