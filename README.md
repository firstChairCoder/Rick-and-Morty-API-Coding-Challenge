# React-Native-Coding-Challenge #1

A Rick and Morty wiki of sorts. This was my first code challenge done working with APIs way back when and I want to continue improving it (as far as that can be done. :grinning:)

## Features

This coding challenge is about creating a small app using Rick and Morty RESTful well maintained by [Axel Fuhrmann](https://axelfuhrmann.com) and [Talita](https://talitatraveler.com). See the [site](https://rickandmortyapi.com) for more details if interested.

The features implemented include:
- FlatList rendering optimizations and pagination.
- Next Page and Previous Page button functions.
- Search Bar functionality using JS' .filter() and .includes() methods.

### Screens

At the time, this is a single page app that shows a certain amount of characters per time with various indicators and details for each including
- Name.
- Status (Alive/Dead/Unknown)
- Episodes appeared in.
- Gender.
- Picture (where available)
- Species.

### TODO

This is a list of things I would like to improve or change over time and helps when teaching junior devs looking through previous commits. If furthere assistance is required, or is available to be provided, don't be a stranger in _"these here parts"_. PRs and emails are welcome.
- [ ] Code refactoring in the api config section especially
- [x] FlatList optimization and picture rendering.
- [ ] Sticky header with slight animations.
- [ ] Convert the app to TypeScript
- [ ] Open another branch to use the GraphQL API instead for educational purposes.
- [ ] Set up CI to run linting (__done__) and tests (both unit and integration) on PRs.
- [ ] Snapshots for Readme.

### Stack

React Native, JS, Fetch API, React Navigation 5.


### Available scripts
In the project directory after cloning, simply run:
```js
expo start
```
