const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348134229848";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_16_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDMsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZ0xmMVk2Zk9MalZ0czlqaU95ZGhRU2FaeElad0hKSkVjOTZBNG1IODdQYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM0MjI5ODQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUQwOTZFOUM0MDU4RkE2QzVDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1MDk3NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM0MjI5ODQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTFGRDc3OUEwMjcxQTRDMkM4OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ1MDk3NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHdjdlN1SHlUa1NXSmtJNTNIWnZZZ1wiLFxuICBcInBob25lSWRcIjogXCIyN2QwOWZmNS05ZTExLTRjMDktOTFjYy1kMWU0NTFiNzM2MTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgNTUsXG4gICAgICA2MSxcbiAgICAgIDEwLFxuICAgICAgMjUwLFxuICAgICAgMTk0LFxuICAgICAgOSxcbiAgICAgIDI0LFxuICAgICAgMTc5LFxuICAgICAgNzAsXG4gICAgICAyMjQsXG4gICAgICA1OCxcbiAgICAgIDEwMSxcbiAgICAgIDIzNixcbiAgICAgIDE3NixcbiAgICAgIDQwLFxuICAgICAgMTU4LFxuICAgICAgMCxcbiAgICAgIDYxLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICA3NSxcbiAgICAgIDEzMSxcbiAgICAgIDY3LFxuICAgICAgMTA5LFxuICAgICAgMTMsXG4gICAgICAyMyxcbiAgICAgIDE5NCxcbiAgICAgIDEyMixcbiAgICAgIDEyOCxcbiAgICAgIDExMyxcbiAgICAgIDczLFxuICAgICAgMjM3LFxuICAgICAgMjE2LFxuICAgICAgMjM3LFxuICAgICAgODQsXG4gICAgICAyOCxcbiAgICAgIDkyLFxuICAgICAgMjQ0LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhZUDdRM05WXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTM0MjI5ODQ4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSZW1vdmVcIixcbiAgICBcImxpZFwiOiBcIjE4MDEzNTgxMDYwOTM5MjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09yMW02Y1BFTVdKaXJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTm9USkxrcWtIeXh6QUNhcDdjc3JvSzRjMHpXcG4wWXlWelpRSkZHbDVnMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmcEgzVFVaL2xXUWo0M1hwb09RUVZBSDdMdjJUNkppSVBoYldhdm9pTCtYMlNEck1IRGtCNzNaSnIyUmlZS2g1ZE5jVDJaQ3JhYnVqdndIYTNBdjFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4TXRjdWoxL2pJNzIwYlMxQlRPSEpIUWE3eDJxeFdFdUF0UHM2eGpaYlM4VXh4NG1YREYxUDgzdnhFSHVGVFVXY24zZm8rTWU1VlZKNmxOVDAvclFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM0MjI5ODQ4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDUwOTc3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUoxa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSjFrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM0t3bm9KZ3AzTVo5THdMLytiSHhZWWFTR3VMQVk5NFpaVHl3RUlaOG1JRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTA4Nzc4MjE4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ1MDk3NzA2MTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
