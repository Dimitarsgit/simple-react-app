export default function shuffleArray(arr) {
  let result = arr.slice();
  let ctr = result.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = result[ctr];
    result[ctr] = result[index];
    result[index] = temp;
  }
  return result;
}
