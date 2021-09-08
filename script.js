document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newList input").value.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newList input").value}
                </span>
                <button class="delete">
                <img src="https://img.icons8.com/office/16/000000/delete-sign.png"/>
                
                </button>
            </div>
        `;

    const current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    const tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newList input").value = "";
  }
};
