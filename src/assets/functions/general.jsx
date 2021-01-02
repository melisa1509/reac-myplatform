// function that transform json values checkbox selected in to array
export const jsonToArray = (jsonValues) => {
    var arrayValues = [];
    for( let prop in jsonValues){
        if(jsonValues[prop] === true ){
            arrayValues.push(prop);
        }
    }
    return arrayValues;
}

export const adjustDate = value => {
    let date = new Date(value)
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
    return date;
}
