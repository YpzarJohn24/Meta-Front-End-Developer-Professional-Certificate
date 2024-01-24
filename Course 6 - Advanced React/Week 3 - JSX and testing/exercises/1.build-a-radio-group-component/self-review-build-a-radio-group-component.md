# Self-review: Build a Radio Group Component

1. In the `RadioGroup` component, when cloning each `child` element (`RadioOption`), what’s the condition that determines the value of the new `checked` prop that gets merged into the existing props of each `RadioOption` component? Recall that the `RadioGroup` component has three props - `onChange`, `selected` and `children` - and that each `RadioOption` component receives two props - `value` and `children`.
    -   ```jsx
        React.cloneElement(child, {
            onChange,
            checked: child.props.selected,
        });
        ```
    -   ```jsx
        React.cloneElement(child, {
            onChange,
            checked: child.props.value === selected,
        });
        ```
    -   ```jsx
        React.cloneElement(child, {
            onChange,
            checked: child.checked === true,
        });
        ```
    ```
    Answer: React.cloneElement(child, {
                onChange,
                checked: child.props.value === selected,
            });
    Explanation: The condition checks if the particular value prop from that radio option matches the selected value. If so, the checked prop will be true, which only can happen for one radio button at a time.
    ```

2. Inside the `RadioOption` component, what should be the value of the `onChange` prop from the radio input element? Recall that the `RadioOption` component receives four props - `value`, `checked`, `onChange` and `children`.
    -   ```jsx
        <input type="radio" onChange={props.onChange} /> 
        ```
    -   ```jsx
        <input type="radio" onChange={e => onChange(e.target.value)} /> 
        ```
    -   ```jsx
        <input type="radio" onChange={() => onChange(props.value)} />
        ```
    ```
    Answer: <input type="radio" onChange={e => onChange(e.target.value)} /> 
    Explanation: That is the proper implementation to trigger a change in the current selection.
    ```

3. What are the arguments that the `React.Children.map` function receives?
    - The first argument is the `children` prop, and there is no second argument. 
    - The first argument is the `children` prop, and the second argument is a transformation function that returns a new React element. 
    - The first argument is the `children` prop, and the second argument is a predicate function that returns a boolean.
    ```
    Answer: The first argument is the children prop, and the second argument is a transformation function that returns a new React element. 
    Explanation: Those are the two arguments the function receives.
    ```