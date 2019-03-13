function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  // return document.getElementsByClassName('target')[0];
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let allRankings = document.querySelectorAll('.ranked-list li');
  // allRankings.forEach(function(rank) {
  //   rank.innerText = parseInt(rank.innerText) + n;
  // });
  for (let i = 0; i < allRankings.length; i++) {
    allRankings[i].innerHTML = parseInt(allRankings[i].innerHTML) + n;
  }
  // why forEach doesn't work in rspec, but works in console chrome?
  // in for loop, why innerHTML, not innerText?
}

function deepestChild() {
  let findAll = document.getElementById('grand-node').querySelectorAll('div');
  return findAll[findAll.length - 1]
}
