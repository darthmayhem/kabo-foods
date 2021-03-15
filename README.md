# Kabo foods - Technical Assignment

**Prepared By**: Steve Haight

**Date**: March 15, 2021

#### Install and Run
```
yarn && yarn start
```

## Assignment Instructions

### Kabo Frontend Developer Interview Project 

#### Overview
You’ll be creating a Kabo account dashboard page that includes:
- Page Header 
- Profile Header
- Next Delivery Component 
- Page Footer

Note: You need to have strong experience in React, Redux, Redux-Saga.

#### Requirements:
The project needs to have the following folders:
- actions
- constants
- Reducers
    - authentication.reducer.js
    - user.reducer.js
    - index.js: Combine authentication reducer and user reducer as root reducer
- Sagas
    - authentication.saga.js: add loginSaga that login function is authentication service
    - user.saga.js: add getAccountDataSaga using getAccountData function in user service.
    - index.js: rootSaga
- services
    - authentication.services.js: Add login function using login API
    - user.service.js: Add userAccountData function using account data API.
- store: 
    - index.js: Redux store

#### Refer to this figma file for the design:
https://www.figma.com/file/stMUlYyBK7yZRAPxafAq7D/Untitled?node-id=0%3A1

#### API Use for Next Delivery Component 
- Login
    - API: https://api-staging.kabo.co/login 
    - Method: POST
    - Request 
`{ email: “dev2@email.com ”, password: “password” }`

- Get Account data
    - API: https://api-staging.kabo.co/api/v1/user/subscriptions
    - Method: GET

API docs:
https://kabo.design/api 

 


#### Output
Create a private repo on GitHub and invite damidina to the repo
In the repo there should be a React app that has the completed account dashboard page based on Figma
Deploy the frontend app to Netlify or Vercel and provide the url

#### How your work will be evaluated
- Performance of the page 
- Elegance, organization and documentation of code / components 
- We encourage the use of external libraries to speed up your development process
    - CSS libraries
    - Webpack / eslint / esbuild 
- README file 

You can email your final assessment to dami@kabo.co and vino@kabo.co. We will review your output and based on the requirements set forth above.

