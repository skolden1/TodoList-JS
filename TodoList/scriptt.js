let knapp = document.getElementById('js-btn');

let itemList = document.getElementById('item-list')

let inputMSG = document.getElementById('todo-input');

let deleteBtn = document.getElementById('deleteBtn');

let changeBtn = document.getElementById('changeBtn');

let selectedItem = null;

let clearBtn = document.getElementById('clearBtn');

let doneBtn = document.getElementById('doneBtn');

let divs3 = document.getElementById('divs3');


clearBtn.addEventListener('click', function(){
  itemList.innerText = '';
  divs3.innerText = '';
});

doneBtn.addEventListener('click', function(){
  if (selectedItem) {
    let p = document.createElement('p');
    divs3.appendChild(p);
    p.innerText = `${selectedItem.innerText}, klart!`;
    

    selectedItem.classList.remove('selected');
    selectedItem = null;
  } else {
    alert('Välj en annan sak som är klart.');
  }
});

changeBtn.addEventListener('click', function(){
  
    if (selectedItem) {
      selectedItem.innerText = inputMSG.value;
    }
  
});

itemList.addEventListener('click', function (e){
  if (e.target.tagName === 'LI') {
    if (selectedItem) {
      selectedItem.classList.remove('selected');
    }

    selectedItem = e.target;
    selectedItem.classList.add('selected');
  }
});

deleteBtn.addEventListener('click', function(){
  if (selectedItem) {
    selectedItem.remove(); 
    selectedItem = null; 
  } else {
    alert('Välj ett element att ta bort!'); 
  }
});

knapp.addEventListener('click', function(){
  let li = document.createElement('li');
  let counter = itemList.childElementCount;
  counter++;

  if (inputMSG.value === ''){
    alert('Du kan inte adda en tom text till todo listan');
  } else {
    li.innerText = `${counter}. ${inputMSG.value} `;
    itemList.appendChild(li);
  }
  
});

inputMSG.addEventListener('keydown', function(e){
  if (e.key === 'Enter'){
    addTodo();
  }
  
});

function addTodo() {
  let li = document.createElement('li');
  let counter = itemList.childElementCount;
  counter++;

  if (inputMSG.value === ''){
    alert('Du kan inte adda en tom text till todo listan');
  } else {
    li.innerText = `${counter}. ${inputMSG.value} `;
    itemList.appendChild(li);
  }
}