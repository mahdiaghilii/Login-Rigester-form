// creat dark and light mode

const Mode = document.getElementById('MOOD')
const BODY = document.body

Mode.addEventListener('click' , function(e){
    
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

let Username = document.getElementById('userName') //select input
let Password = document.getElementById('password') //select input
let submit = document.getElementById('submit') //select submit
let userArr = []
let userNameArr = []
let passwordArr = []



Username.addEventListener('blur' , function(e){                         //creat error for Duplicate username
    if(userNameArr.includes(e.target.value)){
        alert('this name is already taken,please choose another name')
    }
})

Password.addEventListener('blur' , function(e){

})

submit.addEventListener('click' , function(e){
    userNameArr.push(Username.value)
    passwordArr.push(Password.value)
    
    let userObj = {}                        
    userObj.name = Username.value
    userObj.password = Password.value
    userArr.push(userObj)
    console.log(userArr)
    
    let struserArr = JSON.stringify(userArr) //save in localstorage
    localStorage.setItem('DYKO' , struserArr) //save in localstorage
    console.log(userNameArr)

})





