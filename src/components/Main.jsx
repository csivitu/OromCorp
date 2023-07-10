import React from "react";
import Image from "next/image";
import Link from "next/link";
import oromLogo from "../public/images/logo.webp";
import appstore from "../public/images/appstore.png";
import playstore from "../public/images/playstore.png";
import localFont from "@next/font/local";
import Footer from "./Footer";

const myFont = localFont({ src: "../public/fonts/Crima.otf" });
const myFont2 = localFont({src: "../public/fonts/Inter-Light-BETA.ttf"})

const Main = () => {
  return (
    <div className="w-full md:h-screen p-2 flex flex-col items-center py-16 bg-[#172241] text-[#F3F4F4] relative">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-1 px-28">
        <div style={myFont.style} className="col-span-2 pl-8">
          <h3 className="pt-6  text-4xl">Text here</h3>
          <h1 className="py-0 text-8xl">One Liner</h1>

          <div style={myFont2.style} className="border-2 boreder-[#C0C0C0] rounded-full italic w-72 px-7 py-1 mb-11 mt-11 flex">
            Download our app
            <Image src={appstore} className="h-6 w-6 ml-6 mr-4" />
            <Image src={playstore} className="h-6 w-6" />
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={oromLogo} className="rounded-xl" alt="/" />
        </div>

        <div style={myFont2.style} className="flex">
          <div className="box-content border-r-2 p-5 mt-11 flex">
            <div style={myFont.style} className="text-5xl">
              100+
            </div>
            <div className="pl-3">unique styles</div>
          </div>
          <div className="p-5 mt-11 flex">
            <div style={myFont.style} className="text-5xl">
              60+
            </div>
            <div className="pl-3 content-center pt-2">certifications</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
