//
// color
//

const { BotkitConversation } = require( 'botkit' ); module.exports = function( controller ) {
    const convo = new BotkitConversation( 'info_chat', controller );
    convo.say( '방진혁/jinhyuk0103@gmail.com/Ajou.univ/🧑‍💻' ); 
    controller.addDialog( convo );
    controller.hears( '방진혁', 'message,direct_message', async( bot, message ) => {
    await bot.beginDialog( 'info_chat' ); });
    controller.commandHelp.push( { command: '방진혁', text: '방진혁\'s info' } );
    }