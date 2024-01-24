# Self-review: Writing more test scenarios

1. What’s the correct call to fire an `onChange` event on an input with react-testing-library’s `fireEvent` API?
    -   ```jsx
        fireEvent.change(input, { target: { value: 'myValue' } });
        ```
    -   ```jsx
        fireEvent.onChange(input, { target: { value: 'myValue' } }); 
        ```
    -   ```jsx
        fireEvent.change(input, { value: 'myValue' });
        ```
    ```
    Answer: fireEvent.change(input, { target: { value: 'myValue' } });
    ```

2. How would you fire a click event on a submit button with react-testing-library `fireEvent` API?
    -   ```jsx
        fireEvent.onClick(button, { target: { value: 'submit' } });
        ```
    -   ```jsx
        fireEvent.onClick(button);
        ```
    -   ```jsx
        fireEvent.click(button);
        ```
    ```
    Answer: fireEvent.click(button);
    ```

3. When locating an element by using one of the screen querying methods from react-testing-library, such as `screen.getByRole` or `screen.getByLabelText`, what would be the return value of the call if the element is not found?
    - An error will be thrown
    - `undefined` 
    - `null` 
    ```
    Answer: null
    ```
