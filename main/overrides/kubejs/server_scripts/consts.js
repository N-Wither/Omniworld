//priority: 99

// ModID abbrs
const mek = 'mekanism:'
const kjs = 'kubejs:'
const ee = 'emendatusenigmatica:'
const ae = 'appliedenergistics2:'
const ec = 'extendedcrafting:'
const rsa = 'redstone_arsenal:'

const disabledItems = [
    'boss_tools:blast_furnace',
    'boss_tools_giselle_addon:electric_blast_furnace',
    'projectex:pink_collector',
    'projectex:purple_collector',
    'projectex:violet_collector',
    'projectex:blue_collector',
    'projectex:cyan_collector',
    'projectex:green_collector',
    'projectex:lime_collector',
    'projectex:yellow_collector',
    'projectex:orange_collector',
    'projectex:white_collector',
    'projectex:fading_collector',
    'projectex:final_collector',
    'projectex:pink_relay',
    'projectex:purple_relay',
    'projectex:violet_relay',
    'projectex:blue_relay',
    'projectex:cyan_relay',
    'projectex:green_relay',
    'projectex:lime_relay',
    'projectex:yellow_relay',
    'projectex:orange_relay',
    'projectex:white_relay',
    'projectex:fading_relay',
    'projectex:final_relay',
    'projectex:pink_power_flower',
    'projectex:purple_power_flower',
    'projectex:violet_power_flower',
    'projectex:blue_power_flower',
    'projectex:cyan_power_flower',
    'projectex:green_power_flower',
    'projectex:lime_power_flower',
    'projectex:yellow_power_flower',
    'projectex:orange_power_flower',
    'projectex:white_power_flower',
    'projectex:fading_power_flower',
    'projectex:final_power_flower',
    'extrastorage:storagepart_256k',
    'extrastorage:storagepart_1024k',
    'extrastorage:storagepart_4096k',
    'extrastorage:storagepart_16384k',
    'extrastorage:storagepart_16384k_fluid',
    'extrastorage:storagepart_65536k_fluid',
    'extrastorage:storagepart_262144k_fluid',
    'extrastorage:storagepart_1048576k_fluid',
    'extrastorage:disk_256k',
    'extrastorage:disk_1024k',
    'extrastorage:disk_4096k',
    'extrastorage:disk_16384k',
    'extrastorage:disk_16384k_fluid',
    'extrastorage:disk_65536k_fluid',
    'extrastorage:disk_262144k_fluid',
    'extrastorage:disk_1048576k_fluid',
    'extrastorage:block_256k',
    'extrastorage:block_1024k',
    'extrastorage:block_4096k',
    'extrastorage:block_16384k',
    'extrastorage:block_16384k_fluid',
    'extrastorage:block_65536k_fluid',
    'extrastorage:block_262144k_fluid',
    'extrastorage:block_1048576k_fluid',
]

// Akashic Tome
const akashictome = Item.of(
    'akashictome:tome',
    '{"akashictome:is_morphing":1b,"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"工业先锋手册"},"patchouli:book":"industrialforegoing:industrial_foregoing",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"工业先锋手册"}]}\'},"akashictome:is_morphing":1b}},tetra:{id:"tetra:holo",Count:1b,tag:{"akashictome:displayName":{text:"全息球"},"holo/frame":"holo/frame",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"全息球"}]}\'},"akashictome:is_morphing":1b,"holo/core_material":"frame/dim","holo/core":"holo/core","holo/frame_material":"core/ancient"}},tconstruct:{id:"tconstruct:encyclopedia",Count:1b,tag:{mantle:{book:{current_page:""}},"akashictome:displayName":{text:"匠作大百科"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"匠作大百科"}]}\'}}},astralsorcery:{id:"astralsorcery:tome",Count:1b,tag:{"akashictome:displayName":{text:"星芒宝典"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"星芒宝典"}]}\'},"akashictome:is_morphing":1b}},blue_skies:{id:"blue_skies:blue_journal",Count:1b,tag:{"akashictome:displayName":{text:"浩蓝旅记"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"浩蓝旅记"}]}\'}}},alexsmobs:{id:"alexsmobs:animal_dictionary",Count:1b,tag:{"akashictome:displayName":{text:"动物图鉴"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"动物图鉴"}]}\'}}},psi:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Psi百科全书"},"patchouli:book":"psi:encyclopaedia_psionica",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Psi百科全书"}]}\'},"akashictome:is_morphing":1b}},immersiveengineering:{id:"immersiveengineering:manual",Count:1b,tag:{"akashictome:displayName":{text:"工程师手册"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"工程师手册"}]}\'},"akashictome:is_morphing":1b}},advancedperipherals:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Advanced Peripherals"},"patchouli:book":"advancedperipherals:manual","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Peripherals"}]}\'}}},eidolon:{id:"eidolon:codex",Count:1b,tag:{"akashictome:displayName":{text:"秘仪教典"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"秘仪教典"}]}\'},"akashictome:is_morphing":1b}},extendedcrafting:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"合成拓展"},"patchouli:book":"extendedcrafting:guide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"合成拓展"}]}\'}}},botania:{id:"botania:lexicon",Count:1b,tag:{"akashictome:displayName":{text:"植物魔法辞典"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"植物魔法辞典"}]}\'},"akashictome:is_morphing":1b}},draconicevolution:{id:"draconicevolution:info_tablet",Count:1b,tag:{"akashictome:displayName":{text:"龙之进化信息板"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"龙之进化信息板"}]}\'}}},touhou_little_maid:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"记忆中的幻想乡"},"patchouli:book":"touhou_little_maid:memorizable_gensokyo","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"记忆中的幻想乡"}]}\'}}},thermal:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Thermalpedia"},"patchouli:book":"thermal:guidebook",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Thermalpedia"}]}\'},"akashictome:is_morphing":1b}},patchouli:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Omniworld指导手册"},"patchouli:book":"patchouli:omniguide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Omniworld指导手册"}]}\'}}},rftoolsbase:{id:"rftoolsbase:manual",Count:1b,tag:{"akashictome:displayName":{text:"RF工具指导手册"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"RF工具指导手册"}]}\'}}},integratedtunnels:{id:"integrateddynamics:on_the_dynamics_of_integration",Count:1b,tag:{"akashictome:displayName":{text:"论动态联合"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"论动态联合"}]}\'},"akashictome:is_morphing":1b}},powah:{id:"powah:book",Count:1b,tag:{"akashictome:displayName":{text:"Powah! 手册"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Powah! 手册"}]}\'},"akashictome:is_morphing":1b}},apotheosis:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Chronicle of Shadows"},"patchouli:book":"apotheosis:apoth_chronicle","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Chronicle of Shadows"}]}\'}}},transport:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"高级运输"},"patchouli:book":"transport:guide",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"高级运输"}]}\'},"akashictome:is_morphing":1b}},engineersdecor:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"工程师的装饰"},"patchouli:book":"engineersdecor:engineersdecor_manual",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"工程师的装饰"}]}\'},"akashictome:is_morphing":1b}},occultism:{id:"occultism:dictionary_of_spirits",Count:1b,tag:{"akashictome:displayName":{text:"魔灵全典"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"魔灵全典"}]}\'},"akashictome:is_morphing":1b}},solcarrot:{id:"solcarrot:food_book",Count:1b,tag:{"akashictome:displayName":{text:"食物手册"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"食物手册"}]}\'}}},ars_nouveau:{id:"ars_nouveau:worn_notebook",Count:1b,tag:{"akashictome:displayName":{text:"破旧的笔记本"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"破旧的笔记本"}]}\'},"akashictome:is_morphing":1b}},mysticalworld:{id:"mysticalworld:encyclopedia",Count:1b,tag:{"akashictome:displayName":{text:"Encyclop?dia Mysticum"},display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclop?dia Mysticum"}]}\'},"akashictome:is_morphing":1b}},bloodmagic:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"猩红之知"},"patchouli:book":"bloodmagic:guide",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"猩红之知"}]}\'},"akashictome:is_morphing":1b}},twilightforest:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"旅行者日记"},"patchouli:book":"twilightforest:guide",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"旅行者日记"}]}\'},"akashictome:is_morphing":1b}},supplementaries:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"§6Supplemental Manual"},"patchouli:book":"supplementaries:supplementaries_guide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"§6Supplemental Manual"}]}\'}}},betterendforge:{id:"betterendforge:guidebook",Count:1b,tag:{"akashictome:displayName":{text:"给新人看的末地指南"},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"给新人看的末地指南"}]}\'}}},mysticalagriculture:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"神秘农业"},"patchouli:book":"mysticalagriculture:guide",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"神秘农业"}]}\'},"akashictome:is_morphing":1b}},cyclic:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Cyclic 指南"},"patchouli:book":"cyclic:cyclic_guide_book",display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Cyclic 指南"}]}\'},"akashictome:is_morphing":1b}}}}'
    );