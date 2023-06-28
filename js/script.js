{
 const tasks = [
{
    content: "Wstać i zjeść śniadanie",
    done: false,
},
{ 
content: "Ucałować żonę",
done: false,
},
{ 
    content: "Zrobić obiad",
    done: false,
    },
 { 
    content: "Posprzątać dom",
         done: false,
      },
{ 
    content: "Wyprowadzić corgosa na spacer",
    done: false,
     },
 ];

 const addNewTask = (newTaskContent) => {
    tasks.push({
        content: newTaskContent, 
    });
    render();
 };

 const removeTask = (index) => {
    
    tasks.splice(index, 1);
    render();
 }

const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
}
const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener("click", () => {
        removeTask(index);
    });

});

const toggleDoneButtons = document.querySelectorAll(".js-done");

toggleDoneButtons.forEach((removeDoneButton, index) => {
    removeDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
    });

});
}

 const render = () => {
let htmlString = "";

for (const task of tasks) {
    htmlString += `
    <li 
    ${task.done ? " style=\"text-decoration: line-through\"" : ""} 
    >
    <button class="js-done">zrobione?</button>
    <button class="js-remove">usuń</button>
${task.content}
    </li>
    `;
}

document.querySelector(".js-tasks").innerHTML = htmlString;

bindEvents();

 };

 
const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
        return;
    }
addNewTask(newTaskContent);
  
}

    const  init = () => {
render (); 

const form = document.querySelector(".js-form");
form.addEventListener("submit", onFormSubmit);
    };
    
    init();
}