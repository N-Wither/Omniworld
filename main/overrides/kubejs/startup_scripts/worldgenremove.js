onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
        ores.blocks = [
            'thermal:copper_ore',
            'thermal:tin_ore',
            'thermal:lead_ore',
            'thermal:nickel_ore',
            'thermal:silver_ore',
            'thermal:sulfur_ore',
            'thermal:cinnabar_ore',
            'thermal:niter_ore',
            'appliedenergistics2:quartz_ore',
            'appliedenergistics2:charged_quartz_ore'
        ]
    })
})