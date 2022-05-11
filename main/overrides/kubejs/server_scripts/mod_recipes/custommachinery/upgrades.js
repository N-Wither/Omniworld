onEvent('cm_upgrades', event => {
    event.create(Item.of('thermal:upgrade_augment_1'), 1)
    .machine('custommachinery:advanced_energizing_orb')
    .mulInput('custommachinery:speed', 2)
    .tooltip('2x Speed')
})