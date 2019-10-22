This project was bootstrapped with [Create React App], which is a weather forecast app. I have added bootstrap to add responsible layout based on screen resolution. 

This project focus on using ES6 Fetch API and using Async/Await and hence does not have additional browser support. Works flawless on Chrome.

Location is based on a user IP address API, Geolocation API and Weather is using `https://darksky.net/dev`. Since it is a free version API, repetitive browser refresh might cause to app to stop working due to the requested limit(currently set at max. 53).

There is currently a API bug with `https://darksky.net/dev` that the temperature and city are returning wrong objects. Note that this app has been built following the API documentation .

## DEMO
published at https://nywooz.github.io/weather-app/

## Available Scripts
In the project directory, you can run:

## Installing
### `npm i`

## run project
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Deploy to GitHub pages
1. Install the gh-pages package from npm. This package would help us to create a gh-pagesbranch on Github and also serve our bundled react files on the branch.
`npm install gh-pages`

2. Go in your Github repo
navigate to settings
scroll to GitHub Pages
set Source to "gh-pages branch"

3. Locate the package.json file in your root directory, add this line of code to your script: "homepage": "link-to-your-repository", and save. In my own case it would look like this:
```json
{
  "name": "noor",
  "version": "0.1.0",
  "private": true,
  "homepage": "http://nywooz.github.io/weather-app"
   ...
  "scripts": {    
   "start": "react-scripts start",
   "predeploy": "yarn run build",
   "deploy": "gh-pages -d build",
   ...
}
```

 #### **predeploy** command helps bundle the react app locally.
 #### **deploy** command fires up the bundled file and pushes your built file to the gh-pagesbranch on your remote repository.