onEvent('recipes', e => {
    // Create
    e.recipes.createMechanicalCrafting('create:creative_motor', [
        ' EEEEE ',
        'GDAAADH',
        'GACBCAH',
        'GABSBAH',
        'GACBCAH',
        'GDAAADH',
        ' FFFFF '
    ], {
        A: 'create:cogwheel',
        B: 'create:large_cogwheel',
        C: 'create:precision_mechanism',
        D: 'create:gearbox',
        E: 'createaddition:overcharged_casing',
        F: 'create:brass_casing',
        G: 'create:shadow_steel_casing',
        H: 'create:refined_radiance_casing',
        S: 'projectex:final_star_shard'
    }).id('kubejs:creative_motor')

    e.recipes.createMixing('create:creative_blaze_cake', [
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blaze_cake"}'),
        'create:blaze_cake_base',
        fluid.of('minecraft:lava', 1000)
    ]).superheated().id('kubejs:creative_blaze_cake')

    e.shapeless('create:creative_crate', ['create:adjustable_crate', 'storagedrawers:creative_vending_upgrade']).id('kubejs:creative_crate')
    
    e.shapeless('create:creative_fluid_tank', ['mekanism:creative_fluid_tank']).id('kubejs:create/creative_fluid_tank')

    // Powah
    e.shapeless('powah:energy_cell_creative', ['mekanism:creative_energy_cube']).id('kubejs:energy_cell_creative_trans')
    /*
    e.custom(
      {
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "powah:energy_cell_creative",
        },
        "catalyst": {
          "item": "powah_energy_cell_nitro"
        },
        "total_energy": 90000000000,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "thermal:rf_coil_creative_augment"
          },
          {
            "item": "draconicevolution:creative_capacitor"
          },
          {
            "item": "projectex:final_star_shard"
          },
          {
            "item": "projectex:final_star_shard"
          },
          {
            "item": "projectex:final_star_shard"
          },
          {
            "item": "mekansim:ultimate_conduction_provider"
          },
          {
            "item": "mekanism:ultimate_conduction_cell"
          },
          {
            "item": "mekansim:ultimate_conduction_provider"
          },
          {
            "item": "mekanism:ultimate_conduction_cell"
          }
        ]
      }
    ).id('kubejs:energy_cell_creative')
    */
    // Botania
    e.custom(
        {
            "type": "mythicbotany:infusion",
            "group": "infuser",
            "output": {
              "item": "botania:creative_pool"
            },
            "mana": 10000000,
            "ingredients": [
              {
                "item": "mythicbotany:asgard_rune"
              },
              {
                "item": "mythicbotany:vanaheim_rune"
              },
              {
                "item": "mythicbotany:alfheim_rune"
              },
              {
                "item": "mythicbotany:midgard_rune"
              },
              {
                "item": "mythicbotany:joetunheim_rune"
              },
              {
                "item": "mythicbotany:muspelheim_rune"
              },
              {
                "item": "mythicbotany:niflheim_rune"
              },
              {
                "item": "mythicbotany:nidavellir_rune"
              },
              {
                "item": "mythicbotany:helheim_rune"
              },
              {
                "item": "botania:fabulous_pool"
              },
              {
                "item": "projectex:final_star_shard"
              },
              {
                "item": "projectex:final_star_shard"
              }
            ],
            "fromColor": 65535,
            "toColor": 16750080
        }
    ).id('kubejs:creative_pool')

    // Refined Storage
    e.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
              "item": "refinedstorage:creative_controller"
            },
            "catalyst": {
              "item": "refinedstorage:controller"
              
            },
            "total_energy": 300000000,
            "tier": "CHAOTIC",
            "ingredients": [
              {
                "item": "extradisks:withering_processor"
              },
              {
                "item": "extrastorage:neural_processor"
              },
              {
                "item": "extradisks:withering_processor"
              },
              {
                "item": "extrastorage:neural_processor"
              },
              {
                "item": "refinedstorage:construction_core"
              },
              {
                "item": "refinedstorage:destruction_core"
              },
              {
                "item": "refinedstorage:machine_casing"
              },
              {
                "item": "projectex:final_star_shard"
              },
            ]
          }
    ).id('kubejs:creative_controller')

    // Storage Drawers
    e.shaped('storagedrawers:creative_storage_upgrade', ['SSS', 'NTN', 'SSS'],
    {
        S: '#forge:rods/wooden',
        N: '#forge:nether_stars',
        T: 'storagedrawers:upgrade_template'
    }).id('kubejs:creative_storage_upgrade')

    // Draconic Evolution
    e.custom(
        {
            "type": "draconicevolution:fusion_crafting",
            "result": {
              "item": "draconicevolution:creative_capacitor"
            },
            "catalyst": {
              "item": "draconicevolution:chaotic_capacitor"
              
            },
            "total_energy": 9000000000,
            "tier": "CHAOTIC",
            "ingredients": [
              {
                "item": "projectex:final_star_shard"
              },
              {
                "item": "projectex:final_star_shard"
              },
              {
                "item": "thermal:rf_coil_creative_augment"
              },
              {
                "item": "draconicevolution:energy_core"
              },
              {
                "item": "draconicevolution:chaotic_energy_core"
              },
              {
                "item": "draconicevolution:chaotic_core"
              },
              {
                "item": "draconicevolution:chaotic_core"
              },
              {
                "item": "draconicevolution:reactor_core"
              }
            ]
          }
    ).id('kubejs:creative_capacitor')

    // Mekanism
    e.shapeless('mekanism:creative_fluid_tank', ['mekanism:creative_fluid_tank']).id('kubejs:mekanism/creative_fluid_tank_empty')

    e.shapeless(Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'), ['powah:energy_cell_creative']).id('kubejs:mekanism/creative_energy_cube_trans')

    e.shapeless('mekanism:creative_chemical_tank', ['mekanism:creative_chemical_tank']).id('kubejs:mekanism/creative_chemical_tank_empty')

    e.shapeless('mekanism:creative_bin', ['mekanism:ultimate_bin', 'storagedrawers:creative_vending_upgrade']).id('kubejs:mekanism/creative_bin')

    e.shapeless('mekanism:creative_fluid_tank', ['create:creative_fluid_tank']).id(kjs + 'mekanism/creative_fluid_tank_trans')
    // Storage Drawers
    e.custom(
      {
        "type": "draconicevolution:fusion_crafting",
        "result": {
          "item": "storagedrawers:creative_vending_upgrade",
          "count": 2
        },
        "catalyst": {
          "item": "storagedrawers:upgrade_template"
          
        },
        "total_energy": 99999999999,
        "tier": "CHAOTIC",
        "ingredients": [
          {
            "item": "projectex:final_star_shard"
          },
          {
            "item": "projectex:final_star_shard"
          },
          {
            "item": "powah:energy_cell_creative"
          },
          {
            "item": "mekanism:creative_fluid_tank"
          },
          {
            "item": "botania:creative_pool"
          },
          {
            "item": "create:creative_motor"
          },
          {
            "item": "storagedrawers:creative_storage_upgrade"
          },
          {
            "item": "mekanism:creative_chemical_tank"
          }
        ]
      }
    )
})