//ex1
let newStr = str[0].toUpperCase() + str.slice(1);

//ex2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );

//ex3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }

//ex4
function extractCurrencyValue(str) {
    return +str.slice(1);
  }