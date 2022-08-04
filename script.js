var css = document.querySelector("h3"); /* THERE IS ONLY ONE h3 */
var color1 =document.querySelector(".color1"); /* SELECT CLASSES LIKE IN CSS . */
var color2 =document.querySelector(".color2");
var body = document.getElementById("body");

/*
console.log(css);
console.log(color1);
console.log(color2);
console.log(body);
*/
/* body.style.background = "red"; */

function gradient (){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background +";";
}
//COMMENT 2 LINES BELOW IF YOU WISH TO DELETE oninput ATTRIBUTE IN HTML. SAME THING
// color1.addEventListener("input", gradient);
// color2.addEventListener("input", gradient);


// THIS IS THE SAME CODE AS ABOVE BUT LONGER, NOT DRY (DO NOT REPEAT YOURSELF)
// color1.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right, " /* IF SPACE ADDED TO ( THEN DOESNT WORK */
//     + color1.value
//     + ", " 
//     + color2.value 
//     + ")"; 
    
//   }) */


// color2.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//     + ", " 
//     + color2.value 
//     + ")";
// })
