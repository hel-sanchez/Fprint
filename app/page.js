import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowRight, Fingerprint } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#00102b] min-h-screen p-10">
      <Image
        src="/Fprint-logo-bluish.png"
        alt="Intro Image"
        width={500}
        height={500}
        className="h-14 w-60 object-top-left"
      />
      <div className="h-1 bg-[#545454] mt-5" />

      <Alert className="flex flex-row bg-[#ffcece] border-[#ff3131] mt-4 rounded-full">
        <AlertTitle className="flex text-lg font-bold text-[#cc0000]">
          <AlertCircle className="mr-2" />
          DISCLAIMER!! WHATEVER RESULTS YOU GET, IT’S ON YOU LMFAO GOODLUCK!
        </AlertTitle>
      </Alert>

      <div className="flex flex-col gap-4 mt-4 text-center">
        <Card className="bg-[#00274b] border-[#545454] p-4 rounded-4xl shadow-md">
          <Fingerprint className="text-white bg-[#3aedff] p-2 rounded-full w-16 h-16 mx-auto mt-6" />
          <h1 className="text-5xl text-[#b1f8ff] font-bold font-sans tracking-widest">
            HELLO!!
          </h1>
          <p className="text-3xl text-white uppercase font-sans mt-5">
            Please insert your name:
            <Input
              className="bg-[#d9d9d9] text-white text-center border-[#7d7d7d] w-1/2 mx-auto mt-2"
              placeholder="Your name here..."
            />
          </p>
          <Link href="/start">
            <button className="flex items-center justify-center bg-[#b1f8ff] text-[#00274b] text-2xl w-60 mt-2 mx-auto py-2 rounded-xl hover:bg-[#3aedff]/80 transition">
              READY? <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </Link>
          <p className="text-white text-lg font-sans mt-4 mb-6">
            Your fingerprints reveal your health destiny.
          </p>
        </Card>
      </div>
    </div>
  );
}
