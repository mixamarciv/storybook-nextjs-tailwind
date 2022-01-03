::получаем curpath:
SET thisBatPath=%~dp0
SET thisBatDisk=%thisBatPath:~0,2%

CALL %thisBatPath%\..\set_env.bat

@TITLE tailwindcss compiler

@CLS

@CD %thisBatPath%
@%thisBatDisk%

@echo run command to start: 
@echo npx tailwindcss -i ./styles/tailwind.config.css -o ./styles/tailwind.dist.css --watch
@echo .
@cmd
