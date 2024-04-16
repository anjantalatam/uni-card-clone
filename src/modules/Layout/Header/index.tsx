function Header() {
  return (
    <header className={"header"}>
      <nav className="flex items-center justify-between w-full z-15 px-8 md:px-[8rem]">
        <img
          alt="uni_logo"
          src="/assets/images/uni_logo.svg"
          loading="lazy"
          className="w-[115px]"
        />

        <a
          href="https://paychek.uni.club/"
          target="_blank"
          className="opacity-90 z-15 no-underline visited:text-white text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[8px] px-[30px]"
          style={{
            color: "rgba(255,255,255,var(--tw-text-opacity))",
          }}>
          Uni Paycheck
        </a>
      </nav>
    </header>
  );
}

export default Header;
