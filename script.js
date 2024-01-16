let ToDoList = [
  {
    item: 'rggqe',
    duedate: '4/8/2021'
  },
  {
    item: 'gqerg',
    duedate: '14/7/2022'
  }
];
displayi();

function addToDo() {
  let inputElement = document.querySelector('#tdi');
  let dateElement = document.querySelector('#todod')
  let todoitem = inputElement.value;
  let tododate = dateElement.value;
  ToDoList.push({ item: todoitem, duedate: tododate });
  inputElement.value = '';
  dateElement.value = '';
  displayi();
}
function displayi() {
  let displaye = document.querySelector('.todo-container');
  let newHtml = '';
  displaye.innerText = ' ';
  for (let i = 0; i < ToDoList.length; i++) {
    let { item, duedate } = ToDoList[i];
    newHtml += `
   
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-dte" onclick="ToDoList.splice(${i}, 1); 
    displayi();">Delete</button>
   
    `;
    displaye.innerHTML = newHtml;
  }

}