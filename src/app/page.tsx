
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  FlaskConical,
  Mail,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a network request
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmb3Jlc3R8ZW58MHx8fHwxNzYzODM1OTA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Forest background"
        fill
        className="object-cover"
        data-ai-hint="nature forest"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex min-h-screen w-full">
        <div className="hidden md:flex flex-col justify-between p-8 w-1/3 text-white">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-6 w-6" />
            <span className="font-semibold text-lg">EquipView</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-lg text-white/80">
              Sign in to access your dashboard and manage your equipment data.
            </p>
          </div>
          <p className="text-sm text-white/60">
            © 2025 EquipView Inc.
          </p>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-card/90 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Sign In
            </h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="pallavi.123@example.com"
                      className="bg-background/80 border-border h-12 pl-10 text-foreground"
                      defaultValue="pallavi.123@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="bg-background/80 border-border h-12 pl-10 text-foreground"
                      defaultValue="password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <Link
                  href="#"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-md transition-colors text-base"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Don't have an account?{" "}
                  <Link
                    href="#"
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
