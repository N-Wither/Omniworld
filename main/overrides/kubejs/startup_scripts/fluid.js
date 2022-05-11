// priority: 0

onEvent('fluid.registry', event => {
    event.create('molten_blazing_crystal').textureThick(0xD79811).bucketColor(0xD79811).displayName('熔融烈焰水晶')
    event.create('molten_energized_steel').textureThick(0xB89365).bucketColor(0xB89365).displayName('熔融充能钢')
    event.create('molten_gaia_spirit').textureThick(0x94A0BF).bucketColor(0x94A0BF).displayName('熔融盖亚魂')
    event.create('molten_niotic_crystal').textureThick(0x54E5EA).bucketColor(0x54E5EA).displayName('熔融钻石水晶')
    event.create('molten_nitro_crystal').textureThick(0xA42022).bucketColor(0xA42022).displayName('熔融下界水晶')
    event.create('molten_spirited_crystal').textureThick(0x86C52D).bucketColor(0x86C52D).displayName('熔融富生水晶')
    event.create('molten_crystal_matrix').textureThick(0x43FFFF).bucketColor(0x43FFFF).displayName('熔融水晶矩阵')
    event.create('molten_insanium').textureThick(0x640099).bucketColor(0x640099).displayName('熔融究极精华')
    event.create('molten_ultimate').textureThick(0xdd1b69).bucketColor(0xdd1b69).displayName('熔融终极')
    event.create('molten_primomium').textureStill('kubejs:block/molten_primomium').textureFlowing('kubejs:block/molten_primomium_flow').displayName('原素熔流').bucketColor(0xeccbdc)
})