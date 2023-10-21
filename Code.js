function maskify(word) {
  // Convert string to array
  let splitedWord = word.split("");
  
  // Use .fill(ele, s, e) to replace the elements by "#" except the last 4 elements
  let filledSplitedWord = splitedWord.fill("#", 0, splitedWord.length - 4);
  
  // Join to convert array into string again
  let joinedFilledSplitedWord = filledSplitedWord.join("");
  
  return joinedFilledSplitedWord;
}

console.log(maskify("123456789"));
