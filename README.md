# ZodiacSMS

## App Description:
ZodiacSMS is a applcation where you can subscribe to get free daily horoscope readings via text message. 


## User Story:
The will start an a landing page with logo/link that they click on. From there user will be redirected to the form page. The forum page will have a brief explaination of what the app is and what the a subscribing. Once the user is subscribed to ZodiacSMS they will recieve a daily text with their horoscope reading. 

## Wireframes:

## Landing Page
![Imgur](https://i.imgur.com/VFjasct.png)

## Form Page
![Imgur](https://i.imgur.com/VFjasct.png)


## ERD
![Imgur](https://i.imgur.com/x0p82Q2.png)

For this application I am using one Data Models. As you can see from the ERD the  model consist of User with one to many relationship. 


 ## Technologies Used

React:
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="200" height="100"/>
          

Express
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="200" height="100"/>
          
            
Node.js
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="200" height="100"/>
          
MongoDB
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="200" height="100"/>
          

## API
aztro: https://github.com/sameerkumar18/aztro/blob/master/docs/source/index.rst
twilio: https://www.twilio.com/docs/messaging/services

I will be using two API for this application. One is aztro, which is for developers who wants an API that provides horoscope information. The second API is Twilio which has a couple of APIs that allow you to send and receive a high volume of SMS messages anywhere in the world.


## Cool Code 

This is the script that sends the horoscope message to the user. It finds the user on the Mongodb database, loops through the users and sets the correct sign in the params. Then pulls the name, description and number and passes through the sms api.
```
async function auto() {
    const allUsers = await User.find({})
console.log(allUsers)
for(i=0;i<allUsers.length; i++){
      
const options = {
    method: 'POST',
    url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
    params:{ sign: `${allUsers[i].sign}`, day: 'today'},
    headers: {
      'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
      'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
    }
  };

  await axios.request(options).then(function (response) {
    horoscopeDesc = response.data.description
    //console.log(horoscopeDesc)
}).catch(function (error) {
    console.error(error);
});
client.messages
.create({
body: `Hello ${allUsers[i].name}, ${horoscopeDesc}`,
from: '+14255377759',
to: allUsers[i].number
})
.then(message => console.log(message.sid));


}  
}
```

This is the neon glow affect that's seen throught out the application.
```
.home-link:hover {
  color: gold;
  
  text-shadow:
  0 0 7px #fff,
  0 0 10px #fff,
  0 0 21px #fff,
  0 0 42px rgb(246, 255, 0),
  0 0 82px rgb(246, 255, 0);
  transition: 500ms ease;
}
```

## Deployed site

backend:  https://zodiacsms.herokuapp.com/

frontend: https://zodiacsms.netlify.app/


## Special Shoutouts 

* Brian Krabec
* Joshua Smith 
* Anthony West
* Mackenzie Lamour
* John Paul Haddad
* Juan Venegas
* Taylor Phillips
* Victoria Vela