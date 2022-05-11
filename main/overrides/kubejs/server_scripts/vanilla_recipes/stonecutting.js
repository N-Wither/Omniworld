onEvent('recipes', event => {
    /*
    event.remove({output: 'createdeco:brass_sheet_metal'})
    event.remove({output: 'createdeco:copper_sheet_metal'})
    event.remove({output: 'createdeco:zinc_sheet_metal'})

    event.stonecutting('4x createdeco:brass_sheet_metal', '#forge:storage_blocks/brass')
    event.stonecutting('4x createdeco:copper_sheet_metal', '#forge:storage_blocks/copper')
    event.stonecutting('4x createdeco:zinc_sheet_metal', '#forge:storage_blocks/zinc')
    */

    event.stonecutting('omniworldessentials:azurium_ore', 'omniworldessentials:azurium_chunk')
    event.stonecutting('omniworldessentials:anemonium_ore', 'omniworldessentials:anemonium_chunk')
    event.stonecutting('omniworldessentials:cryonium_ore', 'omniworldessentials:cryonium_chunk')
    event.stonecutting('omniworldessentials:pyronium_ore', 'omniworldessentials:pyronium_chunk')
    event.stonecutting('omniworldessentials:hydronium_ore', 'omniworldessentials:hydronium_chunk')
    event.stonecutting('omniworldessentials:geonium_ore', 'omniworldessentials:geonium_chunk')
    event.stonecutting('omniworldessentials:dendronium_ore', 'omniworldessentials:dendronium_chunk')
    event.stonecutting('omniworldessentials:electronium_ore', 'omniworldessentials:electronium_chunk')

    event.stonecutting('minecraft:iron_ore', 'emendatusenigmatica:iron_chunk')
    event.stonecutting('minecraft:gold_ore', 'emendatusenigmatica:gold_chunk')
})