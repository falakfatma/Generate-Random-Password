
//**Random Password**

let password = document.getElementById("text")
let btn = document.querySelector(".btn")

class GeneratePassword {

  constructor() {
    this.character = `abcdefghijklmnopqrstuvwxyz`;
    this.symbol = `!@#$%^&*()"":?/><|{}\/~`;
    this.passLength = 3;
  }
  password() {
    let randomPass = "";
    for (let index = 0; index < this.passLength; index++) {
      let randomNumber = Math.floor(Math.random() * this.character.length)
      randomPass += this.character.slice(randomNumber, randomNumber - 1)
    }
    console.log(randomPass)
    return randomPass;
  }
}
let generatePassword = new GeneratePassword();

btn.addEventListener("click", (e) => {
  e.preventDefault()
  password.innerHTML = `${generatePassword.password()}`
})