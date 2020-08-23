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

const clearTodos = () => {
  // resets local storage
localStorage.clear(); location.reload();
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
  // access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  // extra: only display 20 to-dos at a time
  var shortArray = arrayOfTodos.slice(0, 20);

  // Loop through array to poplate DOM with each items titles
  for (let index = 0; index, shortArray.length; index++) {
    // create listItem
    var listItem = document.createElement("li");
    // get array item title
    const elementTitle = shortArray[index].title
    //created text to go inside <li> text </li>
    var listItemText = document.createTextNode(elementTitle);
    //create button to mark it as done
    var addButton = document.createElement("button");
    //display completed as red/green
  var completedTask = shortArray[index].completed;
    if (completedTask){
      (listItem.style.color = "#8ed1ce")
   }
   else{
    (listItem.style.color = "#f73e3e")
   }
   //appended the button to li
   listItem.appendChild(addButton)
    // appended the text to the li
    listItem.appendChild(listItemText);
    // appeneded the listItem to the ol
    ol.appendChild(listItem)
  }
}

const populateUserSelection = () => {
  // clear array
  // can I somehow call my "clearTodos" function?
  // filter out userID of the number in the input
  const inputElement = document.getElementsByTagName('input')
  let inputValue = inputElement[0].value
  console.log('inputValue:', inputValue)

  // store the new Array
  let newArray = arrayOfTodos.filter(function(test) {
    return arrayOfTodos.id == inputValue;
  })

//     // access the ol tag to insert new list items
//     var ol = document.getElementById('todo-list')  
//     // Loop through array to poplate DOM with each items titles
//     for (let index = 0; index, arrayOfTodos.length; index++) {
//       // create listItem
//       var listItem = document.createElement("li");
//       // get array item title
//       const elementTitle = arrayOfTodos[index].title
//       //created text to go inside <li> text </li>
//       var listItemText = document.createTextNode(elementTitle);
//       //create button to mark it as done
//       var addButton = document.createElement("button");

//      //appended the button to li
//      listItem.appendChild(addButton)
//       // appended the text to the li
//       listItem.appendChild(listItemText);
//       // appeneded the listItem to the ol
//       ol.appendChild(listItem)
//     } 
}

const showCompleted = () => {
  // clear todos
  // const clear = localStorage.clear(); location.reload();
  //show completed
  // var completedTask = arrayOfTodos[index].completed;
  // if (completedTask)
  // var ol = document.getElementById('todo-list')
  // // Loop through array to poplate DOM with each items titles
  // for (let index = 0; index, arrayOfTodos.length; index++) {
  //   // create listItem
  //   var listItem = document.createElement("li");
  //   // get array item title
  //   const elementTitle = arrayOfTodos[index].title
  //   //created text to go inside <li> text </li>
  //   var listItemText = document.createTextNode(elementTitle);
  //   //display list of completed todos
  // var completedTask = arrayOfTodos[index].completed;
  //   if (completedTask){
  //      return result (listItem.style.list-styles: symbols(check))
  //  }

  //   // appended the text to the li
  //   listItem.appendChild(listItemText);
  //   // appeneded the listItem to the ol
  //   ol.appendChild(listItem)
  // }
}

const showIncomplete = () => {
  // clear todos
  const clear = localStorage.clear(); location.reload();
  //show incomplete

}