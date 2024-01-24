# Self review: Dynamic events

1. In React, you are not allowed to code a separate function that should be run to handle a click event.
    - True 
    - False
    ```
    Answer: False
    Explanation: Passing the function name such as “clickHandler” to the onClick handler, and wrapping it in a JSX expression, then coding a clickHandler function declaration, is a common way of handling a click event in React.
    ```

2. Event-handling attributes in React are named almost the same as in HTML. Syntactically, the only difference is in the capitalization.
    - True 
    - False
    ```
    Answer: True
    Explanation: Syntactically, the only difference is that HTML attributes are all lowercased, while React attributes are camelCased.
    ```

3. W​hat's wrong with this code?
    ```js
    <button onClick={handleClick()}>
        Click me
    </button>
    ```
    - You cannot invoke an event-handling function from a JSX expression.
    - The event-handling attribute should be all lowercased.
    - T​his code should work.
    ```
    Answer: You cannot invoke an event-handling function from a JSX expression.
    Explanation: This code would not work. The code that would work would need to be as follows: onClick={handleClick}.
    ```