// priority: 1

onEvent('item.modification', event => {
  const throwables = [
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:snowball',
    'autumnity:turkey_egg',
    'environmental:duck_egg',
    'alexsmobs:emu_egg',
    'powah:charged_snowball',
    'undergarden:goo_ball'
  ]
  throwables.forEach(throwables => 
    event.modify(throwables, item => {
      item.maxStackSize = 64
    })
  );

  event.modify('cyclic:emerald_sword', item => {
    item.tier = tierOptions => {
      tierOptions.attackDamageBonus = 6
    }
  });

  event.modify('kubejs:taiyaki', item => {
    item.foodProperties = food => {
      food.hunger(6)
      food.saturation(1.2)
    }
  });

  event.modify('kubejs:true_cosmic_sword', item => {
    item.fireResistant = true
    item.rarity = 'epic'
  })
})