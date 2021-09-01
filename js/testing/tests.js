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

//////////////////////////deleting items from the to do list creation
test("Deleting: entry removes it from the list", () => {
  /* entry remove button clicked
  removeButton= document.querySelector('');
  removeButton.click();

  equal(, true);
  
  */
});

/////////////////////checking if the correct item has been added to the  list

test("Submitting: new task adds it to the list", () => {
  /*   getting the user input
  let addList = document.querySelector('');
  submitting the user input (submit button)

  let submitButton= document.querySelector('')

  The click() method simulates a mouse-click on an element.

  e.g document.getElementById("myCheck").click();
  submitButton.click().*/
});
