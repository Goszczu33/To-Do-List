{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };
  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".delate__toggleButton");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".tasks__toggleButton");

    toggleDoneButtons.forEach((removeDoneButton, index) => {
      removeDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
    <li class="tasks__item js-task"
    >
    <button class="tasks__toggleButton">
    ${task.done ? "✓ " : ""} 
    </button>
    <span class="js-taskContent tasks__content
    ${task.done ? " tasks__ContentDone" : ""}">
    ${task.content}
    </span>
    <button class="delate__toggleButton"> ❌ </button>

    </li>
    `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskInput = document.querySelector(".js-newTask");
    const newTaskContent = newTaskInput.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskInput.value = "";
    }
    newTaskInput.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
