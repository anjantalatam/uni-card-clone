import FadeInSection from "../../components/FadeInComp";

function SectionTwo() {
  return (
    <section className="section-two">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <FadeInSection>
            <p>
              Earn 1% assured cashback
              <span className="text-highlight-grey">
                on your spends. Get
              </span>{" "}
              5X
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              more value than cashback{" "}
              <span className="text-highlight-grey">
                {" "}
                at the Uni Store. Enjoy
              </span>
            </p>
          </FadeInSection>

          <FadeInSection>
            <p>
              <span className="text-[#9EA7AE] text-highlight-grey">
                round the clock{" "}
              </span>
              Whatsapp support.{" "}
              <span className="text-[#9EA7AE] text-highlight-grey">
                And it's
              </span>
            </p>
          </FadeInSection>

          <FadeInSection>
            <p>
              lifetime free
              <span className="text-highlight-grey">
                ; no joining fee, no annual charges.
              </span>
            </p>
          </FadeInSection>
        </div>
        <div
          className="flex md:justify-center py-12"
          style={{ opacity: 1, transform: "none" }}>
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center">
            <img
              alt="down_arrow"
              src="src/assets/images/down_arrow.svg"
              loading="lazy"
              className="w-9 md:w-14"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
