export default function appendToEachArrayValue(array, appendString) {
  let newArray = {};
  for (const i of array) {
    const thevalue = array[i];
    [`${appendString} ${thevalue}`];
  }

  return newArray;
}
