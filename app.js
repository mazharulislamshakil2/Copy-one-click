const btn =document.getElementById('btn');
const input =document.getElementById('input');

btn.addEventListener('click' , function() {
   input.select();
   document.execCommand('copy');
   alert('copy done !!!')
})
