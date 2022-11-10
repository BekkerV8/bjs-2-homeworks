// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
      sum += arr[i];
    }

    avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let number of arr) {
  sum += number;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max= - Infinity;
  for (let arr of arrOfArr) {
  if (func(arr) > max) {
   max = func(arr)
     }
   }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min, max, different;
  min = arr[0];
  max = -arr[0];
  different = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }


  return Math.abs(max-min);

}
