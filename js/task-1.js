const isEnoughCapacity = (fruits, capacity) => {
    for (const [key, value] of Object.entries(fruits)) {
        if (value > capacity) {
            return false;
        }
    }
    return true;
};

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // T

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // F

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); //T

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); //F