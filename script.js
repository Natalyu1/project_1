const username = prompt("Введите имя: ")
let count = 0

if (username) {
  document.getElementById('title').innerHTML = "Ваш список дел, " + username + ":"
} else {
  document.getElementById('title').innerHTML = "Список дел анонимного пользователя"
}

function addTask() {
  
  count = count + 1

  if ( count > 5) {
    document.getElementById("error").innerHTML = "Можно ввести до 5 дел"
    
    return
  }

  let myInput = document.getElementById("input")
  let value = myInput.value
  
  const myList = document.getElementById("list")
  myList.innerHTML += "<li>" + value + "</li>"
  input.value = ""

}

