const numberFirst= +prompt('Enter your first number');
const numberSecond= +prompt('Enter your second number');
const actionType= prompt('Choose your action * / + - ');
const checkNumber=(num)=>{ return !Number.isNaN(num)};
const result=()=>{
const isFirstNumber= checkNumber (numberFirst);
const isSecondNumber= checkNumber (numberSecond);
const isAction=(actionType==="*")||(actionType==="/")||(actionType==="+")||(actionType==="-");
if (isFirstNumber&&isSecondNumber&&isAction){
if (actionType==="*"){
    return numberFirst * numberSecond}
    else if (actionType==="/"){
        return numberFirst / numberSecond}
        else if (actionType==="+"){
            return numberFirst + numberSecond}
            else if (actionType==="-"){
                return numberFirst - numberSecond}
}
else{return "This operation is not exist"}
}

alert(result());
console.log(result);