onEvent('player.logged_in', event => {
    event.server.scheduleInTicks(1, event.server, function(callback){
        callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"欢迎回来!", "color":"aqua", "bold":true}`)
        callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"你正在游玩 Omniworld 1.9.2!", "color":"white", "bold":true}`)
    })
})