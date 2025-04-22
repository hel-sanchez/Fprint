"use client";

import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  AlertCircle,
  Fingerprint,
  ScanHeart,
  Droplet,
  ShieldPlus,
  Trash,
  ArrowRight,
} from "lucide-react";
import { Table, TableBody } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
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

      <div className="flex flex-row gap-4 mt-4 text-center justify-center">
        {/* Results */}
        <Card className="gap-2 bg-[#00274b] border-[#545454] p-8 rounded-4xl shadow-md">
          <h1 className="text-4xl uppercase font-semibold font-[Open Sans] tracking-wider text-[#ffffff]">
            Your Results{" "}
            <ScanHeart className="w-10 h-10 mx-auto inline-block" />
          </h1>
          <div className="h-1 bg-[#545454]" />

          <div className="flex flex-row gap-4 text-center">
            <Card className="bg-[#006771] border-[#3aedff] p-6 rounded-4xl shadow-md mt-4">
              <h1 className="text-2xl font-semibold font-sans uppercase tracking-wider text-[#ffffff]">
                Scanned Fingerprints
              </h1>
              <div className="flex flex-row">
                <Fingerprint className="w-10 h-10 mx-auto text-white" />
                <Fingerprint className="w-10 h-10 mx-auto text-white" />
                <Fingerprint className="w-10 h-10 mx-auto text-white" />
                <Fingerprint className="w-10 h-10 mx-auto text-white" />
                <Fingerprint className="w-10 h-10 mx-auto text-white" />
              </div>
            </Card>

            <Card className="bg-[#003f2a] border-[#00bf63] p-6 rounded-4xl shadow-md mt-4">
              <h1 className="text-2xl font-semibold font-sans uppercase tracking-wider text-[#ffffff]">
                Related Blood Groups{" "}
                <Droplet className="w-6 h-6 mx-auto inline-block" />
              </h1>
              <div className="flex flex-col text-white">
                A, B, AB, and O<p>A+, A-, B+, B-, AB+, AB-, O+, and O-</p>
              </div>
            </Card>
          </div>

          <Card className="bg-[#3f002f] border-[#ebfffa] p-6 rounded-4xl shadow-md mt-4">
            <h1 className="text-2xl font-semibold font-sans uppercase tracking-wider text-[#ffffff]">
              Diseases Found{" "}
              <ShieldPlus className="w-6 h-6 mx-auto inline-block" />
            </h1>

            <div className="flex flex-row justify-center gap-4 text-white">
              <Card className="bg-[#7f347b] border-white p-6 w-60 h-48 shadow-md mt-4 rounded-none flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold font-sans uppercase tracking-widest text-[#ffffff]">
                  Cancer
                </h1>
                <ul className="text-lg font-light font-[Open Sans] text-center tracking-widest text-[#e5e5e5] list-disc">
                  <li>Lung - 10%</li>
                  <li>Breast - 30%</li>
                </ul>
              </Card>

              <Card className="bg-[#93903e] border-white p-6 w-60 h-48 shadow-md mt-4 rounded-none flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold font-sans uppercase tracking-widest text-[#ffffff] text-center">
                  Chronic Kidney Disease
                </h1>
                <p className="text-xl font-light font-[Open Sans] tracking-widest text-[#e5e5e5]">
                  1%
                </p>
              </Card>
            </div>

            <div className="flex flex-row justify-center gap-4 text-white">
              <Card className="bg-[#3f0000] border-white p-6 w-60 h-48 shadow-md mt-4 rounded-none flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold font-sans uppercase tracking-wider text-[#ffffff] text-center">
                  Cardiovascular Disease
                </h1>
                <p className="text-xl font-light font-[Open Sans] tracking-wider text-[#e5e5e5]">
                  31%
                </p>
              </Card>

              <Card className="bg-[#319f6a] border-white p-6 w-60 h-48 shadow-md mt-4 rounded-none flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold font-sans uppercase tracking-wider text-[#ffffff] text-center">
                  Type II Diabetes
                </h1>
                <p className="text-xl font-light font-[Open Sans] tracking-wider text-[#e5e5e5]">
                  41%
                </p>
              </Card>
            </div>
          </Card>
        </Card>

        <div className="flex flex-col gap-4 text-center">
          {/* Recent Users */}
          <Card className="bg-gradient-to-t from-[#00274b] via-[#00274b] to-[#88709d] border-[#545454] p-4 rounded-4xl shadow-md">
            <h1 className="text-4xl font-semibold font-[Aleo] tracking-wider text-[#b1f8ff]">
              Recent Users
            </h1>

            <hr className="h-1 bg-[#545454]" />

            <Table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <TableBody className="bg-[#00274b] text-white">
                <tr className="bg-[#00396d] border-b border-[#545454] hover:bg-[#3aedff] transition duration-300 ease-in-out">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    <Checkbox className="mr-2" />
                  </td>
                  <td>Mariah Carry</td>
                  <td className="px-6 py-4">
                    <Trash className="w-5 h-5 text-[#ff4242]" />
                  </td>
                </tr>
                <tr className="bg-[#00274b] border-b border-[#545454] hover:bg-[#3aedff] transition duration-300 ease-in-out">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    <Checkbox className="mr-2" />
                  </td>
                  <td>James Charles</td>
                  <td className="px-6 py-4">
                    <Trash className="w-5 h-5 text-[#ff4242]" />
                  </td>
                </tr>
                <tr className="bg-[#00396d] border-b border-[#545454] hover:bg-[#3aedff] transition duration-300 ease-in-out">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">
                    <Checkbox className="mr-2" />
                  </td>
                  <td>Kobi Briant</td>
                  <td className="px-6 py-4">
                    <Trash className="w-5 h-5 text-[#ff4242]" />
                  </td>
                </tr>
              </TableBody>
            </Table>
          </Card>

          {/* Nearest Hospitals */}
          <Card className="bg-[#00274b] border-[#545454] items-center p-10 rounded-4xl shadow-md">
            <h1 className="text-4xl font-semibold font-[Aleo] tracking-wider text-[#ffffff]">
              Nearest Hospitals
            </h1>

            <div className="relative w-full h-[400px]">
              <Image
                src="/map.png"
                alt="Map"
                fill
                className="object-cover rounded-none"
              />
            </div>

            <button className="w-10 h-10 flex items-center justify-center bg-[#7d7d7d] border-black border-2 rounded-full"></button>
          </Card>
        </div>
      </div>

      <Link href="/">
        <button className="flex items-center justify-center bg-[#b1f8ff] text-[#00274b] text-2xl w-60 mt-10 mx-auto py-2 rounded-xl hover:bg-[#3aedff]/80 transition">
          Scan Again? <ArrowRight className="ml-2 w-6 h-6" />
        </button>
      </Link>
    </div>
  );
}
