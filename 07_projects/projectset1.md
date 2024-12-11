# Project releted to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-exff6mkj?file=index.html)

# Solution code
## Project 1

```javascript

console.log("Akash)

const buttons = document.querySelectorAll('.button')

const body = document.querySelector("body")

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = "grey"
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = "yellow"
        }
    })
})

```