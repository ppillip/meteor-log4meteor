/*이거는 무조껀 프라이빗*/

log4MeteorClientConfig = {
    sendToServer : true
};

Meteor.startup(function(){

    console.log("패키지 설정 시작");

    if(console && console.log){

        /*원래 기능을 이름을 바꾸어서 남겨준다*/
        console["_log_"] = console.log;

        /*새기능을 정의 한다*/
        console.log = function(){

            /*원래 로그를 찍어준다.*/
            console._log_.apply(this,arguments);

            /*서버로 로그를 보낸다*/
            if(log4MeteorClientConfig.sendToServer){
                try{
                    Meteor.call("log4Meteor",{
                        m : arguments[0]
                        ,t : new Date().getTime()
                    });
                }catch(err){

                }
            }
        };
    }
});
