// "use client"
// import React from 'react';
// import { TargetSolutionsCard } from '@/components/targetsolutionscard';
// import {Forward} from 'lucide-react'
// import { MagicCard } from '@/components/magicui/magic-card';
// import { Particles } from '@/components/magicui/particles';
// import { CoolMode } from '@/components/magicui/cool-mode';
// import { LineShadowText } from '@/components/magicui/line-shadow-text';
// import { HyperText } from '@/components/magicui/hyper-text';
// const Page = () => {
//   return (
// <div
//   className="relative h-fit bg-cover bg-center overflow-hidden"
//   style={{
//     backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/012/194/167/small/abstract-background-with-green-technology-structure-circuit-computer-free-vector.jpg")',
//   }}
// >

//   <div className=' py-9 ml-5'>
//   <Particles className='absolute inset-0 pointer-events-none z-0'/>
//   <span className='text-[#25CE71] border-[1px] border-[#288a4f] py-0.5 rounded-md font-medium text-[0.8rem] px-2'>Business Process management platform</span>
//   <h1 className='my-9 font-bold font-sans text-5xl text-amber-100'>SIMPLIFY YOUR <br/> <LineShadowText>WORK FLOW</LineShadowText> <span className='text-[#F8931F]'>.</span></h1>
//   <h1 className='font-sans mb-9 tracking-wide font-medium text-2xl text-blue-50'><HyperText>ENHANCE YOUR BUSINESS PROCESS AND CONTROL</HyperText> </h1>
//   <p className='mb-5 text-blue-50 text-[0.8rem]'>Streamline your business's process and control management with our<br/> intuitive scalable SaaS platform. Designed specifically for Kenyan and<br/> East African enterprises.</p>
//   <div className='flex gap-3 mb-9'>
//    <CoolMode>
//     <button type='button' className="cursor-pointer inline-flex items-center gap-2 bg-[#22C55E] px-2 py-0.5 rounded-md text-black text-sm font-serif font-light">Get Started <Forward/></button>
//     </CoolMode>
//     <button type='button' className='bg-[#ebfaf0] cursor-pointer px-2 py-0.5 rounded-md text-black text-sm font-serif font-light'>Schedule a free demo</button>
    
//   </div>
//   <h6 className='font-extralight mb-4 font-serif text-sm text-white opacity-40'>Tailored Solutions For Your Industry</h6>
//   <div className='flex-wrap flex mb-10'>
//   {TargetSolutionsCard.map((val, idx) => {
//   const Icon = val.icon;
//   return (
//    <MagicCard key={idx} >
//     <div className="flex items-center gap-2 p-4 shadow rounded  mr-2 text-[#05080D] flex-wrap mt-1 ">
//       <Icon className="w-6 h-6 text-green-600" />
//       <h6 className="text-sm font-light">{val.name}</h6>
//     </div>
//     </MagicCard>
    
//   );
// })}
//   </div>
//   </div>
  
// </div>
//   );
// };

// export default Page;


"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TargetSolutionsCard } from "@/components/targetsolutionscard";
import { Forward } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { CoolMode } from "@/components/magicui/cool-mode";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { HyperText } from "@/components/magicui/hyper-text";
import Link from "next/link";


const Particles = dynamic(
  () =>
    import("@/components/magicui/particles").then(
      (mod) => mod.Particles 
    ),
  { ssr: false }
);

const Page = () => {
  return (
    <div
      className="relative h-fit bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/thumbnails/012/194/167/small/abstract-background-with-green-technology-structure-circuit-computer-free-vector.jpg")',
      }}
    >
      <div className="py-10 ml-5 relative z-10">
        <Particles className="absolute inset-0 pointer-events-none z-0" />

        <span className="text-[#25CE71] border-[1px] border-[#288a4f] py-0.5 rounded-md font-medium text-[0.8rem] px-2">
          Business Process management platform
        </span>

        <h1 className="my-9 font-bold font-sans text-5xl text-amber-100">
          SIMPLIFY YOUR <br />
          <LineShadowText>WORK FLOW</LineShadowText>{" "}
          <span className="text-[#F8931F]">.</span>
        </h1>

        <h1 className="font-sans mb-9 tracking-wide font-medium text-blue-50">
          <HyperText>ENHANCE YOUR BUSINESS PROCESS AND CONTROL</HyperText>
        </h1>

        <p className="mb-5 text-blue-50 text-[0.8rem]">
          Streamline your business&apos;s process and control management with
          our
          <br />
          intuitive scalable SaaS platform. Designed specifically for Kenyan
          and
          <br />
          East African enterprises.
        </p>

        <div className="flex gap-3 mb-9">
          <CoolMode>
            <Link href="/reachout">
            <button
              type="button"
              className="cursor-pointer inline-flex items-center gap-2 bg-[#22C55E] px-2 py-0.5 rounded-md text-black text-sm font-serif font-light"
            >
              Get Started <Forward />
            </button>
            </Link>
          </CoolMode>
          <Link href="/demo">
          <button
            type="button"
            className="bg-[#ebfaf0] cursor-pointer px-2 py-0.5 rounded-md text-black text-sm font-serif font-light"
          >
            Schedule a free demo
          </button>
          </Link>
        </div>

        <h6 className="font-extralight mb-4 font-serif text-sm text-white opacity-40">
          Tailored Solutions For Your Industry
        </h6>

        <div className="flex-wrap flex mb-10">
          {TargetSolutionsCard.map((val, idx) => {
            const Icon = val.icon;
            return (
              <MagicCard key={idx}>
                <div className="flex items-center gap-2 p-4 shadow rounded-md mr-2 text-[#05080D] flex-wrap mt-1">
                  <Icon className="w-6 h-6 text-green-600" />
                  <h6 className="text-sm font-light">{val.name}</h6>
                </div>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
