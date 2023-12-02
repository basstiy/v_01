


function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    document.getElementsByClassName("pay_online").style.display = "block";
  } else {
    document.getElementsByClassName("pay_online").style.display = "none";
  }
}

