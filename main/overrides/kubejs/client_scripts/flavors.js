onEvent('item.tooltip', tooltip => {
    /*
        Dark aqua text = N Wither
        Gold text      = Carro
    */
    function flavor(target,text){
        var content = text;
        var lines = content.length;
        var sepLine = '';
        var sep = new Array;
        var sepLength = 0;
        var i = 0;
        for(i = 0; i < lines; i++){
            if (content[i].length > sepLength){
                sepLength = content[i].length;
            }
        }
        sepLength = Math.ceil(sepLength * 1.7);
        for(i = 0;i <= sepLength; i++){
            sepLine = sepLine + '=';
        }
        sep = [sepLine];
        tooltip.add(target, sep.concat(content,sep));
     }
    // Minecraft
    flavor('#minecraft:logs', [
        textGold('木头是很重要的物资。'),
        textDarkAqua('无论是在前期还是后期都会用到，所以多准备一些吧。')
    ]);

    flavor('#forge:cobblestone', [
        textDarkAqua('挖矿的时候真是嫌它们太占空间了。'),
        textGold('但有时候就是会不够用呢。')
    ]);

    flavor('minecraft:leather', [
        textGold('为什么羊不会掉落皮革呢？')
    ]);

    flavor('minecraft:wither_rose', [
        textGold('不仅有刺，还有毒哦！')
    ]);

    flavor('minecraft:bedrock', [
        textGold('既然无法获得，为什么要给它做一种工具材料呢？'),
        textDarkAqua('好玩。')
    ]);

    flavor('minecraft:cake', [
        textGold('你觉得上面的红色点点是什么？'),
        textDarkAqua('樱桃吧大概是。')
    ]);

    flavor(/minecraft:.*salmon/, [
        textDarkAqua('台湾的一家店曾经举办过一个活动，只要名'),
        textDarkAqua('字里面含有鲑鱼就能免费吃鲑鱼，还真有不'),
        textDarkAqua('少人为了免费鲑鱼而改名，但是由于法规限'),
        textDarkAqua('制了改名次数，有人就永远名为鲑鱼了。')
    ]);

    flavor(/minecraft:.*cod/, [
        textGold('鳕鱼大概是世界上最受欢迎的海鱼了吧。'),
        textDarkAqua('鱼肝油大多也是来自鳕鱼。')
    ]);

    flavor('minecraft:pufferfish', [
        textDarkAqua('河豚会从它的食物中富集毒素。'),
        textGold('但是据说它的肉非常好吃。'),
        textDarkAqua('如果哪天有机会吃的话就先让你试试毒吧。'),
        textGold('才不要！')
    ]);

    flavor('minecraft:cookie', [
        textGold('不要喂给鹦鹉哦，会让它们中毒的！')
    ]);

    flavor('minecraft:poisonous_potato', [
        textDarkAqua('发芽的马铃薯会产生龙葵碱，所以是不能吃的。'),
        textGold('就算把发芽的部分去掉也可能有残留，还是整个丢掉吧！'),
        textDarkAqua('其实也可以种下去，可惜在 Minecraft 里不行。')
    ]);

    flavor('minecraft:potato', [
        textGold('土豆有很多种做法呢。'),
        textDarkAqua('我喜欢吃薯片，切片的那种。')
    ]);

    flavor('#forge:workbenches', [
        textGold('万恶之源。'),
        textDarkAqua('万恶之源。')
    ]);

    flavor('minecraft:sea_pickle', [
        textDarkAqua('实际上并不能吃。')
    ]);

    flavor('minecraft:dragon_egg', [
        textGold('能孵出来小龙吗？'),
        textDarkAqua('(摇晃)似乎是实心的。')
    ]);

    flavor('minecraft:dragon_head', [
        textGold('它的嘴巴还能动！')
    ]);

    flavor('minecraft:end_crystal', [
        textGold('当心爆炸哦。')
    ]);

    flavor(/minecraft:chainmail.*/, [
        textGold('有种中世纪的感觉。')
    ]);
    
    flavor('minecraft:firework_rocket', [
        textDarkAqua('理论上烟花火箭约有1.9E136种合成方式，要列出'),
        textDarkAqua('它们是不可能的。不过最简单的一种是火药加纸。')
    ]);

    flavor('minecraft:firework_star', [
        textDarkAqua('理论上烟火之星约有2.9E19种合成方式，要列出它们'),
        textDarkAqua('是不可能的。不过最简单的一种是火药加染料。')
    ]);

    // Omniworld Essentials
    flavor(/omniworldessentials:.*ore/, [
        textGold('我总觉得这个系列的矿石有点眼熟...'),
        textDarkAqua('是的，灵感来源于某个二字游戏。'),
        textGold('那么在哪里可以找到这些矿石呢？'),
        textDarkAqua('在《Omniworld 指导手册》里面有提示。')
    ]);

    // Alex's Mobs
    flavor('alexsmobs:animal_dictionary', [
        textDarkAqua('你可能注意到了这个模组的东西（除了这本书里面的内容）'),
        textDarkAqua('都是英文，这是因为简体中文的语言文件里面少了一个引号'),
        textDarkAqua('导致整个语言文件都失效了。如果你想解决这个问题，请以'),
        textDarkAqua('压缩包的形式打开模组文件，在里面找到下面这个文件：'),
        textGold('assets/lang/zh_zn.json'),
        textDarkAqua('打开它，补上那个缺失的引号，然后保存文件。'),
        textDarkAqua('如果你使用 VSCode 之类的带有语法高亮的文本编辑器，那'),
        textDarkAqua('你应该很容易就能找到缺少引号的地方。')
    ]);

    flavor('alexsmobs:ambergris', [
        textDarkAqua('是抹香鲸肚子里面难以消化的东西和粪便与肠道分泌物的'),
        textDarkAqua('混合产物。味道类似于异丙醇。')
    ]);

    // Botania
    flavor(/botania:.*ingot/, [
        textDarkAqua('感谢热心网友 Xαz.≮ 制作的纹理！')
    ]);

    flavor('botania:cosmetic_thinking_hand', [
        textDarkAqua('怎么会是呢？'),
        textGold('是呀怎么会是呢？')
    ]);

    flavor(/botania:.*double_flower/, [
        textGold('可以用花瓣种出来哦！'),
        textDarkAqua('这算组织培养吗？')
    ]);

    // Cooking For Blockheads
    flavor('cookingforblockheads:sink', [
        textDarkAqua('为什么好多整合包都不允许它提供无限水呢？'),
        textDarkAqua('哎，我还是太善良了！')
    ])

    // Ender Storage
    flavor('enderstorage:ender_chest', [
        textGold('我跟你说哦，其实这个模组比原版的末影箱更早出现！'),
        textDarkAqua('实际上原版的末影箱就是源于这个模组的。')
    ])

    // Environmental
    flavor('environmental:cartwheel', [
        textGold('它是怎么转起来的呢？')
    ])

    flavor(/environmental:.*wisteria_sapling/, [
        textDarkAqua('紫藤树应该是这个游戏里面最好看的树了。')
    ])

    flavor(/environmental:.*koi/, [
        textGold('锦鲤养在池子里面会很好看呢。'),
        textDarkAqua('不仅如此，锦鲤还可以在它自身32*32*8的空间内'),
        textDarkAqua('阻止怪物生成。')
    ])

    // Forbidden & Arcanus
    flavor('forbidden_arcanus:eternal_stella', [
        textDarkAqua('应当是这个游戏里面最厉害的物品之一。'),
        textGold('按 U 看看它的用途吧！')
    ])

    // Mekanism
    flavor('mekanism:steel_casing', [
        textDarkAqua('你觉得这个东西很难做吗？你可以看看其他整合包是'),
        textDarkAqua('怎么限制你使用 Mekanism 模组的。')
    ])

    flavor(/mekanism:.*universal_cable/, [
        textGold('你知道吗？连接在一起的线缆越多，传输速度就越快。'),
        textDarkAqua('不过还是有上限的，我觉得是 2147483647 FE/t。')
    ])

    // MythicBotany
    flavor(/mythicbotany:.*ingot/, [
        textDarkAqua('感谢热心网友 Xαz.≮ 制作的纹理！')
    ]);

    flavor('mythicbotany:alfsteel_armor_upgrade', [
        textDarkAqua('感谢热心网友 Xαz.≮ 制作的纹理！')
    ]);

    // Neapolitan
    flavor(/neapolitan:.*banana_frond/, [
        textGold('怎么种出一棵香蕉树呢？'),
        textDarkAqua('把香蕉树叶插在沙砾上，它会在下雨的时候长大。')
    ]);

    // Twilight Forest
    flavor('twilightforest:magic_beans', [
        textGold('你听过“杰克与魔豆”的故事吗？')
    ]);

    // Upgrade Aquatic
    flavor(/upgrade_aquatic:.*coralstone/, [
        textGold('让珊瑚在珊瑚石附近生长。')
    ]);

    flavor(/upgrade_aquatic:.*spine/, [
        textDarkAqua('接收到红石信号的时候就会钻出来。'),
        textGold('被扎到还是很疼的！')
    ]);

    // Industrial Foregoing
    flavor('industrialforegoing:pink_slime_ingot', [
        textGold('诶诶，上面好像有张脸！'),
        textGold('(揉眼睛)没了？是我看错了吗...')
    ]);

    // Xerca Music
    flavor('xercamusic:music_sheet', [
        textDarkAqua('你会写 MIDI 吗？如果你会的话，这个乐谱会很容易写。')
    ]);

    // Draconic Evolution
    flavor('draconicevolution:info_tablet', [
        textDarkAqua('嗯，这个信息板的内容由 Project Intelligence 提供，'),
        textDarkAqua('使用的时候需要联网。')
    ]);

    // Aquaculture
    flavor('aquaculture:message_in_a_bottle', [
        textGold('一个漂流瓶耶！是谁丢到水里的呢？')
    ]);
    
    // ProjectEX
    flavor('projectex:personal_link', [
        textDarkAqua('模组作者尚未完成此物品的功能，而且很可能以后也不会完成了。')
    ]);

    flavor(/projectex:.*refined_link/, [
        textDarkAqua('模组作者尚未完成此物品的功能，而且很可能以后也不会完成了。')
    ]);

    // KubeJS
    flavor('kubejs:primomium_ingot', [
        textGold('那么这个东西的来源跟那些元素矿石是一样的吧？'),
        textDarkAqua('没错，还是那个二字游戏。')
    ]);

    flavor('kubejs:taiyaki', [
        textDarkAqua('在我制作这个物品之前我一直以为鲷鱼烧是烤鲷鱼。')
    ]);

    flavor('kubejs:engulfing_lightning', [
        textGold('用于「斩草」的薙刀。'),
        textGold('对向此物之军势，也会如苇草般倒下吧...'),
        textDarkAqua('对着地上的杂草右键试试看。')
    ])

    flavor('kubejs:nwither_plush', [
        textDarkAqua('赞助者跟我说随便整点什么东西或者是我的人偶都可以，'),
        textDarkAqua('我本来想随便搞点什么的，想了想这样还是太不走心了，'),
        textDarkAqua('所以还是做了这个。至于精细模型什么的实在做不出来。')
    ])

    // Supplementaries
    flavor(/supplementaries:.*present/, [
        textGold('要送给谁呢？')
    ])
});