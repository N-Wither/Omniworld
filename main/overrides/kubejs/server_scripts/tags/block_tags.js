//priority: 9

onEvent('block.tags', event => {
	function tagging(tag, target){
		event.get(tag).add(target)
	}
	
	event.get('forge:ores').add('betternether:nether_lapis_ore')
	event.get('forge:ores/lapis').add('betternether:nether_lapis_ore')
	event.get('forge:ores').add('betternether:nether_ruby_ore')
	event.get('forge:ores/ruby').add('betternether:nether_ruby_ore')
	event.get('forge:ores').add('betternether:cincinnasite_ore')
	event.get('forge:ores/cincinnasite').add('betternether:cincinnasite_ore')

	event.get('forge:ores/anemonium').add('omniworldessentials:anemonium_ore')
	event.get('forge:ores/dendronium').add('omniworldessentials:dendronium_ore')
	event.get('forge:ores/hydronium').add('omniworldessentials:hydronium_ore')
	event.get('forge:ores/pyronium').add('omniworldessentials:pyronium_ore')
	event.get('forge:ores/geonium').add('omniworldessentials:geonium_ore')
	event.get('forge:ores/cryonium').add('omniworldessentials:cryonium_ore')
	event.get('forge:ores/electronium').add('omniworldessentials:electronium_ore')
	event.get('forge:ores/azurium').add('omniworldessentials:azurium_ore')

	event.get('forge:ores/rock_crystal').add('astralsorcery:rock_crystal_ore')

	event.get('chisel:seared')
	.add(['tconstruct:seared_stone', 'tconstruct:seared_bricks', 'tconstruct:seared_cracked_bricks', 'tconstruct:seared_fancy_bricks', 'tconstruct:seared_triangle_bricks', 'tconstruct:seared_paver'])

	event.get('chisel:scorched')
	.add(['tconstruct:scorched_stone', 'tconstruct:polished_scorched_stone', 'tconstruct:scorched_bricks', 'tconstruct:scorched_road', 'tconstruct:chiseled_scorched_bricks'])

	tagging('forge:ores/glowstone', 'boss_tools:moon_glowstone_ore')

	tagging('minecraft:beacon_base_blocks', 'kubejs:primomium_block')

	tagging('forge:plants', ['projectvibrantjourneys:short_grass'])
})