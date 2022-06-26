 // priority: 1

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => {
		const craftingPrefix = 'kubejs:crafting/'
		// Misc

		event.shaped('1x forbidden_arcanus:silver_dragon_scale',[
			'DSD',
			'STS',
			'DSD'
		  ], {
			D: 'forbidden_arcanus:arcane_crystal_dust',
			S: '#forge:ingots/silver',
			T: 'forbidden_arcanus:dragon_scale'
		  }).id('kubejs:silver_dragon_scale')
		
		event.shaped('majobroom:broom_item',[
			' PD',
			' SH',
			'S  '
		  ], {
			D: 'minecraft:dragon_breath',
			S: '#forge:rods/wooden',
			P: 'minecraft:phantom_membrane',
			H: 'minecraft:hay_block'
		  }).id('kubejs:majo_broom')
		
		event.shaped('xplosives:hydrogen_bomb',[
			'AAA',
			'ABA',
			'AAA'
		  ], {
			A: 'xplosives:packed_tnt',
			B: 'xplosives:incendiary_bomb'
		  })
		
		event.shaped('projecte:collector_mk1',[
			'ACA',
			'ABA',
			'ADA'
		  ], {
			A: 'minecraft:glowstone',
			B: 'projecte:aeternalis_fuel_block',
			C: '#forge:glass',
			D: 'minecraft:furnace'
		  }).id('kubejs:collector_mk1')
		
		event.shaped('projecte:alchemical_chest',[
			'ABC',
			'DED',
			'FGF'
		  ], {
			A: 'projecte:low_covalence_dust',
			B: 'projecte:medium_covalence_dust',
			C: 'projecte:high_covalence_dust',
			D: '#forge:stone',
			E: 'projecte:aeternalis_fuel',
			F: '#forge:ingots/iron',
			G: '#forge:chests/wooden'
		  }).id('kubejs:alchemical_chest')
		event.shaped('3x minecraft:glass_bottle',[
			'G G',
			' G '
		],{
			G: '#forge:glass/colorless'
		}).id('kubejs:glass_bottle')

		event.shapeless(Item.of('patchouli:guide_book', {"patchouli:book":"patchouli:omniguide"}),['4x minecraft:stick']).id('kubejs:omniworld_guidebook')

		event.shaped('kubejs:diamond_lattice',[
			'D D',
			' D ',
			'D D'
		],{
			D: 'minecraft:diamond'
		}).id('kubejs:diamond_lattice')

		event.shaped('kubejs:crystal_matrix_ingot',[
			'DSD',
			'DSD'
		],{
			D: 'kubejs:diamond_lattice',
			S: '#forge:nether_stars'
		}).id('kubejs:crystal_matrix_ingot')

		event.shaped('miniutilities:angel_ring',[
			'GOG',
			'OSO',
			'UOU'
		],{
			G: '#forge:glass',
			O: 'minecraft:gold_ingot',
			S: 'miniutilities:nether_star_opinium_core',
			U: 'miniutilities:unstable_ingot'
		}).id('miniutilities:angel_ring')

		event.shapeless('kubejs:taiyaki', ['2x #forge:flour', '#forge:sugar', 'neapolitan:roasted_adzuki_beans']).id('kubejs:crafting/taiyaki')
		event.shapeless('kubejs:primomium_block', ['9x #forge:ingots/primomium']).id(craftingPrefix+'primomium_block')
		event.shapeless('9x kubejs:primomium_ingot', ['#forge:storage_blocks/primomium']).id(craftingPrefix+'primomium_ingot')

		event.shaped('kubejs:tool_upgrade_fortune', ['FLR','LPL','CLD'], {
			F: ['minecraft:cornflower', 'minecraft:blue_orchid'],
			L: '#forge:storage_blocks/lapis',
			R: 'minecraft:rabbit_foot',
			P: Item.of('tconstruct:large_plate', '{Material:"kubejs:primomium"}'),
			C: 'minecraft:golden_carrot',
			D: '#forge:gems/diamond'
		}).id(craftingPrefix+'tool_upgrade_fortune')

		event.shaped('kubejs:tool_upgrade_sharpness', ['SQS','QPQ','SQS'], {
			S: 'minecraft:iron_sword',
			Q: '#forge:storage_blocks/quartz',
			P: Item.of('tconstruct:large_plate', '{Material:"kubejs:primomium"}')
		}).id(craftingPrefix+'tool_upgrade_sharpness')
		
		// Minecraft

		event.shapeless('4x minecraft:clay_ball', ['minecraft:clay'])
		event.shapeless('4x minecraft:glowstone_dust', ['minecraft:glowstone'])
		event.shapeless('4x minecraft:quartz', ['minecraft:quartz_block'])

		event.shaped('minecraft:furnace', [ 'CCC', 'C C', 'CCC'], { C: '#forge:cobblestone' }).id('kubejs:furnace')

		event.shaped('minecraft:chest',['PPP', 'P P', 'PPP' ],{
			P: '#minecraft:planks'
		}).id('kubejs:chest_alt')
		event.shaped('4x minecraft:chest',['LLL', 'L L', 'LLL'],{
			L: '#minecraft:logs'
		}).id('kubejs:chest_from_log')
		event.shaped('16x minecraft:stick',[
			'L',
			'L'
		],{
			L: '#minecraft:logs'
		}).id('kubejs:stick_from_log')

		event.shapeless('minecraft:trapped_chest',['minecraft:chest', 'minecraft:tripwire_hook']).id('kubejs:trapped_chest')

		event.shapeless('4x emendatusenigmatica:signalum_dust',['3x #forge:dusts/copper', '#forge:dusts/silver', '4x #forge:dusts/redstone'])

		// Solar Flux

		event.remove({id: 'solarflux:draconic_panel'})

		// Atum

		event.shapeless('9x atum:nebu_drop', 'atum:nebu_ingot').id('kubejs:nebu_drop')

		// Immersive Petro

		event.shaped('8x immersivepetroleum:asphalt', ['SBS', 'GWG', 'SBS'], {
			S: '#minecraft:sand',
			B: 'emendatusenigmatica:bitumen_gem',
			G: '#forge:gravel',
			W: 'minecraft:water_bucket'
		}).id('kubejs:asphalt')
		event.shaped('12x immersivepetroleum:asphalt', ['SBS', 'GWG', 'SBS'], {
			S: '#forge:slag',
			B: 'emendatusenigmatica:bitumen_gem',
			G: '#forge:gravel',
			W: 'minecraft:water_bucket'
		}).id('kubejs:asphalt2')

		// BYG

		event.replaceInput({id: 'byg:blue_sand'}, 'minecraft:lapis_lazuli', '#forge:dyes/blue')

		// ProjectEX

		event.shaped('projectex:stone_table', ['SSS', 'STS', 'SSS'], {
			S: '#forge:stone',
			T: 'projecte:transmutation_table'
		}).id('projectex:stone_table')

		// Custom Machinery

		event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:fluid_converter"}'), ['RIR', 'BSB', 'RIR'], {
			R: '#forge:dusts/redstone',
			I: '#forge:ingots/iron',
			B: 'minecraft:bucket',
			S: 'mekanism:steel_casing'
		}).id('kubejs:fluid_converter')
		event.shaped(Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:advanced_energizing_orb"}'), ['RRR', 'COC', 'PPP'], {
			R: 'powah:energizing_rod_starter',
			C: 'powah:dielectric_casing',
			O: 'powah:energizing_orb',
			P: 'powah:capacitor_basic_large'
		}).id('kubejs:advanced_energizing_orb')

		// FTB Power Pots
		event.shaped('ftb-power-pots:power_pot_mk1', ['IDI','DPD','IRI'], {
			I: '#forge:storage_blocks/iron',
			D: '#forge:ingots/dendronium',
			P: '#botanypots:hopper_botany_pots',
			R: 'thermal:rf_coil'
		}).id('kubejs:power_pot_mk1')
		event.shaped('ftb-power-pots:power_pot_mk2', ['IDI','DPD','IRI'], {
			I: '#forge:storage_blocks/steel',
			D: '#forge:ingots/geonium',
			P: 'ftb-power-pots:power_pot_mk1',
			R: '#forge:circuits/advanced'
		}).id('kubejs:power_pot_mk2')
		event.shaped('ftb-power-pots:power_pot_mk3', ['IDI','DPD','IRI'], {
			I: '#forge:storage_blocks/invar',
			D: '#forge:ingots/hydronium',
			P: 'ftb-power-pots:power_pot_mk2',
			R: 'draconicevolution:draconium_core'
		}).id('kubejs:power_pot_mk3')
		event.shaped('ftb-power-pots:power_pot_mk4', ['IDI','DPD','IRI'], {
			I: '#forge:storage_blocks/enderium',
			D: '#forge:storage_blocks/draconium',
			P: 'ftb-power-pots:power_pot_mk3',
			R: 'draconicevolution:awakened_core'
		}).id('kubejs:power_pot_mk4')

		//Create
		event.shaped('6x create:belt_connector', ['RRR', 'RRR'], {
			R: 'thermal:cured_rubber'
		}).id('kubejs:belt_connector_from_rubber')

		//PipeZ
		event.replaceInput({id: 'pipez:ultimate_upgrade'}, 'minecraft:netherite_ingot', '#forge:nuggets/netherite')

		//Mekanism
		event.replaceInput({id: 'mekanism:metallurgic_infuser'}, '#forge:ingots/osmium', 'mekanism:steel_casing')
		event.shaped('mekanism:steel_casing', ['SGS', 'GOG', 'SGS'], {
			S: 'immersiveengineering:component_steel',
			G: '#thermal:glass/hardened',
			O: '#forge:ingots/osmium'
		}).id('kubejs:steel_casing')

		//Thermal
		event.replaceInput({id: 'thermal:machine_frame'}, '#forge:ingots/iron', '#forge:plates/iron')

		//Immersive Engineering
		event.shaped('immersiveengineering:blastfurnace_preheater', ['III', 'IFI', 'IHI'], {
			I: '#forge:sheetmetals/iron',
			F: 'create:encased_fan',
			H: 'createaddition:heater'
		}).id('kubejs:blastfurnace_preheater')

		//Lazier AE2
		event.shaped('lazierae2:aggregator', ['HHH', 'RLR', 'PCP'], {
			H: 'minecraft:hopper',
			R: '#forge:dusts/redstone',
			L: 'lazierae2:logic_unit',
			P: ae+'logic_processor',
			C: ae+'condenser'
		}).id(kjs+'lazierae2/aggregator')
		event.replaceInput({id: 'lazierae2:growth_chamber'}, ae+'molecular_assembler', ae+'fluix_glass_cable')
		event.replaceInput({id: 'lazierae2:centrifuge'}, 'lazierae2:speculative_processor', ae+'molecular_assembler')
		event.replaceInput({id: 'lazierae2:etcher'}, 'lazierae2:speculative_processor', ae+'engineering_processor')
		event.replaceInput({id: 'lazierae2:universal_press'}, ae+'singularity', ae+'matter_ball')

		//AE2WTLIB
		event.shaped('ae2wtlib:infinity_booster_card', ['PSP', ' R '], {
			P: ae+'fluix_pearl',
			S: 'lazierae2:speculative_processor',
			R: ae+'wireless_receiver'
		}).id(kjs+'ae2wtlib/infinity_booster_card')

})