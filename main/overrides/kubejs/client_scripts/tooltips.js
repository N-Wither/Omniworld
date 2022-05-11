onEvent('item.tooltip', tooltip => {
    function ttip(target, text){
        tooltip.add(target, text)
    }

    tooltip.add('explorerscompass:explorerscompass', ["\u00A7b如果需要搜索要塞，请输入“stronghold”。", '\u00A7b要寻找矿井，请输入“mineshaft”。'])
    
    disabledItems.forEach(disabledItems =>
        tooltip.add(disabledItems, '\u00A74已禁用！')
    )

    tooltip.add('buildersaddition:speaker', '\u00A7b需要外接 MIDI 设备才能使用。')
    tooltip.add('betterendforge:ender_shard', '\u00A7b通过挖掘末影矿石获得')
    tooltip.add('miniutilities:magical_egg', '\u00A7b砸中某个生物来获得它的刷怪蛋')
    tooltip.add('theoneprobe:probenote', '\u00A7b别碰这东西，你把握不住。如果你把方块信息显示搞没了别来找我。')
    tooltip.add('minecraft:gunpowder', '\u00A7b可以放置在地上')
    const pipes = [
        'pipez:item_pipe',
        'pipez:fluid_pipe',
        'pipez:energy_pipe',
        'pipez:gas_pipe',
        'pipez:universal_pipe'
    ]
    pipes.forEach(pipes =>
        tooltip.add(pipes, ['\u00A7b使用带有forge:wrenches标签的工具（也就是各种扳手）', '\u00A7bShift+右键设置抽取端'])
    )
    tooltip.add('cyclic:item_pipe', '\u00A7b不推荐使用！建议使用Pipez的物品管道')
    tooltip.add('cyclic:fluid_pipe', '\u00A7b不推荐使用！建议使用Pipez的流体管道')
    tooltip.add('#minecraft:beds', '\u00A7b与旗帜合成可以给床印上图案!')
    tooltip.add('#framedcompactdrawers:frame_triple', ['\u00a7b设定纹理之后才能使用！', '\u00a7b与不同的方块合成来给它赋予纹理', '\u00a7b可以和两种以上方块合成来设定不同的纹理', '\u00a7b合成时应摆放在右下角'])

    tooltip.add('cyclic:disenchanter', '\u00a7b使用能量和液态经验从物品中分离附魔')
    tooltip.add('cyclic:gem_amber', '\u00a7b制作此物品需要的是岩浆(Magma)而不是熔岩(Lava)')

    const sponsorItem = [
        'kubejs:torcherino',
        'kubejs:taiyaki'
    ]
    sponsorItem.forEach(sponsorItem => {
        tooltip.add(sponsorItem, '\u00a7b赞助者物品')
    })

    ttip('kubejs:torcherino', '\u00a78来自逐暮晨曦的祝福')
    ttip('kubejs:cosmic_sword', '\u00a76义眼丁真，鉴定为真')
    ttip('kubejs:true_cosmic_sword', ['\u00a76这次真的是真的，我保证！', '\u00a78然而只能在创造模式获得...'])
    ttip('forbidden_arcanus:bat_soup', '\u00a76德克士汉堡生物实验室荣誉出品')

    
})