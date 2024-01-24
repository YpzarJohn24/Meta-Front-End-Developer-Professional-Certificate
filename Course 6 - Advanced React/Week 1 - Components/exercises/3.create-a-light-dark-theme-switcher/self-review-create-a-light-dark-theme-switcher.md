# Self-review: Create a light-dark theme switcher

1. When creating a Provider component, what should you do with the `children` prop that it receives?
    - Nothing, the `children` prop is not necessary and can be skipped during the rendering. 
    - You should clone the `children` inside the component to add the context value to it. 
    - You should wrap the JSX that it returns with a Context Provider component and then pass the `children` through. 
    ```
    Answer: You should wrap the JSX that it returns with a Context Provider component and then pass the children  through. 
    Explanation: The children should be passed as a direct child of the Context Provider element.
    ```

2. Assuming that the default theme for the application is "light", what should be the default value passed to the `createContext` call? Select all that apply.
    - undefined 
    - null
    - The string `"light"`
    ```
    Answer: undefined
            null
            The string "light"
    Explanation: the default value is not relevant and can be any value. It’s only useful for testing components in isolation or as a default value when a context consumer does not have a Provider further up in the tree.
    ```

3. One of the parts of the context injected into the application is a function called toggleTheme. Assuming that the theme is held in some local state as a string that can be either ‘light’ or ‘dark’. What should be the exact implementation of the toggleTheme function?
    -   ```jsx
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
        ```
    -   ```jsx
        toggleTheme: (theme) => setTheme(!theme)
        ```
    -   ```jsx
        toggleTheme: () => setTheme(theme === "light" ? "light" : "dark")
        ```
    ```
    Answer: toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    Explanation: that’s the right implementation.
    ```