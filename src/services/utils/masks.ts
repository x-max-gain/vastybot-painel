export const maskFloat = (field: string) => {
  const sanitizedInput = field.replace(/[^0-9.]/g, "");

  const parts = sanitizedInput.split(".");
  const integerPart = parts[0]; // Parte inteira
  const decimalPart = parts.slice(1).join(""); // Junta tudo após o primeiro ponto

  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
};
