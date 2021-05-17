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