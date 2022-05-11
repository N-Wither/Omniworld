//priority: 9

onEvent('item.tags', event => {
	function tagging(tag, target){
		event.get(tag).add(target)
	}
	
	event.get('forge:ingots').add('kubejs:crystal_matrix_ingot')
	event.get('forge:ingots/crystal_matrix').add('kubejs:crystal_matrix_ingot')

	event.get('forge:storage_blocks/wood').add('thermal:sawdust_block')

	event.get('curios:belt').remove('artifacts:obsidian_skull').remove('artifacts:antidote_vessel').remove('artifacts:universal_attractor').remove('artifacts:crystal_heart').remove('artifacts:cloud_in_a_bottle')
	event.get('curios:charm').add('artifacts:obsidian_skull').add('artifacts:antidote_vessel').add('artifacts:universal_attractor').add('artifacts:crystal_heart').add('artifacts:cloud_in_a_bottle')


	//Astral Sorcery
	event.get('forge:dusts').add('astralsorcery:stardust')
	event.get('forge:dusts/starmetal').add('astralsorcery:stardust')
	event.get('forge:ores/rock_crystal').add('astralsorcery:rock_crystal_ore')

	//Create Deco
	/*
	event.get('forge:plates/zinc').add('createdeco:zinc_sheet')
	event.get('forge:plates/netherite').add('createdeco:netherite_sheet')
	*/

	// Charm
	event.get('forge:nuggets/netherite').add('charm:netherite_nugget')

	// Powah
	event.get('forge:ingots/energized_steel').add('powah:steel_energized')
	event.get('forge:storage_blocks/energized_steel').add('powah:energized_steel_block')

	// Omniworld
	event.get('forge:storage_blocks/hydronium').add('omniworldessentials:hydronium_block')

	// Druidcraft
	event.get('forge:ores').add('druidcraft:fiery_glass_ore')
	event.get('forge:oes/fiery_glass').add('druidcraft:fiery_glass_ore')
	event.get('forge:gems').add('druidcraft:fiery_glass')
	event.get('forge:gems/fiery_glass').add('druidcraft:fiery_glass')

	// Blue Skies
	event.get('forge:ores/diopside').add('blue_skies:everbright_diopside_ore').add('blue_skies:everdawn_diopside_ore')
	event.get('forge:ores/pyrope').add('blue_skies:everbright_pyrope_ore').add('blue_skies:everdawn_pyrope_ore')
	event.get('forge:ores/aquite').add('blue_skies:everbright_aquite_ore').add('blue_skies:everdawn_aquite_ore')
	event.get('forge:ores/charoite').add('blue_skies:everbright_charoite_ore').add('blue_skies:everdawn_charoite_ore')
	event.get('forge:ores/moonstone').add('blue_skies:everbright_moonstone_ore').add('blue_skies:everdawn_moonstone_ore')
	event.get('forge:ores/falsite').add('blue_skies:falsite_ore')
	event.get('forge:ores/ventium').add('blue_skies:ventium_ore')
	event.get('forge:ores/horizonite').add('blue_skies:horizonite_ore')

	event.get('forge:ingots/falsite').add('blue_skies:falsite_ingot')
	event.get('forge:ingots/ventium').add('blue_skies:ventium_ingot')
	event.get('forge:ingots/horizonite').add('blue_skies:horizonite_ingot')

	event.get('forge:gems/diopside').add('blue_skies:diopside_gem')
	event.get('forge:gems/pyrope').add('blue_skies:pyrope_gem')
	event.get('forge:gems/aquite').add('blue_skies:aquite_gem')
	event.get('forge:gems/charoite').add('blue_skies:charoite')
	event.get('forge:gems/moonstone').add('blue_skies:moonstone')

	event.get('forge:storage_blocks/moonstone').add('blue_skies:moonstone_block')
	event.get('forge:storage_blocks/diopside').add('blue_skies:diopside_block')
	event.get('forge:storage_blocks/pyrope').add('blue_skies:pyrope_block')
	event.get('forge:storage_blocks/aquite').add('blue_skies:aquite_block')
	event.get('forge:storage_blocks/charoite').add('blue_skies:charoite_block')
	event.get('forge:storage_blocks/falsite').add('blue_skies:falsite_block')
	event.get('forge:storage_blocks/ventium').add('blue_skies:ventium_block')
	event.get('forge:storage_blocks/horizonite').add('blue_skies:horizonite_block')

	// Chisel

	event.get('forge:storage_blocks/glowstone').add('#chisel:glowstone')
	event.get('minecraft:planks').add('#chisel:planks')
	event.get('forge:storage_blocks/redstone').add('#chisel:redstone')

	event.get('chisel:redstone').add('minecraft:redstone_block')
	event.get('chisel:metals/bronze').add('emendatusenigmatica:bronze_block')
	event.get('chisel:metals/aluminum').add('emendatusenigmatica:aluminum_block')
	event.get('chisel:emerald').add('minecraft:emerald_block')

	event.get('chisel:marble')
	.add('astralsorcery:marble_raw')
	.add('astralsorcery:marble_runed')
	.add('astralsorcery:marble_arch')
	.add('astralsorcery:marble_bricks')
	.add('astralsorcery:marble_chiseled')
	.add('astralsorcery:marble_engraved')
	.add('astralsorcery:marble_pillar')
	.add('quark:marble')
	.add('quark:marble_bricks')
	.add('quark:chiseled_marble_bricks')
	.add('quark:marble_pavement')
	.add('quark:marble_pillar')
	.add('quark:polished_marble')

	event.get('chisel:seared')
	.add(['tconstruct:seared_stone', 'tconstruct:seared_bricks', 'tconstruct:seared_cracked_bricks', 'tconstruct:seared_fancy_bricks', 'tconstruct:seared_triangle_bricks', 'tconstruct:seared_paver'])

	event.get('chisel:scorched')
	.add(['tconstruct:scorched_stone', 'tconstruct:polished_scorched_stone', 'tconstruct:scorched_bricks', 'tconstruct:scorched_road', 'tconstruct:chiseled_scorched_bricks'])

	// Mystical Agriculture

	event.get('mysticalagriculture:essences').remove('mysticalagriculture:inferium_essence')

	event.get('mysticalagriculture:material/saltpeter').add('emendatusenigmatica:potassium_nitrate_dust')
	event.get('mysticalagriculture:material/rubber').add('thermal:rubber')

	// Thermal

	event.get('forge:dusts/ender').add('thermal:ender_pearl_dust')

	event.get('thermal:crafting/dies').add('thermal:chiller_ball_cast')

	// Ceramics

	event.get('create:upright_on_belt')
	.add('ceramics:clay_bucket')
	.add('ceramics:cracked_clay_bucket')

	// Mekanism

	event.get('create:upright_on_belt')
	.add('mekanism:basic_fluid_tank')
	.add('mekanism:advanced_fluid_tank')
	.add('mekanism:elite_fluid_tank')
	.add('mekanism:ultimate_fluid_tank')
	.add('mekanism:creative_fluid_tank')

	// Mythic Botany
	event.get('forge:ores/elementium').add('mythicbotany:elementium_ore')

	// Food
	event.get('forge:crops/chillipepper').add('simplefarming:pepper')
	event.get('forge:vegetables/chillipepper').add('simplefarming:pepper')
	event.get('forge:fruits/cherry').add('simplefarming:cherries').add('forbidden_arcanus:cherry_peach').add('blue_skies:cherry')
	event.get('forge:cookingoil').add('simplefarming:olive_oil')
	event.get('forge:cheese').add('simplefarming:cheese_slice')
	event.get('forge:dough').add('create:dough').add('atum:emmer_dough').add('farmersdelight:wheat_dough')
	event.get('forge:pasta').add('simplefarming:noodles')
	event.get('forge:vinegar').add('simplefarming:vinegar')
	event.get('forge:fruits/gooseberry').add('bayou_blues:gooseberries')
	event.get('forge:fruits/grape').add('simplefarming:grapes')
	event.get('forge:flour').add('atum:emmer_flour')

	// Better Nether
	event.get('forge:gems').add('betternether:nether_ruby')
	event.get('forge:gems/ruby').add('betternether:nether_ruby')
	event.get('forge:storage_blocks').add('betternether:nether_ruby_block')
	event.get('forge:storage_blocks/ruby').add('betternether:nether_ruby_block')
	event.get('forge:ingots').add('betternether:cincinnasite_ingot')
	event.get('forge:ingots/cincinasite').add('betternether:cincinnasite_ingot')
	event.get('forge:storage_blocks').add('betternether:cincinnasite_forged')
	event.get('forge:storage_blocks/cincinasite').add('betternether:cincinnasite_forged')
	event.get('forge:ores').add('betternether:nether_lapis_ore')
	event.get('forge:ores/lapis').add('betternether:nether_lapis_ore')
	event.get('forge:ores').add('betternether:nether_ruby_ore')
	event.get('forge:ores/ruby').add('betternether:nether_ruby_ore')
	event.get('forge:ores').add('betternether:cincinnasite_ore')
	event.get('forge:ores/cincinnasite').add('betternether:cincinnasite_ore')

	// Nature's Minerals
	event.get('create:crushed_ores/thounite').add('natureminerals:thounite_crushed')
	event.get('create:crushed_ores/uvarovite').add('natureminerals:uvarovite_crushed')
	event.get('create:crushed_ores/kunzite').add('natureminerals:kunzite_crushed')
	event.get('create:crushed_ores/stibnite').add('natureminerals:stibnite_crushed')
	event.get('create:crushed_ores/astrite').add('natureminerals:astrite_crushed')

	// Better End
	event.get('forge:storage_blocks/terminite').add('betterendforge:terminite_block')
	event.get('forge:storage_blocks/aeternium').add('betterendforge:aeternium_block')
	event.get('forge:storage_blocks/thallasium').add('betterendforge:thallasium_block')
	event.get('forge:gems/amber').add('betterendforge:amber_gem')
	event.get('forge:dusts/ender').add('betterendforge:ender_dust')

	// TiC Anvil Metals
	const notAnvil = [
		'mekanism:block_bronze',
		'thermal:bronze_block',
		'create:brass_block',
		'thermal:electrum_block',
		'immersiveengineering:storage_electrum',
		'thermal:invar_block',
		'thermal:constantan_block',
		'immersiveengineering:storage_constantan',
		'mekanism:block_steel',
		'immersiveengineering:storage_steel',
		'thermal:enderium_block',
		'thermal:lumium_block',
		'thermal:signalum_block'
	]
	notAnvil.forEach(notAnvil => 
		event.get('tconstruct:anvil_metal').remove(notAnvil)
	)

	event.get('appliedenergistics2:dusts/ender').add('emendatusenigmatica:ender_dust')
	event.get('forge:dusts').add('appliedenergistics2:ender_dust')
	event.get('forge:dusts/ender').add('appliedenergistics2:ender_dust')
	event.get('forge:dusts/ender_pearl').add('appliedenergistics2:ender_dust')

	// Food
	event.get('diet:grains').add('minecraft:bread')

	// FTB Quests
	event.get('itemfilters:check_nbt').add('custommachinery:custom_machine_item')

	// Emendatus Enigmatica
	event.get('forge:gems/certus_quartz').remove([ee+'certus_quartz_gem', ee+'charged_certus_quartz_gem'])
	event.get('forge:gems/charged_certus_quartz').remove(ee+'charged_certus_quartz_gem')
	event.get('forge:dusts/certus_quartz').remove(ee+'certus_quartz_dust')
	event.get('appliedenergistics2:dusts/quartz').remove(ee+'certus_quartz_dust')
	event.get('forge:gems/fluix').remove(ee+'fluix_gem')
	event.get('forge:dusts/fluix').remove(ee+'fluix_dust')

	event.get('forge:dusts/ender_pearl').add('emendatusenigmatica:ender_dust')
	event.get('forge:storage_blocks/mana').add('emendatusenigmatica:arcane_block')
	
	// AE2
	event.get('forge:gems/charged_certus_quartz').add(ae+'charged_certus_quartz_crystal')
	event.get('forge:wrenches').add([ae+'nether_quartz_wrench', ae+'certus_quartz_wrench'])

	// Others
	event.get('forge:dragon_scales').add(['quark:dragon_scale', 'tconstruct:dragon_scale', 'bountifulbaubles:ender_dragon_scale'])
	event.get('forge:flour').add(ae+'flour')
	event.get('diet:grains').add(ae+'flour')
	event.get('forge:storage_blocks').add([ec+'nether_star_block', ec+'the_ultimate_block'])
	event.get('forge:storage_blocks/nether_star').add(ec+'nether_star_block')
	event.get('omniworld:musical_instruments')
		.add([
			'xercamusic:guitar',
			'xercamusic:lyre',
			'xercamusic:banjo',
			'xercamusic:drum',
			'xercamusic:cymbal',
			'xercamusic:drum_kit',
			'xercamusic:xylophone',
			'xercamusic:tubular_bell',
			'xercamusic:sansula',
			'xercamusic:violin',
			'xercamusic:cello',
			'xercamusic:flute',
			'xercamusic:saxophone',
			'xercamusic:god',
			'xercamusic:piano',
			'xercamusic:oboe',
			'xercamusic:redstone_guitar',
			'xercamusic:french_horn',
			'xercamusic:bass_guitar'
		])

	tagging('forge:ores/glowstone', 'boss_tools:moon_glowstone_ore')
	tagging('forge:storage_blocks/ultimate', ec+'the_ultimate_block')
	tagging('forge:ingots', ec+'the_ultimate_ingot')
	tagging('forge:ingots/ultimate', ec+'the_ultimate_ingot')
	tagging('forge:nuggets', [ec+'the_ultimate_nugget','betternether:lapis_pile'])
	tagging('forge:nuggets/ultimate', ec+'the_ultimate_nugget')
	tagging('forge:nuggets/lapis', 'betternether:lapis_pile')

})