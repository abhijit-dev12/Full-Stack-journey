# CSS Notes - Day 2

## What is a Selector?

A selector tells CSS which HTML element to style.

Example

```css
h1{
    color:red;
}
```

Here, `h1` is the selector.

---

## Universal Selector

Targets every element.

```css
*{
    margin:0;
}
```

---

## Element Selector

Targets all elements of the same type.

```css
p{
    color:blue;
}
```

---

## Class Selector

Starts with a dot (`.`).

```css
.heading{
    color:green;
}
```

Used for styling multiple elements.

---

## ID Selector

Starts with `#`.

```css
#logo{
    color:red;
}
```

Should be unique on a page.

---

## Group Selector

Style multiple elements together.

```css
h1,p{
    color:black;
}
```

---

## Descendant Selector

Targets elements inside another element.

```css
.container p{
    color:orange;
}
```

---

## Child Selector

Targets only direct children.

```css
.container > p{
    color:blue;
}
```