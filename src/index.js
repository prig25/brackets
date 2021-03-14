module.exports = function check(str, bracketsConfig) {  
  while (true) {
    let lgth = str.length;
    bracketsConfig.map(
      (brackets)=>{
        for (let j=0; j<str.length; j++) {
          if (str[j]==brackets[0] && str[j+1]==brackets[1]) {
            str = str.slice(0,j) + str.slice(j+2);                        
            break;
          } 
        }
      }
    )
    if (lgth == str.length) {
      return !str;
    } 
  }
}