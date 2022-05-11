onEvent('recipes', event => {

    //Create
    event.recipes.createCrushing([
        'emendatusenigmatica:nebu_crushed',
        Item.of('2x emendatusenigmatica:nebu_crushed').withChance(0.3),
        Item.of('atum:limestone_cracked').withChance(0.12)
      ], '#forge:ores/nebu').id('kubejs:compat/create/crushing/nebu')
  
      event.recipes.createMilling('emendatusenigmatica:nebu_crushed', '#forge:ores/nebu').id('kubejs:compat/create/milling/nebu')
})