function change()
{
   //document.getElementById("d1").innerHTML="salaam"
   var para=document.getElementById('d1').getElementsByTagName('p')
   for (var i=0; i<para.length; ++i)
   {
    //para[i].innerHTML=i
    para[i].style.borderWidth="20px"
    para[i].style.borderColor="darkblue"
    para[i].style.borderStyle="groove"
   }
   document.getElementById("img1").src="save1.jpg"
}
function childs()
{
   alert(document.getElementById('d1').childNodes.length)
}