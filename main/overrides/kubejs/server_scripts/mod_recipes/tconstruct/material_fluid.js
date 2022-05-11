onEvent('recipes', event => {
    event.custom(
        {
            "type": "tconstruct:material_fluid",
            "fluid": {
              "tag": "forge:molten_ultimate",
              "amount": 144
            },
            "temperature": 3000,
            "output": "kubejs:ultimate"
          }
    )

    event.custom(
      {
          "type": "tconstruct:material_fluid",
          "fluid": {
            "tag": "forge:molten_primomium",
            "amount": 144
          },
          "temperature": 2500,
          "output": "kubejs:primomium"
        }
  )
})