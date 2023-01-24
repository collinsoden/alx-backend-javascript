const getSumOfHoods = (a, b = 89, c = 19) => a + b + c;

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));

export default getSumOfHoods;
