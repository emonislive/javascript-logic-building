// ! Write a program that generates a random number

// ? range (1 - max)
function print_random_1_to_max(max) {
  const randomNumber = Math.random() * max + 1; // * from 1 to 100
  const floorRandomNumber = Math.floor(randomNumber);
  console.log(floorRandomNumber);
}

print_random_1_to_max(100);

// ? customized range for random number
function print_random_min_to_max(minimum, maximum) {
  const randomNumber = Math.random() * (maximum - minimum) + minimum;
  const floorRandomNumber = Math.floor(randomNumber);
  console.log(floorRandomNumber);
}

const minimum = 5;
const maximum = 10; // * 10 is excluded, range is: (5 - 9)
print_random_min_to_max(minimum, maximum);
