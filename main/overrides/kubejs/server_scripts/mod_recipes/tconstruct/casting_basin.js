onEvent('recipes', (event) => {
    const recipes = [
        /*
        {
            "fluid": {
                "tag": "tconstruct:molten_diamond",
                "amount": 1296
            },
            "result": "minecraft:diamond_block",
            "cooling_time": 237
        }
        */
        {
            fluid: {
                name: 'kubejs:molten_blazing_crystal',
                amount: 1296
            },
            result: Item.of('powah:blazing_crystal_block').toJson(),
            cooling_time: 200
        },
        {
            fluid: {
                name: 'kubejs:molten_niotic_crystal',
                amount: 1296
            },
            result: Item.of('powah:niotic_crystal_block').toJson(),
            cooling_time: 240
        },
        {
            fluid: {
                name: 'kubejs:molten_spirited_crystal',
                amount: 1296
            },
            result: Item.of('powah:spirited_crystal_block').toJson(),
            cooling_time: 280
        },
        {
            fluid: {
                name: 'kubejs:molten_nitro_crystal',
                amount: 1296
            },
            result: Item.of('powah:nitro_crystal_block').toJson(),
            cooling_time: 300
        },
        {
            fluid: {
                name: 'thermal:redstone',
                amount: 1296
            },
            result: Item.of('minecraft:redstone_block').toJson(),
            cooling_time: 300
        },
        {
            fluid: {
                name: 'thermal:glowstone',
                amount: 1000
            },
            result: Item.of('minecraft:glowstone').toJson(),
            cooling_time: 280
        },
        {
            fluid: {
                name: 'kubejs:molten_insanium',
                amount: 1296
            },
            result: Item.of('mysticalagradditions:insanium_ingot_block').toJson(),
            cooling_time: 280
        },
        {
            fluid: {
                name: 'kubejs:molten_ultimate',
                amount: 1296
            },
            result: Item.of('extendedcrafting:the_ultimate_block').toJson(),
            cooling_time: 400
        },
        {
            fluid: {
                name: 'kubejs:molten_primomium',
                amount: 1296
            },
            result: Item.of('kubejs:primomium_block').toJson(),
            cooling_time: 300
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:casting_basin',
                fluid: recipe.fluid,
                result: recipe.result,
                cooling_time: recipe.cooling_time
            })
            //.id(recipe.id);
    });
});
