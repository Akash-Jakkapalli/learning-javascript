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

## Project 2 Solution code

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  
  if(height === '' || height <0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight ${weight}`
  }
  else{
    (weight/((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

})

```


## Project 3 Solution code


```javascript

// const clock = document.querySelector('#clock')
//or
const clock = document.getElementById('clock')

setInterval(function(){
  
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML= date.toLocaleTimeString()

},1000)

```