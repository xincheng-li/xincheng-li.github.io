function wol(){
var mydateInput = document.getElementById("mydate");
var date = new Date();
var dateString = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
mydateInput.value=dateString;
}