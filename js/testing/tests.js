test("Checking an entry marks it as complete", () => {
	equal(() => {
		/* check the check box of the first task element
		taskElements[0].getElementById("checkbox").click();

		return the property of the task object corresponding to that task element
		return tasks[0].completed; */
	}, true);
});

test("Toggling the filter hides completed tasks from the list", () => {
	equal(() => {
		/* toggle the completed filter
		document.getElementById("js-completedToggle").click();

		get all the currently displayed elements
		filteredElements = Array.from(document.getElementsByClassName("tasks"));

		check all of the displayed elements' corresponding task objects are marked incomplete
		return filtereElements.every(e => tasks[e.index].completed === false); */
	}, true);
});
