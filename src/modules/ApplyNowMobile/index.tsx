import { MoveRight } from "lucide-react";
import { useState } from "react";
import {
  CONSENT_MSG,
  IApiResponse,
  simulateApplyNow,
  validatePhoneNumber,
} from "../../utils";
import InputEndIcon from "../../components/InputEndIcon";

function ApplyNowMobile() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [openFormItems, setOpenFormItems] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const handlePhoneNumberChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"] =
    (e) => {
      setPhoneNumber(e.target.value);
    };

  const handleApplyNow: React.DOMAttributes<HTMLButtonElement>["onClick"] =
    async () => {
      if (!phoneNumber) {
        setOpenFormItems((open) => !open);
      }

      const submit = async () => {
        try {
          setIsLoading(true);
          const result: IApiResponse = await simulateApplyNow(phoneNumber);
          console.log(result.message);
          setIsApplied(true);
        } catch (e) {
          console.log("Error:", e);
        } finally {
          setIsLoading(false);
        }
      };

      if (phoneNumber) {
        submit();
      }
    };

  const getApplyNowDisabled = () => {
    if (isLoading) return true;

    if (
      openFormItems &&
      phoneNumber != "" &&
      (!isValidPhone || !consentChecked)
    ) {
      return true;
    }

    return false;
  };

  const handleClear = () => {
    setPhoneNumber("");
  };

  const isValidPhone = validatePhoneNumber(phoneNumber);

  return (
    <div className="w-full bottom-0 z-40 fixed md:hidden py-8 apply-now">
      <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
        {!isApplied && (
          <div className="flex flex-col transition-all ease-in">
            {openFormItems && (
              <div className="phone-input-container">
                <div className="flex justify-between items-center">
                  <input
                    id="phone"
                    className="phone-input"
                    placeholder="Enter your phone number"
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    maxLength={10}
                  />
                  <span>
                    <InputEndIcon
                      isValidPhone={isValidPhone}
                      phoneNumber={phoneNumber}
                      handleClear={handleClear}
                    />
                  </span>
                </div>
              </div>
            )}
            <button
              type="button"
              onClick={handleApplyNow}
              className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
              disabled={getApplyNowDisabled()}>
              <span>{isLoading ? "Applying..." : "Apply Now"}</span>
              <MoveRight width="21px" />
            </button>
            {openFormItems && (
              <div className="consent flex items-center py-4 px-2 max-w-xs gap-2">
                <input
                  type="checkbox"
                  id="consent-msg"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                />
                <label
                  htmlFor="consent-msg"
                  className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                  {CONSENT_MSG}
                </label>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center">
          {isApplied && (
            <div>
              <div className="w-full max-w-[300px]">
                <a
                  href="https://uni-growth.onelink.me/v6cm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
                  <div className="w-full flex justify-center items-center">
                    <span>Download</span>
                  </div>
                </a>
              </div>
              <div className="my-2">
                <p className="text-white md:text-black text-[10px] leading-3">
                  Thank you for your interest in the Uni Card.
                  <br /> Download the Uni Cards app now and get your Uni Card in
                  minutes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApplyNowMobile;
