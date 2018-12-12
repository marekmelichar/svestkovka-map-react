const removeFromArray = (array, element) => {
  // console.log('removeFromArray', array, element);

  const output = array.filter(itm => itm !== element)
  // console.log('removeFromArray output', output);

  return output;
}

export default removeFromArray;
