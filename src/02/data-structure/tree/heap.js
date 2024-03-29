// TODO： 实现完整的BinaryHeap Class
// 二叉堆构造函数，capacity: 容量，compare: 比较函数，array: 数组
function BinaryHeap(capacity, compare, array){
    if(array){
        this.array = array.concat();
        this.size = array.length;
        if(capacity < 3)
            this.capacity = this.size * 2;
        else
            this.capacity = capacity;
        this.compare = compare;
    }
    else{
        if(capacity < 3)
            return null;
        this.array = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
        this.compare = compare;
    }
}

// 检查二叉堆是否已空
BinaryHeap.prototype.isEmpty = function(){
    return this.size == 0;
}

// 获取结点i的父结点
BinaryHeap.prototype.parent = function(i){
    return Math.floor((i - 1) / 2);
}

// 获取结点i的左儿子
BinaryHeap.prototype.left = function(i){
    return 2 * i + 1;
}

// 获取结点i的右儿子
BinaryHeap.prototype.right = function(i){
    return 2 * i + 2;
}

// 根据数组元素的索引进行交换
BinaryHeap.prototype.swap = function(i, j){
    var temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
}

// 二叉堆push操作，往堆中添加一个新元素
BinaryHeap.prototype.push = function(T){
    if(this.size == this.capacity){
        console.log("overflow: could not push key.");
        return;
    }
    this.size++;
    var i = this.size - 1;
    this.array[i] = T;
    // 上滤操作，由下而上检查
    while(i != 0 && this.compare(this.array[i], this.array[this.parent(i)])){
        this.swap(i, this.parent(i));
        i = this.parent(i);
    }
}

// 获取堆顶元素
BinaryHeap.prototype.top = function(){
    return this.array[0];
}

// 堆化操作，修复二叉堆的性质，由上而下检查，又称为下滤操作
BinaryHeap.prototype.heapify = function(i){
    var left = this.left(i);
    var right = this.right(i);
    var small = i;
    if(left < this.size && this.compare(this.array[left], this.array[i]))
        small = left;
    if(right < this.size && this.compare(this.array[right], this.array[small]))
        small = right;
    if(small != i){
        this.swap(i, small);
        this.heapify(small);
    }
}

// 释放堆顶元素，将最后一个元素替换堆顶元素，然后进行下滤堆化操作
BinaryHeap.prototype.pop = function(){
    if(this.size <= 0){
        console.log("heap is empty.");
        return null;
    }
    if(this.size == 1){
        this.size--;
        return this.array[0];
    }
    var root = this.array[0];
    this.array[0] = this.array[this.size - 1];
    this.size--;
    this.heapify(0);
    return root;
}

// 降低第i个结点的关键字
BinaryHeap.prototype.decreaseKey = function(i, NT){
    this.array[i] = NT;
    while(i != 0 && this.compare(this.array[i], this.array[this.parent(i)])){
        this.swap(i, this.parent(i));
        i = this.parent(i);
    }
}

// 删除元素
BinaryHeap.prototype.delete = function(i){
    // this.decreaseKey(i, Number.MIN_VALUE);
    // this.pop();
    if(this.size <= 0){
        console.log("heap is empty.");
        return;
    }
    if(this.size == 1){
        this.size--;
        return;
    }
    this.array[i] = this.array[this.size - 1];
    this.size--;
    this.heapify(i);
}

// 构建堆，用于使用一个数组构建堆的时候进行堆化操作
BinaryHeap.prototype.buildHeap = function(){
    for(var i = Math.floor(this.size / 2);i >= 0;i--)
        this.heapify(i);
}

function compare(a, b){
    return a < b;
}

function print(heap){
    var str = "";
    while(!heap.isEmpty()){
        var value = heap.top();
        heap.pop();
        str += value + " ";
    }
    console.log(str);
}

var heap = new BinaryHeap(20, compare);
heap.push(95);
heap.push(23);
heap.push(47);
heap.push(36);
heap.push(75);
print(heap);

var array = [150, 80, 40, 30, 10, 70, 110, 100, 20, 90, 60, 50, 120, 140, 130];
var h = new BinaryHeap(20, compare, array);
h.buildHeap();
print(h);


