onEvent('recipes', event => {
    function thermalPul(output, input, id){
        event.recipes.thermal.pulverizer(output, input).id('kubejs:thermal/pulverizer/'+id)
    }

    thermalPul('emendatusenigmatica:coal_dust', 'minecraft:coal', 'coal_dust')
    thermalPul('jaopca:dusts.silicon', '#forge:silicon', 'silicon_dust/gem')
})