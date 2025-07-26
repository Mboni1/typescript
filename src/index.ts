type StringOrNumber = string | number;


function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value === 'string'){
       return value + "1"  
    } else {
      return value+ 1  
    }   
}

