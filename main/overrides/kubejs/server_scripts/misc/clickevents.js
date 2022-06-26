onEvent('block.right_click', event => {
    // Torcherino
    if(event.block.id == 'kubejs:torcherino'){
        event.server.schedule(5, event.server, callback => {
            callback.server.runCommandSilent(`tellraw ${event.player.name} {"text":"然而什么都没有发生...","color":"aqua"}`);
        })
        event.cancel();
        event.player.swingArm(event.hand);
    }

    // Engulfing Lightning
    if((event.block.hasTag('forge:plants') || event.block.hasTag('minecraft:flowers')) && event.hand == MAIN_HAND && event.item.id == 'kubejs:engulfing_lightning'){
        event.server.schedule(5, event.server, callback => {
            let blockx = event.block.x;
            let blocky = event.block.y;
            let blockz = event.block.z;
            event.player.addItemCooldown(event.player.getHeldItem(MAIN_HAND), 30);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #forge:plants`);
            callback.server.runCommandSilent(`fill ${blockx - 8} ${blocky - 1} ${blockz - 8} ${blockx + 8} ${blocky + 1} ${blockz + 8} minecraft:air replace #minecraft:flowers`);
        })
        event.cancel();
        event.player.swingArm(event.hand);
    }
})