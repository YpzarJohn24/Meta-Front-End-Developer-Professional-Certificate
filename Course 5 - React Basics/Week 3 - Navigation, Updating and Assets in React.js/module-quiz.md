# Module quiz: navigation, updating and assets in React.js

1. True or false? In React, you can use a ternary operator in a component's return statement in React.
    - True
    - False
    ```
    Answer: True
    Explanation: In React, you can use a ternary operator in a component's return statement in React.
    ```

2. React Router is...
    - A built-in part of React.
    - A built-in part of React-DOM.
    - A stand-alone package that you can add to a React app.
    ```
    Answer: A stand-alone package that you can add to a React app.
    Explanation: React Router is a stand-alone package that you can add to a React app.
    ```

3. React Router has a `<Link>` element.
    - True
    - False
    ```
    Answer: True
    Explanation: React Router has a <Link> element.
    ```

4. Please choose the valid command to install react-player.
    - ```
      npm install react-player
      ```
    - ```
      npm-install react-player  
      ```
    - ```
      npm-install-react-player
      ```
    ```
    Answer: npm install react-player
    Explanation: This is the command to use.
    ```

5. True or false? webpack is a module bundler.
    - True
    - False
    ```
    Answer: True
    Explanation: Webpack is a module bundler.
    ```

6. What will be the output of the code below?
    ```jsx
    let name;

    if (Math.random() > 0.5) {
        name = "Mike"
    } else {
        name = "Susan"
    }
    ```
    - It will be sometimes `Mike`, and sometimes `Susan`, randomly
    - It will always be `Mike`
    - It will be `0.5`
    - It will always be `Susan`
    ```
    Answer: It will be sometimes Mike, and sometimes Susan, randomly
    Explanation: The reason for this output is the if condition’s code: Math.random() > 0.5, which introduces randomness.
    ```

7. Is the following component syntactically correct?
    ```jsx
    import car from "./assets/images/car.jpg";

    function CarImage() {
        return ( 
            <img 
                height={200}
                src={car}
                alt="Car image" 
            />
        );
    };
    export default CarImage;
    ```
    - Yes
    - No
    ```
    Answer: Yes
    Explanation: This code is syntactically correct.
    ```

8. What is an asset?
    - Images, stylesheets, fonts
    - Components
    - Images, video, and components
    ```
    Answer: Images, stylesheets, fonts
    Explanation: Images, stylesheets, and fonts are all examples of assets in a React app.
    ```

9. What is the syntax used to add a new dev dependency to a React app? Select all that apply. 
    - ```
      npm init some-package-name
      ```
    - ```
      npm install –save-dev some-package-name
      ```
    - ```
      npm i –save-dev some-package-name
      ```
    - ```
      node init some-package-name
      ```
    ```
    Answer: npm install –save-dev some-package-name
            npm i –save-dev some-package-name
    Explanation: Using npm install –save-dev some-package-name, you’ll add the some-package-name npm package as a dev dependency to your React app.
                 Using npm i –save-dev some-package-name, you’ll add the some-package-name npm package as a dev dependency to your React app. 
    ```

10. If your app can compile without it, you can keep an asset in a public folder.
    - True
    - False
    ```
    Answer: True
    Explanation: Indeed, if your app can compile without it, you can keep an asset in a public folder.
    ```