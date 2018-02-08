
function telephoneCheck(str) {
  // Good luck!
  if(str.length>8){
var re=/^(([1]{1}\s*)|([0-9]{3})|\(\s*([0-9]{3})\s*\)|([1]{1}\s*)\(\s*([0-9]{3})\s*\)|([1]{1}\s*)?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 return re.test(str);
} else return false;
}


var test=telephoneCheck("141-754-3010");
console.log(test);