onEvent('recipes', event => {
    
    // Create
    event.recipes.createCrushing([
        'emendatusenigmatica:cobalt_crushed',
        Item.of('2x emendatusenigmatica:cobalt_crushed').withChance(0.3),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], '#forge:ores/cobalt').id('kubejs:compat/create/crushing/cobalt')
  
      event.recipes.createMilling('emendatusenigmatica:cobalt_crushed', '#forge:ores/cobalt').id('kubejs:compat/create/milling/cobalt')
    // Mekanism
})