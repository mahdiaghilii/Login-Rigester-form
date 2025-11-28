const Mode = document.getElementById('MOOD')
const BODY = document.body

Mode.addEventListener('click' , function(e){
    console.log(e.target.innerText)
    if(e.target.innerText === 'LIGHT MODE'){
        BODY.classList.add('light')
        BODY.classList.remove('dark')
        e.target.innerText = 'DARK MODE'
    }else if(e.target.innerText === 'DARK MODE'){
        BODY.classList.add('dark')
        BODY.classList.remove('light')
        e.target.innerText ='LIGHT MODE'
    }
})

// creat dark and light mode
