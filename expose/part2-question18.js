var intervalID = setInterval(newfunc,1000);
function newfunc(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}