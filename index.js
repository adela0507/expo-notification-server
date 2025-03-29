const Expo =require( "expo-server-sdk").default;

const expo=new Expo();
const TOKEN=process.argv[2];

async function sendNotif(token){
if(Expo.isExpoPushToken(token)){
const notification=await expo.sendPushNotificationsAsync([
    {to:token,
        title:"Hello",
        body:"This is an expo notif",
        data:{blabla:123},
    }
]);
console.log("Notification sent6:")
}else{
    console.log("token invalid");
};
}

sendNotif(TOKEN);