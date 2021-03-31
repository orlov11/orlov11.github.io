const sp = document.querySelectorAll('.hint'),
      Name = document.querySelectorAll('.account__radio span');


function hintName(i = 0){
        console.log(Name[i].textContent);
};


sp.forEach( (item,i) =>{
    item.addEventListener('click', ()=>{
        const el = Name[i].textContent
        console.log(`подсказка для ${el}`);
    });  
});

