::получаем curpath:
SET thisBatPath=%~dp0
SET thisBatDisk=%thisBatPath:~0,2%

CALL %thisBatPath%\..\set_env.bat

@TITLE storybook

@CLS

@CD %thisBatPath%
@%thisBatDisk%

@echo run command to start:
@echo npm run storybook
@echo .
@cmd
