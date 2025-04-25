function greetuser()
{
var user=document.getElementById("userName").value;
var greetingmessage = "Hello,"+ user ;
document.getElementById('greeting').textcontent=greetingmessage;
}