events.listen('recipes', event => {
// mana
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/mana'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_arcane',
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
  			slurry: 'emendatusenigmatica:dirty_arcane'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_arcane',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_arcane'
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/arcane'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/mana'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/arcane'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/arcane'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/arcane'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:arcane_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/arcane'
  			}
  		},
  		output: {
  			item: 'botania:mana_powder'
  		}
  	})

// thallasium
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/thallasium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_thallasium',
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
  			slurry: 'emendatusenigmatica:dirty_thallasium'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_thallasium',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_thallasium'
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/thallasium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/thallasium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/thallasium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/thallasium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/thallasium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/thallasium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/thallasium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:thallasium_dust',
  			count: 2
  		}
  	})

// iesnium
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iesnium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_iesnium',
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
  			slurry: 'emendatusenigmatica:dirty_iesnium'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_iesnium',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_iesnium'
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/iesnium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iesnium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/iesnium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iesnium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/iesnium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:iesnium_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/iesnium'
  			}
  		},
  		output: {
  			item: 'occultism:iesnium_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/iesnium'
  			}
  		},
  		output: {
  			item: 'occultism:iesnium_dust',
  			count: 2
  		}
  	})

// regalium
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/regalium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_regalium',
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
  			slurry: 'emendatusenigmatica:dirty_regalium'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_regalium',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_regalium'
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/regalium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/regalium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/regalium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/regalium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/regalium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/regalium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/regalium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:regalium_dust',
  			count: 2
  		}
  	})

// utherium
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/utherium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_utherium',
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
  			slurry: 'emendatusenigmatica:dirty_utherium'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_utherium',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_utherium'
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/utherium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/utherium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/utherium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/utherium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/utherium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/utherium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/utherium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:utherium_dust',
  			count: 2
  		}
  	})

// froststeel
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/froststeel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_froststeel',
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
  			slurry: 'emendatusenigmatica:dirty_froststeel'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_froststeel',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_froststeel'
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/froststeel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/froststeel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/froststeel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/froststeel'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/froststeel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/froststeel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/froststeel'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:froststeel_dust',
  			count: 2
  		}
  	})

// cloggrum
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cloggrum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_cloggrum',
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
  			slurry: 'emendatusenigmatica:dirty_cloggrum'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_cloggrum',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_cloggrum'
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/cloggrum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cloggrum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/cloggrum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/cloggrum'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/cloggrum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/cloggrum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/cloggrum'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:cloggrum_dust',
  			count: 2
  		}
  	})

// nebu
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nebu'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_nebu',
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
  			slurry: 'emendatusenigmatica:dirty_nebu'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_nebu',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_nebu'
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/nebu'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nebu'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/nebu'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/nebu'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/nebu'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/nebu'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/nebu'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:nebu_dust',
  			count: 2
  		}
  	})

//ruby
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/ruby'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_ruby',
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
  			slurry: 'emendatusenigmatica:dirty_ruby'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_ruby',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_ruby'
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/ruby'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/ruby'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/ruby'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/ruby'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/ruby'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/ruby'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:ruby_dust'
  		}
  	})

//sapphire
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sapphire'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_sapphire',
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
  			slurry: 'emendatusenigmatica:dirty_sapphire'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_sapphire',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_sapphire'
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/sapphire'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sapphire'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/sapphire'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/sapphire'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/sapphire'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/sapphire'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:sapphire_dust'
  		}
  	})

// iridium
	//CHEMICAL DISSOLUTION
	event.custom({
		type: 'mekanism:dissolution',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iridium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:sulfuric_acid'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:dirty_iridium',
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
  			slurry: 'emendatusenigmatica:dirty_iridium'
  		},
  		output: {
  			slurry: 'emendatusenigmatica:clean_iridium',
  			amount: 1
  		}
  	})
  	//CHEMICAL CRYSTALLIZER
  	event.custom({
  		type: 'mekanism:crystallizing',
  		chemicalType: 'slurry',
  		input: {
  			amount: 200,
  			slurry: 'emendatusenigmatica:clean_iridium'
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_crystal'
  		}
  	})
  	//CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:crystals/iridium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_shard'
  		}
  	})
  	//[DIRECTLY FROM ORE 4x]CHEMICAL INJECTION CHAMBER
  	event.custom({
  		type: 'mekanism:injecting',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iridium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:hydrogen_chloride'
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_shard',
  			count: 4
  		}
  	})
  	//PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'mekanism:shards/iridium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_clump'
  		}
  	})
  	//[DIRECTLY FROM ORE 3x]PURIFICATION CHAMBER
  	event.custom({
  		type: 'mekanism:purifying',
  		itemInput: {
  			ingredient: {
  				tag: 'forge:ores/iridium'
  			}
  		},
  		gasInput: {
  			amount: 1,
  			gas: 'mekanism:oxygen'
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_clump',
  			count: 3
  		}
  	})
  	//CRUSHER
  	event.custom({
  		type: 'mekanism:crushing',
  		input: {
  			ingredient: {
  				tag: 'mekanism:clumps/iridium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_dirty_dust'
  		}
  	})
  	//ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'mekanism:dirty_dusts/iridium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_dust'
  		}
  	})
  	//[DIRECTLY FROM ORE 2x]ENRICHMENT CHAMBER
  	event.custom({
  		type: 'mekanism:enriching',
  		input: {
  			ingredient: {
  				tag: 'forge:ores/iridium'
  			}
  		},
  		output: {
  			item: 'emendatusenigmatica:iridium_dust',
  			count: 2
  		}
  	})
})