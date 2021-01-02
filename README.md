# Hacker UI

Hacker UI is an application for plaa plaa

For more details and documentation, see [Hacker-API]() repository.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### Integration tests

Integrations tests is implemented with Cypress and requires backend to run in test mode. So to run integrations tests:

Run Hacker-API backend in test mode

    SPRING_PROFILES_ACTIVE=test mvn spring-boot:run

Run Hacker-UI in development mode

    npm start

Start Cypress and run tests

    npm run cpyress:open
