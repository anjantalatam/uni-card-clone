function InputEndIcon({
  isValidPhone,
  phoneNumber,
  handleClear,
}: {
  isValidPhone: boolean;
  phoneNumber: string;
  handleClear: () => void;
}) {
  if (!phoneNumber) {
    return null;
  }

  if (phoneNumber.length < 10 && !isValidPhone) {
    return (
      <button type="button" onClick={handleClear}>
        <img src="/assets/images/clear-input.svg" alt="clear input" />
      </button>
    );
  }

  if (phoneNumber.length === 10 && !isValidPhone) {
    return (
      <button type="button" onClick={handleClear}>
        <img src="/assets/images/invalid-input.svg" alt="invalid input" />
      </button>
    );
  }

  return <img src="/assets/images/valid-input.svg" alt="valid input" />;
}

export default InputEndIcon;
