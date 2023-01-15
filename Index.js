document.getElementById('q').style.visibility = "hidden ";
document.getElementById('u').style.visibility = "hidden ";
document.getElementById('gh').style.visibility = "hidden ";
document.getElementById('game').style.visibility = "hidden ";
function menu() {
  //alert("uncoming features");
  document.getElementById('q').style.visibility = "visible ";
document.getElementById('gh').style.visibility = "visible ";
  document.getElementById('l').style.visibility = "hidden ";
  document.getElementById('u').style.visibility = "visible ";

}
function ce() {
  document.getElementById('gh').style.visibility = "hidden ";
  document.getElementById('q').style.visibility = "hidden";
 document.getElementById('l').style.visibility = "visible" ;
  document.getElementById('u').style.visibility = "hidden";
  document.getElementById('game').style.visibility = "hidden ";
}
gsap.to(".box", {
  x: 200,
});
function game(){
  
}
function game(){  document.getElementById('game').style.visibility = "visible ";}