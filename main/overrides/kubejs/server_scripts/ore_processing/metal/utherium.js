onEvent('recipes', event => {
    
    //Create
    event.recipes.createCrushing([
        'emendatusenigmatica:utherium_crushed',
        Item.of('2x emendatusenigmatica:utherium_crushed').withChance(0.5),
        Item.of('undergarden:depthrock').withChance(0.12)
      ], '#forge:ores/utherium').id('kubejs:compat/create/crushing/utherium')
  
    event.recipes.createMilling('emendatusenigmatica:utherium_crushed', '#forge:ores/utherium').id('kubejs:compat/create/milling/utherium')
})