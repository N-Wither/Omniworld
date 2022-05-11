events.listen('recipes', event => {
    
    const orb = 'custommachinery:advanced_energizing_orb'

    event.recipes.custommachinery.custom_machine(orb, 100)
    .requireItemTag('forge:ingots/iron', 1)
    .requireItemTag('forge:ingots/gold', 1)
    .requireEnergy(10000)
    .produceItem('2x powah:steel_energized')

    event.recipes.custommachinery.custom_machine(orb, 300)
    .requireItem('minecraft:snowball')
    .requireEnergy(500000)
    .produceItem('powah:charged_snowball')

    event.recipes.custommachinery.custom_machine(orb, 160)
    .requireItemTag('forge:dusts/blaze', 4)
    .requireEnergy(120000)
    .produceItem('powah:crystal_blazing')

    event.recipes.custommachinery.custom_machine(orb, 160)
    .requireItemTag('forge:rods/blaze', 1)
    .requireEnergy(90000)
    .produceItem('powah:crystal_blazing')

    event.recipes.custommachinery.custom_machine(orb, 200)
    .requireItemTag('forge:gems/diamond', 1)
    .requireEnergy(300000)
    .produceItem('powah:crystal_niotic')

    event.recipes.custommachinery.custom_machine(orb, 400)
    .requireItemTag('forge:gems/emerald', 1)
    .requireEnergy(1000000)
    .produceItem('powah:crystal_spirited')

    event.recipes.custommachinery.custom_machine(orb, 800)
    .requireItemTag('forge:nether_stars', 1)
    .requireItemTag('forge:storage_blocks/redstone', 2)
    .requireItem('powah:blazing_crystal_block')
    .requireEnergy(20000000)
    .produceItem('16x powah:crystal_nitro')

    event.recipes.custommachinery.custom_machine(orb, 100)
    .requireItem('minecraft:ender_eye')
    .requireItem('powah:dielectric_casing')
    .requireItem('powah:capacitor_basic_tiny')
    .requireEnergy(50000)
    .produceItem('powah:ender_core')

    event.recipes.custommachinery.custom_machine(orb, 60)
    .requireItemTag('forge:ices/blue', 2)
    .requireEnergy(10000)
    .produceItem('powah:dry_ice')
    .id(kjs+'dry_ice')

    event.recipes.custommachinery.custom_machine(orb, 100)
    .requireItem('emendatusenigmatica:uranium_ingot')
    .requireEnergy(80000)
    .produceItem('powah:uraninite')
})