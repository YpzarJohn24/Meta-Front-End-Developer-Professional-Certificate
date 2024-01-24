# Self review: Multiple components

1. True or False: In React, you need to import a component multiple times – as many times as you plan to render it from its parent’s return statement.
    - True 
    - False 
    ```
    Answer: False
    Explanation: You should import the component only once, and then you’re allowed to render it as many times as needed.
    ```

2. True or false: You can render more than one child component from the parent component.
    - True 
    - False 
    ```
    Answer: True
    Explanation: You can render as many of the same component, or as many different components as you like, from the parent component.
    ```

3. W​hat is wrong with this code?
    ```js
    function App() {
        return (
            <BlogCard />
            <BlogCard />
            <BlogCard />
        )
    }
    ```
    - T​here is no root element.
    - T​here is no JSX attribute used when rendering the BlogCard components.
    - T​here is no props object passed to the App component.
    ```
    Answer: T​here is no root element.
    Explanation: You must wrap all the returned BlogCard compoents in a wrapping element, such as a div.
    ```
