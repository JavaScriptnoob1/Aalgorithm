//在计算机科学中，二叉树是每个节点最多有两个子树的树结构。通常子树被称作“左子树”（left subtree）和“右子树”（right subtree）。二叉树常被用于实现二叉查找树和二叉堆。
//二叉树的每个结点至多只有二棵子树(不存在度大于2的结点)，二叉树的子树有左右之分，次序不能颠倒。二叉树的第i层至多有2^{i-1}个结点；深度为k的二叉树至多有2^k-1个结点；
//对任何一棵二叉树T，如果其终端结点数为n_0，度为2的结点数为n_2，则n_0=n_2+1。
//一棵深度为k，且有2^k-1个节点称之为满二叉树；深度为k，有n个节点的二叉树，当且仅当其每一个节点都与深度为k的满二叉树中，序号为1至n的节点对应时，称之为完全二叉树。

//1. 若任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；

//2. 若任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；

//3. 任意节点的左、右子树也分别为二叉查找树。

//4. 没有键值相等的节点（no duplicate nodes）。

function Node(data, left, right) {     //data 作为排序的索引值，
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
   this.count = 1;
}

function show() {
   return this.data;
}

function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.preOrder = preOrder;
   this.postOrder = postOrder;
   this.getmin = getmin;
   this.getmax = getmax;
   this.find = find;
   this.remove = remove;
   this.removeNode = removeNode;
   this.getSmallest = getSmallest;
   this.update = update;
   this.breadthFirstSearch = breadthFirstSearch;
   this.depthFirstSearch = depthFirstSearch;
}

function insert(data) {
   var n = new Node(data, null, null);
   if (this.root == null) {
      this.root = n;
   }
   else {
      var current = this.root;
      var parent;
      while (true) {
         parent = current;
         if (data < current.data) {
            current = current.left;
            if (current == null) {
               parent.left = n;
               break;
            }
         }
         else {
            current = current.right;
            if (current == null) {
               parent.right = n;
               break;
            }
         }
      }
   }
}
//中序
function inOrder(node) {
   if (!(node == null)) {
      inOrder(node.left);
      console.log(node.show() + " ");
      //console.log(node.count);
      inOrder(node.right);
   }
}
//前序
function preOrder(node) {
   if (!(node == null)) {
      console.log(node.show() + " ");
      preOrder(node.left);
      preOrder(node.right);
   }
}
//后序
function postOrder(node) {
   if (!(node == null)) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.show() + " ");
   }
}

function getmin() {
   var current = this.root;
   while (!(current.left == null)) {
      current = current.left;
   }
   return current.data;
}

function getmax() {
   var current = this.root;
   while (!(current.right == null)) {
      current = current.right;
   }
   return current.data;
}

function find(data) {
   var current = this.root;
   if (current == null) {
         return null;
      }
   while (current.data != data) {
      if (data < current.data) {
         current = current.left;
      }
      else {
         current = current.right;
      }
      if (current == null) {
         return null;
      }
   }
   return current;
}

function getSmallest(node) {
   if (node.left == null) {
      return node;
   }
   else {
      return getSmallest(node.left);
   }
}

function remove(data) {
   root = removeNode(this.root, data);
}

function removeNode(node, data) {
   if (node == null) {
      return null;
   }
   if (data == node.data) {
      // 只有根节点
      if (node.left == null && node.right == null) {
         return null;
      }
      // 没有左子树
      if (node.left == null) {
         return node.right;
      }
      // 没有右子树
      if (node.right == null) {
         return node.left;
      }
      // 有两个子树
      var tempNode = getSmallest(node.right);
      node.data = tempNode.data;
      node.right = removeNode(node.right, tempNode.data);
      return node;
   }
   else if (data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
   }
   else {
      node.right = removeNode(node.right, data);
      return node;
   }
}

function update(data) {
    var grade = this.find(data);
    grade.count += 1;
    return grade;
}
function depthFirstSearch(node) {    //使用栈
    if (!node) {
        return null;
    }
    var stack = [];
    stack.push(node);
    while(stack.length > 0) {
        var currentNode = stack.pop();
        console.log(currentNode.show() + '');
        if(currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if(currentNode.left !== null) {
            stack.push(currentNode.left);
        }
    }
}

function breadthFirstSearch(node) {   //使用队列
    if (!node) {
        return null;
    }
    var queue = [];
    queue.push(node);
    while(queue.length > 0) {
        var currentNode = queue.shift();
        console.log(currentNode.show() + '');
        if(currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if(currentNode.right !== null) {
            queue.push(currentNode.right);
        }
    }
}

// function createArray(num) {
//     let arr = [];
//     for(let i = 0; i < num; i++) {
//         arr[i] = Math.floor(Math.random() * (num + 1));
//     }
//     return arr;
// }

// var nums = createArray(10);
// var tree = new BST();
// for(var i = 0; i < nums.length; i++) {
//     var num = nums[i];
//     var hasNum = tree.find(num);
//     if (!hasNum) {
//         tree.insert(num);
//     } else {
//         tree.update(num);
//     }
// }
// console.log('breadth-------------------');
// tree.breadthFirstSearch(tree.root);
// console.log('depth-------------------');
// tree.depthFirstSearch(tree.root);

var tree = new BST();
var arr = [30,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
for(var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var hasNum = tree.find(num);
    if (!hasNum) {
        tree.insert(num);
    } else {
        tree.update(num);
    }
}

console.log('breadth-------------------');
tree.breadthFirstSearch(tree.root);
console.log('depth-------------------');
tree.depthFirstSearch(tree.root);
tree.remove(44);
console.log('breadth-------------------');
tree.breadthFirstSearch(tree.root);
console.log('depth-------------------');
tree.depthFirstSearch(tree.root);




// tree.inOrder(tree.root);
// console.log('-------------------');
// tree.preOrder(tree.root);
// console.log('-------------------');
// tree.postOrder(tree.root);
