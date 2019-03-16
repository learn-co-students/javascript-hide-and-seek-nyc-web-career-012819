
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
// Accepts a selector and returns the first element that matches

function nestedTarget() {
  return document.querySelector('#nested .target');
}
// Grabs nested element

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
// Returns most deeply nested child in #grand-node

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedList.length; i < l; i++) {
    let children = rankedList[i].children;

    for (let x = 0, kids = children.length; x < kids; x++) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n;
    }
  }
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
