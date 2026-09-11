// components/layout/Footer.tsx

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

// Simple email schema for newsletter signup
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof schema>;

export default function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Placeholder – in production replace with API call
    console.log("Newsletter signup", data);
    reset();
  };

  return (
    <footer className="bg-surface text-onSurface py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Brand & quick links */}
        <div>
          <h2 className="font-display text-2xl mb-4 text-primary">KINETIX</h2>
          <ul className="space-y-2 text-sm font-body">
            <li>
              <Link href="/" className="hover:text-primaryDark transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-primaryDark transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/build-your-bike" className="hover:text-primaryDark transition-colors">
                Build Your Bike
              </Link>
            </li>
            <li>
              <Link href="/store-locator" className="hover:text-primaryDark transition-colors">
                Find a Store
              </Link>
            </li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h3 className="font-display text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm font-body">
            <li>
              <Link href="/support" className="hover:text-primaryDark transition-colors">
                Customer Service
              </Link>
            </li>
            <li>
              <Link href="/warranty" className="hover:text-primaryDark transition-colors">
                Warranty
              </Link>
            </li>
            <li>
              <Link href="/financing" className="hover:text-primaryDark transition-colors">
                Financing
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter signup */}
        <div>
          <h3 className="font-display text-lg mb-4">Stay Updated</h3>
          <p className="text-sm mb-3 font-body">
            Get the latest news, releases, and exclusive offers.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="you@domain.com"
              {...register("email")}
              className="border border-gray-600 bg-surface text-onSurface placeholder-gray-400"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
            {isSubmitSuccessful && (
              <span className="text-green-400 text-sm mt-2">
                🎉 Thanks for joining!
              </span>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs font-body text-gray-400">
        © {new Date().getFullYear()} KINETIX. All rights reserved.
      </div>
    </footer>
  );
}
