onEvent('player.logged_in', event => {
    event.server.scheduleInTicks(1, event.server, function(callback){
        callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"欢迎回来!", "color":"aqua", "bold":true}`);
        callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"你正在游玩 Omniworld 1.9.3!", "color":"white", "bold":true}`);
    })
    if (Platform.isLoaded('torcherino')){
        event.server.scheduleInTicks(1, event.server, function(callback){
            callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"======注意======"}, "color":"gold", "bold":"true"`);
            callback.data.runCommandSilent(`/tellraw ${event.player.name} {"text":"你正在使用加速火把模组，遗憾的是它不能加速 Mekanism 等模组的机器。"}, "color":"yellow", "bold":"true"`);
        })
    }
})