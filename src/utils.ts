export const MobileRegex = /^\d{10}$/;

export function validatePhoneNumber(phone: string) {
  return MobileRegex.test(phone);
}

export interface IApiResponse {
  status: "success" | "failure";
  message: string;
}

export function simulateApplyNow(phone: string) {
  return new Promise<IApiResponse>((resolve) => {
    setTimeout(() => {
      console.log(phone);
      resolve({ status: "success", message: "Form submitted successfully!" });
    }, Math.random() * 2500);
  });
}
