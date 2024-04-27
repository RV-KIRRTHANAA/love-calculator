function check(){
    var gname = document.getElementById('gname').value;
    var bname = document.getElementById('bname').value

    var score = Math.random()*101;

    var result = document.getElementById("result");

    if (score > 90) {
        result.innerText = "❤️ You are made for each other ❤️, Your love score is " + score + "%";
      } else if (score > 70) {
        result.innerText = "You have a strong connection!, Your love score is " + score + "%";
      } else if (score > 50) {
        result.innerText  = "your love score is bad.. you need to put more efforts! , Your love score is " + score + "%";
      } else {
        result.innerText  = "💔you should just break up...no use , Your love score is💔 " + score + "%";
      }
    }