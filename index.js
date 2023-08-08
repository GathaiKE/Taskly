let input=document.getElementById('new-task')
let list=document.getElementsByClassName('task-list')[0]
let submitBtn = document.querySelector('#submit-btn')

const action = 'Add Task' || 'Update Task'

let tasks=[{description:"Hello world",complete:false}]

function addTask(){

    let newTask=input.value.trim()
    console.log(newTask);

    if(newTask !== ''){
        tasks.push({description:newTask,complete:false})
        input.value=" "
    }
    

    showTasks()
}

let showTasks=()=>{

    list.innerHTML=""

    for(let task of tasks){

        let listItem=`
                <div class="task">
                    <input type="checkbox" onclick="completeTask('${task.description}')" ${task.complete?'checked':''} id="new-task" style="width:15px;height:15px;">
                    <div class="subtask">
                        <li>${task.description}</li>
                        <span id="buttons">
                            <button id="delete-btn" onClick="deleteTask('${task}')">Delete</button>
                            <button id="edit-btn" onClick="triggerUpdate('${task.description}')">Edit</button>
                        </span>
                    </div>
                </div>
        `

        list.innerHTML+=listItem
    }
}

const deleteTask=(task)=>{
    let index=task.indexOf(task)
    tasks.splice(index,1)
    showTasks()
}

const completeTask=(taskDescription)=>{

    let task=tasks.find(task=>task.description===taskDescription)
    if(task){
        task.complete=!task.complete

        let htmlElement=document.querySelector(`[data-description="${task.description}"]`)
        if(htmlElement){
            if(taskDescription){
                htmlElement.classList.add('complete')
                console.log('added');
            } else{
                htmlElement.classList.remove('compete')
                console.log('removed');
            }
        }
    }
    showTasks()
}

const triggerUpdate=(selectedTask)=>{
    let task=(tasks.filter(t=>t.description===selectedTask))
    input.value=(task[0].description)
    submitBtn.textContent="Update Task"
    submitBtn.addEventListener('click',()=>{
        submitBtn.textContent==="Update Task"?updateTask(task):addTask()
    })
}

let updateTask=(taskForUpdate)=>{
    let updatedTask=input.value.trim()
    updatedTask !== ''?taskForUpdate=updatedTask:''
    showTasks()
}

submitBtn.addEventListener('click',()=>{
    submitBtn.textContent==="Update Task"?updateTask():addTask()
})

showTasks()