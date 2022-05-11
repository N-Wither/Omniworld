onEvent('recipes', event => {
    
    // Create
    event.recipes.createCrushing([
        'emendatusenigmatica:thallasium_crushed',
        Item.of('2x emendatusenigmatica:thallasium_crushed').withChance(0.3),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], '#forge:ores/thallasium').id('kubejs:compat/create/crushing/thallasium')
  
      event.recipes.createMilling('emendatusenigmatica:thallasium_crushed', '#forge:ores/thallasium').id('kubejs:compat/create/milling/thallasium')
    // Mekanism
})