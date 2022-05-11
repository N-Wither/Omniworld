// priority: 10

onEvent('item.registry', event => {
	event.create('diamond_lattice').displayName('钻石晶格')
	event.create('crystal_matrix_ingot').displayName('水晶矩阵锭')

	event.create('medal_botania').displayName('奖章：植物魔法')
	event.create('medal_minecraft').displayName('奖章：Minecraft')
	event.create('medal_create').displayName('奖章：机械动力')
	event.create('medal_immersiveengineering').displayName('奖章：沉浸工程')
	event.create('medal_thermal').displayName('奖章：热力系列')
	event.create('medal_mekanism').displayName('奖章：通用机械')
	event.create('medal_draconicevolution').displayName('奖章：龙之进化')
	event.create('medal_astralsorcery').displayName('奖章：星辉魔法')
	event.create('medal_bloodmagic').displayName('奖章：血魔法')
	event.create('forgotten_prediction').displayName('通用遗忆预测产物')
	event.create('sandy_prediction').displayName('通用沙漠预测产物')
	event.create('twilight_prediction').displayName('通用暮色预测产物')

	event.create('tool_upgrade_sharpness').displayName('工具升级：攻击伤害');
	event.create('tool_upgrade_fortune').displayName('工具升级：时运');
	event.create('primomium_ingot').displayName('原素锭');
	/*event.create('primomium_plate').displayName('原素板');*/
	event.create('cosmic_sword').displayName('寰宇支配之剑').type('sword').tier('iron');
	event.create('true_cosmic_sword').displayName('真·寰宇支配之剑').type('sword').tier('infinity').glow(true);
	event.create('taiyaki').displayName('鲷鱼烧')
})

