

/**
 * 
 * @param {object} obj 
 * @param {String} checkProp 
 */
function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp) === true ? obj[checkProp] : "Not Found"

  // Only change code above this line
}


console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))
// okay that was right 
// head to the next