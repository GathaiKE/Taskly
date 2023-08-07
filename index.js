let input=document.getElementById('new-task')
let list=document.getElementsByClassName('task-list')[0]

let tasks=[{description:"Hello world",complete:false}]

function addTask(){

    let newTask=input.value
    console.log(newTask);

    tasks.push({description:newTask,complete:false})
    input.value=" "

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
                            <button id="edit-btn" onClick="updateTask()">Edit</button>
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
        console.log(task.complete);
        task.classList.add('complete')
    }
    showTasks()
}




showTasks()