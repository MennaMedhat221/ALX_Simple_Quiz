function add( a, b ) {
    return a + b ;
}

function subtract( a, b ) {
    return a - b ;
}
function multiply( a, b ) {
    return a * b ;
}       
function divide( a, b ) {
    if ( b === 0 ) {
        return "Error: Division by zero" ;
    } else {
        return a / b ;
    }
}
document.getElementById("add").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0 ;
    const number2 = parseFloat(document.getElementById("number2").value) || 0 ;
    document.getElementById("calculation-result").textContent = add(number1, number2);
})
document.getElementById("subtract").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0 ;
    const number2 = parseFloat(document.getElementById("number2").value) || 0 ;
    document.getElementById("calculation-result").textContent = subtract(number1, number2);
})
document.getElementById("multiply").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0 ;
    const number2 = parseFloat(document.getElementById("number2").value) || 0 ;
    document.getElementById("calculation-result").textContent = multiply(number1, number2);
})
document.getElementById("divide").addEventListener("click", function() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0 ;
    const number2 = parseFloat(document.getElementById("number2").value) || 0 ;
    document.getElementById("calculation-result").textContent = divide(number1, number2);
})
