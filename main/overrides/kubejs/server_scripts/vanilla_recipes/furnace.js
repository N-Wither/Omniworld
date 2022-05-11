onEvent('recipes',e => {
    e.smelting('atum:nebu_ingot', '#forge:dusts/nebu').xp(0.1).id('kubsjs:compat/minecraft/smelting/nebu')
    e.smelting('undergarden:froststeel_ingot', '#forge:dusts/froststeel').xp(0.1).id('kubejs:compat/minecraft/smelting/froststeel')
    e.smelting('undergarden:cloggrum_ingot', '#forge:dusts/cloggrum').xp(0.1).id('kubejs:compat/minecraft/smelting/cloggrum')
    e.smelting('undergarden:utherium_ingot', '#forge:dusts/utherium').xp(0.1).id('kubejs:compat/minecraft/smelting/utherium')
    e.smelting('undergarden:regalium_ingot', '#forge:dusts/regalium').xp(0.1).id('kubejs:compat/minecraft/smelting/regalium')
    e.replaceInput({id: 'emendatusenigmatica:silicon_from_quartz/smelting/nether_quartz'}, 'minecraft:quartz', '#forge:dusts/quartz')
})