# Module quiz: Data and state

1. In React, data flows in one way: from a parent component to a child component.
    - True
    - False
    ```
    Answer: True
    Explanation: The above statement is true. 
    ```

2. W​hy is one-way data flow important in React?
    - It ensures that the data is flowing from top to bottom in the component hierarchy.
    - It ensures that the data is flowing from bottom to top in the component hierarchy.
    ```
    Answer: It ensures that the data is flowing from top to bottom in the component hierarchy.
    Explanation: This ensures that the data is flowing from top to bottom in the component hierarchy.
    ```

3. True or false? State data is the data inside a component that a component can mutate.
    - True
    - False
    ```
    Answer: True
    Explanation: State data is data inside a component that a component, which that component controls and can mutate.
    ```

4. W​hat is prop drilling?
    - Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required
    - Prop drilling is a situation where you are passing data from a child, to a parent component, then to a grandparent component, and so on, until it reaches a more distant component further up the component tree, where this data is required.
    ```
    Answer: Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required
    Explanation: Prop drilling is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required
    ```

5. The distinction between stateful and stateless components is that the latter doesn't have its own state. 
    - True
    - False 
    ```
    Answer: True
    Explanation: This statement is true.
    ```

6. Choose the correct statement.
    - Remember that you should always change the values of props in children components; you should never work with them as they are. In other words, props are mutable.
    - Remember that you should never change the values of props in children components; you should only work with them as they are. In other words, props are immutable.
    ```
    Answer: Remember that you should never change the values of props in children components; you should only work with them as they are. In other words, props are immutable.
    Explanation: Props are immutable and thus you should not attempt to update them in children components.
    ```

7. Is this code valid?
    ```js
    function App() {
        const handler = () => console.log('fourth example')
        return ( 
            <div> 
                <button onClick = {handler} >
                Click Me!
                </button>
            </div>
        )
    }
    export default App
    ```
    - Yes
    - No
    ```
    Answer: Yes
    Explanation: This code is an example of a valid onClick event handler.  
    ```

8. Is this code valid? 
    ```js
    <button onClick={ () => console.log('clicked') }> 
        Click me
    </button>
    ```
    - Yes
    - No
    ```
    Answer: Yes
    Explanation: This code is an example of a valid onClick event handler.  
    ```

9. Select the correct statement: The useState hook...
    - .​.. lets you hook into React state and lifecycle features from a component.
    - ...i​s not  part of React; you must import it from a third-party package.
    - ... has a convention that if the state variable is named, for example, _counter_, the function to update this counter variable should be named _counterFunction_.
    - ... should never be called at the top level of a React component.
    ```
    Answer: .​.. lets you hook into React state and lifecycle features from a component.
    Explanation: 
    ```

10. The Context API allows you to:
    - Avoid having to pass state down through multiple levels of components.​
    - Avoid having to use the return statement in a child component.​
    - A​void having to keep your components modular.
    ```
    Answer: Avoid having to pass state down through multiple levels of components.​
    Explanation: Using Context API allows you to bypass having to pass state down through multiple levels of components.
    ```