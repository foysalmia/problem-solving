/*Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
    let fahrenheit = ((celsius * 9) / 5) + 32;
    return fahrenheit;
}

const myTemperature = 212;
const result = celsiusToFahrenheit(myTemperature);
console.log(result); */

/*-----------------------------------------------------------------------------------------------------------------------------------*/

/* Fahrenheit to Celsius 

function fahrenheitToCelsius (fahrenheit){
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

const myBodyTemperature = 405;
const resultOfTotal = fahrenheitToCelsius(myBodyTemperature);
console.log(resultOfTotal); */

/*-----------------------------------------------------------------------------------------------------------------------------------*/

/* Result in Grading System 

function getResult(marks){
    if( marks >= 80){
        const result ='Your result is A+';
        return result;
    }
    else if( 80 > marks && marks >= 70){
        const result ='Your result is A';
        return result;
    }
    else if( 70 > marks && marks >= 60){
        const result ='Your result is A-';
        return result;
    }
    else if( 60 > marks && marks >= 50){
        const result ='Your result is B';
        return result;
    }
    else if( 50 > marks && marks >= 40){
        const result ='Your result is C';
        return result;
    }
    else if( 40 > marks && marks >= 33){
        const result ='Your result is D';
        return result;
    }
    else if (33 > marks){
        const result ='Your result is F and You have fail in the easy exam. Shut up , Just chill man.';
        return result;
    }
    
}
const myMarks = 45;
const totalResult = getResult(myMarks);
console.log(totalResult); */

/*-----------------------------------------------------------------------------------------------------------------------------------*/

/* Calculate interest for money increasing   

function calculateInterest (principle, rate, time){
    const interest = ( principle * rate * time) / 100;
    return interest;
}
const myMoney = 275000;
const rateOfInterest = 12.5;
const duration = 2;

const totalInterest = calculateInterest(myMoney,rateOfInterest,duration);
console.log(totalInterest); */