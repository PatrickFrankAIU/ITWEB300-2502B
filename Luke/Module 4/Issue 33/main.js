// Using jQuery, write code to:

//     Allow users to add new tasks to a task list by clicking the button
//     Each new task should be a div with class "task-item"
//     Each task should show the text "Task #" followed by its number
//     Each task should have a delete button that removes only that task
//     Tasks should alternate between two background colors

$(document).ready(function () {

    // starts the count that increases each click and is appended to the task div
    let count = 0;

    // starts a counter that increments when "add task" is clicked
    $("#add-task-btn").click(function () {
        count++;

        //creates div with class "task-item" and task# text
        let taskDiv = $("<div></div>").addClass("task-item");
        taskDiv.text("Task #" + count);

        // creates delete button
        let deleteButton = $("<button>").addClass("delete-button");
        deleteButton.text("Delete");

        // appends task to container
        $("#task-container").append(taskDiv);

        // appends deletebutton to task
        taskDiv.append(deleteButton);

        // changes background color based on if count is odd or even
        if (count % 2 === 0) {
            taskDiv.addClass("task-even");
        } else {
            taskDiv.addClass("task-odd");
        }

        // click handler to remove div
        $(".delete-button").click(function () {
            taskDiv.remove();
        });

    });



});