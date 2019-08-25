export default function shuffleArray(arr) {
  let result = arr.slice();
  let ctr = result.length;
  let temp;
  let index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = result[ctr];
    result[ctr] = result[index];
    result[index] = temp;
  }
  return result;
}
