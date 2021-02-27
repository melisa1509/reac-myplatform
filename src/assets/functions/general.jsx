import moment from "moment";

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

export const showDate = ( time = new Date() , prefix = "") => {
    const date_options = {  year: 'numeric', month: 'short', day: 'numeric' };
    const date =  typeof time === "object" ? time : new Date (time.slice(0,10).split("-") ) ;
    
    return prefix + date.toLocaleDateString(undefined, date_options);
}

export const convertDate = date => {
    return moment(date).format('YYYY-MMM-DD');
}
