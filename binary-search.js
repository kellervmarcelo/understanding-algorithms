function binarySearch(array, number) {
  let low = 0;
  let high = array.length;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = array[middle];

    if (guess === number) {
      return middle;
    } else if (guess > number) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
}

const lista = [1, 5, 9, 29, 30, 45, 50];
const item = 45;

console.log(binarySearch(lista, item));
console.log(binarySearch(lista, 36));
