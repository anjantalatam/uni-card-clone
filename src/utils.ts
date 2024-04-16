export const MobileRegex = /^\d{10}$/;

export function validatePhoneNumber(phone: string) {
  return MobileRegex.test(phone);
}
