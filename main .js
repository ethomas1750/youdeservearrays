/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(list){
  return list[0]
}

function getLastItemFrom(list){
  return list[list.length -1]
}

function getIndex3(list){
  if (arr.length < = 4){
  return arr[arr.length-1]
}else 
  return arr [3]
}

function isLongList(list){
  if (arr.length >= 10  arr.length === 10)
    return true
  }else{
    return false
}

function firstItemIsNumber()list{
if(typeof list[0] === "number"){
  return true
}else{
  return false
}
}

function secondCharOfThirdString(list){
  if (typeof list[2][1] === "string"){
    return list[2][1]
  }else {
    return "not a string"
  }
}

//return list[2][1]
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
