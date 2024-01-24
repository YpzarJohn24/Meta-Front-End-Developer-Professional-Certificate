# Final graded quiz: Advanced React

1. You are building a form using both Formik and Yup libraries, where one of the inputs is an email. Before the form gets submitted to the server, you would like to set up some client validation with Yup to make sure the field has an email that is valid, otherwise a message “Invalid email address” would be shown on the screen. The submit button will be disabled if no email is provided at all. If the email field is empty, the message “Required” will be shown on the screen. Given those requirements, how would you write the validation rule using the Yup library?
    - ```jsx
        Yup.email().string("Invalid email address").required("Required")
      ```
    - ```jsx
        Yup.email("Invalid email address").required("Required")
      ```
    - ```jsx
        Yup.string().email("Invalid email address").required("Required")
      ```
    ```
    Answer: Yup.string().email("Invalid email address").required("Required")
    Explanation: First Yup needs to know the type of value (string) and then chain the different validation rules with their associated error message to show.
    ```

2. You have the following React application where you have a `ToDo` component that has two text labels and an uncontrolled text input and the entry point App component that renders a list of two ToDos and a button to reverse the order of the ToDos. To avoid a React keys warning, a key is provided to each `ToDo` component, with the index as its value. Suppose that the next sequence of events happen in the application:

    1. You write “Wash the car” in the first `ToDo` input

    2. You write “Buy bumper stickers” in the second `ToDo` input

    3. You click the button to reverse the order. 
    
    What would happen on the screen after that?

    ```jsx
    const ToDo = props => (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
    );

    function App() {
        const [todos, setTodos] = useState([
            {
                id: 'todo1',
                createdAt: '18:00',
            }, 
            {
                id: 'todo2',
                createdAt: '20:30',
            }
        ]);

        const reverseOrder = () => {
            // Reverse is a mutative operation, so we need to create a new array first.
            setTodos([...todos].reverse());
        };

        return (
            <div>
                <button onClick={reverseOrder}>Reverse</button>
                {todos.map((todo, index) => (
                    <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
                ))}
            </div>
        );
    }
    ```

    -   `todo2 Buy bumper stickers 20:30`

        `todo1 Wash the car 18:00`

    -   `todo2 Wash the car 20:30`

        `todo1 Buy bumper stickers 18:00`

    -   `todo1 Buy bumper stickers 18:00`

        `todo2 Wash the car 20:30`
    ```
    Answer: todo2 Wash the car 20:30
            todo1 Buy bumper stickers 18:00
    Explanation: When reversing the order React understands they are still the same nodes with key=1 and key=2, so it will preserve their internal state (input value). Since the props are different though, it will just update the node with the new prop values.
    ```

3. True or false: There are at least two errors in the code below.
    ```jsx
    import{ createContext, useContext, useState} from"react";

    const ThemeContext = createContext(undefined);

    export const ThemeProvider= () => {
        const[theme, setTheme] = useState("light");

        return(
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme: () => setTheme(!theme),
                }}
            >
            </ThemeContext.Provider>
        );
    };
    ```
    - True
    - False
    ```
    Answer: True
    Explanation: There are two errors in this code. 
                 - First, the toggleTheme implementation is incorrect and should be: 
                   toggleTheme: () =>setTheme(theme === "light" ? "dark" : "light"). 
                 - Second, ThemeProvider should use the children prop and pass it as a direct child of ThemeContext.Provider.
    ```

4. True or False: The type of a React element can be a DOM node, such as, for example, an HTML button.
    - True
    - False
    ```
    Answer: True
    Explanation: The type can be a DOM node.
    ```

5. Assuming you have the following set of components, what would be logged into the console when clicking the Submit button that gets rendered on the screen?
    ```jsx
    const Button = ({ children, ...rest }) => (
        <button onClick={() => console.log("ButtonClick")} {...rest}>
            {children}
        </button>
    );

    const withClick = (Component) => {
        const handleClick = () => {
            console.log("WithClick");
        };

        return(props) => {
            return<Component {...props} onClick={handleClick} />;
        };
    };

    const MyButton = withClick(Button);

    export default function App() {
        return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
    }
    ```
    - `ButtonClick`
    - `WithClick`
    - `AppClick`
    ```
    Answer: WithClick
    Explanation: Due to the order of the spread operator in the different components, the withClick higher Order Component (HOC) takes precedence.
    ```

6. When writing a test for a React component using jest and react-testing-library, how would you assert that a function has been called with some specific arguments?
    - Using the `toHaveAttribute` matcher.
    - Using the `toHaveBeenCalledWith` matcher.
    - Using the `toHaveBeenCalled` matcher.
    ```
    Answer: Using the toHaveBeenCalledWith matcher.
    Explanation: This is the proper matcher to check the arguments of the function call.
    ```

7. True or false: The following piece of code is an example of the render props pattern.
    ```jsx
    <LoginUser renderUser={<p>Mark</p>} />
    ```
    - True
    - False
    ```
    Answer: False
    Explanation: The provided piece of code is not an example of the render props pattern.
    ```

8. You need the below code snippet to run only after the initial render. What updates (if any) do you need to make to the code?
    ```jsx
    React.useEffect(()=> {
        console.log('The value of the toggle variable is', toggle)
    })
    ```
    - Add an empty dependency array. 
    - You shouldn't make any updates. 
    - You should remove the toggle variable.
    ```
    Answer: Add an empty dependency array.
    Explanation: To run the effect only on the initial render, you need an empty dependency array.
    ```

9. True or false? In the following component, the `setRestaurantName` variable’s value will not be reset between re-renders of the App component.
    ```jsx
    import {useState} from "react";

    export default function App() {
        const [restaurantName, setRestaurantName] = useState("Lemon");

        function updateRestaurantName() {
            setRestaurantName("Little Lemon");
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
    - True
    - False
    ```
    Answer: True 
    Explanation: 
    ```

10. Is the following code snippet valid? Why?
    ```jsx
    if (data !== '') {
        useEffect(() => {
            setData('test data');
        });
    }
    ```
    - It's not valid, because it's breaking the rules of hooks. 
    - It's valid, because it's not breaking the rules of hooks. 
    - It's valid, because you can use the useEffect() call in an if statement.
    ```
    Answer: It's not valid, because it's breaking the rules of hooks. 
    Explanation: If you use a hook in a condition, you're breaking rules! Thus, the below code is invalid.
    ```

11. You are building a form using both Formik and Yup libraries, where one of the inputs is an email. Before the form gets submitted to the server, you would like to set up some client validation with Yup to make sure the field has an email that is valid, otherwise a message “Invalid email address” would be shown on the screen. This field is also required. Choose the correct validation code from the three code snippets.
    - ```jsx
        Yup.email().string("Invalid email address").required("Required")
      ```
    - ```jsx
        Yup.email("Invalid email address").required("Required")
      ```
    - ```jsx
        Yup.string().email("Invalid email address").required("Required")
      ```
    ```
    Answer: Yup.string().email("Invalid email address").required("Required")
    Explanation: First Yup needs to know the type of value (string) and then chain the different validation rules with their associated error message to show.
    ```

12. You have the following React application where you have a `ToDo` component that has 2 text labels and an uncontrolled text input and the entry point App component that renders a list of two ToDos and a button to reverse the order of the ToDos. To avoid a React keys warning, a key is provided to each `ToDo` component, with the index as its value. Suppose that the next sequence of events happen in the application:

    1. You write “Do laundry” in the first `ToDo`  input
    
    2. You write “Go shopping” in the second `ToDo` input
    
    3. You click the button to reverse the order

    What would happen on the screen after that?

    ```jsx
    const ToDo = props => (
        <tr>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt}</label>
            </td>
        </tr>
    );


    function App() {
        const [todos, setTodos] = useState([
            {
                id: 'todo1',
                createdAt: '18:00',
            }, 
            {
                id: 'todo2',
                createdAt: '20:30',
            }
        ]);

        const reverseOrder = () => {
            // Reverse is a mutative operation, so we need to create a new array first.
            setTodos([...todos].reverse());
        };

        return (
            <div>
                <button onClick={reverseOrder}>Reverse</button>
                {todos.map((todo, index) => (
                    <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
                ))}
            </div>
        );
    }
    ```
    -   `todo2 Do laundry 20:30`

        `todo1 Go shopping 18:00`

    -   `todo1 Go shopping 18:00`

        `todo2 Do laundry 20:30`

    -   `todo2 Go shopping 20:30`

        `todo1 Do laundry 18:00`
    ```
    Answer: todo2 Do laundry 20:30
            todo1 Go shopping 18:00
    Explanation: When reversing the order React understands they are still the same nodes with key=1 and key=2, so it will preserve their internal state (input value). Since the props are different though, it will just update the node with the new prop values.
    ```

13. Select all the statements that are true for React elements:
    - Each element object should have at least two properties: type and children
    - The type of an element can be a function corresponding to a React component, like a `SubmitButton`.
    - A tree of elements can mix and match both components and DOM elements as the type property.
    - The type of an element can be a DOM node, like a HTML button.
    ```
    Answer: The type of an element can be a function corresponding to a React component, like a SubmitButton.
            A tree of elements can mix and match both components and DOM elements as the type property.
            The type of an element can be a DOM node, like a HTML button.
    Explanation: The type can be a React component.
                 They can be mixed and matched.
                 The type can be a DOM node.
    ```

14. True or false: When the user clicks the Submit button, the "WithClick" string will never be output to the console.
    ```jsx
    const Button = ({ children, ...rest }) => (
        <button onClick={() => console.log("ButtonClick")} {...rest}>
            {children}
        </button>
    );

    const withClick = (Component) => {
        const handleClick = () => {
            console.log("WithClick");
        };

        return(props) => {
            return<Component {...props} onClick={handleClick} />;
        };
    };

    const MyButton = withClick(Button);

    export default function App() {
        return <MyButton onClick={() => console.log("AppClick")}>Submit</MyButton>;
    }
    ```
    - True
    - False
    ```
    Answer: False
    Explanation: It is false to claim that the WithClick string will never be output to the console. Actually, due to the order of the spread operator in the different components, the withClick Higher-order component (HOC) takes precedence, and is the thing to be console logged.
    ```

15. The below code is not valid, because:
    ```jsx
    if (data !== '') {
        useEffect(() => {
            setData('test data');
        });
    }
    ```
    - You're breaking the rules of hooks. 
    - You're using the if statement wrong. 
    - You're using the arrow function wrong. 
    - There's a typo in the arrow function. 
    ```
    Answer: You're breaking the rules of hooks. 
    Explanation: If you use a hook in a condition, you're breaking rules! Thus, the below code is invalid.
    ```

16. Consider the code below, and choose the correct sentence about this code.
    ```jsx
    import{ createContext, useContext, useState} from"react";

    const ThemeContext = createContext(undefined);

    export const ThemeProvider= () => {
        const[theme, setTheme] = useState("light");

        return(
            <ThemeContext.Provider
                value={{
                    theme,
                    toggleTheme: () => setTheme(!theme),
                }}
            >
            </ThemeContext.Provider>
        );
    };
    ```
    - This code has one or more errors in it, and thus needs to be fixed.
    - This code doesn’t have an error and can be ran as is, without errors.
    ```
    Answer: This code has one or more errors in it, and thus needs to be fixed.
    Explanation: There are two errors in this code. 
                 - First, the toggleTheme implementation is incorrect and should be: 
                    toggleTheme: () =>setTheme(theme === "light" ? "dark" : "light"). 
                 - Second, ThemeProvider should use the children prop and pass it as a direct child of ThemeContext.Provider.
    ```

17. True or False: A tree of elements cannot mix and match both components and DOM elements as the `type` property.
    - True
    - False
    ```
    Answer: False
    Explanation: It is false to claim that they cannot be mixed and matched. Actually, they can.
    ```

18. True or False: Using jest and react-testing-library, to assert that a function has been called with some specific arguments, you would need to use the `toHaveAttribute` matcher.
    - True
    - False
    ```
    Answer: False
    Explanation: The toHaveAttribute is not the proper matcher to check the arguments of the function call. Instead the toHaveBeenCalledWith should be used.
    ```

19. Among the following code examples, what are valid implementations of the render props pattern?
    -   ```jsx
        <MealProvider render={data => (
            <p>Ingredients: {data.ingredients}</p>
        )} />
        ```
    -   ```jsx
        <Row renderIcon={() => <Icon name=”add” />} />
        ```
    -   ```jsx
        <LoginUser renderUser={<p>Mark</p>} />
        ```
    ```
    Answer: Implementation 1:  
            <MealProvider render={data => (
                <p>Ingredients: {data.ingredients}</p>
            )} />
            Implementation 2:   
            <Row renderIcon={() => <Icon name=”add” />} />
    Explanation: The first implementation uses a render type prop that is a function that returns JSX.
                 The second implementation uses a render type prop that is a function that returns JSX. Even though the name is not exactly “render”, explicit variations are also valid.
    ```

20. What do you need to add to this code to make the `useEffect` run only once?
    ```jsx
    React.useEffect(()=> {
        console.log('The value of the person variable is', person)
    })
    ```
    - Move the `console.log` outside of the `useEffect` function 
    - Add an empty dependency array.
    - Move the `console.log` outside of the arrow function 
    ```
    Answer: Add an empty dependency array.
    Explanation: To run the effect once, you need an empty dependency array.
    ```

21. Is this valid code?
    ```jsx
    if (data !== '') {
        useEffect(() => {
            setData('test data');
        });
    }
    ```
    - No
    - Yes
    ```
    Answer: No
    Explanation: If you use a hook in a condition, you're breaking rules! Thus, the below code is invalid.
    ```

