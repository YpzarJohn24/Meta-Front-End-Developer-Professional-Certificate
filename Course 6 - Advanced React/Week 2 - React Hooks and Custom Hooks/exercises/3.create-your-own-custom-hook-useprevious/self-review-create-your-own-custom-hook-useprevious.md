# Self-review: Create your own custom hook, usePrevious

1. True or False: You code a custom hook when you want to avoid duplication.
    - True
    - False
    ```
    Answer: True
    Explanation: It is correct that you code a custom hook when you want to avoid duplication.
    ```

2. Let's imagine you code a custom hook, called for example `useNext`, on a separate file named `useNext.js`. What's the minimum requirement for the custom useNext hook to be a valid hook?
    - The custom hook should always return a value
    - The custom hook should use at least one built-in React hook
    - The custom hook should always receive a parameter
    ```
    Answer: The custom hook should use at least one built-in React hook
    Explanation: That's the minimum requirement for the custom hook to be valid
    ```

3. In the previous exercise, you were given a task to create your own custom hook, `usePrevious`. What was being returned from the `usePrevious` function declaration?
    - `ref.current`
    - `ref`
    - `current`
    ```
    Answer: ref.current
    Explanation: The value that needed to be returned from the usePrevious hook was the current property on the ref object.
    ```