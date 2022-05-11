onEvent('recipes', e => {
    e.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [{"item": "simplefarming:cheese_block"}],
            "tool": {"tag": "forge:tools/knives"},
            "result": [
              {
                "item": "simplefarming:cheese_slice",
                "count": 8
              }
            ]
        })
})