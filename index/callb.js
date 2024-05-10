// function loadscript(src,callback){
// var script=document.createElement('script')
// script.src=src;
// script.onload=function(){
// console.log("loaded script with src:"+src)
// callback();
// }
// document.body.appendChild(script);
// }
// function hello(){
// alert('hello');
// }
// loadscript("C:\Users\mk\Documents\imgnetflix",hello)//



function loadscript(src,script){
var script=document.createElement('script')
script.script=src;
script.onload=function(){
console.log("loaded script with src:"+src)
callback();
}
document.body.appendChild("script");

}
function hello(){
    alert('hello');
}
loadscript("C:\Users\mk\Pictures")