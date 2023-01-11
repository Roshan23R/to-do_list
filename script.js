const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

//converting the text back to object which was store in LS
const todos = JSON.parse(localStorage.getItem('todos'))

//adding task in todos 
if(todos){
    todos.forEach(todo => addTodo(todo))
}


form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    addTodo()
})

function addTodo(todo){
    // taking input value in todoText
    let todoText=input.value;

    //for one todo
    if(todo){
        todoText=todo.text;
    }

    //todoText is not null then created list
    if(todoText){
        //making list object
        const todoE1 = document.createElement('li');
        if(todo && todo.completed){
            todoE1.classList.add('completed')
        }

        todoE1.innerText = todoText

        //if we left click in list it toggle the completed option
        todoE1.addEventListener('click', ()=>
        {
            todoE1.classList.toggle('completed')
            updateLS()
        })

        //basically comes in action after right click
        todoE1.addEventListener('contextmenu', (e)=>{
            e.preventDefault()
            todoE1.remove()
            updateLS()
        })

        //todoUL update child
        todoUL.appendChild(todoE1)

        //make input value blank
        input.value='';
         updateLS()
    }

    function updateLS(){
        todosE1 = document.querySelectorAll('li')
        const todos=[]

        todosE1.forEach(todoE1 =>{
            todos.push({
                
                text: todoE1.innerText,
                completed: todoE1.classList.contains('completed')
            })
        })
    }
    //keeping the todos in form of text string in LS
    localStorage.setItem('todos', JSON.stringify(todos))
}