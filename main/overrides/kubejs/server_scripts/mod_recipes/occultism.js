events.listen('recipes', e => {
    e.custom(
        {
            "type": "occultism:ritual",
            "ritual_type": "occultism:craft_with_spirit_name",
            "activation_item": {
              "item": "astralsorcery:shifting_star"
            },
            "pentacle_id": "occultism:craft_djinni",
            "duration": 60,
            "ritual_dummy": {
              "item": "projecte:philosophers_stone"
            },
            "ingredients": [
              {
                "tag": "forge:ingots/draconium_awakened"
              },
              {
                "tag": "forge:ingots/draconium_awakened"
              },
              {
                "item": "botania:dragonstone_block"
              },
              {
                "item": "botania:dragonstone_block"
              },
              {
                "tag": "forge:nether_stars"
              },
              {
                "tag": "forge:nether_stars"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "betterendforge:eternal_crystal"
              },
              {
                "item": "tomeofblood:blood_gem"
              },
              {
                "item": "tomeofblood:blood_gem"
              }
            ],
            "result": {
              "item": "projecte:philosophers_stone"
            }
          }
    ).id('kubejs:philosophers_stone')
})