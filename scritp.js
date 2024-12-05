
const inputPassword = document.querySelector('#password')

const inputLength = document.querySelector('#password-length')


const uppercaseCheckEl = document.querySelector('#uppercase-check')
const numberCheckEl = document.querySelector('#number-check')
const simbolCheckEl = document.querySelector('#simbol-check')

const securityIndicatorBarEl = document.querySelector('#security-indicator-bar')



document.querySelector('#copy-1').addEventListener('click',copy)

let inputLengthvalue = 8


function generatePassword(){
  let chars = 'abcdefghjkmnpqrstuvwxyz'

 const uppercaseChar = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
 const numberChar = '123456789'
 const symbolChar = '?!@&*()[]'


 if(uppercaseCheckEl.checked){
    chars+= uppercaseChar

 }

 if(numberCheckEl.checked){
   chars+= numberChar

 }

 
 if(simbolCheckEl.checked){
   chars+= symbolChar

}




     let password = ''

    for(let i = 0; i < inputLengthvalue; i++){

         const randomNumber = Math.floor( Math.random()* chars.length)
       
password += chars.substring(randomNumber,randomNumber+1)
}

inputPassword.value=password

calculateQuality()
calculateFontSize()

}


function calculateQuality(){

  const percent = Math.round((inputLengthvalue / 64)*30 + (uppercaseCheckEl.checked ? 15:0) + (numberCheckEl.checked ? 20:0) + (simbolCheckEl.checked ? 35: 0) )
  securityIndicatorBarEl.style.width = `${percent}% `

 console.log(percent)

if(percent > 70){

  securityIndicatorBarEl.classList.add('safe')
  securityIndicatorBarEl.classList.remove('warning')
  securityIndicatorBarEl.classList.remove('critical')

} else if(percent > 50){
securityIndicatorBarEl.classList.add('warning')
securityIndicatorBarEl.classList.remove('critical')
securityIndicatorBarEl.classList.remove('safe')


}else{
securityIndicatorBarEl.classList.add('critical')
securityIndicatorBarEl.classList.remove('safe')
securityIndicatorBarEl.classList.remove('warning')

}

if(percent >= 100){

securityIndicatorBarEl.classList.add('completed')

}else {
  securityIndicatorBarEl.classList.remove('completed')
}
}


function calculateFontSize(){

  if (inputLengthvalue > 45){
     inputPassword.classList.add('font-xs')
     inputPassword.classList.remove('font-sm')
     inputPassword.classList.remove('font-md')


  }else if (inputLengthvalue > 30){
    inputPassword.classList.add('font-sm')
    inputPassword.classList.remove('font-xs')
    inputPassword.classList.remove('font-md')



  }else if(inputLengthvalue > 20){

    inputPassword.classList.add('font-md')
    inputPassword.classList.remove('font-xs')
    inputPassword.classList.remove('font-sm')




  }else {
    inputPassword.classList.remove ('font-md')
    inputPassword.classList.remove('font-xs')
    inputPassword.classList.remove('font-sa')




  }













}




uppercaseCheckEl.addEventListener(`click`,generatePassword)
numberCheckEl.addEventListener(`click`,generatePassword)
simbolCheckEl.addEventListener(`click`,generatePassword)






function copy(){
navigator.clipboard.writeText(inputPassword.value)
}



inputLength.addEventListener('input',function(){

inputLengthvalue = inputLength.value
generatePassword()
calculateQuality()
document.querySelector('#passwordlength-text').innerText = inputLengthvalue

})

generatePassword()
calculateQuality()