onEvent('recipes', event => {
    event.recipes.thermal.crucible(fluid.of('cyclic:xpjuice', 250), 'mysticalagriculture:experience_droplet').id('kubejs:xpjuice/xpdrop')
    event.recipes.thermal.crucible(fluid.of('cyclic:xpjuice', 500), 'miniutilities:experience_pearl').id('kubejs:xpjuice/pearl')
    event.recipes.thermal.crucible(fluid.of('tconstruct:blazing_blood',100), 'minecraft:blaze_rod').id('kubejs:blazing_blood/rod')
    event.recipes.thermal.crucible(fluid.of('tconstruct:blazing_blood',50), 'minecraft:blaze_powder').id('kubejs:blazing_blood/powder')

    event.recipes.thermal.press('chancecubes:compact_giant_chance_cube', '27x chancecubes:chance_cube').id('kubejs:giant_chance_cube')

    
    event.custom({
      "type": "thermal:chiller",
      "ingredients": [
        {
          "fluid_tag": "forge:experience",
          "amount": 500
        },
        {
          "item": "thermal:chiller_ball_cast"
        }
      ],
      "result": [
        {
          "item": "miniutilities:experience_pearl"
        }
      ],
      "energy": 500
    }).id('kubejs:experience_pearl/chilling')
  })