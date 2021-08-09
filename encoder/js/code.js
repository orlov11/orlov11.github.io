const letters = [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', '.', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'щ',',', 'ж',
' ']

const code = ['1', '2', '3', '4', '5', '6','7', '8',' 9', '0', '<', 'Q', '{', ':', '+', '(', ')', 'P', '&', 'A', '>', '_' , '@', '?', '!', '|', '=', '*', '^', '$', '}', '#', 'I', 'O', 'l', 'v', 'c', 't', 'q', 'm', 'e','%', 'y', '"','№']



const resEn = document.querySelector('#encryption__res'),
      resDe = document.querySelector('#decryption__res'),
      btnEnc = document.querySelector('.encryption__btn'),
      btnDec = document.querySelector('.decryption__btn'),
      textEn = document.querySelector('.encryption__input'),
      textDec = document.querySelector('.decryption__input'),
      divEn = document.querySelector('.div__en'),
      divDs = document.querySelector('.div__ds'),
      rest = document.querySelectorAll('.rest'),
      rest1 = document.querySelector('#one'),
      rest2 = document.querySelector('#two')

function encryption(str){
    str=  str.toLowerCase()
    let arr2 = str.split('')
    
    let res = []
    
    arr2.forEach( i =>{
        res.push(code[letters.indexOf(i)])
    
    })
    res = res.join('')
    return res

}


function decryption(str){
    let decArr = str.split('')
    let res2 = []
    
    decArr.forEach( i =>{

        res2.push(letters[code.indexOf(i)])
    
    })

    res2 = res2.join('')
    return res2
    

}



function myWrap(val){

    if(val.length > 40){
        return '<div class="encryption__res">'+ val.substr(0,35) + '<br>'+ val.substr(35,50)  + '</div>';
    }
    else{
        return '<div class="encryption__res">'+ val +'</div>'
    }

}

function restInput(restBtn){
    restBtn.forEach((i,item)=>{

        i.addEventListener('click', ()=>{
            if(item == 0){
                textEn.value= ''
                i.style.display = 'none'
            }
            else if(item == 1){
                textDec.value= ''
                i.style.display = 'none'
            }
    
        })
    })
}

restInput(rest)


btnEnc.addEventListener('click', ()=>{

    divEn.innerHTML = myWrap(encryption(textEn.value))
  
})


btnDec.addEventListener('click', ()=>{

    divDs.innerHTML = myWrap(decryption(textDec.value))
})


textEn.addEventListener('input', ()=>{
    console.log(rest1.value.length)
    if (textEn.value.length  > 1){
        console.log('dos')
        rest1.style.display = 'block'
        }

    else if(textEn.value.length  == 0 ){
        rest1.style.display = 'none'
    }

})

textDec.addEventListener('input', ()=>{
    console.log(rest1.value.length)
    if (textDec.value.length  > 1){
        console.log('dos')
        rest2.style.display = 'block'
        }

    else if(textDec.value.length  == 0 ){
        rest2.style.display = 'none'
    }

})


