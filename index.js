// Code your solution in this file!
//returns the first two elements in an array
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array){
    const newArray = drivers.slice(0,2);
    return newArray;
}
console.log(returnFirstTwoDrivers());

//returns last two elements in an array
const returnLastTwoDrivers = function (){
    const lastTwo = drivers.slice(-2);
    return lastTwo;
}
console.log(returnLastTwoDrivers());
// array
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers);
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));
//
function createFareMultiplier (multiplier){
    function fareMultiplier(fare){
        return fare*multiplier;
    }
    return fareMultiplier;
    //return fareMultiplier * multiplier;
}
console.log(createFareMultiplier(4));

//doubler
const fareDoubler = createFareMultiplier(2);
//tripler
const fareTripler = createFareMultiplier(3);
//
function selectDifferentDrivers (array, callBack){
    return callBack(drivers);
}
console.log(`Here they are ${selectDifferentDrivers(drivers,returnFirstTwoDrivers)}`);
