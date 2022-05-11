onEvent('recipes', event => {
    
    // Create
    event.recipes.createCrushing([
      'emendatusenigmatica:cloggrum_crushed',
      Item.of('2x emendatusenigmatica:cloggrum_crushed').withChance(0.5),
      Item.of('undergarden:depthrock').withChance(0.12)
    ], '#forge:ores/cloggrum').id('kubejs:compat/create/crushing/cloggrum')

    event.recipes.createMilling('emendatusenigmatica:cloggrum_crushed', '#forge:ores/cloggrum').id('kubejs:compat/create/milling/cloggrum')

    // Mekanism
})