const inputValue = document.querySelector('input');
const list = document.querySelector('.list');


inputValue.addEventListener('keyup', e =>{
    e.preventDefault();
    if(e.key == "Enter" && inputValue != ''){
        addTodo(inputValue.value);
    } 
});


function addTodo(data){

    const li = document.createElement('li');
    const a = document.createElement('a');
    list.appendChild(li);
    li.appendChild(a);

    li.classList.add('item');
    a.innerText = data;
    li.innerText;

    inputValue.value = "";
}