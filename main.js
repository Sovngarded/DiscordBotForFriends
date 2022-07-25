const Discord = require('discord.js');
const fs = require('fs');


let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);
const prefix = config.prefix;

var arrayOfRoles= ['Carry','Middle','Hardlane','Semi-support','Full-Support'];
var arrayOfRolesIfVanya = ['Carry','Middle','Hardlane','Semi-support'];
var arrayOfPlayers = [];
var dotaHeroes = ['Abaddon','Alchemist','Axe','Beastmaster','Brewmaster','Bristleback','Centaur Warrunner','Chaos Knight','Clockwerk','Dawnbreaker','Doom','Dragon Knight','Earth Spirit','Earthshaker','Elder Titan','Huskar','Io','Kunkka','Legion Commander','Lifestealer','Lycan','Magnus','Marci','Mars','Night Stalker','Omniknight','Phoenix','Primal Beast','Pudge','Sand King','Slardar','Snapfire','Spirit Breaker','Sven','Tidehunter','Timbersaw','Tiny','Treant Protector','Tusk','Underlord','Undying','Wraith King','Anti-Mage','Arc Warden','Bloodseeker','Bounty Hunter','Broodmother','Clinkz','Drow Ranger','Ember Spirit','Faceless Void','Gyrocopter','Hoodwink','Juggernaut','Lone Druid','Luna','Medusa','Meepo','Mirana','Monkey King','Morphling','Naga Siren','Nyx Assassin','Pangolier','Phantom Assassin','Phantom Lancer','Razor','Riki','Shadow Fiend','Slark','Sniper','Spectre','Templar Assassin','Terrorblade','Troll Warlord','Ursa','Vengeful Spirit','Venomancer','Viper','Weaver','Ancient Apparition','Bane','Batrider','Chen','Crystal Maiden','Dark Seer','Dark Willow','Dazzle','Death Prophet','Disruptor','Enchantress','Enigma','Grimstroke','Invoker','Jakiro','Keeper of the Light','Leshrac','Lich','Lina','Lion','Natures Prophet','Necrophos','Ogre Magi','Oracle','Outworld Destroyer','Puck','Pugna','Queen of Pain','Rubick','Shadow Demon','Shadow Shaman','Silencer','Skywrath Mage','Storm Spirit','Techies','Tinker','Visage','Void Spirit','Warlock','Windranger','Winter Wyvern','Witch Doctor','Zeus'];
let userAnswer;

const { Client, Intents } = require('discord.js');
    
const client = new Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

const Token = config.botToken;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }









client.on('messageCreate', (message) =>{
    
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    

    if (command === "hi"){
        shuffle(arrayOfRoles);
        shuffle(arrayOfRolesIfVanya);

        message.member.voice.channel.members.each(member=>{
            arrayOfPlayers.push(member.user.tag);
         });

         if(arrayOfPlayers.length > 6){
            message.reply("Дохуя че то вас, выберете кого убрать нахуй")
            for(;arrayOfPlayers.length>1;){ 
                userAnswer = Number(command)
                arrayOfPlayers = arrayOfPlayers.filter(item => item !== userAnswer)
            }

            }
         


    if(arrayOfPlayers.length <= 6 && !arrayOfPlayers.includes("P4LADIN#3127")){
         for (let index = 0; index < arrayOfPlayers.length; index++) {
            arrayOfPlayers[index] = arrayOfPlayers[index] +" "+ arrayOfRoles[index];
            message.reply(arrayOfPlayers[index]);
          };    
    }
    if(arrayOfPlayers.length <= 6 && arrayOfPlayers.includes("P4LADIN#3127")){
        var filteredArray = arrayOfPlayers.filter(function(e) { return e !== 'P4LADIN#3127' })
        for (let index = 0; index < filteredArray.length; index++) {
           filteredArray[index] = filteredArray[index] +" "+ arrayOfRolesIfVanya[index];
           message.reply(filteredArray[index]);
           message.reply("P4LADIN#3127 Full-Support")
         };    
   }


          arrayOfPlayers=[];


    }

    if(command === "ho"){
        message.reply("Ваш герой "+ dotaHeroes[Math.floor(Math.random()*dotaHeroes.length)])
        
    }
    
})



client.login(Token)





