//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkR6aEVKemFpQ2IxRmVqV0xCdnJQNTVjQzlsTWxWc0JwOWVSMkRhSVdtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNjdOOUJvUUNwSm9rdEFyenQ4WE1ORnlMblNCRXpYcDVhVExmck5ITVlBRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRVhrcVkvc2RaMFBUU3FBVTlXenozQXZmeEVCeHNWUldkakprOGpZZ2xNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NHJ4T1QrUFFKcjdIYjY4aG1qMlltSjI3b0o2dlduOUdoTVlHVFVLVm1rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldJRDVHQWFRUjZYNjJzd1kxQmx4RjhaTWRSRm1wUWIxWWNTTDkwWmVqa2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjA4bHZNeEwvdjdPV3FoWTdIaEZ4cUZEUjYwRVA5Q1orNjFMZG0xRVUvMUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUREazdmdlpMSFA4SGhhSVU5SVA2UEtJQThnR00xVk1sT1drenJaUWZrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnpHcVpBNXIya1BlZkdYWFJSTzZZNWVad3dPVU02OXZUeEsrNUpQSk9WRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik95UGFiMzhGdFdwVzFUNGtRZ212dkIxclpLT202ZWlhL2Zwa2pLL0wrejhaTnM0d0ZYNHdwd0tSVk9XTnpkS091cDYrcEFTS0JGYXgwNzhRUE15Tml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IktZRElLRC9nRWxmVGR5R04ySEVFNUlzRXdEeFhwaGwrZXhkUTQ2VlYvMGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNud3k1MlJDUVAyVHhHZUpTdThXekEiLCJwaG9uZUlkIjoiZTBkMTkyMDUtODBkMi00NTYyLWI3NTEtZjZlNzZmMjk4NDc0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpVRVQ3aCtNcmx5QnJHMzAyY0pFMnB5L2pGST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTckJyYkE5K2RBc0cyTTV2WnZqcCt6WSs1OGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFpUTERMTDMiLCJtZSI6eyJpZCI6Ijk0NzQyOTQ4MDQ4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2agOG0nOG0h+G0h8m0IOqcseG0hMqA4bSA6pywyo8g4bSp4bSA4bSbypzJqsqP4bSAIMqcIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLS0wyeXNRMzVXeXZRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBUWt6TmhQLzlUOFdUVGxjdHNvVkI3RytYQWFMd0h3dkRzcW4zZEJ5VDI0PSIsImFjY291bnRTaWduYXR1cmUiOiJsSExrakd1TkhTcW80R1pyNGVQd2hJNS9JODVCaTl2VE83aVcrWW9sZVEwMXZ2QWU0amtBT1JLTmFLSmNXUVdqNHpQTEszcWd5TnpubFNpTGM1dUxBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNm0yYXNLdmpqTXBWZ2lJTVJSSkk5YjhzSm9VUzBPZEU2VVJaTVpzWHZGWnArQ1VJek9iNG9SN0NaaURKRitVWHdwVHU4cnhIQmJrcUxCY2ZkWElUanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0Mjk0ODA0ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFFSk16WVQvL1UvRmswNVhMYktGUWV4dmx3R2k4QjhMdzdLcDkzUWNrOXUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzkzNjEwMDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjh1In0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94742948048";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "@",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "𝐂ʏʙᴇʀ x 𝐓ʜᴀʀᴜᴡᴀ 𝐈ᴅ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
