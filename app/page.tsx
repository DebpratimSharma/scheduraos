//'use client';

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LoginButton from "@/components/LoginButton";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { FadeIN } from "@/components/FadeIN";
import { FeatureCard } from "@/components/FeatureCard";
import { HeroMockup } from "@/components/HeroMockup";
import {
  ArrowRight,
  Calendar,
  LayoutGrid,
  Zap,
  BarChart3,
} from "lucide-react";

export default async function LandingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <main className=" flex flex-col  items-center ">
      <Navbar />
      <div id="hero" className="flex bg-grid flex-col gap-3 items-center justify-center w-full min-h-screen mt-10">
        <FadeIN delay={100}>
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-black tracking-tighter text-foreground font-normal mb-6 text-center">
            Your Day <br />
            Perfectly <span className="text-primary font-bold ">Schedura</span>'d.
          </h1>
        </FadeIN>

        <FadeIN delay={200}>
          <p className="px-5 md:px-0 text-center text-lg md:text-xl text-foreground/55 max-w-2xl mx-auto mb-10 leading-relaxed">
            The smart and modern routine management system designed for
            students. Track attendance, manage holidays, and sync your schedule
            across all devices in real-time.
          </p>
        </FadeIN>
        <LoginButton>
          <button className="py-5 px-8 rounded-full bg-foreground border border-foreground text-background font-semibold cursor-pointer hover:bg-background hover:text-foreground transition-colors duration-300 flex items-center gap-2">
            Sign in <ArrowRight size={16} />
          </button>
        </LoginButton>
        <a
          href="#explore"
          className="group flex flex-col items-center gap-4 mt-12 transition-all duration-500 hover:scale-110"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/40 group-hover:text-foreground transition-colors">
            Explore
          </span>

          {/* The Animated Line */}
          <div className="w-px rounded-full h-16 bg-linear-to-b from-foreground/20 via-foreground/10 to-transparent relative overflow-hidden">
            <div className=" w-full h-1/2 bg-foreground animate-scroll-line"></div>
          </div>
        </a>
      </div>

      {/* Mockup section*/}
      <div className="w-full px-5 md:px-30 pb-10 scroll-mt-24" id="explore" >
        <FadeIN delay={300}>
          <HeroMockup  />
        </FadeIN>
      </div>

      {/*Feature Cards*/}
      <section id="features" className="py-24 px-5 md:px-30 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to <br />
              graduate on time.
            </h2>
            <p className="text-foreground/55">
              Powerful features wrapped in a minimalist design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FadeIN delay={0} className="lg:col-span-2 h-full">
              <FeatureCard
                icon={BarChart3}
                title="Real-time Attendance Stats"
                desc="See your attendance stats and info in real-time. Know how many classes you can afford to skip (or not)."
                colSpan="lg:col-span-2"
              />
            </FadeIN>

            <FadeIN delay={100}>
              <FeatureCard
                icon={Zap}
                title="Cloud Sync"
                desc="Acces your routines everywhere. Powered by Supabase."
              />
            </FadeIN>

            <FadeIN delay={200}>
              <FeatureCard
                icon={Calendar}
                title="Smart Holidays"
                desc="Automatic holiday detection. The app switches to 'Vacation Mode' so you can relax guilt-free."
              />
            </FadeIN>

            <FadeIN delay={300} className="lg:col-span-2">
              <FeatureCard
                icon={LayoutGrid}
                title="Customizable Workflows"
                desc="Edit your schedule on the fly. Add extra classes, cancel lectures, or adjust your working days with a single click."
              />
            </FadeIN>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeIN>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to organize your life?
            </h2>
            <p className="text-xl text-zinc-400 mb-10">
              Join thousands of students who have ditched their messy
              spreadsheets.
            </p>
            <div className="w-full flex justify-center">
              <LoginButton>
                <button className="py-7 px-8 rounded-full border border-foreground bg-foreground hover:bg-background hover:text-foreground text-background font-semibold cursor-pointer transition-colors duration-300 flex items-center gap-2">
                  Sign in <ArrowRight size={16} />
                </button>
              </LoginButton>
            </div>
          </FadeIN>
        </div>
      </section>
    </main>
  );
}
