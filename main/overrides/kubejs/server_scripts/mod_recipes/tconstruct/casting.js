onEvent('recipes', (event) => {
    const recipes = [
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_gaia_spirit',
                amount: 144
            },
            result: Item.of('botania:gaia_ingot').toResultJson(),
            cooling_time: 100,
            id: 'tconstruct:kjs_gaia_ingot_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_gaia_spirit',
                amount: 144
            },
            result: Item.of('botania:gaia_ingot').toResultJson(),
            cooling_time: 100,
            id: 'tconstruct:kjs_gaia_ingot_cast_sand'
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_insanium',
                amount: 144
            },
            result: Item.of('mysticalagradditions:insanium_ingot').toResultJson(),
            cooling_time: 60,
            id: 'tconstruct:kjs_insanium_ingot_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/ingot'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_insanium',
                amount: 144
            },
            result: Item.of('mysticalagradditions:insanium_ingot').toResultJson(),
            cooling_time: 60,
            id: 'tconstruct:kjs_insanium_ingot_cast_sand'
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/nugget'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_insanium',
                amount: 16
            },
            result: Item.of('mysticalagradditions:insanium_nugget').toResultJson(),
            cooling_time: 6,
            id: 'tconstruct:kjs_insanium_nugget_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/nugget'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_insanium',
                amount: 16
            },
            result: Item.of('mysticalagradditions:insanium_nugget').toResultJson(),
            cooling_time: 6,
            id: 'tconstruct:kjs_insanium_nugget_cast_sand'
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_ultimate',
                amount: 144
            },
            result: Item.of('extendedcrafting:the_ultimate_ingot').toResultJson(),
            cooling_time: 200,
            id: 'tconstruct:kjs_ultimate_ingot_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_ultimate',
                amount: 144
            },
            result: Item.of('extendedcrafting:the_ultimate_ingot').toResultJson(),
            cooling_time: 200,
            id: 'tconstruct:kjs_ultimate_ingot_cast_sand'
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/nugget'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_ultimate',
                amount: 16
            },
            result: Item.of('extendedcrafting:the_ultimate_nugget').toResultJson(),
            cooling_time: 20,
            id: 'tconstruct:kjs_ultimate_nugget_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/nugget'
            },
            cast_consumed: true,
            fluid: {
                name: 'kubejs:molten_ultimate',
                amount: 16
            },
            result: Item.of('extendedcrafting:the_ultimate_nugget').toResultJson(),
            cooling_time: 20,
            id: 'tconstruct:kjs_ultimate_nugget_cast_sand'
        },
        {
            cast: {
                tag: 'tconstruct:casts/multi_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_primomium',
                amount: 144
            },
            result: Item.of('kubejs:primomium_ingot').toResultJson(),
            cooling_time: 200,
            id: 'tconstruct:kjs_primomium_ingot_cast'
        },
        {
            cast: {
                tag: 'tconstruct:casts/single_use/ingot'
            },
            cast_consumed: false,
            fluid: {
                name: 'kubejs:molten_primomium',
                amount: 144
            },
            result: Item.of('kubejs:primomium_ingot').toResultJson(),
            cooling_time: 200,
            id: 'tconstruct:kjs_primomium_ingot_cast_sand'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'tconstruct:casting_table',
            cast: recipe.cast,
            cast_consumed: recipe.cast_consumed,
            fluid: recipe.fluid,
            result: recipe.result,
            cooling_time: recipe.cooling_time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
})