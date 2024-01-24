# Lab: Using A Repository

## Instructions

**Step 1:** Create a new repository on your Github account named "`repo-exercise`". Ensure that "`Add a README file`" is selected.

**Step 2:** Open the Terminal and authenticate using gh (Github CLI):

```
gh auth login
```

**Step 3:** Create an authentication token in your Github account with specified scopes given in the terminal. Copy it from Github and paste it. Verify authorization was successful.

**Step 4:** Clone the repository using its GitHub CLI.

```
gh repo clone <YOUR USERNAME>/<REPOSITORY-NAME>
```

**Step 5:** Move to the repo directory by using

```
cd <REPOSITORY-NAME>
```

**Step 6:** Download and add the `result.txt` to the repository folder on your local machine

**Step 7:** In the Git terminal, run

```
git status
```

**Step 8:** Verify that the output shows `result.txt` as an untracked file.

**Step 9:** Run the command

```
git add result.txt
```

**Step 10:** Run this command again.

```
git status
```

**Step 11:** Verify that the output shows `result.txt` as a tracked file.

**Step 12:** Next, run the command

```
git commit -m "Successful exercise"
```

**Step 13:** Verify that the output shows `result.txt` with create mode

**Step 14:** Next, run

```
git push
```

**Step 15:** Verify that the output pushed successfully.

**Step 16:** On Github, go to your repository page.

**Step 17:** Verify that the `result.txt` file is listed. You may need to refresh the page to see the changes.
