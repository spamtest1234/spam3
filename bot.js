//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)
//copyright © Angry Black 2020.//❦Angry Black❦

const Discord = require("discord.js");
const myid = ['Your ID'];//هنا بتحط الايدى تبع حسابك و هو رقم طول
const prefix = ['$']; 
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);
client4.login(process.env.TOKEN4);
client5.login(process.env.TOKEN5);
client6.login(process.env.TOKEN6);

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on('message', message => {
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c1'){
message.channel.send('#credits')
  }
  if(message.content ===  'u1'){
message.channel.send("©angryblack YT")
  }     
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c2'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c3'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c4'){
message.channel.send('#credits')
  }
  if(message.content ===  'u1'){
message.channel.send("©angryblack YT")
  }     
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c5'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === 'd6') {
message.channel.send('#daily')
  }
  if(message.content === 'c6'){
message.channel.send('#credits')
  }
  if(message.content === 'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p6') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on("ready", () => {
  console.log('Bot created by ©Angry Black')
})

client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)

client.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 30000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

//copyright © Angry Black 2020.//❦Angry Black❦
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: POULAZ (Angry Black)