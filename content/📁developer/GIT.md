
### completely remove .env secret
- https://daily-dev-tips.com/posts/removing-a-env-file-from-git-history/

### Fix author on previous commits
- [Fix git commit author (waylonwalker.com)](https://waylonwalker.com/fix-git-commit-author/#:~:text=Fix%20git%20commit%20author%201%20Change%20the%20email,...%208%20A%20note%20on%20changing%20history...%20)
- [git - How to change the commit author for a single commit? - Stack Overflow](https://stackoverflow.com/questions/3042437/how-to-change-the-commit-author-for-a-single-commit)

### usual grind
```
Git add .
Git commit -m 'message'
Git push
```

### list branch and switch to
```
Git branch
Git checkout <branchname>
Git init
.gitignore
```

### remove / clean files & directories from remote repo after .gitignore update
1. `git rm -r --cached  .`
2. `git add .`
3. `git commit -m 'Remove newly ignored directory and files'`  
4. `git push origin master`



### change  branch
- `git checkout -b <branchname>` --> create new and change to
- `git checkout <branchname>` --> change to existing 

### remove unwanted add
- `git restore --staged <filename>`

### stash
- `git stash`
- `git stash pop`

### link repo with existing local files

```
cd public
git init
git add .

git remote add origin https://github.com/<username>/<repo>.git

git commit -m 'first commit'
git push origin master
```

### git repo inside a git repo?

- `git submodule add <url> <directory>`
- `git submodule add https://github.com/wchorski/myrepo ./directory`

### fix commit author

## global login via terminal
- [login to github from terminal Code Example (iqcode.com)](https://iqcode.com/code/shell/login-to-github-from-terminal)
- [How to Set Git Username and Password in GitBash? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-set-git-username-and-password-in-gitbash/)
- [Git - git-credential-store Documentation (git-scm.com)](https://git-scm.com/docs/git-credential-store#_storage_format)
```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
git config --global user.password "1234321"
git config --global credential.helper store
```

or before you push a commit try this out instead
```shell
git config credential.helper store
git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>

# several days later
$ git push http://example.com/repo.git
# your credentials are used automatically
```


## 'fatal: unable to write new index file'

```shell
chmod -RN /path/to/repo
```

---
## Credits
- https://stackoverflow.com/a/32663542/15579591