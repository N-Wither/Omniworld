onEvent('recipes', event => {
    //Mekanism
    //CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/charged_certus_quartz'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_charged_certus_quartz',
  			amount: 1000,
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
  			slurry: 'emendatusenigmatica:dirty_charged_certus_quartz'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_charged_certus_quartz',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_charged_certus_quartz'
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/charged_certus_quartz'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/charged_certus_quartz'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/charged_certus_quartz'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/charged_certus_quartz'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/charged_certus_quartz'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:charged_certus_quartz_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/charged_certus_quartz'
  			}
  		},
  		output: {
  			item: 'jaopca:dusts.charged_certus_quartz'
  		}
  	})
})