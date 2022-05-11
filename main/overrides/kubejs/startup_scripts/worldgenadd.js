onEvent('worldgen.add', event => {
    event.addOre(ore => {
      ore.block = 'omniworldessentials:cryonium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#icy'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 6
      ore.clusterCount = 6
      ore.minHeight = 0
      ore.maxHeight = 64
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:azurium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = true
      ore.biomes.values = [
        
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 5
      ore.clusterCount = 3
      ore.minHeight = 0
      ore.maxHeight = 32
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:anemonium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = true
      ore.biomes.values = [
        
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 6
      ore.clusterCount = 8
      ore.minHeight = 72
      ore.maxHeight = 255
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:geonium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#extreme_hills',
        '#desert',
        '#mesa'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 8
      ore.clusterCount = 6
      ore.minHeight = 0
      ore.maxHeight = 64
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:pyronium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#forge:netherrack'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#nether'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 8
      ore.clusterCount = 8
      ore.minHeight = 1
      ore.maxHeight = 127
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:hydronium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#ocean'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 6
      ore.clusterCount = 6
      ore.minHeight = 0
      ore.maxHeight = 48
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:dendronium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#taiga',
        '#jungle',
        '#forest',
        '#swamp'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 8
      ore.clusterCount = 6
      ore.minHeight = 0
      ore.maxHeight = 64
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'omniworldessentials:electronium_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        'minecraft:end_stone'
      ]
      
      ore.biomes.blacklist = false
      ore.biomes.values = [
        '#the_end'
      ]
      
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 8
      ore.clusterCount = 8
      ore.minHeight = 8
      ore.maxHeight = 127
      ore.squared = true

    })

    event.addOre(ore => {
      ore.block = 'forbidden_arcanus:xpetrified_ore'
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      ore.biomes.blacklist = true
      ore.biomes.values = [
      ]
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 1
      ore.clusterCount = 10
      ore.minHeight = 1
      ore.maxHeight = 52
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'emendatusenigmatica:dimensional_ore',
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_overworld'
      ]
      ore.biomes.blacklist = true
      ore.biomes.values = [
      ]
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 4
      ore.clusterCount = 4
      ore.minHeight = 1
      ore.maxHeight = 30
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'emendatusenigmatica:dimensional_netherrack_ore',
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        '#minecraft:base_stone_nether'
      ]
      ore.biomes.blacklist = true
      ore.biomes.values = [
      ]
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 4
      ore.clusterCount = 5
      ore.minHeight = 1
      ore.maxHeight = 50
      ore.squared = true
    })

    event.addOre(ore => {
      ore.block = 'emendatusenigmatica:dimensional_end_stone_ore',
      ore.spawnsIn.blacklist = false
      ore.spawnsIn.values = [
        'minecraft:end_stone'
      ]
      ore.biomes.blacklist = true
      ore.biomes.values = [
      ]
      ore.clusterMinSize = 1
      ore.clusterMaxSize = 4
      ore.clusterCount = 6
      ore.minHeight = 10
      ore.maxHeight = 60
      ore.squared = true
    })

})