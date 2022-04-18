const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const camelCase = (...words: string[]) => {
  return (
    words[0] +
    words.slice(1).map(capitalizeFirstLetter).join('')
  );
};
export default camelCase;
