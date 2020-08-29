let arrayOfTodos = []
let filteredTodos = []

const clearTodos = () => {
  // resets array
 let count = document.querySelector('ol').childElementCount
  
 for (let index = 0; index < count; index++) {
    const element = document.getElementById(index)
    element.remove()
 }
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const populateTodos = () => {
    // extra: only display 20 to-dos at a time
    var shortArray = arrayOfTodos.slice(0, 20);
    attatchToPage(shortArray)
    }

const populateUserSelection = () => {
  // filter out userID of the number in the input
  const inputElement = document.getElementsByTagName('input')
  let inputValue = inputElement[0].value
  console.log('inputValue:', inputValue)

  // populate new Array
  filteredTodos = arrayOfTodos.filter(todo => todo.userId === parseInt(inputValue))
  // clear array
  clearTodos()
  populateFilteredTodos(filteredTodos)
}

const populateFilteredTodos = (filteredTodos) => {
  attatchToPage(filteredTodos)
}

const showCompleted = () => {
  let showCompletedTodos = arrayOfTodos.filter(todo => todo.completed)
  clearTodos()
  console.log(showCompletedTodos)
  attatchToPage(showCompletedTodos, 'complete')
}

const attatchToPage =(todosArray, showCompleted) => {
  // access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  // Loop through array to poplate DOM with each items titles
  for (let index = 0; index, arrayOfTodos.length; index++) {
    // create listItem
    var listItem = document.createElement("li");
    listItem.id = index
    // get array item title
    const title = todosArray[index].title
    //created text to go inside <li> text </li>
    var listItemText = document.createTextNode(title);
    // //display completed as red if incomplete
    // if (showCompleted){
    //   (listItem.style.color = "#8ed1ce")
    // }
    // else{
    // (listItem.style.color = "#f73e3e")
    // }
    // appended the text to the li
    listItem.appendChild(listItemText);
    // appeneded the listItem to the ol
    ol.appendChild(listItem)
  }
}