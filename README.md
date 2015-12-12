클라이언트 console.log 를 서버로 보내 줍니다.

### 설치 방법

meteor add ppillip:log4meteor 

## 옵션

### 서버 로그 옵션

디비에 남기기

```js
if (Meteor.isServer) {
  Meteor.startup(function () {
    log4MeteorServerConfig.type = "db";
  });
}
```

콘솔에 남기기

```js
if (Meteor.isServer) {
  Meteor.startup(function () {
    log4MeteorServerConfig.type = "console";
  });
}
```

### 클라이언트 로그 옵션 

서버에 로그를 보내지 않기

```js
if (Meteor.isClient) {
  Meteor.startup(function () {
    log4MeteorClientConfig.sendToServer = false;  /* default - true */
  });
}
```