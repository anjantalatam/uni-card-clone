import "./classes.css";
import { MoveRight } from "lucide-react";

import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";

function Layout() {
  // TODO: change font
  return (
    <main>
      <header className={"header"}>
        <nav className="flex items-center justify-between w-full z-15 min-h-[80px] px-4">
          <img
            alt="uni_logo"
            src="src/assets/images/uni_logo.svg"
            loading="lazy"
            className="w-[85px]"
          />

          <a
            href="https://paychek.uni.club/"
            target="_blank"
            className="opacity-90 z-15 no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[11px] px-[30px]">
            Uni Paycheck
          </a>
        </nav>
      </header>

      <SectionOne />

      <div className="py-12 md:py-[150px]">
        <SectionTwo />

        <SectionThree />
      </div>

      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 apply-now">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
              <span>Apply now</span>
              <MoveRight width="21px" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
