events.listen('player.chat', function (event) {
    // Check if message equals creeper, ignoring case
    if (event.message.trim().equalsIgnoreCase('-purge')) {
      // Schedule task in 1 tick, because if you reply immidiently, it will print before player's message
      event.server.scheduleInTicks(1, event.server, function (callback) {
        callback.data.tell('\u00A7b正在清理掉落物！')
        callback.data.runCommandSilent(`/kill @e[type=item]`)
      })
      event.cancel()
    }

    if (event.message.trim().equalsIgnoreCase('-book')) {
        event.server.scheduleInTicks(1, event.server, function (callback) {
          callback.data.tell('\u00A7b给！放在工作台里面获得完整的书！')
          callback.data.runCommandSilent(`/give ${event.player.name} akashictome:tome`)
      })
      event.cancel()
    }

    if (event.message.trim().equalsIgnoreCase('-suicide')) {
      event.server.scheduleInTicks(1, event.server, function (callback) {
        callback.data.tell('\u00A7b满足你的愿望！')
        callback.data.runCommandSilent(`/kill ${event.player.name}`)
      })
      event.cancel()
    }
  })