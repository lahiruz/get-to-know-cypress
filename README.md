# get-to-know-cypress

## How to add project to gihtub

- Create a project in github with a proper name (ex: companyname-cypress-test)
- clone your project(ex: `git@github.com:lahiruz/companyname-cypress-test.git`)
- set git user name and email as follows.
  - `git config user.name "Mona Lisa"`
  - `git config user.email "mona@gmail.com"`
- add `.gitignore` file to make sure that you are pushing only the important files.
  - ypu can use this <https://github.com/box/samples/blob/master/.gitignore>
- Now you are good to start with cypress

## How to setup cypress

### Adding cypress to a new project

- make sure you have node installed
  - check node version from here: `node -v`
- `npm install cypress --save-dev`
- `npx cypress open`

### Setiing up cypress from scrach

- make sure you have node installed
  - check node version from here: `node -v`
- `npm init -y`: to setup package.json
- give a proper name to the project (ex: companyname-cypress-test)
- `npm install cypress --save-dev`
- `npx cypress open`
