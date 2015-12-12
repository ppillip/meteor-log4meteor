클라이언트 console.log 를 서버로 보내 줍니다 

meteor add ppillip:log4meteor 

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