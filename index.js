function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div div div div.target');
}

function deepestChild() {
  let counter = 0;
  let grandNode = document
  .getElementById('grand-node')
  .querySelectorAll('div');
  for(let i = 1; i < grandNode.length; i++) {
    counter++;
  }
  return grandNode[counter];
}

function increaseRankBy(n){
  let list = document.querySelectorAll(".ranked-list li");
  console.log("list:", list);
  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
