# WOR Website

## Contribution Guidelines

In case you are looking to make some changes please make sure you do the following changes!

1. Execute the following instructions:
```git
git clone https://github.com/WheelsOnRoll/WORWebsite/
git checkout -b <issue-name>
```
* Note: Issue name can be an Issue assigned to you! Example of a branch name is: SEO, in case you are making SEO changes to the website and so on!

2. Make your changes in the main folder and save them in your local repository. After that, execute the following instructions:
```git
git add --all
git commit -m "<Your message>"
git push origin <issue-name>
```
* Note: Make sure you do not do `git push origin master` or any other branch.

3. After pushing it to the GitHub repository send a Pull Request via the Pull Request button on GitHub and write a brief explanation of all the changes that you have made!

4. After your changes have been merged, go back to yourlocal repository and execute the following instructions:
```git
git checkout master
git pull origin master
git branch -d <issue-name>
```
* Note: The last command deletes your previously created branch which you created for the Issue.

* Note: In case you need to view which branch you currently are on execute the following command:
```git
git branch
```

## Pull Request
* While you are sending your Pull Requests, please make sure you **reference** the issues that you have been assigned. Without that your Pull Request will not be accepted!


