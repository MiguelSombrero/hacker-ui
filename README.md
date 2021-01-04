# Hacker UI

Hacker UI is an application for plaa plaa

For more details and documentation, see [Hacker API](https://github.com/MiguelSombrero/hacker-api) repository.

## Available Scripts

### Clone project

To clone application

    git clone git@github.com:MiguelSombrero/hacker-ui.git

### Install dependencies

    npm install

### Run project in development mode

    npm start

Open [http://localhost:3000](http://localhost:3000) to view application in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Integration tests

Integrations tests is implemented with Cypress and requires backend to run (preferably in test mode). So to run integrations tests:

#### Run Hacker API in test mode

Clone, install and run [Hacker API](https://github.com/MiguelSombrero/hacker-api) in test mode

    git clone git@github.com:MiguelSombrero/hacker-api.git
    cd hacker-api
    mvn install
    SPRING_PROFILES_ACTIVE=test mvn spring-boot:run

#### Run Hacker UI in development mode

    npm start

#### Run Cypress

    npm run cypress:open

### Run tests

You can run integration tests one by one or all at once from opening Cypress window

### Create production build

    npm run build

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!
