// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const TelegramBot = require('node-telegram-bot-api');
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT;
const bot = new TelegramBot(token, { polling: true });

export default function handler(req, res) {

    // const data = req.body;

    // // Telgram Id's 
    // const nattyId = '359753050';
    // const girmaId= '383402552';

    // console.log(data);
    // bot.onText(/\/start/, (msg) => {

    //     bot.sendMessage(msg.chat.id, `Welcome, <b>${msg.first_name}</b> \n You can Manage All Your messages and Requests here`, {parse_mode: "HTML"});
    //     // console.log(msg.chat);
    // });
 
    // bot.sendMessage(girmaId,`<b>Message</b> \n <b>Name:</b> ${data.name} \n<b>Email / Phone Number: </b>${data.email} \n<b>Message: </b>${data.text} \n <b>Date: </b>${new Date}`, {parse_mode: "HTML"});
    // bot.sendMessage(nattyId,`<b>Message</b> \n <b>Name:</b> ${data.name} \n<b>Email / Phone Number: </b>${data.email} \n<b>Message: </b>${data.text} \n <b>Date: </b>${new Date}`, {parse_mode: "HTML"});

    res.status(200).json({ msg: 'success' })
}
