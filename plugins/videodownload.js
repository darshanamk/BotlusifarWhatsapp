/*
const lusifar = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const YTV_DESC = "Youtube Video Downloader "
const YT_NEED = "*need word!.*"
const DWLOAD_VID = "*⚕️NETHMIKA BOT⚕️ 😎(っ◔◡◔)っDownloading Your Video...*"
const YTV_UP = "*⚕️NETHMIK BOT⚕️ 🤪𝗨𝗽𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝗬𝗼𝘂𝗿 𝗩𝗶𝗱𝗲𝗼...*"
const NO_RESULT = "*⚕️NETHMIKA BOY⚕️ 🎃𝕔𝕒𝕟'𝕥 𝔽𝕚𝕟𝕕 𝔸𝕟𝕪𝕥𝕙𝕚𝕟𝕘...*"


//උස්සන්නද ආවෙ බේසිකයෝ.බොහොම අමාරුවෙන් හැදුවෙ.උස්සන එකා අවජාතකයෙක් කියල හිතාගන්න පුලුවන් පොන්න හැත්ත.හුකන පොන්නයෝ
    lusifar.addCommand({ pattern: 'xvido ?(.*)', fromMe: false, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytav?url=${linkk}`)
          .then(async (response) => {
            const {
              url,title,thumb,published,channel,views
            } = response.data.result
            const videoBuffer = await axios.get(thumb, {responseType: 'arraybuffer'})
            
            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel name:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
        })
       
      },
    )

    lusifar.addCommand({ pattern: 'xvdo ?(.*)', fromMe: false, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
    
    
    lusifar.addCommand({ pattern: 'xvdo ?(.*)', fromMe: true, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytav?url=${linkk}`)
          .then(async (response) => {
            const {
              url,title,thumb,published,channel,views
            } = response.data.result
            const XCVC = await axios.get(thumb, {responseType: 'arraybuffer'})
            
            const cptt = "*📑Title:*  " + title + "\n\n" + "*📅Uploded date:* " + published + "\n\n" + "*🎞️ Channel name:* " +  channel + "\n\n" + "*👁️Views:* " + views
            

            await message.client.sendMessage(message.jid,Buffer.from(XCVC.data), MessageType.image, {quoted: message.data ,mimetype: Mimetype.jpg, ptt: false,caption: cptt})
        })
       
      },
    )

    lusifar.addCommand({ pattern: 'xvdo ?(.*)', fromMe: true, deleteCommand: false, desc:'video download',  deleteCommand: false}, async (message, match) => {
        const linkk = match[1]
        if (!linkk) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text , {quoted: message.data});
        await axios
          .get(`https://rei-api.herokuapp.com/api/dl/ytavv2?url=${linkk}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text , {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )  
*/
