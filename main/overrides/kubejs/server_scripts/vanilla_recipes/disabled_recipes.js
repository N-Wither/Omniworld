// priority: 0

events.listen('recipes', e => {
    const disabledRecipesOutput = [
        'projecte:philosophers_stone',
	    'projecte:transmutation_table',
	    'projecte:transmutation_tablet',
	    'forbidden_arcanus:silver_dragon_scale',
        'cyclic:emerald_chestplate',
        'cyclic:emerald_helmet',
        'cyclic:emerald_leggings',
        'cyclic:emerald_boots',
		'cyclic:crystal_chestplate',
		'cyclic:crystal_helmet',
		'cyclic:crystal_leggings',
		'cyclic:crystal_boots',
		'majobroom:broom_item',
        'xplosives:hydrogen_bomb',
        'projecte:collector_mk1',
        'projecte:alchemical_chest',
        'miniutilities:angel_ring',
        'titanium:iron_gear',
        'titanium:gold_gear',
        'titanium:diamond_gear',
        'mekanism:steel_casing',
        'immersiveengineering:blastfurnace_preheater'
    ]

    disabledRecipesOutput.forEach(disabledRecipesOutput => 
        e.remove({output: disabledRecipesOutput} )
    )

    const disabledRecipesId = [
        'emendatusenigmatica:alloy_dust/signalum',
        'projecte:gem_helmet',
        'projecte:gem_chestplate',
        'projecte:gem_leggings',
        'projecte:gem_boots',
        'projectex:final_star',
        'mekanism:enriching/enriched/carbon',
        'mekanism:infusion_conversion/carbon/from_coal',
        'mekanism:infusion_conversion/carbon/from_coal_block',
        'lazierae2:fluix_aggregator',
        'ae2wtlib:infinity_booster_card',
        'boss_tools:blasting/steel_ingot'
    ]

    disabledRecipesId.forEach(disabledRecipesId => 
        e.remove({id: disabledRecipesId} )
    )

    disabledItems.forEach(disabledItems =>
        e.remove({output: disabledItems})
    )
    
} )
