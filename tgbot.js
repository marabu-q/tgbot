const telegrammBot = require('node-telegram-bot-api');
const agent = require('socks5-https-client/lib/Agent');
const token = '1099288118:AAHAroP_IV4ipDEaMlA93YMex-_LEmiheQk';

var bot = new telegrammBot (token, {
    polling: true,
    request: {
        agentClass: agent,
        agentOptions: {
            socksHost: '127.0.0.1',
            socksPort: '9150'
        }
    }
})

bot.onText(/пн/, msg => {
    const {id} = msg.chat;
    bot.sendMessage(id, "1.Практика Англ(8.00-9.30)\n2.Лекция Философия(9.40-11.10)\n3.Лаба ИГМ (11.40-13.10");
})

bot.onText(/вт/, msg => {
    const{id} = msg.chat;
    bot.sendMessage(id,"1.Окно(8.00-9.30)\n2.Лекция Вышмат(9.40-11.10)\n3.Практика АП(11.40-13.10)\n4.Практика АП(13.20-14.50)")
})

bot.onText(/ср/, msg => {
    const{id} = msg.chat;
    bot.sendMessage(id,"1.Практика Вышмат(8.00-9.30)\n2.Практика Правовые основы информатизации(9.40-11.10)\n3.Лекция Правовые основы информатизации(11.40-13.10)\n4.Практика АП(13.20-14.50)\n5.Практика Физ-ра(15.00-16.30)")
})

bot.onText(/чт/, msg => {
    const{id} = msg.chat;
    bot.sendMessage(id,"1.Окно(8.00-9.30)\n2.Практика Философия(9.40-11.10)\n3.Практика Антикор(11.40-12.10)\n4.Лекция Антикор(12.20-13.50)")
})

bot.onText(/пт/, msg => {
    const{id} = msg.chat;
    bot.sendMessage(id,"1.Окно(8.00-9.30)\n2.Практика Иняз(9.40-11.10)\n3.Практика Вышмат(11.40-13.10)\n4.Окно(13.20-14.50)\n5.Практика Физ-ра(15.00-16.30)")
})

bot.onText(/сб/, msg => {
    const{id} = msg.chat;
    bot.sendMessage(id,"1.Лекция Философия(8.00-9.30)\n2.Лекция АП(9.40-11.10)\n3.Курсач АП(11.40-13.10)")
})
