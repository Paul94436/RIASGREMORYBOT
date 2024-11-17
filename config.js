//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349117567627";
global.sudo = process.env.SUDO || "2349117567627";
global.owner = process.env.OWNER_NUMBER || "2349117567627";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xPZEF1Qk9rZmZiZUZCb25vLzVnSVd0MEp6UjFsczlQK0JjNEpCSGcwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG45anNuVk93ejRTVE51SGVhU1h4WEVTRkJLMjE3WnFxazg3aDIrZTAyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRkk4b2M5YXRmemN6S28zcG9hUUdUb3JlQmtEOTlGcUpDblFUTHg5T1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObHU0ODZEbE9CQ2NqR3owR1N1TDZBSTFpaEhLUmxpcG5udm44N1ZLUDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MWkNtbm1TMVM3dDA1T1g3MDlaRk1mZ1ZFU1NUdmJKSmhLYlZFNEh1bE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZKYjNQZWJoeW5HdFJtUGZSbXhONlI4WnFESmI2cnU5V2Vlc2ZMUWVHRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BWQ3FVbWtaZ05qWmdGVUhPNmcvMFRMU3kvNnVOaDFDYUtnTEFkemRFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1RV3kra0lxaXc4TWdVSklEVmVPQWNYT25KdjJFODhvN2o0L1RnUTZIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNxbm9NOURVQ0x6emUvNkxrYWg1OWQ3dDZidVc3RmIwV0xGNGd3VUVLNzVvWC9zQVBneklZNVhxS2FYMDNIR25INjEyMXVGT2xSVnhQSnEzaUI2WkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6Im85djYvSEs1MTdHOHZmUGFIM1FHY0pXdzU3S2hwOHlSWkJuYk9uRjh3MGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBXT01tazhaUU9HVXdNNWFROWs3aHciLCJwaG9uZUlkIjoiN2FmMWM0ZTQtYjJkYS00ZDk1LTg4ZGYtMDNiMzllOGFkODE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrOFpIckNPRlk5Y2R3VkZUY2JrZGpyWG5Dcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQjA3TGJWTlpOU1JUUXZ2cHh4eUpvSFIzbjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUJQVkdKSFMiLCJtZSI6eyJpZCI6IjIzNDkxMTc1Njc2Mjc6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0NFK29zQkVKeSt4N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSUNhK2poSnNCQmJCOW1lZmtWUnZuQktjeFV3c1hoNksycTc5Y0tDU2d5cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU1NZS3lpR2ZYYUVEOWVsT3JJYXBMWGRNS3JtbjhkaDl1V3ZhSEM4R0RVUUdFMXVWZHk5OHYzQ1Q2WENlbmlmS0h5VGduTDVLMGZWU0dHa0g1ak1nQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjZqM0hMTTJodlBjSmRYYm82V0J1UUJmTzNOUmZZc3JuZlFQajJuRDdKeFZVdzA3NFluL0xrVXBqVURTbFdOT1hYRlhxTnhYdExRZkRDS2hDd1NTekRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNzU2NzYyNzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNBbXZvNFNiQVFXd2Zabm41RlViNXdTbk1WTUxGNGVpdHF1L1hDZ2tvTXIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzMjE2NDZ9"
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xPZEF1Qk9rZmZiZUZCb25vLzVnSVd0MEp6UjFsczlQK0JjNEpCSGcwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG45anNuVk93ejRTVE51SGVhU1h4WEVTRkJLMjE3WnFxazg3aDIrZTAyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRkk4b2M5YXRmemN6S28zcG9hUUdUb3JlQmtEOTlGcUpDblFUTHg5T1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJObHU0ODZEbE9CQ2NqR3owR1N1TDZBSTFpaEhLUmxpcG5udm44N1ZLUDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MWkNtbm1TMVM3dDA1T1g3MDlaRk1mZ1ZFU1NUdmJKSmhLYlZFNEh1bE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZKYjNQZWJoeW5HdFJtUGZSbXhONlI4WnFESmI2cnU5V2Vlc2ZMUWVHRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BWQ3FVbWtaZ05qWmdGVUhPNmcvMFRMU3kvNnVOaDFDYUtnTEFkemRFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1RV3kra0lxaXc4TWdVSklEVmVPQWNYT25KdjJFODhvN2o0L1RnUTZIQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNxbm9NOURVQ0x6emUvNkxrYWg1OWQ3dDZidVc3RmIwV0xGNGd3VUVLNzVvWC9zQVBneklZNVhxS2FYMDNIR25INjEyMXVGT2xSVnhQSnEzaUI2WkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6Im85djYvSEs1MTdHOHZmUGFIM1FHY0pXdzU3S2hwOHlSWkJuYk9uRjh3MGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBXT01tazhaUU9HVXdNNWFROWs3aHciLCJwaG9uZUlkIjoiN2FmMWM0ZTQtYjJkYS00ZDk1LTg4ZGYtMDNiMzllOGFkODE0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrOFpIckNPRlk5Y2R3VkZUY2JrZGpyWG5Dcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQjA3TGJWTlpOU1JUUXZ2cHh4eUpvSFIzbjA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUJQVkdKSFMiLCJtZSI6eyJpZCI6IjIzNDkxMTc1Njc2Mjc6MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0NFK29zQkVKeSt4N2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSUNhK2poSnNCQmJCOW1lZmtWUnZuQktjeFV3c1hoNksycTc5Y0tDU2d5cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU1NZS3lpR2ZYYUVEOWVsT3JJYXBMWGRNS3JtbjhkaDl1V3ZhSEM4R0RVUUdFMXVWZHk5OHYzQ1Q2WENlbmlmS0h5VGduTDVLMGZWU0dHa0g1ak1nQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjZqM0hMTTJodlBjSmRYYm82V0J1UUJmTzNOUmZZc3JuZlFQajJuRDdKeFZVdzA3NFluL0xrVXBqVURTbFdOT1hYRlhxTnhYdExRZkRDS2hDd1NTekRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExNzU2NzYyNzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNBbXZvNFNiQVFXd2Zabm41RlViNXdTbk1WTUxGNGVpdHF1L1hDZ2tvTXIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEzMjE2NDZ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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
