onEvent('block.registry', event => {
    event.create('torcherino')
        .material('wood')
        .hardness(0.0)
        .resistance(0.0)
        .displayName('加速火把')
        .lightLevel(1.0)
        .type('basic')
        .renderType('cutout')
        .notSolid()
        .box(6,0,6,10,10,10,true);

    event.create('primomium_block')
        .material('iron')
        .hardness(5.0)
        .resistance(2.0)
        .displayName('原素块')
        .type('basic')
        .harvestTool('pickaxe', 3)
        .lightLevel(0.8);
})