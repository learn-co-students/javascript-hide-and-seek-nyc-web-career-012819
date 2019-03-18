function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    debugger
    let lis = list[i].children

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
  }
}

function deepestChild(){
  let grandNode = document.querySelector('#grand-node');
  let nextNode = grandNode.children[0];

  while (nextNode) {
    grandNode = nextNode;
    nextNode = grandNode.children[0];
  }

  return grandNode;
}
