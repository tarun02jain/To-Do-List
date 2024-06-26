﻿# To-Do-List

This is a simple and interactive To-Do List web application created by Tarun. The project allows users to add, delete, and filter tasks efficiently, and includes the ability to save tasks locally using the browser's Local Storage. The site is live [here](https://tarun02jain.github.io/To-Do-List/).

## Features

### Add Tasks
- Users can add new tasks using the input field and the submit button. Each task is added to a list displayed on the screen.

### Delete Tasks
- Each task has a delete button (trash icon) that allows users to remove the task from the list.

### Mark Tasks as Complete
- Tasks can be marked as complete by clicking the check button (check icon). Completed tasks will have a line-through decoration.

### Filter Tasks
- Users can filter tasks based on their completion status:
  - **All**: Shows all tasks.
  - **Completed**: Shows only completed tasks.
  - **Uncompleted**: Shows only uncompleted tasks.

### Save Tasks Locally
- Tasks are saved in the browser's Local Storage, ensuring that the tasks persist even after the page is reloaded. This feature allows users to maintain their to-do list across sessions.

## Project Structure

The project consists of three main files:

1. **index.html**: The main HTML file that structures the web page.
2. **style.css**: The CSS file that styles the web page.
3. **app.js**: The JavaScript file that contains the functionality of the web application.

### index.html

The HTML file provides the structure for the web application. Key elements include:
- A header with the title "Tarun's To-Do List".
- A form for inputting new tasks.
- A dropdown menu for filtering tasks.
- A container for displaying the task list.

### style.css

The CSS file styles the web application, including:
- A background gradient for the body.
- Styling for the header, form, and task list.
- Button styles for adding, completing, and deleting tasks.
- Animations for task removal and completion.

### app.js

The JavaScript file adds interactivity to the web application. Key functions include:
- **addTodo**: Adds a new task to the task list and saves it to Local Storage.
- **action**: Handles task completion and deletion, and updates Local Storage accordingly.
- **display**: Filters tasks based on their status.
- **saveLocalTodos**: Saves tasks to Local Storage.
- **removeLocalTodos**: Removes tasks from Local Storage.
- **getTodos**: Loads tasks from Local Storage when the page is loaded.


## Technologies Used

- HTML
- CSS
- JavaScript

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve this project.


Feel free to customize this README file as per your specific requirements.
