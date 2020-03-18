const telegrammBot = require('node-telegram-bot-api');
const agent = require('socks5-https-client/lib/Agent');
const token = '1099288118:AAHAroP_IV4ipDEaMlA93YMex-_LEmiheQk';

var bot = new telegrammBot (token, {
    polling: {
        interval:300,
        autoStart: true,
        params: {
            timeout: 10
        }
    },
    request: {
        agentClass: agent,
        agentOptions: {
            socksHost: process.env.PROXY_SOCKS5_HOST,
            socksPort: 9150
        }
    }
})

bot.onText (/Старт/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Давай начнем!', {
        reply_markup: {
            keyboard:[
                ['Расписание'],
                ['Добавить дз'],
                ['Заметки']
            ]
        }
    })
})

bot.onText (/Расписание/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Выбери неделю!', {
        reply_markup: {
            keyboard: [
                ['Четная'],
                ['Нечетная']
            ]
        }
    })
})

bot.onText (/Четная/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Выбери день!', {
        reply_markup: {
            keyboard: [
                ['Понедельник'],
                ['Вторник'],
                ['Среда'],
                ['Четверг'],
                ['Пятница'],
                ['Суббота'],
                ['Закрыть']
            ]
        }
    })
})

bot.onText (/Нечетная/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Выбери день!', {
        reply_markup: {
            keyboard: [
                ['Понeдельник'],
                ['Втoрник'],
                ['Срeда'],
                ['Чeтверг'],
                ['Пятницa'],
                ['Субботa'],
                ['Закрыть']
            ]
        }
    })
})

bot.onText(/Понeдельник/, msg=> {
    
    const chatId = msg.chat.id
    
    bot.sendMessage(chatId, 'hello')
})

bot.onText(/Понедельник/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, 'Hi')
})

bot.onText(/Закрыть/, msg=> {

    const chatId=msg.chat.id

    bot.sendMessage(chatId,'Закрыл!', {
        reply_markup:{
            remove_keyboard: true
        }
    })
})
    // if(msg.text === 'Расписание') {
    //     bot.sendMessage(chatId,'Выбери неделю', {
    //         reply_markup: {
    //             keyboard: [ 
    //             ['Четная'],  
    //             ['Нечетная']
    //             ]
    //         }
//         })
//     } else if(msg.text === 'Четная') {
//         bot.sendMessage(chatId,'Выбери день', {
//             reply_markup: {
//                 keyboard: [
//                     ['Понедельник']
//                 ]
//             }
//         })
//     } else if(msg.text === 'Четная') {
//         bot.sendMessage(chatId,'Выбери день', {
//             reply_markup: {
//                 keyboard: [
//                     ['Понедельник']
//                 ]
//             }
//         })
//     }

// })