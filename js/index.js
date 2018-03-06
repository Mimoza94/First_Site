var data = [];

function getTag(){
  var elements = document.getElementsByTagName('h1');
  var tag = elements[0];
  return tag;
}

function changeText(score) {
  var tag = getTag();
  tag.innerText = "Was great at EuroVision" + score;
  data.push(tag.innerText);
}

function changeFromH(i){
  var tag = getTag();
  tag.innerText = data[i];
}
