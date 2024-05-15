/* Place your JavaScript in this file */
function fun(){
alert("مرحبا بكم في موقع نوران ")

var today = new Date();
var time = today.getHours();
var greet;

if (time > 18) {
  greet = 'مساء الخير!';
} else if (time > 12) {
  greet = 'مساء الخير!';
} else if (time >= 0) {
  greet = 'صباح الخير';
} else {
  greet = 'مساء الخير!';
}

var show = document.getElementById('message');
show.textContent = greet;

const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('نوران بنت وائل المستادي');
  });
}


  




