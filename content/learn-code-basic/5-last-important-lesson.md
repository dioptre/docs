---
title: "Last important lesson"
metaTitle: "Logic in programming"
metaDescription: "Introduction to logic"
---

## Introduction to IF...THEN...ELSE
*IF* you want to do things in programming you need to learn a little logic. Not much! But *IF* you are going to eat ice-cream you are going to want to open your mouth first.


Basic logic operators in javascript (IF):

- && and
- || or
- ! not
- == equals
- != not-equals
- ({}) Braces (do this first)

## A Short Example

```javascript
if ((youPickYouNose && youEatIt) || (!youBrushYourTeeth)) {
    alert("you'll get sick")
} else {
    alert("you'll stay healthy")
}
if (true == false) {
    alert('hi')
}if (true != false) {
    alert('hi')
}
```

### Try it out

Try changing the following false/true values below to see what happens.
```javascript react-live=true
function willIGetSick() {
  let youPickYourNose = false;
  let youEatIt = false;
  let youBrushYourTeeth = true;
  let outcome = ""; //this is an empty string (we call letters strings)
  if ((youPickYourNose && youEatIt) || (!youBrushYourTeeth)) {
      outcome = "you'll get sick";
  } else {
      outcome = "you'll stay healthy";
  }
  return <p style={{color:"navy", textDecoration:"underline", textAlign:"center"}}>{outcome}</p>
}
```

## A Real Example

Notice why the circle is only coming up in the bottom-right corner? It's the **IF**. Don't forget to click **play**.

<iframe src="https://editor.p5js.org/dioptre/sketches/09DIM3xvI" width="100%" height="768"></iframe>


