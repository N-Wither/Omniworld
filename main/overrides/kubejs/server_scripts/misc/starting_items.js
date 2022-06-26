onEvent('player.logged_in', event => {
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Give some items to player
      event.player.give('prefab:item_start_house')
      event.player.give(akashictome)
      event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:omniguide"}'))
    }
  })