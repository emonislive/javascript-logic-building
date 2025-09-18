// ! Write a function that finds and prints the smallest number among three given numbers.

function smallest(a, b, c) {
  if (a <= b && a <= c) {
    console.log(a, "is the smallest");
  } else if (b <= a && b <= c) {
    console.log(b, "is the smallest");
  } else {
    console.log(c, "is the smallest");
  }
}

smallest(1, 2, 3);
