const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1,2,3,
// 1,3,4
// 2,3,4

const fn = () => {
  let m = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        m++;

        console.log(arr[i], arr[j], arr[k], arr[i] + arr[j] + arr[k]);
      }
    }
  }
};

fn();
