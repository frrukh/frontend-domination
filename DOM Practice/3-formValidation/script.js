var inps = document.querySelectorAll('input[type="text"]'); // it gives a node-list i.e. an array in which we can store only dom elements i.e. HTML elements.
var h3 = document.querySelector('h3'); 

document.querySelector('form')
.addEventListener('submit', function(details){
    details.preventDefault();
    console.log('submit')
    for(var i = 0 ; i < inps.length ; i++){
        if(inps[i].value.trim() === ''){ // .trim() is removing white spaces from start and end so you can't submit the form by just filling the inputs with spaces.
            console.log('if')
            h3.textContent = 'Some of the fields are empty!'
            h3.style.color = 'red'
            break;
        }else{
            console.log('else')
            h3.textContent = "";
            h3.style.color = 'black';
        }
    }
})