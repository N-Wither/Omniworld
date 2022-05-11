onEvent('recipes', (event) => {
    const recipes = [
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:steel_energized'
            },
            result: {
                fluid: 'kubejs:molten_energized_steel',
                amount: 144
            },
            temperature: 750,
            time: 41,
            id: 'kubejs:smeltery/melting/metal/energized_steel/ingot'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:energized_steel_block'
            },
            result: {
                fluid: 'kubejs:molten_energized_steel',
                amount: 1296
            },
            temperature: 750,
            time: 361,
            id: 'kubejs:smeltery/melting/metal/energized_steel/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:crystal_blazing'
            },
            result: {
                fluid: 'kubejs:molten_blazing_crystal',
                amount: 144
            },
            temperature: 900,
            time: 41,
            id: 'kubejs:smeltery/melting/metal/blazing_crystal'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:blazing_crystal_block'
            },
            result: {
                fluid: 'kubejs:molten_blazing_crystal',
                amount: 1296
            },
            temperature: 900,
            time: 321,
            id: 'kubejs:smeltery/melting/metal/blazing_crystal/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:crystal_niotic'
            },
            result: {
                fluid: 'kubejs:molten_niotic_crystal',
                amount: 144
            },
            temperature: 1000,
            time: 61,
            id: 'kubejs:smeltery/melting/metal/niotic_crystal'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:niotic_crystal_block'
            },
            result: {
                fluid: 'kubejs:molten_niotic_crystal',
                amount: 1296
            },
            temperature: 1000,
            time: 481,
            id: 'kubejs:smeltery/melting/metal/niotic_crystal/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:crystal_spirited'
            },
            result: {
                fluid: 'kubejs:molten_spirited_crystal',
                amount: 144
            },
            temperature: 1000,
            time: 61,
            id: 'kubejs:smeltery/melting/metal/spirited_crystal'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:spirited_crystal_block'
            },
            result: {
                fluid: 'kubejs:molten_spirited_crystal',
                amount: 1296
            },
            temperature: 1000,
            time: 481,
            id: 'kubejs:smeltery/melting/metal/spirited_crystal/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:crystal_nitro'
            },
            result: {
                fluid: 'kubejs:molten_nitro_crystal',
                amount: 144
            },
            temperature: 1200,
            time: 81,
            id: 'kubejs:smeltery/melting/metal/nitro_crystal'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'powah:nitro_crystal_block'
            },
            result: {
                fluid: 'kubejs:molten_nitro_crystal',
                amount: 1296
            },
            temperature: 1200,
            time: 641,
            id: 'kubejs:smeltery/melting/metal/nitro_crystal/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:ingots/crystal_matrix'
            },
            result: {
                fluid: 'kubejs:molten_crystal_matrix',
                amount: 144
            },
            temperature: 1200,
            time: 81,
            id: 'kubejs:smeltery/melting/metal/crystal_matrix/ingot'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'botania:gaia_ingot'
            },
            result: {
                fluid: 'kubejs:molten_gaia_spirit',
                amount: 144
            },
            temperature: 1200,
            time: 81,
            id: 'kubejs:smeltery/melting/metal/gaia_spirit/ingot'
        },


        {
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:storage_blocks/redstone'
            },
            result: {
                fluid: 'thermal:redstone',
                amount: 900
            },
            temperature: 900,
            time: 320,
            id: 'kubejs:smeltery/melting/redstone/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                tag: 'forge:dusts/redstone'
            },
            result: {
                fluid: 'thermal:redstone',
                amount: 100
            },
            temperature: 900,
            time: 81,
            id: 'kubejs:smeltery/melting/redstone/dust'
        },

        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'extendedcrafting:the_ultimate_ingot'
            },
            result: {
                fluid: 'kubejs:molten_ultimate',
                amount: 144
            },
            temperature: 3000,
            time: 100,
            id: 'kubejs:smeltery/melting/ultimate/ingot'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'extendedcrafting:the_ultimate_block'
            },
            result: {
                fluid: 'kubejs:molten_ultimate',
                amount: 1296
            },
            temperature: 3000,
            time: 400,
            id: 'kubejs:smeltery/melting/ultimate/block'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'extendedcrafting:the_ultimate_nugget'
            },
            result: {
                fluid: 'kubejs:molten_ultimate',
                amount: 16
            },
            temperature: 3000,
            time: 10,
            id: 'kubejs:smeltery/melting/ultimate/nugget'
        },

        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'kubejs:primomium_ingot'
            },
            result: {
                fluid: 'kubejs:molten_primomium',
                amount: 144
            },
            temperature: 2500,
            time: 80,
            id: 'kubejs:smeltery/melting/primomium/ingot'
        },
        {
            type: 'tconstruct:melting',
            ingredient: {
                item: 'kubejs:primomium_block'
            },
            result: {
                fluid: 'kubejs:molten_primomium',
                amount: 1296
            },
            temperature: 2500,
            time: 350,
            id: 'kubejs:smeltery/melting/primomium/block'
        },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:melting',
                ingredient: recipe.ingredient,
                result: recipe.result,
                temperature: recipe.temperature,
                time: recipe.time,
                byproducts: recipe.byproducts
            })
            .id(recipe.id);
    });
});