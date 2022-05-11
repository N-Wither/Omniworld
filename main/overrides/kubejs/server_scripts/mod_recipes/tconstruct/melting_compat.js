events.listen('recipes', event => {
    //glowstone
    event.custom
    (
        {
            "type": "tconstruct:melting", 
            "ingredient": {"tag": "forge:storage_blocks/glowstone"},
            "result": {"fluid": "thermal:glowstone","amount": 1000},
            "temperature": 850,"time": 300
        }
    )
    event.custom
    (
        {
            "type": "tconstruct:melting", 
            "ingredient": {"tag": "forge:dusts/glowstone"},
            "result": {"fluid": "thermal:glowstone","amount": 250},
            "temperature": 850,"time": 80
        }
    )
 
    // crystal matrix
    event.custom
    (
        {
            "type": "tconstruct:melting",
            "ingredient": {"tag": "forge:ingots/crystal_matrix"},
            "result": {"fluid": "kubejs:molten_crystal_matrix","amount": 144},
            "temperature": 1200,"time": 120
        }
    )

    // insanium
    event.custom
    (
        {
            "type": "tconstruct:melting",
            "ingredient": {"item": "mysticalagradditions:insanium_ingot"},
            "result": {"fluid": "kubejs:molten_insanium","amount": 144},
            "temperature": 1000,"time": 80
        }
    ).id('kubejs:molten_insanium_ingot')
    event.custom
    (
        {
            "type": "tconstruct:melting",
            "ingredient": {"item": "mysticalagradditions:insanium_nugget"},
            "result": {"fluid": "kubejs:molten_insanium","amount": 16},
            "temperature": 1000,"time": 8
        }
    ).id('kubejs:molten_insanium_nugget')
    event.custom
    (
        {
            "type": "tconstruct:melting",
            "ingredient": {"item": "mysticalagradditions:insanium_block"},
            "result": {"fluid": "kubejs:molten_insanium","amount": 1296},
            "temperature": 1000,"time": 240
        }
    ).id('kubejs:molten_insanium_block')
})