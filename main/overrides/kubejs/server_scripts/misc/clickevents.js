onEvent('block.right_click', event => {
    if(event.block.id == 'kubejs:torcherino'){
        event.server.schedule(5, event.server, callback =>{
            callback.server.runCommandSilent(`tellraw ${event.player.name} {"text":"然而什么都没有发生...","color":"aqua"}`)
        })
    }
})