const ul = document.querySelector('#item-group');
const addBtn = document.querySelector('.add-btn') ;
  
  
addBtn.addEventListener('click', (e) => {
  e.preventDefault()

  let input = document.getElementById('display');
  const todo = input.value;

  if (todo == '') {
    alert('Enter a task.')
    return
  }

  
  const li = document.createElement('li');
  li.classList.add('list-group-item');

  const newText = document.createTextNode(todo);

  li.appendChild(newText);
  ul.appendChild(li);

  const delBtn = document.createElement('button');
  delBtn.classList.add('del-btn');

  const delText = document.createTextNode('X');
  delBtn.appendChild(delText);
  li.appendChild(delBtn)
  input.value = '';
});

ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    if (confirm ('Are You Sure?')) {
      let li = e.target.parentElement;
      ul.removeChild(li);
    } else {
      alert('Item not removed.')
    }
  }
});