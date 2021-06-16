const btn = document.querySelector('.repairs__show'),
      btnHidden = document.querySelector('.repairs__show--hidden'),
      block = document.querySelector('.repairs__wrapper--noswiper')

btn.addEventListener('click', showAllContent)
btnHidden.addEventListener('click', hideAllContent)

function showAllContent() {
    block.style.maxHeight = '370px'
    btn.style.display = 'none'
    btnHidden.style.display = 'block'
}

function hideAllContent() {
    block.style.maxHeight = '200px'
    btn.style.display = 'block'
    btnHidden.style.display = 'none'
}
