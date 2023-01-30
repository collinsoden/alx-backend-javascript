export default function appendToEachArrayValue(array, appendString) {
<<<<<<< HEAD
  let newArray = {};
  for (const i of array) {
    const thevalue = array[i];
    [`${appendString} ${thevalue}`];
  }

  return newArray;
=======
  const returnArray = [];
  for (const element of array) {
    returnArray.push(appendString + element);
  }

  return returnArray;
>>>>>>> 85113e7f3da3e4cc8100332475190bee0c9f300a
}
