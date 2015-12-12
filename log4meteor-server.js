log4MeteorCollection = new Meteor.Collection("log4Meteor");

log4MeteorServerConfig = {
    type : "console"
};

log4Meteor = {

    writeLog : function(msg){
        try{
            msg["userId"] = this.userId || "";

            if(log4MeteorServerConfig.type=="db"){
                log4MeteorCollection.insert(msg);
            }else if(log4MeteorServerConfig.type=="console"){
                console.log(msg);
            }
        }catch(err){
            console.log(err);
        }
        return true;
    }
};


Meteor.methods({
    log4Meteor : log4Meteor.writeLog
});

