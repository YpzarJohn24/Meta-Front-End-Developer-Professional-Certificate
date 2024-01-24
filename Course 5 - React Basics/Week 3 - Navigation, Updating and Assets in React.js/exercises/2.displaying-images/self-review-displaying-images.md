# Self review: Displaying images

1. Is this code a correct way to import an image in React?
    ```jsx
    import avatar from "./assets/avatar.png"

    function UserImage() {
        return ( 
            <div>
                <img 
                    src={avatar}
                    alt = "User image" 
                />
            < /div>
        )
    }
    export default UserImage;
    ```
    - Yes 
    - No
    ```
    Answer: Yes
    Explanation: This code is the correct way to import an image in React.
    ```

2. Is this code a correct way to import an image in React?
    ```jsx
    function UserImage() {
        const avatarImg = "https://picsum.photos/400/265";
        return ( 
            <div>
                <img 
                    src="avatar.png"
                    alt="User image" 
                />
            </div>
        )
    }
    export default UserImage;
    ```
    - Yes 
    - No
    ```
    Answer: No
    Explanation: This code is not valid. The src attribute needs to be as follows: src={avatarImg}
    ```

3. What's wrong with this code?
    ```jsx
    function ProfileImage() {
        const profileImg = "https://picsum.photos/400/265";
        return <img src={profileImg} alt="Profile image" />
    }
    export default ProfileImage;
    ```
    - You must surround the img element with a root, wrapping div element.
    - Nothing. This code is correct.
    - There should be parentheses after the return keyword and the img element should spread its attributes over multiple lines.
    ```
    Answer: Nothing. This code is correct.
    Explanation: There's nothing wrong with the code in the question.
    ```
