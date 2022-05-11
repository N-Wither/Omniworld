onEvent('recipes', event => {
    
    // Create
    event.recipes.createCrushing([
        'emendatusenigmatica:iesnium_crushed',
        Item.of('2x emendatusenigmatica:iesnium_crushed').withChance(0.3),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], '#forge:ores/iesnium').id('kubejs:compat/create/crushing/iesnium')
  
      event.recipes.createMilling('emendatusenigmatica:iesnium_crushed', '#forge:ores/iesnium').id('kubejs:compat/create/milling/iesnium')
    // Mekanism
})