onEvent('item.registry.tool_tiers', event => {
    event.add('infinity', tier => {
      tier.uses = 2147483647;
      tier.speed = 6.0;
      tier.attackDamageBonus = 2147483647;
      tier.level = 7;
      tier.enchantmentValue = 14;
    });

    event.add('engulfing_lightning', tier => {
      tier.uses = 512;
      tier.speed = 1.8;
      tier.attackDamageBonus = 6;
      tier.level = 5;
      tier.enchantmentValue = 8;
      tier.repairIngredient = '#forge:ingots/electronium'
    })
  })