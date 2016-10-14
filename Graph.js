var findLadders = function(beginWord, endWord, wordList) {
    function Node(data) {
        this.data = data;
    }

    function Graph() {
        this.vertex = [];
        this.edge = [];
        this.insert = function(node) {
            this.vertex.push(node);
            this.edge[this.vertex.length] = []; 
            for(var i = 0; i < this.vertex.length - 1; i++) {
                if(isSimilar(node,this.vertex[i])) {
                    this.edge[this.vertex.length].push(i);
                    this.edge[i].push(this.vertex.length);
                }
            }
        }
    }
    function isSimilar(one, two) {
        var x = one.data;
        var y = two.data;
        if(x === y) {
            return false;
        }
        var a = x.aplit('');
        var b = y.split('');
        var count = 0;
        for(var i = 0; i < b.length; i++) {
            if(a.indexOf(b[i]) >= 0) {
                count += 1;
            }
        }
        if(count === 1) {
            return true;
        } else {
            return false;
        }
    }

    var graph = new Graph();
    graph.insert(new Node(beginWord));
    for(var i = 0; i < wordList.length) {
        graph.insert(new Node(wordList[i]));
    }
    graph.insert(new Node(endWord));

    

    
}