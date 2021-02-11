/* A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished */

/* 
    A callback is a function passed as an argument to another function.
    Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
    A typical example is JavaScript setTimeout().
*/
setTimeout(myFunction, 3000);

function myFunction() {
    document.getElementById("demo").innerHTML = "bla bla ";
}