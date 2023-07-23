# Operium
Connect with the students and collaborate on exciting projects. Join us as we celebrate their remarkable achievements and navigate the world of computer applications together.


## Step 1 - Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Step 2 - Clone the forked repository

Now clone the forked repository to your machine:

- Using HTTPS

```sh
git clone "https://github.com/<your-username>/Operium.git"
```

- Using SSH

```sh
git clone "git@gitHub.com:<your-username>/Operium.git"
```

**Note**: Replace <yout-username> with your GitHub username.

## Step 3 - Create a branch

Change the current working directory to the cloned repo.
For example:

```sh
cd Operium
```

Now create a new branch with the below naming convention:

```sh
git switch -c add-your-name
```

For example:

```sh
git switch -c add-john-doe
```

## Step 4 - Make changes and commit

- Edit the `_data/members.yml` file in the project directory to include your information.

```sh
- name: <your-name>
  gender: <your-gender>
  profile: <your-uploaded-image-name-with-extension>
  branch: <your-branch>
  links:
    linkedin: <your-linkedin-link> #https://www.linkedin.com/in/johndoe-536a7b201/
    github: <your-github-link> #https://github.com/github-john-doe
    website: <your-website-portfolio-link> #https://johndoe.github.io
    mail: <your-mail-link> #mailto:johndoe@gmail.com
  description: An adept digital alchemist, conjuring wonders from code with a perfect blend of skill and zeal.

```
**NOTE:** 
> make sure to add your info at the end of the file, after the last user's data. Not in the middle or the top of the file so that we can test the data.
> **Otherwise the PR will be closed!**

- Add a portrait image of you with your name and add it to the `assets/profiles/` directory. 
- Image size should not be greater than **200KB**
- For the best result use a image with **1:1 ratio**



Now if you go to the project directory and enter the command `git status`, you can see the changes.

Add those changes with the `git add` command:

```sh
git add -A
```

Now commit those changes using the `git commit` command:

```sh
git commit -m "Add <your-name> to contributors list"
```

For example:

```sh
git commit -m "Add John Doe to contributors list"
```

## Step 5 - Push the changes to GitHub

Push your changes to GitHub using the `git push` command:

```sh
git push -u origin <your-branch-name>
```

For example:

```sh
git push -u origin add-john-doe
```

> If you enabled two-factor authentication in your GitHub account you won't be able to push via HTTPS using your accounts password. Instead you need to generate a personal access token. This can be done in the application settings of your GitHub account. Using this token as your password should allow you to push to your remote repository via HTTPS. Use your username as usual.

[Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Step 6 - Submit your changes for review

If you go to your repository page on GitHub you will see a `compare & pull request` button. Click that button.
And submit the pull request.
Soon the reviewer will merge the branch into `main`.

## Step 7 - View and share contributors badge

Once the PR is merged you can view your details [here](https://anasvemmully.github.io/Operium/).

---

<p align="center">
    Made with :heart: by <a href="https://anasvemmully.github.io/" target="_blank">Chef</a>
</p>

