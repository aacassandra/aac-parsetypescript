<img src="https://img.shields.io/badge/aac--parsetypescript-v.19.4.9-red.svg?style=flat&logo=npm" alt="aac-parsetypescript version"> <img src="https://img.shields.io/badge/base-httpclient-orange.svg"> <img src="https://img.shields.io/badge/build-crud-brightgreen.svg"> <img src="https://img.shields.io/badge/install%20size-388%20kB-lightgray.svg">
<br><br>
# Introduction
This package makes it to easy for typescript users for access the parse database via http

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## Installing
```npm install aac-parsetypescript```

## Implement
add this code in app.module.ts:
```
import { ParseTypescript } from "aac-parsetypescript";
```
add to providers
```
providers: [
  ...,
  ParseTypescript,
],
```
add to components or services
```
import { ParseTypescript } from "aac-parsetypescript";
```
add to constructor
```
constructor(
...,
private parseTypescript:parseTypescript
){}
```

## Instance Methods
- getSignin
- getSignup
- getUsers
- getCreate
- getReading
- getUpdate
- getDelete

## Example
Performing a <b>signin</b> request
```
async getSignin(){
  let config = {
    bashurl: "https://parseapi.example.com",
    data: {
      username: "songoku",
      password: "admin"
    },
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getSignin(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

Performing a <b>signup</b> request
```
async getSignup(){
  let config = {
    bashurl: "https://parseapi.example.com",
    data: {
      username: "songoku",
      email:"example@mail.com",
      password: "admin"
    },
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getSignup(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

Perfoming a <b>create</b> request
```
async getCreate(){
  let config = {
    bashurl: "https://parseapi.example.com",
    data: {
      //somes data
    },
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getCreate(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

Perfoming a <b>reading</b> request<br>
[Readmore](https://docs.parseplatform.org/rest/guide/) about conditional on parse
```
async getReading(){
  let config = {
    bashurl: "https://parseapi.example.com",
    where: '"idExample"="1","nameExample"="Jhon Taruban"',
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getReading(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

Perfoming a <b>update</b> request
```
async getUpdate(){
  let config = {
    bashurl: "https://parseapi.example.com",
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    id: "CHANGE-WITH-YOUR-OBJECTID-TARGET",
    data: {
      //somes data
    },
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getUpdate(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

Perfoming a <b>delete</b> request
```
async getDelete(){
  let config = {
    bashurl: "https://parseapi.example.com",
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    id: "CHANGE-WITH-YOUR-OBJECTID-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getDelete(config)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
```

## NOTES
If you want use (this.) function on (.then) or (.catch)
```
constructor(
  private example:Example
){}

async getDelete(){
let self = this;
  let config = {
    bashurl: "https://parseapi.example.com",
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    id: "CHANGE-WITH-YOUR-OBJECTID-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  await this.parseTypescript.getDelete(config)
  .then(function (response) {
    // handle success
    console.log(response);
    self.example;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    self.example;
  })
}
```
## CREDITS
aac-parsetypescript is based on [axios](https://github.com/axios/axios) source code and is combined with rules that must be met to access the parse model database. With the final results, it aims as a tool to accelerate the coding process of programmers.

## LICENSE
[MIT](https://github.com/aacassandra/aac-parsetypescript/blob/master/LICENSE)
