# GitHub User Activity

An application to search and display user activity on GitHub.

Live demo: https://github-activity-test.netlify.com/?username=gaearon

Technologies used:

* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Jest](https://jestjs.io/)
* [Cypress](https://www.cypress.io/)

## Running

1. Install dependencies: `yarn`
1. Starting: `REACT_APP_GITHUB_TOKEN="<Your personal access token>" yarn start`

## Testing

1. Running unit tests `yarn test`
1. Running integration tests `yarn cy:run`

## User Stories

### Scenarios

#### Searching

*As a:* User

*I want:* to be able to search GitHub by user name and display a list of matches.

*So that:* I can find my friends.

#### Displaying a user

*As a:* User

*I want:* to see a user's avatar.

*So that:* I can recognise my friends.

<a href="cypress/integration/__image_snapshots__/Search%20%20searches%20for%20a%20known%20user%20%230.png"><img src="cypress/integration/__image_snapshots__/Search%20%20searches%20for%20a%20known%20user%20%230.png" alt="User search" width="400"></a>

#### Displaying user's activities

*As a:* User

*I want:* to see information about a user's activity.

*So that:* I can understand their commit history.

<a href="cypress/integration/__image_snapshots__/Search%20%20displays%20information%20about%20a%20users%20activity%20%230.png"><img src="cypress/integration/__image_snapshots__/Search%20%20displays%20information%20about%20a%20users%20activity%20%230.png" alt="User activity" width="400"></a>
