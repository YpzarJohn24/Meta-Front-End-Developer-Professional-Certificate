# Module quiz: React Hooks and Custom Hooks

1. How is array destructuring relevant to hooks in React?
    - It makes it possible to reassign state objects. 
    - It is a way to get individual items from an array of items, and save those individual items as separate components. 
    - It makes the Virtual DOM possible. 
    - It makes it possible to handle click events. 
    ```
    Answer: It is a way to get individual items from an array of items, and save those individual items as separate components. 
    Explanation: It is a way to get individual items from an array of items, and save those individual items as separate components.
    ```

2. Is the following paragraph correct?

    With array destructuring, you are free to give any variable name to the items that you destructure from an array. Contrary to that, when destructuring objects, you have to destructure a property of an object using that exact property's name as the name of the destructured variable.
    - Yes 
    - No 
    ```
    Answer: Yes 
    Explanation: The paragraph is correct.
    ```

3. The `useEffect` hook is a way to:
    - handle _visual effects_ (animations and transitions) in React.
    - handle a _side effect_. 
    - handle _one-way data flows_.
    ```
    Answer: handle a side effect. 
    Explanation: The name of the useEffect hook is closely related to the concept of an effect, or more precisely, of a side effect.
    ```

4. Which answer is correct about the following code snippet?
    ```jsx
    useEffect( () => {
        if (data !== '') {
            setData('test data')
        }
    })
    ```
    - This code is not breaking the rules of hooks 
    - This code is breaking the rules of hooks 
    - This code is ok, except the fact that you should replace the `if` statement with a ternary operator.
    ```
    Answer: This code is not breaking the rules of hooks
    Explanation: The code snippet is valid.
    ```

5. Choose an example of a side-effect with which you’d need to use a `useEffect` hook:
    - Render some prop values on the screen. 
    - Update the value of the state variable in a child component. 
    - Run a Fetch API call in React. 
    ```
    Answer: Run a Fetch API call in React. 
    Explanation: The call to the Fetch API is a side-effect, and you should use the useEffect hook to handle it.
    ```

6. Complete the sentence:

    The `useState` hook starts with an initial state, but...
    - the `userReducer` hook must be used when the initial state is an object. 
    - the `useReducer` hook gets a reducer function in addition to the initial state. 
    - the `useReducer` hook cannot be used to track the state at all. 
    ```
    Answer: the useReducer hook gets a reducer function in addition to the initial state. 
    Explanation: The useState hook starts with an initial state, but the useReducer hook gets a reducer function in addition to the initial state.
    ```

7. True or false: `useRef` is a custom hook in React.
    - Yes
    - No 
    ```
    Answer: No
    Explanation: The useRef hook is a built-in hook, just like some other hooks are, such as the useState or useReducer.
    ```

8. JavaScript is a single-threaded language, meaning...
    - ...you can use it with React only when this single thread is passed to the `useState` variable. 
    - ...you can use it with React only when this single thread is used with the `useEffect` hook. 
    - ...it can only do a single thing at any given time. 
    ```
    Answer: ..it can only do a single thing at any given time.
    Explanation: This is a true statement.
    ```

9. Which statement is correct about the following code snippet:
    ```jsx
    import { useEffect } from "react";

    function useConsoleLog(varName) {
        useEffect(() => {
            console.log(varName);
        });
    }

    export default useConsoleLog;
    ```
    Choose the correct statement below.
    - This code is an example of an implicit state-updating function. 
    - This is an example of a custom hook. 
    - This code is an example of an explicit state-updating function.
    ```
    Answer: This is an example of a custom hook.
    Explanation: This is an example of a custom hook.
    ```

10. Find the error in this code:
    ```jsx
    import {useState} from "react";

    export default function App() {
        const [restaurantName, setRestaurantName] = useState("Lemon");

        function updateRestaurantName() {
            useRestaurantName("Little Lemon");
        };

        return (
            <div>
                <h1>{restaurantName}</h1>
                <button onClick={updateRestaurantName}>
                    Update restaurant name
                </button>
            </div>
        );
    };
    ```
    - The code inside the `updateRestaurantName()` function definition should not invoke `useRestaurantName("Little Lemon")` 
    - The state-setting function's variable name in the array destructuring should not be `setRestaurantName`. 
    - The `onClick` event should not be this: `onClick={updateRestaurantName}`
    ```
    Answer: The code inside the updateRestaurantName() function definition should not invoke useRestaurantName("Little Lemon") 
    Explanation: The code inside the updateRestaurantName() function should invoke setRestauranName("Little Lemon").
    ```