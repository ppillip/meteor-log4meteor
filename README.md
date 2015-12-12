클라이언트 console.log 를 서버로 보내 줍니다 

meteor add ppillip:log4meteor 

서버에 옵션 주기
if (Meteor.isServer) {
  Meteor.startup(function () {
    log4MeteorServerConfig.type = "db";
  });
}