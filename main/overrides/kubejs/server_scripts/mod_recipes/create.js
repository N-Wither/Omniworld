// priority: 20

onEvent('recipes', event => {

    // ProjectE

    event.recipes.create.mechanical_crafting('projecte:transmutation_table', [
      ' CCC ',
      'CPDPC',
      'CNRNC',
      'CPDPC',
      ' CCC '
    ], {
      C: 'projecte:dark_matter_block',
      P: 'projecte:relay_mk2',
      R: 'projecte:philosophers_stone',
      D: 'projecte:collector_mk3',
      N: 'projecte:condenser_mk2'
    }).id('kubejs:transmutation_table')
    event.recipes.create.mechanical_crafting('projecte:transmutation_tablet', [
      'CKKKC',
      'KPDPK',
      'KNRNK',
      'KPDPK',
      'CKKKC'
    ], {
      C: 'projecte:condenser_mk2',
      P: 'projecte:red_matter_block',
      R: 'projecte:transmutation_table',
      D: 'projectex:magenta_collector',
      N: 'forbidden_arcanus:dark_nether_star_block',
      K: 'projecte:klein_star_omega'
    }).id('kubejs:transmutation_tablet')

    // Create

    event.replaceInput({id: 'create:mixing/chromatic_compound'}, 'create:powdered_obsidian', '#forge:dusts/obsidian')
})