import "./classes.css";

import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import Header from "./Header";
import ApplyNowMobile from "../ApplyNowMobile";

function Layout() {
  return (
    <main>
      <Header />
      <SectionOne />
      <div className="py-12 md:py-[150px]">
        <SectionTwo />
        <SectionThree />
      </div>

      <ApplyNowMobile />
    </main>
  );
}

export default Layout;
