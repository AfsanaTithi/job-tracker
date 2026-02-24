# Job Application Tracker

This is a simple job tracking project made with:


---

## Answers to Questions (Beginner Level)

### 1) Difference between `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`

- `getElementById("myId")`
: Finds one element by id.

- `getElementsByClassName("myClass")`
: Finds elements by class name and returns many elements.

- `querySelector(".myClass")`
: Finds the first element that matches a CSS selector.

- `querySelectorAll(".myClass")`
: Finds all elements that match a CSS selector.


### 2) How to create and insert a new element in DOM?

Basic steps:

1. Create element with `document.createElement()`
2. Add text/class/attribute
3. Put it into page with `appendChild()`
Ex
var newDiv = document.createElement("div");
newDiv.innerText = "Hello";
newDiv.className = "box";
document.body.appendChild(newDiv);

### 3) What is Event Bubbling?

Event bubbling means when you click a child element, event goes upward to parent elements.
So event moves from inside to outside.

### 4) What is Event Delegation? Why useful?
Event delegation means:
Put one event listener on parent Handle child clicks using event.target

Why useful:
Less code
Better performance
Works for dynamic elements (new cards added later)

### 5) Difference between `preventDefault()` and `stopPropagation()`

- `preventDefault()`
: Stops browser default action.
Example: stop form submit reload.

- `stopPropagation()`
: Stops event bubbling to parent elements.
Example: button click should not trigger parent click.

