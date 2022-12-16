
//**Random Password**

let pass = document.getElementById("click")
let btn = document.querySelector(".btn")

class Passwords {
  
  constructor() {
    console.log(`Generate Random Password:`)
  }
  
  password() {
    let character = `ABCDEFGHIJKLMNOPQRSTUVXWVZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"{}\|`
    let len = 8
    let randomChar = ""
    for (let index = 0; index < len; index++) {
      let rnum = Math.floor(Math.random() * character.length)
      randomChar += character.substring(rnum, rnum + 1);

      // console.log(randomChar)
    }

    btn.addEventListener("click", (() => {
      pass.innerHTML = `${randomChar}`
  console.log(randomChar)
    }))
  }
}
let getPass = new Passwords()
getPass.password()