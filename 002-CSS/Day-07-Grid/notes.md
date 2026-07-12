# CSS Notes - Day 7

## CSS Grid

Grid is a two-dimensional layout system.

Used for rows and columns.

---

## display:grid

Turns an element into a grid container.

```css
display:grid;
```

---

## grid-template-columns

Defines columns.

```css
grid-template-columns:1fr 1fr 1fr;
```

---

## repeat()

Instead of

```css
1fr 1fr 1fr
```

use

```css
repeat(3,1fr)
```

Cleaner.

---

## fr Unit

fr means

Fraction

Example

```css
grid-template-columns:2fr 1fr;
```

The first column gets twice the width.

---

## gap

Adds spacing.

```css
gap:20px;
```

---

## grid-column

Makes an item span columns.

```css
grid-column:1 / 3;
```

---

## grid-row

Makes an item span rows.

```css
grid-row:1 / 3;
```