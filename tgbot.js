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

bot.onText(/Понедельник/, msg=> {
    
    const chatId = msg.chat.id
    
    bot.sendMessage(chatId, '1.ОиНХ, ДГНХ(Д-218)\n2.ОиНХ, ДГНХ(Д-218)\n3.ИГ(Д-503)')
})

bot.onText(/Вторник/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.-\n3.Английский язык\n4.Английский язык\n5.ОХ, ДГОХ(Д-232)')
})

bot.onText(/Среда/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.Математика(Д-240)\n3.ОХ, ДГОХ(Д-322)\n4.ОХ, ДГОХ(Д-322)\n5.Английский язык\n6.Английский язык')
})

bot.onText(/Четверг/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.Физика(Д-112)\n2.-\n3.-\n4.Физ-ра')
})

bot.onText(/Пятница/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.-\n3.Физика(Л-209)\n4.ОиНХ, ДГНХ(Д-232)\n5.ПМ(Д-203)')
})

bot.onText(/Суббота/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.Математика(Д-416а)\n2.Математика(Д-416а)')
})

bot.onText(/Понeдельник/, msg=> {
    
    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.ОиНХ, ДГНХ(Д-218)\n2.ОиНХ, ДГНХ(Д-218)\n3.ИГ(Д-503)\n4.ВМ(Д-511)')
})

bot.onText(/Втoрник/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.-\n3.Английский язык\n4.Английский язык\n5.ОХ, ДГОХ(Д-232)')
})

bot.onText(/Срeда/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.Математика(Д-240)\n3.ВМ(Л-223)\n4.ОХ, ДГОХ(Д-322)\n5.Английский язык\n6.Английский язык')
})

bot.onText(/Чeтверг/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.Физика(Д-112)\n2.-\n3.-\n4.Физ-ра')
})

bot.onText(/Пятницa/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.-\n2.-\n3.-\n4.ОиНХ, ДГНХ(Д-232)\n5.ПМ(Д-203)\n6.Физика(Д-110)')
})

bot.onText(/Субботa/, msg=> {

    const chatId = msg.chat.id

    bot.sendMessage(chatId, '1.Математика(Д-416а)\n2.Математика(Д-416а)')
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

 
 