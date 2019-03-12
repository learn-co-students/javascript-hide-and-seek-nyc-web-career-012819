function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li');
  for (let i= 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    console.log("list:",list[i].innerHTML );
  }
}

function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div');
  let counter = 0;
  for (let i = 1; i < list.length; i++){
    counter++ ;
  }
  return list[counter];
}
