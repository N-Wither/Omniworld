onEvent('recipes', event => {

    //Create
    event.recipes.createCrushing([
        'emendatusenigmatica:froststeel_crushed',
        Item.of('2x emendatusenigmatica:froststeel_crushed').withChance(0.5),
        Item.of('undergarden:shiverstone').withChance(0.12)
      ], '#forge:ores/froststeel').id('kubejs:compat/create/crushing/froststeel')
  
      event.recipes.createMilling('emendatusenigmatica:froststeel_crushed', '#forge:ores/froststeel').id('kubejs:compat/create/milling/froststeel')
})