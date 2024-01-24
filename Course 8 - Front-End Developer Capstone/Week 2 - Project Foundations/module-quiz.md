# Module quiz: Project Foundations

1. What is the advantage of using the `<nav>` tag over a `<div>` tag?

   - The `<nav>` tag is more semantically correct.
   - The `<nav>` tag is faster to render.
   - The `<nav>` tag has better browser support.
   - The `<nav>` tag has better styling options.

   ```
    Answer: The `<nav>` tag is more semantically correct.
    Explanation: The `<nav>` tag is a semantic HTML element that is specifically designed to represent a section of a page that contains navigation links. Using the `<nav>` tag helps to improve the semantics of your HTML and make your code more understandable to both humans and machines.
   ```

2. Which of the following are true about the role attribute in HTML? Select all that apply.

   - It describes the role of an element.
   - It is global, so can be used to describe any element on a web page.
   - It links the element to another element.
   - It sets the default value of an element.

   ```
    Answer: It describes the role of an element.
    It is global, so can be used to describe any element on a web page.
    Explanation: This is particularly important for screen readers, for example, if a button is given the role of button then it will be read as a button instead of link, which is the default behavior.
    Many attributes are specific to a type of element, but this attribute can be used on any element.
   ```

3. What is Open Graph protocol?

   - A way of sharing images with other clients on the web.
   - A secure protocol which enables clients to connect and share data.
   - A simple way to describe the content of a web page.
   - A way of sending JSON data across the web.

   ```
   Answer: A simple way to describe the content of a web page.
   Explanation:  Open Graph protocol was built by Meta and provides a single, simple technology for describing web page content.
   ```

4. Which of the following are valid values for the CSS display property? Select all that apply.

   - grid.
   - flex.
   - float.

   ```
   Answer: grid , flex.
   Explanation:  The grid value is a valid value of the CSS display property.
   The flex value is a valid value of the CSS display property.
   ```

5. You are designing a website for a local restaurant. You’re using `<div>` tags for subheadings and a `<ul>` tag following each one which provides information about the subheading. To keep the website design consistent and the code to a minimum, you decide to use a general sibling selector to apply styling to each `<ul>` that comes after a `<div>`. Which of the following is the correct CSS combination selector to achieve this?

   - div > ul
   - div ~ ul
   - ul > div
   - ul ~ div

   ```
   Answer: div ~ ul
   Explanation: Here we are noting that the parent is the <div> and the sibling is the <ul>. For the general sibling selector a ~ is always used.
   ```

6. When should you use the pseudo-class selectors?

   - You want to select elements based on their state.
   - You want to select elements that are wrapped by other elements.
   - You want to select elements that are wrapping other elements.

   ```
   Answer: You want to select elements based on their state.
   Explanation: Pseudo-class selectors allow you to select elements based on their state, such as hover, focus and active. These selectors are useful for styling elements when they are in a specific state or interacting with the user.
   ```

7. Which of the following relative units would be appropriate to use when the dimensions of the viewport (web page area that the user is viewing) are important? Select all that apply.

   - vw.
   - em.
   - %.
   - rem.
   - vh.

   ```
   Answer: vw , vh.
   Explanation: The unit of vw stands for viewport width and is equal to 1% of the width of the viewport. It is an appropriate unit of measure when the dimensions of the viewport are important.
   The unit of vh stands for viewport height and is equal to 1% of the height of the viewport. It is an appropriate unit of measure when the dimensions of the viewport are important.
   ```

8. True or False: HTML event attributes are lowercase; React event attributes are camelCased.

   - True.
   - False.

   ```
   Answer: True.
   Explanation: In HTML, event attributes are lowercase, such as onclick or onmouseover. In React, event attributes are camelCased, such as onClick or onMouseOver.
   ```

9. What is prop in a react component?

   - A property of a component's state.
   - A way to handle user input.
   - A way to pass data from a parent component to a child component.
   - A way to modify the component's state.

   ```
   Answer: True.
   Explanation: In React, props (short for properties) are a way to pass data from a parent component to a child component. A prop is a way for the parent component to communicate with and pass data to the child component, which can then use the data to render its content.
   ```

10. True or False: Event handlers are one way in React to update a component’s state. ?

    - True.
    - False.

    ```
    Answer: True.
    Explanation: Event handlers execute some code when an event happens. For example, let’s say you have a very simple web page with a plus button and a number. Clicking the plus button is the event which triggers some code to increment the number which is stored internally inside a component.
    ```
