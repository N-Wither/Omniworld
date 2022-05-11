events.listen('recipes', event => {

    event.custom(
        {
            "type": "tconstruct:alloy",
            "inputs": [
                {
                    "name": "minecraft:lava",
                    "amount": 3
                },
                {
                    "name": "tconstruct:blood",
                    "amount": 3
                },
                ],
            "result": {
                "fluid": "natureminerals:blood_lava",
                "amount": 4
            },
        "temperature": 1000
        }
    ).id('kubejs:blood_lava')

    event.custom(
        {
            "type": "tconstruct:alloy",
            "inputs": [
                {
                    "name": "natureminerals:blood_lava",
                    "amount": 3
                },
                {
                    "name": "tconstruct:blazing_blood",
                    "amount": 3
                },
                ],
            "result": {
                "fluid": "natureminerals:scorching_blood",
                "amount": 4
            },
        "temperature": 1500
        }
    ).id('kubejs:scorching_blood')

    event.custom(
        {
            "type": "tconstruct:alloy",
            "inputs": [
                {
                    "name": "natureminerals:molten_astrite",
                    "amount": 4
                },
                {
                    "name": "natureminerals:molten_stibnite",
                    "amount": 4
                },
                {
                    "name": "tconstruct:molten_hepatizon",
                    "amount": 2
                },
                {
                    "name": "natureminerals:blood_lava",
                    "amount": 3
                }
                ],
            "result": {
                "fluid": "natureminerals:molten_thounite",
                "amount": 2
            },
        "temperature": 2500
        }
    ).id('kubejs:molten_thounite')

    event.custom(
        {
            "type": "tconstruct:alloy",
            "inputs": [
                {
                    "tag": "forge:molten_anemonium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_hydronium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_pyronium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_cryonium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_geonium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_electronium",
                    "amount": 1
                },
                {
                    "tag": "forge:molten_dendronium",
                    "amount": 1
                },
                ],
            "result": {
                "fluid": "kubejs:molten_primomium",
                "amount": 1
            },
        "temperature": 2500
        }
    ).id('kubejs:tconstruct/alloy/primomium')
})