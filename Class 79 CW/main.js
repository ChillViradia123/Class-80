name_of_the_guests_array=[];

function submit_button(){

var guest_1=document.getElementById("guest_1").value;


var guest_2=document.getElementById("guest_2").value;
var guest_3=document.getElementById("guest_3").value;
var guest_4=document.getElementById("guest_4").value;

name_of_the_guest_array.push(guest_1);
name_of_the_guest_array.push(guest_2);
name_of_the_guest_array.push(guest_3);
name_of_the_guest_array.push(guest_4);



console.log(name_of_the_guest_array);
document.getElementById("display").innerHTML=name_of_the_guest_array;

}
function sort_button(){
name_of_the_guest_array.sort();
console.log(name_of_the_guests_array);
document.getElementById("display").innerHTML=name_of_the_guests_array;





}