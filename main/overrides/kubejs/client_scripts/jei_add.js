// priority: 2

events.listen('jei.add.items', e => {
    e.add(Item.of('minecraft:dragon_egg'))
})