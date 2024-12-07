'use client'

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Card from "@/components/ui/canvas-reveal-card"
import React from "react";
import {
  IconPencil
} from "@tabler/icons-react"
import Image from "next/image"
import DashboardModal from "./components/dashboard-modal";

console.log(DashboardModal);

const ModalTriggerButtonOnHover = <IconPencil className="text-neutral-200 dark:text-black h-5 w-5 flex-shrink-0" />;
const ModalDescription = <span className="text-neutral-700 dark:text-neutral-300 text-sm">קורס שילמד אותכם משהו</span>;
const ModalFooter = <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">הירשמו</button>;
const DashboardModalComp = (
  <DashboardModal 
    ModalDescription={ModalDescription} 
    ModalTriggerButtonOnHover={ModalTriggerButtonOnHover}
    ModalFooter={ModalFooter} 
    ModalTitle="קורס JAVA" 
    ModalTriggerButtonText="להרשם"
  />
);

const card = <Card title="something" nonHoverTitle="something else" button={DashboardModalComp}>
<CanvasRevealEffect
animationSpeed={5.1}
containerClassName="bg-sky-600"
colors={[[125, 211, 252]]}
/>
</Card>
const cards = [card, card, card, card, card, card, card, card, card, card, card]



export default function Dashboard() {
  return(<div className="w-full h-full">
    <h2 className="max-w-7xl mt-[5%] pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        קורסים רצים
      </h2>
    <Carousel items={cards}></Carousel>
  </div>);
}
