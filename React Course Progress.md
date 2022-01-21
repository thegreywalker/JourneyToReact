# ***React - The Complete Guide course Progress***

---

#***Note: The Progress here is being tracked from the Section 10***

| ***`SEC`*** | *`Lecture No.`* | *`Title of Lecture`* | *`Description`* |
| --- | --- | --- | --- |
| ***SEC 10*** |     |     |     |
| x   | [110](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599210#overview) | What are *`Side Effects`* & Introducing *`UseEffect Hook`* | This Lecture Gives and Introduction to what are *`Side Effects`* are ? and ways to deal with them using *`useEffect`* Hook |
| x   | [111](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599212#overview) | Using the *`UseEffect()`* Hook | The *`UseEffect()`* hook as mentioned is used to render few things decided it's Side Effects are mentioned in a place called *`Dependency Array`* in the Hook ... It Works Say, you wanna Check if any user Visiting Your Webpage is *`logged in`* or not, in that case, write the Code in the *`useEffect()`* Hook and then keep the Dependency Array Empty, it will signify every time the Page is loaded for the First Time it will check the Login Status |
| x   | [112](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599216#overview) | *`useEffect()`* Hook and it's Dependencies | This teaches about how to use the *`useEffect()`* Hook in general and what to add and what not to add in it's Dependencies, More on <mark>#useEffect-Dependencies</mark> |

 #*useEffect Dependencies*

- You learned, that you should add "everything" you use in the effect 
  function as a dependency - i.e. all state variables and functions you 
  use in there.
  
- That is correct, but there are a **few exceptions** you should be aware of:
  
  - You **DON'T need to add state updating functions** (as we did in the last lecture with `setFormIsValid`): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)
    
  - You also **DON'T need to add variables or functions** you might've **defined OUTSIDE of your components** (e.g. if you create a new helper function in a separate file): Such 
    functions or variables also are not created inside of a component 
    function and hence changing them won't affect your components 
    (components won't be re-evaluated if such variables or functions change 
    and vice-versa)
    

So long story short: You must add all "things" you use in your effect function **if those "things" could change because your component (or some parent component) re-rendered.** That's why variables or state defined in component functions, props or 
functions defined in component functions have to be added as 
dependencies!

Here's a made-up dummy example to further clarify the above-mentioned scenarios:

```
    import { useEffect, useState } from 'react';
     
    let myTimer;
     
    const MyComponent = (props) => {
      const [timerIsActive, setTimerIsActive] = useState(false);
     
      const { timerDuration } = props; // using destructuring to pull out specific props values
     
      useEffect(() => {
        if (!timerIsActive) {
          setTimerIsActive(true);
          myTimer = setTimeout(() => {
            setTimerIsActive(false);
          }, timerDuration);
        }
      }, [timerIsActive, timerDuration]);
    };
```

In this example:

- `timerIsActive` is **added as a dependency** because it's component state that may change when the component changes (e.g. because the state was updated)
  
- `timerDuration` is **added as a dependency** because it's a prop value of that component - so it may change if a 
  parent component changes that value (causing this MyComponent component 
  to re-render as well)
  
- `setTimerIsActive` is **NOT added as a dependency** because it's that **exception**: State
   updating functions could be added but don't have to be added since 
  React guarantees that the functions themselves never change
  
- `myTimer` is **NOT added as a dependency** because it's **not a component-internal variable** (i.e. not some state or a prop value) - it's defined outside of the component and changing it (no matter where) **wouldn't cause the component to be re-evaluated**
  
- `setTimeout` is **NOT added as a dependency** because it's **a built-in API** (built-into the browser) - it's independent from React and your components, it doesn't change