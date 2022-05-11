onEvent('recipes', event => {
    event.custom(
        {
            "type": "powah:energizing",
            "ingredients": [
              {"tag": "forge:ingots/uranium"}
            ],
            "energy": 80000,
            "result": {
              "item": "powah:uraninite"
            }
          }
    )
})