function getFirstSelector(selector){
  let selection = document.querySelector(selector)
  return selection
}

function nestedTarget(){
  let selection = document.querySelector("#nested .target")
  return selection
}

function deepestChild(){
  return document.getElementById("grand-node").lastElementChild.lastElementChild.lastElementChild.lastElementChild
}


function increaseRankBy(n){
 let rankedLists = document.getElementsByClassName("ranked-list")
 let firstList = rankedLists[0].querySelectorAll("li")
 let secondList = rankedLists[1].querySelectorAll("li")

for (let i = 0; i < firstList.length; i++){
  firstList[i].innerHTML = parseInt(firstList[i].innerHTML) + n
}

for (let i = 0; i < secondList.length; i++){
  secondList[i].innerHTML = parseInt(secondList[i].innerHTML) + n
}


 }



 // firstList.forEach(function(li){
 //   li.innerHTML = parseInt(li.innerHTML) + n
 // })
 // secondList.forEach(function(li){
 //   li.innerHTML = parseInt(li.innerHTML) + n
 //   })
