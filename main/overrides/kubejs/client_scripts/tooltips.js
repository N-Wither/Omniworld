// priority: 3

onEvent('item.tooltip', tooltip => {
    function ttip(target, text){
        tooltip.add(target, text);
    }
    tooltip.add('explorerscompass:explorerscompass', ["\u00A7b如果需要搜索要塞，请输入“stronghold”。", '\u00A7b要寻找矿井，请输入“mineshaft”。']);
    
    disabledItems.forEach(disabledItems =>
        tooltip.add(disabledItems, '\u00A74已禁用！')
    );

    tooltip.add('buildersaddition:speaker', '\u00A7b需要外接 MIDI 设备才能使用。');
    tooltip.add('betterendforge:ender_shard', '\u00A7b通过挖掘末影矿石获得');
    tooltip.add('miniutilities:magical_egg', '\u00A7b砸中某个生物来获得它的刷怪蛋');
    tooltip.add('theoneprobe:probenote', '\u00A7b别碰这东西，你把握不住。如果你把方块信息显示搞没了别来找我。');
    tooltip.add('minecraft:gunpowder', '\u00A7b可以放置在地上');

    tooltip.addAdvanced(/pipez:.*_pipe/, (item, advanced, text) => {
        if (!tooltip.isShift()){
            text.add(1, [Text.of('按住 ').gold(), Text.of('Shift').yellow(), Text.of(' 查看使用方法').gold()]);
        }
        if (tooltip.isShift()){
            text.add(1, '\u00a7b这个管道还没有智能到了解你的想法，');
            text.add(2, '\u00a7b你需要使用扳手（只要是带有forge:wrenched标签的都可以，');
            text.add(3, '\u00a7b可以在JEI的搜索栏里面搜索$wrenches来查找）。');
            text.add(4, '\u00a7b使用扳手Shift右键管道的一端来让它从这里抽取物品，');
            text.add(5, '\u00a7b再Shift右键一次来断开连接。');
        }
    })

    tooltip.add('cyclic:item_pipe', '\u00A7b不推荐使用！建议使用Pipez的物品管道');
    tooltip.add('cyclic:fluid_pipe', '\u00A7b不推荐使用！建议使用Pipez的流体管道');
    tooltip.add('#minecraft:beds', '\u00A7b与旗帜合成可以给床印上图案!');
    tooltip.add('#framedcompactdrawers:frame_triple', ['\u00a7b设定纹理之后才能使用！', '\u00a7b与不同的方块合成来给它赋予纹理', '\u00a7b可以和两种以上方块合成来设定不同的纹理', '\u00a7b合成时应摆放在右下角']);

    tooltip.add('cyclic:disenchanter', '\u00a7b使用能量和液态经验从物品中分离附魔');
    tooltip.add('cyclic:gem_amber', '\u00a7b制作此物品需要的是岩浆(Magma)而不是熔岩(Lava)');

    const sponsorItem = [
        'kubejs:torcherino',
        'kubejs:taiyaki',
        'kubejs:engulfing_lightning',
        'kubejs:nwither_plush'
    ]
    sponsorItem.forEach(sponsorItem => {
        tooltip.add(sponsorItem, '\u00a7b赞助者物品')
    })

    ttip('kubejs:torcherino', '\u00a78来自逐暮晨曦的祝福');
    ttip('kubejs:cosmic_sword', '\u00a76义眼丁真，鉴定为真');
    ttip('kubejs:true_cosmic_sword', ['\u00a76这次真的是真的，我保证！', '\u00a78然而只能在创造模式获得...']);
    ttip('forbidden_arcanus:bat_soup', '\u00a76德克士汉堡生物实验室荣誉出品');

    
})