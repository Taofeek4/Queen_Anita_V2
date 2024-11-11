//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUI0THc0WmQ1djNVVklxcXNrN01jYy91d0VHZk1lOXB0V29hMjQzTUVrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk1SbktWMm9hb3YvTmNva05rL1pSa3dkM2dZdmVER2hoOUZBT2lLZ3lSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SUpJZFVTaTh0ZWphallqRGkwWk96ZW5FT0ZCYmV3QmpmSjFzSUViY2xZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIZDJTZEE1aW5LeDFzTW1ZUW5kUjQ3VXp0d0QwY2ZwYUlsTzF0aTZGYUZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVOK2poaElreWtjZDBxY3RaWkM4NGxzUGxyM0twQytsaisvWmNZMCt5bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFDZ09uZEpVeVdrditRUmdSVXc0MnQ5S1NwMUdWT1FQU3oxSzVWczBQRUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BRQWsxb25Gc0lkYWs0Nm5UWGhYcTlxa3lDc2FEQ2Q1QVorak1sNmQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01Pa3NhbTFPdzBvUkM2MWsxWURSVEdjU2NCeDhWVDByMjdOWEttaWgydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVaSytOd2hVTURRWnJRT1VyR01FU3V3Rkd3clQvUVh6L3duQ2kzcDl3aHhRTUthczU5M3B1bjVJVW1pbUNhcWgxZS8zenl3YnJickcwRTJBNW5UOENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYzLCJhZHZTZWNyZXRLZXkiOiJjbjVCMU5DaFJIbUVEUXBCNFk5NDhpbExhdEZyYXBJR05YS2RwQVNJa3VRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpZzNJTnFBN1FQeThTS1lzZTYySjZnIiwicGhvbmVJZCI6ImM1YTMxMTM5LTM4MjctNDZhMy04YzZlLTRiN2IyYmM4ZWI1YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWTZ5N0pwUnBxQ1hrQi9vSVBpVUtUNEc5MTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9yWUFsb20zNU4veWVVeTh4cXBXeVFvZXhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNOTktUV0NBIiwibWUiOnsiaWQiOiIyMzQ4MTIzNTA5MjkyOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlN1aGFpbC0gWE1EIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcWNpZkVFRU9UZ2xMa0dHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzN0NncklLT0RoY0RZdFhhaitDOHhCNjQ1RStkWEtWVWlZUkdULzlBaWtjPSIsImFjY291bnRTaWduYXR1cmUiOiJyNUZjYXNsTGUwYk9ycmJvZUVPMk1iV29xM3JNVEtVa3FQdDhJUUNsT09mVVNtdmM2K3VNUTErMDV3Tlk5UmNhbnIwcEV3MWtvMzBZNzZOQ3VwTFFEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicGVzUWtSSmNLYllyaUNYd2dubGw5Qzl1NjdhOXFRWDdHQ0NCS2tRcCtwb1ZmeC9YZVpvQXd2RVZCVW05OTJjK0w2aUo0VW9vQ1hnVWQzSDh1ZzVQQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIzNTA5MjkyOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQrd29LeUNqZzRYQTJMVjJvL2d2TVFldU9SUG5WeWxWSW1FUmsvL1FJcEgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA0OTA0ODF9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
