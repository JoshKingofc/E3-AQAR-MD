const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3-WAQAR-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBZZElKd0JRWWFHcUZPV3FPODlmTHAxZ05XNVcxb3doU1hvbUZ4eGVHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjRidmNYTzQyOEFlU1d0TEJGVjFZSS9RSEl3R1ArNFpKQ2pYUGhTRGRTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQWRETkd5N1ljUEpQY1h6ZE93bTRsUnhRRGRNVnJod2NtbnFrbm5WN2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNlNobE96eEt3dUh0b1RCQjlHTVJOQ3lYS0gxUkl3UXBpcThoMGtmYndFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOd0twSXlnTkVhUVFuUHFKZkE0N2tuVmpad2x6ak1vTk55ZVU3TUJGWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNmR1NhVDN0SndFTjY2NVQ0SzlyQU1mb3JRUDRwOEp1REQwMzBmd25XRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JTTWxJQzh4dklYM25MZHppUENTRERUT2Q1S1MzN040STgvbWxwYXhsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaENTMFF5NXFPemZUTDFkL2xzQjNUM3RUQXVERTZta0NuUEVCN0xzdjVpcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhCN0xVeW1sZEpuZFIxVWs0Z1FjYUE0YWJEbFBKMnB4Y3VhVGhnT1B3SHY1OFp5NGNPUzBvbmdLY3hGNkVZMDFoUjBGaHRXVlVPMUU1VXF2OGxOVERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJaaEsvTzd6emg3b05wNTRBVnB4OUpxSVIzNHQrZ28zWTdkb0JBN3ZmdlVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJIM0M3RFE5TiIsIm1lIjp7ImlkIjoiMjYzNzE2OTg1MzUwOjUzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc3MjcwODQxMzAzMjc1OjUzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1d2emRrR0VLN2QwY1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXZKSHJINEdJWWxNd3UwSW5LY2lvM3ZYT0o1dSs2VUZGbWpHcFRlV2xRST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOU0zak9YWnBnblNBYkJpSTdqVDFtcE4yakF0aEhIUDV0YTA1dm5TZFA5QmpjSklUNkI3L0NPcHpzeWNSWFA2U1BzdGJpYitWZjdLQ05UTkZDbkJ2RHc9PSIsImRldmljZVNpZ25hdHVyZSI6IlRaTDM2akt6WUhXK1MwakdNbSs3bmpOUDlIVklpN1I3WDhJMzE3NVhIZG5pcCt6eDF4VTFhT2NOWHhiak50azhBZ1F5NVAxaURHSjR3cDNhMTVwbkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE2OTg1MzUwOjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllyeVI2eCtCaUdKVE1MdENKeW5JcU43MXppZWJ2dWxCUlpveHFVM2xwVUMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1ODc1MjQzNSwibGFzdFByb3BIYXNoIjoiMlAxWWhmIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "falsee",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-WAQAR-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/28BBm7ZF/Joshmywif3.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "*",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ZONE-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ZONE-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263716985350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ZONE-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ZONE-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/28BBm7ZF/Joshmywif3.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> ALIVE in Zambia at Cyber Security Institute 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263716985350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
