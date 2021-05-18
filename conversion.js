convertfahrTempToCelsius = (fahrTemp) => {
    if (fahrTemp ==null){
      console.log(`please Enter a fahrenheit temperature for conversion`);
    }
    let regex = /[a-zA-Z]/
    regexResult = regex.test(fahrTemp)
    if (regexResult === true && typeof fahrTemp !== 'object' && typeof fahrTemp !== null) {
      console.log(`'${fahrTemp}'  is not a valid number but a/an string`)
    }
    else if (Array.isArray(fahrTemp) === true) {
      console.log(`[${fahrTemp}]  is not a valid number but a/an array`)
    }
    else if (typeof fahrTemp === 'object' && typeof fahrTemp !== null && !Array.isArray(fahrTemp)) {
      console.log(`${JSON.stringify(fahrTemp)} is not a valid number but a/an object`)
    }
    else {
      let F = Number(fahrTemp)
      let C = ((F - 32) * 100/180)
      console.log(C.toFixed(4));
    }
}
  convertfahrTempToCelsius("32")


checkYuGiOh = (input) => {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(input)
  
    if (regexResult === true && typeof input !== 'object' || Array.isArray(input) === true || typeof input === 'object' && typeof input !== null && !Array.isArray(input)) {
      console.log(`invalid parameter:${JSON.stringify(input)}`);
      
    } else {
  
      let num = Number(input)
      let result = []
      for (let j = 1; j <= num; j++) {
        if (j % 2 == 0 && j % 3 !== 0 && j % 5 !== 0) {
          result.push('yu')
        }
        else if (j % 3 == 0 && j % 2 !== 0 && j % 5 !== 0) {
          result.push('gi')
        }
        else if (j % 5 == 0 && j % 3 !== 0 && j % 2 !== 0) {
          result.push('oh')
        }
        else if (j % 5 == 0 && j % 3 == 0 && j % 2 !== 0) {
          result.push('gi-oh')
        }
        else if (j % 5 == 0 && j % 3 !== 0 && j % 2 == 0) {
          result.push('yu-oh')
        }
        else if (j % 5 !== 0 && j % 3 == 0 && j % 2 == 0) {
          result.push('yu-gi')
        }
        else if (j % 5 == 0 && j % 3 == 0 && j % 2 == 0) {
          result.push('yu-gi-oh')
        }
        else {
          result.push(j)
        }
  
      }
      console.log(result);
  
    }
  
}
checkYuGiOh(10);
