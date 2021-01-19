function getName(node){
  return node.name;
}

function next(node, col){
  let nextAddress = node.next
  return col[`${nextAddress}`]
}

function addressAt(idx, list, col){
  if(idx == 0){
    return list
  }

  let node = nodeAt(idx-1, list, col)
  return node.next
}

function headNode(list, col){
  return col[list]
}

function nodeAt(idx, list, col){
  let cNode = headNode(list, col);
  for(let i = 0; i < idx; i++){
     cNode = next(cNode, col);
  }

  return cNode;
}

function idxAt(node, col, list){
  let cNode = headNode(list, col);
  let currentIdx = 0
  while(cNode != node){
    currentIdx++
    cNode = next(cNode, col)
  }
  return currentIdx
}


function insertNodeAt(idx, newNodeAddress, list, col){
  let prevNode = nodeAt(idx - 1, list, col)
  let subtNode = nodeAt(idx, list, col)

  let prevNodeIdx = idxAt(prevNode, col, list)
  let subNodeIdx = idxAt(subNode, col, list)
  let prevNodeAddress = addressAt(prevNode, list, col)
  let subNodeAddress = addressAt(subNode, list, col)
  prevNode.next = newNodeAddress
  let newNode = col[newNodeAddress]
  newNode.next = subtNodeAddress
}


function deleteNodeAt(idx, list, col){
  let previousNode;
  let cNode = headNode(list, col);
  for(let i = 0; i < idx; i++){
     previousNode = cNode
     cNode = next(cNode, col);
  }
  previousNod
