onEvent('recipes', event => {
    event.custom(
        {
            "type": "tconstruct:modifier",
            "inputs": [
              {
                "item": "kubejs:tool_upgrade_sharpness"
              }
            ],
            "tools": {
              "tag": "tconstruct:modifiable/melee"
            },
            "result": {
              "name": "tconstruct:sharpness",
              "level": 1
            },
            "max_level": 10
          }
    ).id('kubejs:tconstruct/modifiers/sharpness')

    event.custom(
      {
          "type": "tconstruct:modifier",
          "inputs": [
            {
              "item": "kubejs:tool_upgrade_fortune"
            }
          ],
          "tools": {
            "tag": "tconstruct:modifiable/melee"
          },
          "result": {
            "name": "tconstruct:luck",
            "level": 1
          },
          "max_level": 6
        }
  ).id('kubejs:tconstruct/modifiers/fortune')
})