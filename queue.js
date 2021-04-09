function createQueue(){
    let elements = [];
let enqueue = function(element){
    return elements.push(element);
}
let dequeue = function(){
    return elements.shift() ;
}
let front = function(){
    return elements[0];
}
let printQueue = function(){
    let str = " ";
    for(let i = 0; i < elements.length; i++){
        str += elements[i];
    }
    return str;
}
let isEmpty = function(){
    if(elements.length === 0){
        return true;
    }
    return false;
}
return {enqueue,dequeue,front,printQueue,isEmpty};
}

let queue = createQueue();
console.log(queue.enqueue("a"));//a
console.log(queue.enqueue("b"));//b
console.log(queue.enqueue("c"));//c
console.log(queue.enqueue("d"));//d
console.log(queue.enqueue("e"));//e
console.log(queue.dequeue());//a
console.log(queue.dequeue());//b
console.log(queue.front());//c
console.log(queue.printQueue());//cde
console.log(queue.isEmpty());//false

