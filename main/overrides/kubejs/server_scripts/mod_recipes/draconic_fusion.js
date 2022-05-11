onEvent('recipes', event => {
  
  event.custom(
        {
          "type": "draconicevolution:fusion_crafting",
          "result": {
            "item": "solarflux:sp_de.draconic"
          },
          "catalyst": {
            "count": 2,
            "items": [
              {
                "item": "solarflux:sp_de.wyvern"
              }
            ],
            "type": "draconicevolution:ingredient_stack"
            
          },
          "total_energy": 1280000,
          "tier": "DRACONIC",
          "ingredients": [
            {
              "tag": "forge:ingots/draconium_awakened"
            },
            {
              "item": "draconicevolution:awakened_core"
            },
            {
              "tag": "forge:ingots/draconium_awakened"
            },
            {
              "tag": "forge:ingots/draconium_awakened"
            },
            {
              "item": "draconicevolution:draconic_energy_core"
            },
            {
              "item": "draconicevolution:draconic_energy_core"
            }
          ]
        }
    ).id('kubejs:solarpanel_draconic')

  event.custom(
    {
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "projecte:gem_helmet"
      },
      "catalyst": {
        "item": "projecte:rm_helmet"
      },
      "total_energy": 40000000,
      "tier": "CHAOTIC",
      "ingredients": [
        {
          "item": "projecte:evertide_amulet"
        },
        {
          "item": "projecte:soul_stone"
        },
        {
          "item": "projectex:magnum_star_zwei"
        },
        {
          "item": "mekanism:mekasuit_helmet"
        }
      ]
    }
  ).id('kubejs:gem_helmet')

  event.custom(
    {
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "projecte:gem_chestplate"
      },
      "catalyst": {
        "item": "projecte:rm_chestplate"
      },
      "total_energy": 40000000,
      "tier": "CHAOTIC",
      "ingredients": [
        {
          "item": "projecte:volcanite_amulet"
        },
        {
          "item": "projecte:body_stone"
        },
        {
          "item": "projectex:magnum_star_zwei"
        },
        {
          "item": "mekanism:mekasuit_bodyarmor"
        }
      ]
    }
  ).id('kubejs:gem_chestplate')

  event.custom(
    {
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "projecte:gem_leggings"
      },
      "catalyst": {
        "item": "projecte:rm_leggings"
      },
      "total_energy": 40000000,
      "tier": "CHAOTIC",
      "ingredients": [
        {
          "item": "projecte:black_hole_band"
        },
        {
          "item": "projecte:watch_of_flowing_time"
        },
        {
          "item": "projectex:magnum_star_zwei"
        },
        {
          "item": "mekanism:mekasuit_pants"
        }
      ]
    }
  ).id('kubejs:gem_leggings')

  event.custom(
    {
      "type": "draconicevolution:fusion_crafting",
      "result": {
        "item": "projecte:gem_boots"
      },
      "catalyst": {
        "item": "projecte:rm_boots"
      },
      "total_energy": 40000000,
      "tier": "CHAOTIC",
      "ingredients": [
        {
          "item": "projecte:swiftwolf_rending_gale"
        },
        {
          "item": "projecte:swiftwolf_rending_gale"
        },
        {
          "item": "projectex:magnum_star_zwei"
        },
        {
          "item": "mekanism:mekasuit_boots"
        }
      ]
    }
  ).id('kubejs:gem_boots')
})