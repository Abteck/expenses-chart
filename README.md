# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![desktop design](./expenses-chart-dsk.png)
![mobile design](./expenses-chart-mobile.png)

### Links

- Live Site URL: [live site](https://expenses-chart-gilt.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- TailwindCSS
- Vanilla JavaScript

### What I learned

I learnt how to fetch json data using the fetch method and also convert the json file using parse method.
below is a code snippet of how to fetch data.json and covert the data to an object

```js
fetch("/data.json") // fetch the data from the location
  .then((response) => response.json()) // convert it to an object
  .then((data) => console.log(data)); // log it and use the data
```

### Continued development

moving on, I want to learn and practice alot on promises, try and catch etc

## Author

- Frontend Mentor - [@abteck](https://www.frontendmentor.io/profile/abteck)
- Twitter - [@abteck2](https://www.twitter.com/abteck2)
