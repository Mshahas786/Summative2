# Summative2
# JS Style guide
## Table of contents
## 1. Statement
## 2. Variable
## 3. Comments
## 4. Operators
## 5. Conditional-structure-if


### 1. Statement

*use correct spacing*

bad example
var x=y+2;

good example
var x = y + 2;

### 2. variable

*Use correct spacing, write descriptive keywords with camelCasing.*

bad example
var allmovies=y+2;

good example
var allMovies = y + 2;

### 3. Comments

*Write comments for code-block headings, to explain code and define last curly brackets*

good example
// ========================================================================= // Declaration of x variable // ============================================================================

var x = y + 2; // adds 2 to y

### 4. Operators

*Keep a space before and after any operator.*

bad example
var x=y+2;

good example
var x = y + 2;

### 5. Condition structure - if

*Use space after the keyword if. Use space after the parenthesis Use open curly braces at the end of first line. use close curly braces in a new line. keep the else keyword on the same line as the close curly braces of the previous set of brackets indent the code as given in the good example*

bad example
if(age>17) { alert('hi'); } else{alert('hello');}

good example
if (age > 17) { alert('hi'); } else { alert('hello'); }

### 6. Column limit: 80

*JavaScript code has a column limit of 80 characters. Except as noted below, any line that would exceed this limit must be line-wrapped*

bad example
document.getElementById("vechicleSearchBtn").addEventListener("click", () => { var i; for (i = 0; i < vehicles.length; i++) { if (days <= vehicles[i].maxDay && days >= vehicles[i].minDay && people <= vehicles[i].maxPeople && people >= vehicles[i].minPeople) {displayCards(i);}}});

good example
document.getElementById("vechicleSearchBtn").addEventListener("click", () => {
    var i;
    for (i = 0; i < vehicles.length; i++) {
      if (
        days <= vehicles[i].maxDay &&
        days >= vehicles[i].minDay &&
        people <= vehicles[i].maxPeople &&
        people >= vehicles[i].minPeople
      ) {
        displayCards(i);
      }
    } //for
  });

### 7. Semicolon
*The semicolon in JavaScript is used to separate statements,
You shouldn’t put a semicolon after a closing curly bracket }*

### 8. Array
*Include a trailing comma whenever there is a line break between the final element and the closing bracket.*

example 

var vehicles = [
  {
    id: 101,
    name: "Leaf",
    company: "Nissan",
    type: "car",
    trans: "Automatic",
    year: "2016",
    doors: 5,
    seats: 4,
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    cost: 129,
    fuel: 8.5,
    photo: "nissanLeaf.png",
  },

  {
    id: 102,
    name: "Swift",
    company: "Suzuki",
    type: "car",
    trans: "Automatic",
    year: "2017",
    doors: 5,
    seats: 4,
    minPeople: 1,
    maxPeople: 2,
    minDay: 1,
    maxDay: 10,
    cost: 129,
    fuel: 8.5,
    photo: "suzukiSwift.png",
  }
  ];

  ### 9. Object
*Include a trailing comma whenever there is a line break between the final property and the closing brace.*
