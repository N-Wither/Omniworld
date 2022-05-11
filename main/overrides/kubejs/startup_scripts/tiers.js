onEvent('item.registry.tool_tiers', event => {
    event.add('infinity', tier => {
      tier.uses = 2147483647
      tier.speed = 6.0
      tier.attackDamageBonus = 2147483647
      tier.level = 7
      tier.enchantmentValue = 14
    })
  })