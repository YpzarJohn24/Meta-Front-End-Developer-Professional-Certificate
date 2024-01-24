# Self review: Passing props

1. True or False: In React, props is an object.
    - True 
    - False 
    ```
    Answer: True
    Explanation: It is correct that props is an object in React.
    ```

2. True or False: You can pass a prop to a component by adding an attribute to the component being rendered, with the attribute’s value becoming the value of the passed-in prop.
    - True 
    - False
    ```
    Answer: True
    Explanation: This statement is correct.
    ```

3. W​hat is the error in the code below?
    ```js
    function Greeting() {
        return <h1>Hello, {props.name}</h1>
    }
    export default Greeting
    ```
    - The Greeting function should receive a `props` parameter.
    - Y​ou need to add extra spacing after the function's name.
    - Y​ou should always add a pair of parentheses after the `return` keyword.
    ```
    Answer: The Greeting function should receive a props parameter.
    Explanation: The Greeting function should receive a props parameter.
    ```