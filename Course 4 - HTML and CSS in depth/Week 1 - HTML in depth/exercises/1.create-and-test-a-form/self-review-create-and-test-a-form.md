# Self review: Create and test a form

1. When the input fields contained no text and you clicked the Log In button, what was the result?
    - The web browser notified that the required field must be completed
    - The password field changed to a red border
    - The form submitted successfully
    ```
    Answer: The web browser notified that the required field must be completed
    Explanation: The fields were marked as required so they must be filled out before submitting.
    ```

2. When the input fields contained a single text character and you clicked the Log In button, what was the result? Select all that apply.
    - The web browser notified that the minimum length is 2
    - The password field changed to a red color
    - The form submitted successfully
    - The username field changed to a red color.
    ```
    Answer: The web browser notified that the minimum length is 2
            The password field changed to a red color
            The username field changed to a red color.
    Explanation: The fields were marked as needing a minimum length of 2. 
                 The browser applied the proper CSS selectors to change the invalid field to red.
                 The browser applied the proper CSS selectors to change the invalid field to red.
    ```

3. When the username field contained the text "admin" and the password field contained the text "password", what was the result when you clicked the Log In button?
    - The username field changed to a red color
    - The form submitted successfully
    - The web browser notified that the required fields must be completed
    ```
    Answer: The form submitted successfully
    Explanation: The fields were valid so it submitted correctly.
    ```