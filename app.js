// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  // access the ol tag to insert list items
  var ol = document.getElementById('todo-list')

  // Loop through array to poplate DOM with each items titles
  for (let index = 0; index, arrayOfTodos.length; index++) {
    // create listItem
    var listItem = document.createElement("li");
    const elementTitle = arrayOfTodos[index].title
    //created text to go inside <li> text </li>
    var listItemText = document.createTextNode(elementTitle);

    // appended the text to the li
    listItem.appendChild(listItemText);
    // appeneded the listItem to the ol
    ol.appendChild(listItem)
  }
}