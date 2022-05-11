// priority: 36

// Taken from Create: Above & Beyond modpack

events.listen('ftbquests.custom_reward', function (event) {
    let reward = event.getReward()
    let id = reward.quest.getCodeString()

    let runCommand = (cmd) => {
        event.server.schedule(10, event.server, function (callback) {
            callback.data.runCommandSilent(cmd)
        })
    }

    if (reward.hasTag('repeatable'))
        runCommand('/ftbquests change_progress ' + event.player.name + ' reset ' + id)
})