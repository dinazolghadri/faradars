function printNumbers(min,max)
{
    for(var i=min;i<=max;i=i+2)
    document.write(i+"<br/>");
}
var names=["Ali","Hamid","Majid","Hasan","Kamyar","Nasser"]
for (var i=0 ; i<names.length ; ++i)
    document.write(names[i]+"<br/>")

function printNumbers2(min,max)
{
    var i=min ;
    while (i<=max)
    {
        document.write(i+"<br/>")
        i += 2;
    }
}
function f1()
{
    var input=prompt("Enter a number (* for finish): ");
    var sum=0;
    while (input!="*")
    {
        sum += eval(input);
        input=prompt("Enter a number (* for finish): ")
    }
    alert(sum)

}
function f2()
{
    var i = 10;
    do
    {
        alert(i);
        i+=1
    } while(i<3)
}
//f2()
var names=["Ali","Hassan","Hossein","Taghi","Naghi"]
function mySearch(name)
{
    for (var i=0;i<names.length;++i)
    {
        if (names[i]==name)
        {
            alert(i);
            break;
        }
    }
    alert(i);
}
function mySearch1(name)
{
    for (var i=0;i<names.length;++i)
    {
        if (names[i]==name)
        {
            continue;
        }
        else
        {
            alert(names[i]);
        }
    }
    
}
//mySearch1("Hassan");
function myObject()
{
    var txt='';
    var person = {fname:"Ali",lname:"Alavi", age:23}
    for (var x in person )
    {
        txt += person[x]+"-"

    }
    alert(txt)
}
myObject()