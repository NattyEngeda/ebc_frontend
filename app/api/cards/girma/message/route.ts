import { NextApiRequest, NextApiResponse } from "next";
import TelegramBot from 'node-telegram-bot-api';



export async function GET(request: Request) {
  return new Response('Hello Girma', { status: 200 });
}


export async function POST(req: Request, res: NextApiResponse) {
  try {

    const res = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN!;
    const bot = new TelegramBot(token, { polling: true });

    // // Telgram Id's 
    const nattyId = '359753050';
    // const girmaId = '383402552';
    console.log(res.name)
    // bot.onText(/\/start/, (msg) => {

    //   bot.sendMessage(msg.chat.id, `Welcome, <b>${msg.first_name}</b> \n You can Manage All Your messages and Requests here`, { parse_mode: "HTML" });
    //   // console.log(msg.chat);
    // });

    // bot.sendMessage(girmaId, `<b>Message</b> \n <b>Name:</b> ${data.name} \n<b>Email / Phone Number: </b>${data.email} \n<b>Message: </b>${data.text} \n <b>Date: </b>${new Date}`, { parse_mode: "HTML" });
    if (res.name == undefined || res.email == undefined || res.text == undefined) {
      return new Response('Loading');;
    } else {
      bot.sendMessage(nattyId, `<b>Message</b> \n <b>Name:</b> ${res.name} \n<b>Email / Phone Number: </b>${res.email} \n<b>Message: </b>${res.text} \n <b>Date: </b>${new Date}`, { parse_mode: "HTML" });
    }

    return new Response('Hello Niggas', { status: 200 });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error', error_description: error });
    return new Response(`Errod ${error}`, { status: 500 });
  }

}