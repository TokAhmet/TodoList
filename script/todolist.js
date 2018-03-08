var inputText = document.getElementById("myinput");

function addItem() {
  var li = document.createElement("li");
  var cbox = document.createElement("input");
  var delbutton = document.createElement("input");
  var input = inputText.value;
  var text = document.createTextNode(input);
  cbox.setAttribute("type","checkbox");
  cbox.setAttribute("title","Done?");
  cbox.setAttribute("id","cbox");
  delbutton.setAttribute("type","button");
  delbutton.setAttribute("value","Delete");
  delbutton.setAttribute("id","delbutton");
  li.appendChild(text);
  li.appendChild(cbox);
  li.appendChild(delbutton);

  delbutton.addEventListener("click",function() {
    li.parentNode.removeChild(li);
  });

  cbox.addEventListener("click",function () {
    if (cbox.checked) {
      var li2 = document.createElement("li");
      li2.appendChild(text);
      li.parentNode.removeChild(li);
      document.getElementById("doneul").appendChild(li2);
    }
    else{
      document.getElementById("todoul").appendChild(li);
    }
  });

  var txt;

  if (input == "") {
    txt = "You need to type something!";
  }

  else{
    txt = "";
    document.getElementById("todoul").appendChild(li);
  }
    document.getElementById("pinfo").innerHTML = txt;

}

inputText.addEventListener("keypress", function (e) {
 var key = e.keyCode;
 if (key == 13) {

  addItem();

}

});
