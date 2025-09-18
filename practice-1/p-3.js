// ! Write a function that calculates and prints the area of a rectangle given its length and width

function area_of_rectangle(length, width) {
  if (length <= 0) {
    throw new RangeError("length cannot be 0 or less");
  }
  if (width <= 0) {
    throw new RangeError("width cannot be 0 or less");
  }
  const area = length * width;
  console.log("Area of a rectangle: ", area);
}

area_of_rectangle(6.3, 0);
