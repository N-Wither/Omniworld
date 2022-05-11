events.listen('fluid.tags', event => {
    const eefluids = [
        'brass',
        'bronze',
        'cloggrum',
        'cobalt',
        'constantan',
        'copper',
        'diamond',
        'electrum',
        'enderium',
        'froststeel',
        'gold',
        'iesnium',
        'invar',
        'iron',
        'lead',
        'lumium',
        'nickel',
        'osmium',
        'regalium',
        'signalum',
        'silver',
        'steel',
        'tin',
        'uranium',
        'utherium',
        'zinc'
    ]

    eefluids.forEach(eefluids => 
        event.get('forge:molten_'+eefluids).remove('emendatusenigmatica:molten_'+eefluids)
    )

    event.get('forge:molten_ultimate').add('kubejs:molten_ultimate')
    event.get('minecraft:water').remove([
        'create:chocolate',
        'create:honey',
        'createaddition:seed_oil',
        'undergarden:virulent_mix_source',
        'boss_tools:oil'
    ])
    event.get('forge:crude_oil').add('boss_tools:oil')
})