<img src="https://img.shields.io/badge/%40aac--parsetypescript-v.19.4.7-orange.svg" alt="@aac-parsetypescript version"> <img src="https://img.shields.io/badge/base-httpclient-yellow.svg"> <img src="https://img.shields.io/badge/install%20size-388%20kB-brightgreen.svg"> <img src="https://img.shields.io/badge/build-crud-lightgray.svg">
<br><br>
# Introduction
This package makes it to easy for typescript users for access the parse database via http

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

## Installing
```npm install @aac-parsetypescript```

## Implement
add this code in app.module.ts:
```
import { ParseTypescript } from "@aac-parsetypescript";
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
import { ParseTypescript } from "@aac-parsetypescript";
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
getSignin(){
  let config = {
    bashurl: "https://parseapi.example.com",
    data: {
      username: "songoku",
      password: "admin"
    },
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  let parse = await this.parseTypescript.getSignin(signin, opt);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

Performing a <b>signup</b> request
```
getSignup(){
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
  let parse = await this.parseTypescript.getSignup(config);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

Perfoming a <b>create</b> request
```
getCreate(){
  let config = {
    bashurl: "https://parseapi.example.com",
    data: {
      //somes data
    },
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  let parse = await this.parseTypescript.getCreate(config);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

Perfoming a <b>reading</b> request
```
getReading(){
  let config = {
    bashurl: "https://parseapi.example.com",
    where: "CHANGE-WITH-YOUR-CONDITIONS",
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  let parse = await this.parseTypescript.getReading(config);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

Perfoming a <b>update</b> request
```
getUpdate(){
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
  let parse = await this.parseTypescript.getUpdate(config);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

Perfoming a <b>delete</b> request
```
getDelete(){
  let config = {
    bashurl: "https://parseapi.example.com",
    class: "CHANGE-WITH-YOUR-CLASS-TARGET",
    id: "CHANGE-WITH-YOUR-OBJECTID-TARGET",
    appId: "CHANGE-WITH-YOUR-APP-ID",
    restApiKey: "CHANGE-WITH-YOUR-REST-API-KEY"
  };
  let parse = await this.parseTypescript.getDelete(config);
  if(parse.data.success == true){
    //handle success
  }else{
    //handle error
  }
}
```

## CREDITS
aac-parsetypescript is based on [axios](https://github.com/axios/axios) source code and is combined with rules that must be met to access the parse model database. With the final results, it aims as a tool to accelerate the coding process of programmers.

## LICENSE
MIT
