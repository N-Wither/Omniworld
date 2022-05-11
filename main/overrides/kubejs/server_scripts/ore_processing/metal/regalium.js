onEvent('recipes', event => {
    
    //Create
    event.recipes.createCrushing([
        'emendatusenigmatica:regalium_crushed',
        Item.of('2x emendatusenigmatica:regalium_crushed').withChance(0.5),
        Item.of('undergarden:depthrock').withChance(0.12)
      ], '#forge:ores/regalium').id('kubejs:compat/create/crushing/regalium')
  
    event.recipes.createMilling('emendatusenigmatica:regalium_crushed', '#forge:ores/regalium').id('kubejs:compat/create/milling/regalium')
})