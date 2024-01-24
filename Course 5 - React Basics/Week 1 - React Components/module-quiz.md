# Module quiz: React Components

1. Why is React using the concept of components? 
    - It improves the styling of your pages.
    - It helps accessibility readers for people who are visually impaired.
    - It allows the browser to render your pages faster.
    - It allows you to build more modular apps.
    ```
    Answer: It allows you to build more modular apps.
    Explanation: Components make React apps a lot more modular.
    ```

2. What is the absolute minimum code that a component must have to be able to show something on a screen when rendered? 
    - A named function declaration.
    - A named function declaration and a return statement with at least a single element with some text inside of it.
    - A named function declaration and some variables in the function’s body.
    - A named function declaration and an array of items inside of the function's body.
    ```
    Answer: A named function declaration and a return statement with at least a single element with some text inside of it.
    Explanation: This is the absolute minimum of code a component must have to end up being rendered in the browser.
    ```

3. What are the benefits of using props? 
    - Props allow children components to update the values of each prop independent from their parent component. 
    - Props allow parent components to pass data to children components. 
    - Props allow developers to write custom HTML tags. 
    ```
    Answer: Props allow parent components to pass data to children components. 
    Explanation: Props facilitate the passing of data from parents to children components. 
    ```

4. You are tasked with building a web layout using React. The layout should have a header, a footer, and three products showing various data in the main part of the page. Choose the preferred component structure. 
    - It should all fit into a single component named App component.
    - It should have a separate component for each link, paragraph, heading, etc. 
    - It should have the following components: `Header`, `Main`, `Product`, `Footer` (with the `Product` component being imported into `Main` and rendered three times).
    ```
    Answer: It should have the following components: Header, Main, Product, Footer (with the Product component being imported into Main and rendered three times).
    Explanation: Having such component structure would make all the building blocks of your React app at a correct amount of modularity. 
    ```

5. Which of the following keywords can you usually find in a React component? 
    - `modular`, `expression`, `prop`, `default` 
    - `function`, `props`, `export`, `import`, `contain`
    - `module`, `function`, `prop`, `exported`, `default` 
    - `function`, `props`, `return`, `export`, `default`
    ```
    Answer: function, props, return, export, default
    Explanation: These are all valid keywords, and they are commonly found in most React components. 
    ```

6. What is `create-react-app`?
    - It’s a command you can use in a component.
    - It’s a stand-alone application on the web.
    - It’s an npm package used to build a boilerplate React app.
    - It’s a command you run when you want to serve your app in the browser.
    ```
    Answer: It’s an npm package used to build a boilerplate React app.
    Explanation: The create-react-app is a npm package that you can use to build a boilerplate React app. 
    ```

7. Imagine you want to build a brand new React app, named `example`. Choose the correct command to build a starter React app to work off of. 
    - `npm init react-app example`
    - `npm initialize react-app example`
    - `node init react-app example`
    - `npm install react-app example`
    ```
    Answer: npm init react-app example
    Explanation: Using this command, you’ll build a brand-new boilerplate React app, named “example”.  
    ```

8. True or false? When you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.
    - True
    - False
    ```
    Answer: True
    Explanation: When you write arrow functions, for any number of parameters other than a single parameter, using parentheses around parameters is compulsory.
    ```

9. T​rue or false? You can use function calls in JSX.
    - T​rue
    - F​alse
    ```
    Answer: T​rue
    Explanation: You can use function calls in JSX.
    ```

10. T​rue or false? When an arrow function has a single parameter, you do not need to add parentheses around the item parameter (to the left of the arrow).
    - True
    - False
    ```
    Answer: True
    Explanation: When an arrow function has a single parameter, you do not need to add parentheses around the item parameter (to the left of the arrow).
    ```