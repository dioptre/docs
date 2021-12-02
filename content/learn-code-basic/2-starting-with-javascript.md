---
title: "Starting with Javascript"
metaTitle: "Beginning javascript with p5.js"
metaDescription: "Our first real programs"
---

## p5.js

p5.js is a **Library** (a bunch of functions that someone else has written that makes it easy for us to write code). Millions of libraries exist in thousands of languages. Today we are just going to continue looking at this javascript one. You can find more about it later [here](https://p5js.org/examples/).

## A blank canvas

p5 is split up into two parts. A **setup** `routine` (function), where the program starts, and then a **draw** `function` that happens every millisecond or so. To start we are going to draw a black background. In p5 instead of a 0-10 measurement we are used to, it's natural for things to go from 0-255 (and in many other languages).

```javascript
//This sets up our environment 
// The two slashes are comments (//)
// comments are ignored by the programming language
function setup() {
  createCanvas(640, 480);
}

//This loops over and over again
function draw() {
  //background(255); //draw white
  background(0); //draw black
}
```

So white in the example above is 255 and black is 0. The white example has been **commented out**. This means it won't run.

Let's take a real look (**click the play button to run the example**):

<iframe src="https://editor.p5js.org/dioptre/sketches/mrgVDsOSU" width="100%" height="768"></iframe>


## Adding color

Take a look at this code and have a think of what might happen? 
> Hint colors are made of RGB (Red,Green,Blue) like tv/video displays. Imagine you're mixing paints together.

```javascript
function setup() {
  createCanvas(640, 480);
}

function draw() {
  c = color(255,0,0)
  background(c);
}
```

Copy and paste **over** the example above (you can only have one setup and one draw function), and see what happens. Remember the setup function runs once, and the draw function happens every few milliseconds. Try playing with the `255,0,0` and see what happens. 

> Hint: Don't forget to click **play** or **auto-refresh**.


