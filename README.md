# Advice generator application - Solution

This is a solution to the [Advice generator app challenge on NewTech Github](https://github.com/Newtech-Academy/28feb_group/tree/Project-Advice-Generator-App).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

My challange was to create an app that generates a random advice for the user.

Users should be able to:

- view the optimal layout for the app depending on their device's screen size;
- see hover states for all interactive elements on the page;
- generate a new piece of advice by cliking on the dice icon.

### Screenshot

![Advice generator application](https://i.imgur.com/UQzRO6N.png)

<!-- ### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Semantic HTML5 markup;
- CSS custom properties;
- Flexbox;
- Mobile-first workflow;
- JavaScript.

### What I learned

Working on this project I learned about using the Fetch API for JavaScript.

```js
fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        adviceID.textContent = "Advice #" + data.slip.id;
        adviceQuote.textContent = data.slip.advice;
    });
```

### Useful resources

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - This helped me understand what is Fetch API.
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This is an amazing article which helped me finally understand using the Fetch API.
