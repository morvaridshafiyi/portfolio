import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/component/header";
import Hero from "@/src/component/hero";
import About from "@/src/component/about";
import Resume from "@/src/component/resume";
import Skills from "@/src/component/skills";
import Contact from "@/src/component/contact";

export const metadata: Metadata = {
  title: "Morvarid Shafiei",
  description: "portfolio",
};

export default function RootLayout({
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-black-200">
        <div className="group hidden bg-orange-100 transition text-white-100 text-16 rounded-4 px-40 py-12 font-semibold mr-40 overflow-hidden relative">
          <span className="flex laptop:mt-50 laptop:hidden fixed left-0 right-0 top-0 z-20 tablet:grid-cols-2 laptop:text-56 laptop:grid-cols-4 tablet:pt-0 tablet:w-fit h-fit text-18 text-14 tablet:text-16 pb-16 tablet:pb-24 tablet:text-24 talet:text-24 tablet:pr-50 pr-30 tablet:pr-50 mobile:w-[85%] tablet:flex tablet:justify-center text-30 tablet:text-40 laptop:56 tablet:gap-40 grid-cols-1 tablet:grid-cols-2 tablet:flex-row tablet:hidden tablet:w-4/6 tablet:flex tablet:text-16 tablet:text-14 mb-40 tablet:text-56 text-30 laptop:flex-row laptop:flex laptop:hidden mobile:max-w-[720px] tablet:max-w-[960px] laptop:max-w-[1140px] desktop:max-w-[1320px] w-full laptop:flex-col laptop:w-4/6 w-full laptop:w-2/6 mobile:text-16 mobile:mr-10 -top-[25px] group-focus-within:-top-[25px] top-[130px] -top-[35px] group-focus-within:-top-[35px] mt-40 right-0 text-white-300 border-b-2 -top-[13px] text-16 text-white-100 -top-[9px] text-12 text-back-300 z-10 bg-black-200 px-01 transition-all ease-in group-focus-within:text-12 group-focus-within:-top-[9px] group-focus-within:text-black-300 rtl bg-black-100 border-1 rounded-normal border-white-100 px-04 py-03 transition-all ease-in outline-0 focus-within:border-gray-100 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer w-[70px] h-[70px] mb-24 text-left rounded-full mr-24 before:left-0 after:left-0 after:content-['90%'] w-[90%] w-[80%] w-[85%] w-[70%] w-[40%] ltr gap-12 justify-end skill pt-40 grid-cols-4 after:content-['80%'] after:content-['90%'] after:content-['85%'] after:content-['40%'] after:content-['70%'] p-20 h-[6px] before:rounded-4 h-full before:-top-[14px] before:right-0 before:border-8 before:border-transparent before:border-b-0 before:border-r-0 before:border-t-gray-300 after:content-['100%'] after:absolute after:-top-[37px] after:font-semibold after:right-0 after:bg-gray-300 after:text-black-100 after:text-12 before:-top-[10px] after:rounded-4 pb-40 before:w-full before:bg-orange-100 text-22 hover:bg-orange-100 group-hover:text-white-100 duration-500 min-h-[270px] gap-6 text-center leading-7 before:w-0.5 before:top-0 before:-left-[13px] before:bg-orange-100 -left-[20px] top-0 h-[16px] w-[16px] rounded-[5px] border-2 bg-black-300 p-40 text-17 py-24 pt-24 grid gap-x-40 w-fit grid-cols-2 gap-x-3 mt-24 text-24 opacity-80 opacity-100 pr-50 pb-24 text-gray-200 my-24 columns-2 before:absolute before:content-[''] before:top-0 before:left-0 before:right-0 before:bottom-0 before:border-8 before:border-orange-100 before:-translate-x-[26px] before:translate-y-[26px] z-10 pr-10 flex-col before:w-[10px] after:w-[10px] h-[3px] relative w-[7.6rem] rounded-4 before:bg-black-200 before:absolute before:animate-heading-move before:top-0 before:h-full before:content-[''] before:left-0 after:bg-black-200 after:absolute after:animate-heading-move after:top-0 after:h-full after:content-[''] after:left-[21px] bg-black-200 py-50 justify-center group-hover:text-orange-100 hover:shadow-[0_35px_60px_-15px_rgba(255,73,4)] hover:-rotate-[8deg] transition-all cursor-pointer duration-[0.8s] ease-[cubic-bezier(0.39, 0.58, 0.57, 1)] delay-0 group-hover:-rotate-[8deg] group-hover:-translate-y-[81%] absolute w-[12em] h-[6em] bg-orangr-100 -left-[7px] bg-white-100 after:bg-white-100 top-[3.8em] transition duration-150 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] w-0 p-8 float-left relative overflow-hidden w-[2em] h-[1em] -mt-[0.5em] after:content-[''] after:float-left after:h-full after:w-1/2 after:rounded-[50%] after:bg-black-100 before:float-left before:h-full before:w-1/2 before:rounded-[50%] before:bg-orange-100 text-white-100 text-56 hidden pt-50 pt-8 mx-10 px-40 py-12 mt-70 rounded-4 mr-40 bg-orange-100 text-white-100 text-16 text-gray-100 text-16 mr-10 border-b-2 border-black-100 ease-in-out duration-300 font-semibold hover:text-orange-100 hover:border-orange-100 border-orange-100 border-orange-100 text-orange-100 after:px-8 after:py-4"></span>
        </div>
        <Header />
        <div className="mobile:max-w-[720px] w-[90%] tablet:max-w-[960px] laptop:max-w-[1140px] desktop:max-w-[1320px] mx-auto">
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="Skills">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </body>
    </html>
  );
}
