export default function makeRandomNumberArray(maxNumber, minNumber = 1) {
  const result = [];
  while (result.length < maxNumber - minNumber + 1) {
    const numberToAdd =
      minNumber + Math.round(Math.random() * (maxNumber - minNumber));
    if (!result.includes(numberToAdd)) result.push(numberToAdd);
  }
  return result;
}
