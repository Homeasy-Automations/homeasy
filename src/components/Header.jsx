"use client";

import React from "react";
import {
  Menu,
  Lightbulb,
  Camera,
  ToggleLeft,
  Wind,
  Package,
  Search,
  ShoppingCart,
  User,
  Home,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#243b47] bg-surface-light/90 dark:bg-text-light/90 backdrop-blur-md px-6 py-3 lg:px-10">
      {/* Logo */}
      <div className="flex items-center gap-4 text-text-light dark:text-white">
        <div className="size-8 text-primary flex items-center justify-center">
          {/* Placeholder HouseWifi icon */}
          {/* <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c3.03 0 5.5 2.47 5.5 5.5S15.03 18.5 12 18.5 6.5 16.03 6.5 13 8.97 7.5 12 7.5z" />
          </svg> */}
          <Home className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">
          Homeasy
        </h2>
      </div>

      {/* Desktop Navigation & Actions */}
      <div className="flex flex-1 items-center justify-end gap-6">
        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center max-w-md w-full mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search smart lights, cameras..."
              className="pl-10 pr-4 h-10 w-full"
            />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Products
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-60">
              <DropdownMenuItem className="flex items-center gap-3">
                <Lightbulb className="size-4" />
                <div>
                  <p className="font-medium">Smart Lights</p>
                  <p className="text-xs text-muted-foreground">
                    Control lighting from anywhere
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <Camera className="size-4" />
                <div>
                  <p className="font-medium">Cameras</p>
                  <p className="text-xs text-muted-foreground">
                    Secure your home 24/7
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <ToggleLeft className="size-4" />
                <div>
                  <p className="font-medium">Smart Switches</p>
                  <p className="text-xs text-muted-foreground">
                    Automate your switches
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3">
                <Wind className="size-4" />
                <div>
                  <p className="font-medium">Climate Control</p>
                  <p className="text-xs text-muted-foreground">
                    Thermostats & sensors
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-3 justify-center">
                <Package className="size-4" />
                <span className="font-medium">View All Products</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="#support"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Support
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Search Icon - Tablet */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex lg:hidden"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>

          <Button className="hidden sm:flex min-w-[84px] rounded-full h-10 px-6 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20">
            My Account
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 sm:w-96 pt-0 flex flex-col">
            <SheetHeader className="border-b pb-4">
              <SheetTitle className="flex items-center gap-3 text-left">
                <div className="size-8 text-primary flex items-center justify-center">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c3.03 0 5.5 2.47 5.5 5.5S15.03 18.5 12 18.5 6.5 16.03 6.5 13 8.97 7.5 12 7.5z" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Homeasy</span>
              </SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto px-4 pb-6">
              <div className="mt-6 space-y-8">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-11 pr-4 h-12 text-base rounded-lg border-muted bg-background"
                  />
                </div>

                <Separator />

                {/* Product Categories Accordion */}
                <div>
                  <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider hover:no-underline hover:text-foreground">
                        Product Categories
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-2">
                        <div className="space-y-4">
                          {[
                            {
                              icon: Lightbulb,
                              label: "Smart Lights",
                              href: "#products/smart-lights",
                            },
                            {
                              icon: Camera,
                              label: "Cameras",
                              href: "#products/cameras",
                            },
                            {
                              icon: ToggleLeft,
                              label: "Smart Switches",
                              href: "#products/switches",
                            },
                            {
                              icon: Wind,
                              label: "Climate Control",
                              href: "#products/climate",
                            },
                            {
                              icon: Package,
                              label: "All Products",
                              href: "#products/all",
                              bold: true,
                            },
                          ].map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className={`flex items-center gap-4 rounded-lg px-3 py-2.5 transition-all hover:bg-accent hover:text-accent-foreground ${
                                item.bold ? "font-semibold" : ""
                              }`}
                            >
                              <item.icon className="size-5 text-primary" />
                              <span className="text-base">{item.label}</span>
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Separator />

                {/* Other Links */}
                <nav className="space-y-1">
                  <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    More
                  </h3>
                  <div className="space-y-1">
                    <a
                      href="#support"
                      className="flex items-center rounded-lg px-3 py-2.5 text-base text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Support
                    </a>
                    <a
                      href="#about"
                      className="flex items-center rounded-lg px-3 py-2.5 text-base text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      About Us
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            {/* Footer Action - My Account */}
            <div className="border-t bg-muted/50 px-4 py-5">
              <Button
                asChild
                className="w-full h-12 rounded-full text-base font-semibold shadow-lg"
              >
                <a
                  href="#account"
                  className="flex items-center justify-center gap-3"
                >
                  <User className="size-5" />
                  My Account
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}