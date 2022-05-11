//priority: 0

onEvent('recipes', (event) => {
    // Mod Compat

    event.replaceInput({}, 'immersiveengineering:storage_electrum', '#forge:storage_blocks/electrum')
    event.replaceInput({}, 'immersiveengineering:storage_copper', '#forge:storage_blocks/copper')
    event.replaceInput({}, 'immersiveengineering:storage_aluminum', '#forge:storage_blocks/aluminum')
    event.replaceInput({}, 'immersiveengineering:storage_lead', '#forge:storage_blocks/lead')
    event.replaceInput({}, 'immersiveengineering:storage_nickel', '#forge:storage_blocks/nickel')
    event.replaceInput({}, 'immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium')
    event.replaceInput({}, 'immersiveengineering:storage_constantan', '#forge:storage_blocks/constantan')
    event.replaceInput({}, 'immersiveengineering:storage_steel', '#forge:storage_blocks/steel')
    event.replaceInput({}, 'immersiveengineering:storage_silver', '#forge:storage_blocks/silver')
    event.replaceInput({}, 'thermal:sawdust', 'emendatusenigmatica:wood_dust')
    event.replaceInput({}, 'tconstruct:cobalt_ingot', '#forge:ingots/cobalt')

    event.remove({id: 'immersiveposts:has_gold_rod'})
    event.remove({id: 'immersiveposts:has_copper_rod'})
    event.remove({id: 'immersiveposts:has_silver_rod'})
    event.remove({id: 'immersiveposts:has_lead_rod'})
    event.remove({id: 'immersiveposts:has_nickel_rod'})
    event.remove({id: 'immersiveposts:has_uranium_rod'})
    event.remove({id: 'immersiveposts:has_constantan_rod'})
    event.remove({id: 'immersiveposts:has_electrum_rod'})
    event.remove({id: 'immersiveengineering:crafting/stick_iron'})
    event.remove({id: 'immersiveengineering:crafting/stick_aluminum'})
    event.remove({id: 'immersiveengineering:crafting/stick_steel'})
    event.remove({id: 'buildersaddition:iron_rod'})

    event.replaceOutput({}, '#forge:silicon', 'emendatusenigmatica:silicon_gem')
    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon')
    event.remove({id: 'refinedstorage:silicon'})
    event.replaceOutput({}, 'mekanism:dust_netherite', 'thermal:netherite_dust')

    //event.replaceOutput({}, 'miniutilities:ender_dust', 'emendatusenigmatica:ender_dust')
    //event.replaceOutput({}, 'betterendforge:ender_dust', 'emendatusenigmatica:ender_dust')
    event.replaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender')

    event.replaceOutput({}, 'thermal:ruby', 'emendatusenigmatica:ruby_gem')
    event.replaceOutput({}, 'thermal:ruby_block', 'emendatusenigmatica:ruby_block')
    event.replaceOutput({}, 'thermal:sapphire', 'emendatusenigmatica:sapphire_gem')
    event.replaceOutput({}, 'thermal:sapphire_block', 'emendatusenigmatica:sapphire_block')

    event.replaceOutput({}, 'rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem')
    event.replaceInput({}, 'rftoolsbase:dimensionalshard', 'emendatusenigmatica:dimensional_gem')

    event.replaceInput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana')
    event.replaceOutput({}, 'ars_nouveau:mana_gem', '#forge:gems/mana')
    event.replaceInput({}, 'ars_nouveau:mana_gem_block', '#forge:storage_blocks/mana')
    event.replaceOutput({}, 'ars_nouveau:mana_gem_block', '#forge:storage_blocks/mana')

    event.replaceInput({}, 'mysticalworld:sapphire_block', '#forge:storage_blocks/sapphire')

    event.replaceInput({}, 'betterendforge:amber_gem', '#forge:gems/amber')

    event.replaceInput({}, 'makanism:dust_coal', '#forge:dusts/coal')

    event.replaceInput({}, 'appliedenergistics2:ender_dust', '#forge:dusts/ender')
    event.replaceInput({}, 'appliedenergistics2:fluix_dust', '#forge:dusts/fluix')
    event.replaceInput({}, 'appliedenergistics2:certus_quartz_crystal', '#forge:gems/certus_quartz')
    event.replaceInput({}, 'appliedenergistics2:fluix_crystal', '#forge:gems/fluix')

    event.replaceOutput(ee+'certus_quartz_dust', ae+'certus_quartz_dust')

    event.replaceInput({}, 'quark:dragon_scale', '#forge:dragon_scales')
    event.replaceInput({}, 'tconstruct:dragon_scale', '#forge:dragon_scales')
    event.replaceInput({}, 'bountifulbaubles:ender_dragon_scale', '#forge:dragon_scales')
    event.replaceInput({}, 'forbidden_arcanus:dragon_scale', '#forge:dragon_scales')

    event.replaceInput({}, 'eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold')
    event.replaceInput({}, 'forbidden_arcanus:arcane_gold_ingot', '#forge:ingots/arcane_gold')
    // Food
    event.replaceInput({}, 'pamhc2crops:chillipepperitem', '#forge:crops/chillipepper')
    event.replaceInput({}, 'pamhc2crops:oatsitem', '#forge:crops/oat')
    event.replaceInput({}, 'pamhc2crops:grapeitem', '#forge:fruits/grape')
    event.replaceInput({mod: ['pamhc2foodcore', 'pamhc2foodextended']}, '#forge:egg', '#forge:eggs')
    event.replaceInput({id: 'pamhc2foodextended:gardensoupitem'}, '#forge:eggs', '#forge:vegetables')
    event.replaceInput({id: 'pamhc2crops:string_fiber'}, '#forge:eggs', '#forge:crops/flax')
    event.replaceInput({}, 'pamhc2trees:orangeitem', '#forge:fruits/orange')
    event.replaceInput({}, 'pamhc2trees:mangoitem', '#forge:fruits/mango')
});