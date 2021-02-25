# Getting Started with Github Search

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to allow the users to search the users or repositories or issues on GitHub. The results will be fetched from the [GitHub API](https://docs.github.com/en/rest/reference/search)..

## Technologies used

  - React
  - React-Router
  - React-Redux
  - Redux-Persist
  - TypeScript

## Requirements

There will be two input fields, on search field for the user to type the text and a dropdown where user can either pick "User" or "Repository" to define the entities that they want to search. When the user doesn't have any input or clears the input, the input fields should be shown in the middle of the page.
When the user starts typing into the input, make an API call to fetch the results and display them in grid. The data should be cached in the store and persisted via redux-persist and no more API calls should be made if we already have the results for the search term.

## Expected

Search will start after typing 3 or more characters and data will be fitched from Gitub API and cached in the session storage.
When scrolling if the bottom reached data will be fitched from Gitub API and cached also under the same cached key.
When the user search again for the same search terms data will be accessed from cached data.

## Caching

Chosed to cache search result using search text and search type concatenated as a unique key for each search term.
Stored data in session storage using redux-persist to be cleared after tab close.

## Debouncing

Used lodash debounce to delay fetching data 1 second to give the user some time to decide the search without requesting data from Githup API.

## Styling

Used scss-module to ensure unique classnames.
