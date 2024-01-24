# Self review: Song selection

1. In plain JavaScript, how do you build an instance of the Audio constructor?
    - `New Audio();`
    - `Audio();`
    - `new Audio();`
    ```
    Answer: new Audio();
    Explanation: This is the correct way to build an instance of the Audio constructor in vanilla JavaScript.
    ```

2. If an object instance of the `Audio` constructor is saved in a variable named `song`, what property on the `song` object can you use to check if the song is currently playing?
    - `song.play()`
    - `song.pause();`
    - `song.paused`
    ```
    Answer: song.paused
    Explanation: This is the property that is used to check if the song is currently playing or not.
    ```

3. What is wrong with this code?
    ```jsx
    function toggle() {
        if(song.paused) {
            song.pause()
        } else {
            song.play()
        }
    }
    ```
    - The app's logic doesn't work. The code on line 3 and the code on line 5 should swap places.
    - The condition in the `if` statement is wrong. It should be: `if(song.paused())`
    - You need to have an `else if` condition, in between the `if` and `else` conditions.
    ```
    Answer: The app's logic doesn't work. The code on line 3 and the code on line 5 should swap places.
    Explanation: The lines 3 and 5 need to switch places.
    ```