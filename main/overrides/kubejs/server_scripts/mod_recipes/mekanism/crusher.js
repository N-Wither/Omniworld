onEvent('recipes', event => {
    function mekCrush(output, input, id){
        event.recipes.mekanismCrushing(output, input).id('kubejs:mekanism/crushing/'+id)
    }

    mekCrush('jaopca:dusts.silicon', '#forge:silicon', 'silicon_dust/gem')
})