export function priceSeparator(number: number | string) {
  let result: string = '';
  if(number) {
    const str: string = String(number);
    
    for (let i = str.length - 1; i >= 0; i--) {
      result = str[i] + result;
      if ((str.length - i) % 3 === 0 && i !== 0) {
        result = ' ' + result;
      }
    }
  } 
  return result;
  }