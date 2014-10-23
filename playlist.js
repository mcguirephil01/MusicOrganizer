

window.onload = init;
function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
  
  loadPlayList();
}

function handleButtonClick() {
  //alert("Button was Clicked!");
  var textInput = document.getElementById("songTextInput");

  var songName = textInput.value;
  if (songName == "")
  {
  alert("field is empty dumbass")
  

}
else
{
//alert("Adding " + songName);

var li = document.createElement("li");

li.innerHTML = songName

var ul = document.getElementById("playlist");

ul.appendChild(li);

save(songName);

}   
}