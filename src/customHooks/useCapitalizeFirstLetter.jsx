export default function useCapitalizeFirstLetter(firstLetter) {
  return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
}