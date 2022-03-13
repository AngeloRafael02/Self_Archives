#!
    #Git Command Manual I usually use
    # RECIO, Angelo Rafael

    #NOTE TO SELF: use school account to join a project and experience "collaborative work"

    #TERMS
    #system - All users
    #global - all repositories of the current users
    #local - the current repository

    #end of lines
        #windows uses CR (Carriage Return \r) and LF (LineFeed \n) pair
            #this means that core.autocrlf = true
        #Linux and MacOS uses LF only
            #this means that core.autocrlf = input


    #CONFIG
git config --help # list all manuals of git (space for scroll down, q for quit)
git config -h # shows short summary of manual of git
git config --list #list all settings of git
git config --global user.name "username" #configures username, uses "" when username has spaces
    #NOTE: --global can be replaced with local in certain directories where you want another name to use
git config --global user.email email.email.com #configures email
git config --global core.editor "code --wait" #configures code editor, code = VS Code
    # the wait flag mean to wait until we close a new VS CODE instance
git config --global -e # -e mean edit all --global settings in your code.editor
git config --global core.autocrlf true/input #configures end of line characters depending on the OS

    #STATUS
git status #show untracked and files not committed.
git status -s #short status

    #ADD
git add <file> #add certain untracked files into the staging areas
git add . #add all untracked files into the staging area  

    #COMMIT
git commit -m "comment" #commit all added files with an additional comment to describe the commits, saves a snapshot of your code
git commit -am "comment" # automatically add and commit files in the directory
git commit --amend -m "new comment" #changes the message of last commit incase of types and other reasons
git commit --amend --no-edit # add files to the commit and uses the previous comment

    #REVERT
git revert 59e174f #revert recent commits

    #LOG
git log #list the recent commits
git log --oneline #list all log in shorter summary format
git log --graph --oneline --decorate # more concise breakdown and shows how branches connect

    #PUSH
git push origin master
git push origin HEAD:master #pushes changes to the repository, to be pulled & merged.
    #NOTE: Works on my computer
git push origin HEAD:master --force #--force flag overwrites history on the remote git even co-worker's code, so beware
git push origin HEAD:master --force-with-lease # will avoid pushing code if it would overwrite other peoples code.

    #STASH

    #BISECT

    #ALIAS = make shortcuts of git commands and store them in the config file
git config --global alias.ac "commit -am" # makes a shortcut ("git ac" is now the shortcut command got "git commit am")

    #.gitignore - file that can say what files should not be tracked by git
    #to add files, put the name of the file insid ethe .gitignore including file type.: temp.py
    #to add directories, input the name of the directory then put a "/" afterwards: subfolder/