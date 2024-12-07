'use client'

import { BackgroundGradient } from "@/components/ui/background-gradient";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return <div className="dark flex w-full h-screen overflow-hidden">
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mb-[40%] text-2xl font-bold text-neutral-700 dark:text-white max-w-4xlg">
        <div className="md:text-4xl lg:text-5xl">
          ברוכים הבאים{" "}
          <Highlight className="text-black dark:text-white">
            לבסמח אלפא
          </Highlight>
          {" "}השתלמויות
        </div>
      </motion.h1>
      <BackgroundGradient className="rounded-md p-[2%] bg-white dark:bg-zinc-900">
        <button onClick={handleLogin} className="w-full h-full text-neutral-700 dark:text-white font-bold">כניסה</button>
      </BackgroundGradient>
      <Image
        src={'/bbb.png'}
        alt="bsmch"
        height="194"
        width="194"
        className="relative mt-[30%] left-[calc(50%-99.5px)] object-contain" />
    </HeroHighlight>

  </div>;
}

