export const generateKeyRandom = () => {
  const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";

  return `#${numbers[genereteNumber(0, numbers.length - 1)]}${Date.now()}${words[genereteNumber(0, words.length - 1)]}${numbers[genereteNumber(0, numbers.length - 1)]}${words[genereteNumber(0, words.length - 1)]}${numbers[genereteNumber(0, numbers.length - 1)]}`;
};

export const genereteNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
