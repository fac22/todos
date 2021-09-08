const taskInput = document.querySelector("#newList input");

const taskSubmit = document.querySelector("#push");

test("Submitting: new task adds it to the list", () => {
	const tasksBefore = document.querySelectorAll(".task");

	taskInput.value = "this is a test";

	taskSubmit.click();

	const tasksAfter = document.querySelectorAll(".task");

	equal(tasksAfter.length - tasksBefore.length, 1);
});

test("Checking an entry marks it as complete", () => {
	const newTask = document.querySelector(".task");
	newTask.click();
	equal(newTask.classList.value, "task completed");
});

//////////////////////////deleting items from the to do list creation
test("Deleting: entry removes it from the list", () => {
	const tasksBefore = document.querySelectorAll(".task");

	const newTask = document.querySelector(".task");

	newTask.querySelector(".delete").click();

	const tasksAfter = document.querySelectorAll(".task");

	equal(tasksBefore.length - tasksAfter.length, 1);
});

/////////////////////checking if the correct item has been added to the  list

// test("Toggling the filter hides completed tasks from the list", () => {
// 	equal(() => {
// 		/* toggle the completed filter
// 		document.getElementById("js-completedToggle").click();

// 		get all the currently displayed elements
// 		filteredElements = Array.from(document.getElementsByClassName("tasks"));

// 		check all of the displayed elements' corresponding task objects are marked incomplete
// 		return filtereElements.every(e => tasks[e.index].completed === false); */
// 	}, true);
// });
