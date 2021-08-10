const content = document.querySelector('.nav'),
      btn = document.querySelector('.burger'),
      btnClose = document.querySelector('.burger__active')


btn.addEventListener('click', ()=>{
    content.classList.toggle('block')
    btn.classList.toggle('burger__active')

})

