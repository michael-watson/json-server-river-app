# [json-server](https://github.com/typicode/json-server) usage for exposing REST api in GraphQL example

## Setup

Just clone the repo and make sure you have node installed

## Running project

We have some custom routing so you'll want to just run the `index.js` file in whatever IDE/terminal/code editor of your choise.

```sh
node index.js
```

## API shape

### Available endpoints

* http://localhost:4001/favoriteSites

### Models

**FavoriteSites**
```
{
    "id": "testemail@test.com-USGS:11454000",
    "email": "testemail@test.com",
    "siteCode": "USGS:11454000",
    "createdAt": 1551712152050
  }
```