# Self review: Creating and importing components

1. True or False: In React, you can never move a component to a separate file.
    - True
    - False
    ```
    Answer: False
    Explanation: You can, and should, save all the components as separate files.
    ```

2. True or False: You can omit the `import` keyword when importing one component into another in React. 
    - True
    - False
    ```
    Answer: False
    Explanation: You should use the import keyword to import one component into another in React.
    ```

3. The code that follows is the first line of the `App.js` file. W​hat does this line do?
    ```js
    import Sidebar from "./Sidebar";
    ```
    - I​t imports a `Sidebar` component from the `Sidebar.js` file, which is located in the same folder as the `App.js` file.
    - I​t imports a `Sidebar` component from the `Sidebar` folder into the `App.js` file.
    - I​t imports a `Sidebar` component into the `Sidebar` folder, and then this entire folder is imported into the `App.js` file.
    ```
    Answer: I​t imports a Sidebar component from the Sidebar.js file, which is located in the same folder as the App.js file.
    Explanation: This line of code imports a Sidebar component from the Sidebar.js file in the same folder as the App.js file.
    ```