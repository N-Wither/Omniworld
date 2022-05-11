onEvent('recipes', event => {
    
    //Create
    event.recipes.createCrushing([
      'emendatusenigmatica:quartz_dust',
      Item.of('emendatusenigmatica:quartz_dust').withChance(0.3)
    ], 'minecraft:quartz').id('kubejs:compat/create/crushing/quartz')

    //Mekanism
      event.custom({
      type: 'mekanism:dissolution',
        itemInput: {
          ingredient: {
            tag: 'forge:ores/quartz'
          }
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:sulfuric_acid'
        },
        output: {
          slurry: 'emendatusenigmatica:dirty_quartz',
          amount: 3000,
          chemicalType: 'slurry'
        }
      })
      //CHEMICAL WASHER
      event.custom({
        type: 'mekanism:washing',
        fluidInput: {
          amount: 5,
          tag: 'minecraft:water'
        },
        slurryInput: {
          amount: 1,
          slurry: 'emendatusenigmatica:dirty_quartz'
        },
        output: {
          slurry: 'emendatusenigmatica:clean_quartz',
          amount: 1
        }
      })
      //CHEMICAL CRYSTALLIZER
      event.custom({
        type: 'mekanism:crystallizing',
        chemicalType: 'slurry',
        input: {
          amount: 200,
          slurry: 'emendatusenigmatica:clean_quartz'
        },
        output: {
          item: 'emendatusenigmatica:quartz_crystal'
        }
      })
      //CHEMICAL INJECTION CHAMBER
      event.custom({
        type: 'mekanism:injecting',
        itemInput: {
          ingredient: {
            tag: 'mekanism:crystals/quartz'
          }
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        output: {
          item: 'emendatusenigmatica:quartz_shard'
        }
      })
      //[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
      event.custom({
        type: 'mekanism:injecting',
        itemInput: {
          ingredient: {
            tag: 'forge:ores/quartz'
          }
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        output: {
          item: 'emendatusenigmatica:quartz_shard',
          count: 12
        }
      })
      //PURIFICATION CHAMBER
      event.custom({
        type: 'mekanism:purifying',
        itemInput: {
          ingredient: {
            tag: 'mekanism:shards/quartz'
          }
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        output: {
          item: 'emendatusenigmatica:quartz_clump'
        }
      })
      //[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
      event.custom({
        type: 'mekanism:purifying',
        itemInput: {
          ingredient: {
            tag: 'forge:ores/quartz'
          }
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        output: {
          item: 'emendatusenigmatica:quartz_clump',
          count: 9
        }
      })
      //CRUSHER
      event.custom({
        type: 'mekanism:crushing',
        input: {
          ingredient: {
            tag: 'mekanism:clumps/quartz'
          }
        },
        output: {
          item: 'emendatusenigmatica:quartz_dirty_dust'
        }
      })
      //ENRICHMENT CHAMBER
      event.custom({
        type: 'mekanism:enriching',
        input: {
          ingredient: {
            tag: 'mekanism:dirty_dusts/quartz'
          }
        },
        output: {
          item: 'emendatusenigmatica:quartz_dust'
        }
      })
})