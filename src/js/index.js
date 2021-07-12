import '../sass/style.sass'



function content(btnShow, btnHide, Content){

const btn = document.querySelector(btnShow),
      btnHidden = document.querySelector(btnHide),
      block = document.querySelector(Content)


    function showAllContent() {
        block.classList.add('maxHight')
        btn.classList.add('none')
        btnHidden.classList.add('block')
    }   


    function hideAllContent() {
        block.classList.remove('maxHight')
        btn.classList.remove('none')
        btnHidden.classList.remove('block')
        
}

    btn.addEventListener('click', ()=>{
        showAllContent()
    })

    btnHidden.addEventListener('click', ()=>{
        hideAllContent()
    })
}


    

        




function popUpMenu(btnOpen, btnClosed, burgerHide, navHide, mainHide, footerHide, displayShow, displayHide){


    
    const btn = document.querySelector(btnOpen),
    burger = document.querySelector(burgerHide),
    nav = document.querySelector(navHide),
    main = document.querySelector(mainHide),
    footer = document.querySelector(footerHide),
    close = document.querySelector(btnClosed)

    
    
    btn.addEventListener('click', ()=>{
        burger.classList.remove(displayHide)
        burger.classList.add(displayShow)
        nav.classList.add(displayHide)
        main.style.display = 'none'
        footer.style.display = 'none'

        
    })


    
    
    close.addEventListener('click', ()=>{
        burger.classList.remove(displayShow)
        nav.classList.remove(displayHide)
        // menu.classList.remove(displayHide)
        main.style.display = 'block'
        footer.style.display = 'block'
    })
}




function popUpOther(btnOpen, btnClosed, burgerHide, navHide, mainHide, footerHide, displayShow, displayHide, burg, allWrapper, black,closeBlock){
    
    const btn = document.querySelector(btnOpen),
    burger = document.querySelector(burgerHide),
    nav = document.querySelector(navHide),
    main = document.querySelector(mainHide),
    footer = document.querySelector(footerHide),
    close = document.querySelector(btnClosed),
    menu = document.querySelector(burg),
    wrap = document.querySelector(allWrapper)
    
    
    btn.addEventListener('click', ()=>{
        if(window.innerWidth > 1365){
            console.log('if')
            burger.classList.add(displayShow)
            nav.classList.add(displayHide)
            main.style.display = 'none'
            footer.style.display = 'none'
            menu.classList.add(displayHide)     
            wrap.classList.add(black)
        } 
        else if(window.innerWidth < 1365){
            console.log('else')
            burger.classList.add(displayShow)
            nav.classList.add(displayHide)
            menu.classList.add(displayHide)
            main.style.display = 'none'
            footer.style.display = 'none'    
            wrap.classList.add(black)
        }
        
        
    })
    
    
    close.addEventListener('click', ()=>{
        if(window.innerWidth > 1365){
            burger.classList.remove(displayShow)
            nav.classList.remove(displayHide)
            main.style.display = 'block'
            footer.style.display = 'block'
            menu.classList.remove(displayHide)
            wrap.classList.remove(black)

        } else if(window.innerWidth < 1365){
            console.log('closed else')
            burger.classList.remove(displayShow)
            nav.classList.remove(displayHide)
            main.style.display = 'block'
            footer.style.display = 'block'
            wrap.classList.remove(black)
            
        }
        menu.classList.remove(displayShow)
        // menu.classList.remove(displayHide)
    })

    burger.addEventListener('click', (e)=>{
        if(e.target == document.querySelector(closeBlock)){
            if(window.innerWidth > 1365){
                burger.classList.remove(displayShow)
                nav.classList.remove(displayHide)
                main.style.display = 'block'
                footer.style.display = 'block'
                menu.classList.remove(displayHide)
                wrap.classList.remove(black)
    
            } else if(window.innerWidth < 1365){
                burger.classList.remove(displayShow)
                nav.classList.remove(displayHide)
                main.style.display = 'block'
                footer.style.display = 'block'
                wrap.classList.remove(black)
                
            }
            menu.classList.remove(displayShow)
    
        } else {
            
        }




    })
}




content('.show','.hide','.repairs__wrapper--noswiper')
content('.showw','.hidee','.blockk')

popUpMenu('.btn-hamburger','.menu-min__close', '.burger', '.menu--width_320', 'main', 'footer', 'block', 'none')



popUpOther('.call__open','.call__closed', '.call__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.call__block')
popUpOther('#call__open','.call__closed', '.call__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.call__block')


popUpOther('.feedback__open','.feedback__closed', '.feedback__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.feedback__block')
popUpOther('#feedback__open','.feedback__closed', '.feedback__block', '.menu--width_320', 'main', 'footer', 'flex', 'none', '.burger', '.wrapper__all','block','.feedback__block')


