onEvent('recipes', event => {
    function iePress(output, input, mold, id){
        event.recipes.immersiveengineeringMetalPress(output, input, mold).id('kubejs:immersiveengineering/pressing/'+id)
    }

    iePress('jaopca:boss_tools_compresseds.iron', '#forge:ingots/iron', 'boss_tools_giselle_addon:mold_compressing', 'compressed_iron')
})