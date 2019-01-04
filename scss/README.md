# In Touch Networks Global Styles

This project is intended to be used as a subtree of all other In Touch Networks sites to ensure that styles between all apps are consitant. It contains ALL styles for internal apps. Once you have added this project as a subtree or your new project, make sure that you add the main.scss file to your .gitignore, and then update the main.scss file so that you only complile the stylesheets that you need in your project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Add this project as a subtree to your new project

Add the subtree remote to you remotes (I've called the remote in the example 'itn_styles')

```
git remote add -f itn_styles git@bitbucket.org:intouchnetworks/test-frontend.git
```

Then add the files from this repo to your styles folder. You cannot add them to a folder that already exists. In the example I am adding them to a new folder named scss.

```
git subtree add --prefix=src/client/styles/scss --squash itn_styles master
```

Ensure that you add the main.scss file to your .gitignore so you dont overwrite styles in other reposistories that this repo is used in.

### Pushing and pulling from your main project

Now you are set up you can work with your main project as normal but ensure that when you commit you always split commits meant for styling and for the main repo. This will make them easy to read in their respective repos.

#### Pull in changes from this repo to your main project

If there are changes that you need form this repo in your main project then pull them from the master branch.
Firstly fetch all changes

```
git fetch itn_styles master
```

Then pull them into your project. Make sure the path below leads to your styles folder and the remote name is correct (I'm using itn_styles)

```
git subtree pull --prefix=src/client/styles/scss --squash itn_styles master
```

#### Pushing changes from your main project that need to be including in this repo

If you make changes to the styles in your main project that should be included in this project then push them to the master branch. This will make them available to all other projects instantly.

```
git subtree push --prefix=src/client/styles/scss --squash itn_styles master
```

## Authors

* **Tommy Scribble** - *Initial work* - [email me](mailto: tommy.ollerenshaw@intouchnetworks.com)

