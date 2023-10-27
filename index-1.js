var t="sldkdjfkdjf'dkjfdk'dkjfkdjf";
var i=34;
var i1=34.1;
var m=12e4;
var m1=12e-4;
var x = true;
var y = false;
/*var name = new Array();
names[0]="Ali";
names[1]="Majid"*/
var student1 = {firstname:"Ali",lastname:"Alavi", age: 22 ,birthdate:"1994/10/10"}
var student2 = {firstname:"Akbar",lastname:"Ahmadi", age: 20 ,birthdate:"1996/04/10"}
var student3 = {firstname:"Mohsen",lastname:"Marandi", age: 21 ,birthdate:"1995/06/10"}
var students=[student1,student2,student3]
alert(student1.firstname);
alert(student2.firstname);
var s1="Hi";
var s2="Ali"
var s3=s1+" "+s2;
alert(s3);
var x = 54
var n = x>50 ? 2 : 3;
alert(n);


function changeText()
{
 /*   document.getElementById("p1").innerHTML
="<a href='https://www.google.com'>My Web Site</a>"*/
var text = " Visit <a href='https://www.google.com'>My Web Site</a>";
document.getElementById("p1").innerHTML=text
}