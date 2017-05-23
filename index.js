function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}
function nestedTarget(){
  var x = nested.getElementsByClassName("target")
  return x[0]
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0, l=lis.length; i<l; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
  return
}

function deepestChild(){
  var node = document.getElementById('app').querySelector('div#grand-node div')
  var nextNode = node.children[0]
  while(nextNode){
    node = nextNode
    nextNode = node.children[0]
  return node
}
}
