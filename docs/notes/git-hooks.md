At the root of the project directory you should be able to find 
`.git/`. In it there is a `hooks/` direcotry that constains sample sripts for
running things when calling git commands. Most samples are `bash` scripts 
waiting to be renamed in order for git to start using them.

Today I modified the `prepare-commit-msg` to check what it does. In the future
it would be nice to start using githooks to trigger testing locally before
pushing changes.