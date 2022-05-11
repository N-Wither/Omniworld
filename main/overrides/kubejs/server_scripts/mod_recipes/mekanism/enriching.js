onEvent('recipes', event => {
    event.recipes.mekanismEnriching('mekanism:enriched_carbon', '#forge:coal_coke').id('kubejs:enriching/carbon_from_coke')
    event.recipes.mekanismEnriching('mekanism:enriched_carbon', '#forge:coal_petcoke').id('kubejs:enriching/carbon_from_petcoke')
    event.recipes.mekanismEnriching('mekanism:enriched_carbon', '#forge:charcoal').id('kubejs:enriching/carbon_from_charcoal')
})