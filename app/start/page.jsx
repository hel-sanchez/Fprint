"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  ArrowRight,
  Fingerprint,
  ScanLine,
  Droplet,
  LocateFixed,
  Activity,
} from "lucide-react";
import Link from "next/link";

export default function Intro() {
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

      <div className="flex flex-col gap-4 mt-4">
        <Card className="bg-[#00274b] border-[#545454] p-6 rounded-4xl shadow-md">
          <h1 className="text-4xl font-semibold font-[Open Sans] pl-10 tracking-wider text-[#ffffff]">
            HELLO, USER!
          </h1>
          <p className="text-lg font-light font-[Open Sans] pl-14 tracking-wider text-[#e5e5e5]">
            Welcome to FPRINT, where your fingerprints reveal your health
            destiny. Our cutting-edge technology analyzes your fingerprint
            patterns to predict potential health conditions with questionable
            accuracy.
          </p>
          <button className="flex items-center justify-center bg-[#3aedff] text-black font-semibold p-2 rounded-full mt-2 hover:bg-[#00c2d6] transition duration-300 ease-in-out">
            <Link href="/scan" className="flex items-center gap-2">
              <ScanLine className="w-5 h-5" />
              Scan Your Fingerprint <ArrowRight className="w-5 h-5" />
            </Link>
          </button>
        </Card>

        {/* Table */}
        <div className="flex flex-col bg-[#00274b] text-white rounded-3xl shadow-lg">
          <div className="bg-[#005e9a] text-4xl font-semibold font-[Open Sans] text-center p-6 rounded-t-3xl">
            How FPRINT Works
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <Fingerprint className="bg-[#3aedff] text-[#00274b] p-2 rounded-full w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  1. Scan Your Fingerprints
                </h2>
                <p className="text-[#cfcfcf]">
                  Place all five fingers on our scanner for a complete analysis.
                  Our system captures the unique patterns in your fingerprints.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <Activity className="bg-[#3aedff] text-[#00274b] p-2 rounded-full w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-white">2. AI Analysis</h2>
                <p className="text-[#cfcfcf]">
                  Our advanced AI analyzes the unique patterns in your
                  fingerprints to identify potential health indicators and
                  genetic markers.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <Droplet className="bg-[#3aedff] text-[#00274b] p-2 rounded-full w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  3. Health Prediction
                </h2>
                <p className="text-[#cfcfcf]">
                  Receive a detailed report of potential health conditions
                  including cancer risk, cardiovascular health, diabetes, and
                  kidney function.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-4">
              <LocateFixed className="bg-[#3aedff] text-[#00274b] p-2 rounded-full w-12 h-12" />
              <div>
                <h2 className="text-xl font-bold text-white">
                  4. Find Healthcare
                </h2>
                <p className="text-[#cfcfcf]">
                  Get directions to the nearest hospital with "cool doctors" who
                  can help address any health concerns identified in your scan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
