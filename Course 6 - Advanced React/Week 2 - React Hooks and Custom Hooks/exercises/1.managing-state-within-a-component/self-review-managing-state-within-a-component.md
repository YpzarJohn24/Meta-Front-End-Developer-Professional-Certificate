# Self-review: Managing state within a component

1. Is this a valid `useState` hook invocation and destructuring?
    ```jsx
    const [car, setCar] = useState({ color: 'blue', mileage: 0})
    ```
    - Yes
    - No
    - It would be valid, if it was spread over multiple lines.
    ```
    Answer: Yes
    Explanation: This code shows a valid call to the useState() hook. It's also correctly destructured to car and setCar.
    ```

2. True or False: You can clone a JS object using the . operator (the dot operator).
    - True
    - False
    ```
    Answer: False
    Explanation: The dot operator is not used to clone an object in JS.
    ```

3. Consider the following code:
    ```jsx
    const [person, setPerson] = useState({ name: 'John', age: 21})
    ```
    Imagine you're using a `setPerson()` state-updating function to update the value of the state variable named person. You only want to update the value of age, from 21 to 22. Choose the correct code snippet to do that.
    -   ```jsx
        setPerson(prev => ({ ...prev, age: 22 }));
        ```
    -   ```jsx
        setPerson(() => ({ age: 22 }));
        ```
    -   ```jsx
        setPerson(person.age = 22);
        ```
    ```
    Answer: setPerson(prev => ({ ...prev, age: 22 }));
    Explanation: This snippet clones the previous state object, and updates only the cloned object's age value.
    ```