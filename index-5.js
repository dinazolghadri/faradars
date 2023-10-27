function getNumbers()
{
    var n1=parseInt(prompt("First Number: "))
    var n2=eval(prompt("Second Number: "))
    var op=prompt("Operator: ")
    var result=calc(n1,n2,op)  // فراخوانی یک تابع در تابع دیگر
    alert(result)
    
}
function calc(num1, num2, operator)
{
    switch(operator)
    {
        case "+": return(num1 + num2);
        case "-": return(num1 - num2);
        case "*": return(num1 * num2);
        case "/": return(num1 / num2);
    }

}
getNumbers();//در این قسمت می توان هر چند بار که خواست تابع را فراخوانی کرد
getNumbers();
