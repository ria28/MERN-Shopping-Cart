// DOM Document object model

// Single element
console.log(document.getElementById("my-form"))
// or querySelector
console.log(document.querySelector(".container")); // can be used to select anything not just  ID
console.log(document.querySelector("h1"));

// Multiple Elemsnt Selector
console.log(document.querySelectorAll('.items')); // can put ID class tag anything   , this gives NodeList  and array methods can be used here
console.log(document.getElementsByClassName('items')); // gives a HTMLcollection and array methods cannot be used 
console.log(document.getElementsByTagName('li'));

// for each on these items 
const items = document.querySelectorAll('.items');
// items.forEach( (item) => console.log(item))

// manipulating or changing DOM
const ul = document.querySelector('.items')
console.log(ul);
// ul.remove();
// ul.lastElementChild.remove();
ul.lastElementChild.textContent = 'last item updated'
ul.firstElementChild.textContent = 'first item updated'

ul.children[1].textContent = "second item updated"
ul.lastElementChild.innerHTML = "<h1>Again Updated to Show HTML changes</h1>"

// button style
const btn = document.querySelector('.btn');
btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
// });

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
// });

// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark')
// });


// ------------------------------------------------------------------------------
const form = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (name.value == "" || email.value == "") {
        msg.classList.add("error") // css file error class red color 
        msg.innerHTML = "<h2>Please fill all details</h2>"

        setTimeout(() => msg.remove(), 3000)
    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.append(document.createTextNode(`${name.value} : ${email.value}`))
        users.append(li);

        // after submit clear
        name.value = '';
        email.value = '';   
    }
}