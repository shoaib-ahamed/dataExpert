// import Hero from "@/components/hero";
import EnsureAccuracy from "@/components/landingPage/EnsureAccuracy";
import NoTrainingNeeded from "@/components/landingPage/NoTrainingNeeded";
import SemanticMatching from "@/components/landingPage/SemanticMatching";
import Versioning from "@/components/landingPage/Versioning";
import Hero from "@/components/landingPage/Hero";

import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Contact from "@/components/landingPage/Contact";
import Features from "@/components/landingPage/Features";

export default async function Index() {
  return (
    <div className="w-full grid ">
      {/* <Hero /> */}
      <Hero />

      <main className="w-full flex justify-center gap-6 px-4 py-32 bg-[#1f2937]">
        <div className="max-w-5xl flex flex-col gap-5  justify-center">
          <SemanticMatching />
          <NoTrainingNeeded />
          <EnsureAccuracy />
          <Versioning />

          {/* <Features /> */}
        </div>
      </main>
      <Contact />
    </div>
  );
}
