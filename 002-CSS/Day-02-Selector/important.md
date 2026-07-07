Interview Questions
1. What is a CSS Selector?
2. Difference between Class and ID?
Class	ID
Starts with .	Starts with #
Can be reused	Should be unique
Multiple elements	One element
3. Which selector has higher priority?

Answer:

Inline CSS

↓

ID

↓

Class

↓

Element
4. Why do we use classes?
5. Can multiple elements have the same ID?

❌ No

6. Can multiple elements have the same class?

✅ Yes

🏋️ Practice Exercises
Exercise 1

Create:

<h1>My Website</h1>

<p>Hello World</p>

<p>Learning CSS</p>

Style:

h1 → Blue
p → Green
Exercise 2

Create three cards:

<div class="card">

Style all cards using one class.

Exercise 3

Create:

<div class="container">

<p>Paragraph</p>

</div>

Use a descendant selector to style only the paragraph inside the container.

Exercise 4

Create:

<div class="box">

<h2>Heading</h2>

<p>Paragraph</p>

</div>

Use a child selector on the heading.

🎯 Mini Project

Create a Student Profile Card.

Include:

Student Name
Roll Number
Department
Skills

Requirements:

Use Class Selectors for styling cards.
Use ID Selector for the main title.
Use Element Selectors for headings and paragraphs.
Use Descendant Selector for the skills list.
🧪 Challenge

Without looking at the notes:

Create 3 profile cards.
Give them the same class.
Give the page one main heading using an ID.
Style everything using only selectors.
📚 Bonus (Important for Interviews)
Specificity (Selector Priority)

If multiple CSS rules target the same element, the browser decides which one wins.

Priority:

Inline Style
      ↓
ID Selector (#)
      ↓
Class Selector (.)
      ↓
Element Selector
      ↓
Universal Selector (*)

Example:

*{
    color:black;
}

p{
    color:blue;
}

.text{
    color:green;
}

#special{
    color:red;
}
<p id="special" class="text">
Hello
</p>

Homework (Real Portfolio Upgrade)

Go back to your Day 7 HTML Portfolio and:

Add classes to every section.
Add an ID to the main heading.
Style everything using external CSS only.
Avoid inline styles completely.