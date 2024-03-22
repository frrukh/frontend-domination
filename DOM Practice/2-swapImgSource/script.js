var img1 = document.querySelector('.one');
var img2 = document.querySelector('.two');

document.querySelector('button')
.addEventListener('click', function(){
    src1 = img1.src
    src2 = img2.src
    img1.src = src2;
    img2.src = src1;
})

