onEvent('recipes', e => {
    e.custom(
        {
          "type": "farmersdelight:cooking",
          "ingredients": [
            {"tag": "forge:fruits/apple"},
            {"tag": "forge:sugar"}
          ],
          "result": {
            "item": "pamhc2foodextended:applecideritem"
          },
          "experience": 0.1,
          "cookingtime": 100
        }
    ).id('kubejs:applecider')

    e.custom(
        {
          "type": "farmersdelight:cooking",
          "ingredients": [
            {"tag": "forge:crops/bean"},
            {"tag": "forge:crops/corn"},
            {"tag": "forge:crops/onion"},
            {"tag": "forge:crops/spiceleaf"},
            {"tag": "forge:crops/tomato"},
            {"tag": "forge:butter"}
          ],
          "result": {
            "item": "pamhc2foodextended:succotashitem"
          },
          "experience": 0.1,
          "cookingtime": 100
        }
    ).id('kubejs:succotash')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:crops/potato"},
          {"tag": "forge:cookingoil"},
          {"tag": "forge:salt"}
        ],
        "result": {
          "item": "pamhc2foodcore:friesitem"
        },
        "experience": 0.1,
        "cookingtime": 100
      }
    ).id('kubejs:fries')

    e.custom(
    {
      "type": "farmersdelight:cooking",
      "ingredients": [
        {"tag": "forge:water"},
        {"tag": "forge:fruits/lemon"},
        {"tag": "forge:fruits/lime"},
        {"tag": "forge:sugar"}
      ],
      "result": {
        "item": "pamhc2foodextended:lemonlimesodaitem"
      },
      "experience": 0.1,
      "cookingtime": 100
      }
    ).id('kubejs:lemonlimesoda')

    e.custom(
    {
      "type": "farmersdelight:cooking",
      "ingredients": [
        {"tag": "forge:stock"},
        {"tag": "forge:pasta"},
        {"tag": "forge:crops/spiceleaf"},
        {"tag": "forge:spices/groundcinnamon"},
        {"tag": "forge:vegetables/onion"}
      ],
      "result": {
        "item": "pamhc2foodextended:phoitem"
      },
      "experience": 0.1,
      "cookingtime": 100
      }
    ).id('kubejs:pho')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:cornmeal"},
          {"tag": "forge:milk"},
          {"tag": "forge:water"},
          {"tag": "forge:salt"}
        ],
        "result": {
          "item": "pamhc2foodextended:gritsitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:grits')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"item": "pamhc2foodextended:espressoitem"},
          {"tag": "forge:milk"},
          {"tag": "forge:spices/groundcinnamon"}
        ],
        "result": {
          "item": "pamhc2foodextended:coffeeconlecheitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:coffeeconleche')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:sausage"}
        ],
        "result": {
          "item": "pamhc2foodextended:batteredsausageitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:batteredsausage')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:crops/cucumber"},
          {"tag": "forge:salt"},
          {"tag": "forge:vinegar"}
        ],
        "result": {
          "item": "pamhc2foodextended:picklesitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:pickles')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"item": "minecraft:cactus"},
          {"tag": "forge:stock"}
        ],
        "result": {
          "item": "pamhc2foodextended:cactussoupitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:cactussoup')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:water"},
          {"tag": "forge:salt"},
          {"tag": "forge:fruits/grape"}
        ],
        "result": {
          "item": "pamhc2foodextended:grapesodaitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:grapesoda')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:crops/oat"},
          {"tag": "forge:spices/groundcinnamon"},
          {"tag": "forge:fruits/apple"},
          {"tag": "forge:water"}
        ],
        "result": {
          "item": "pamhc2foodextended:cinnamonappleoatmealitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:cinnamonappleoatmeal')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:stock"},
          {"tag": "forge:vegetables"},
          {"tag": "forge:vegetables"}
        ],
        "result": {
          "item": "pamhc2foodextended:gardensoupitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:gardensoup')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:dough"},
          {"tag": "forge:cookingoil"},
          {"tag": "forge:sugar"}
        ],
        "result": {
          "item": "pamhc2foodextended:festivalbreaditem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:festivalbread')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:rawbeef"},
          {"tag": "forge:crops/potato"},
          {"tag": "forge:crops/carrot"},
          {"tag": "forge:salt"}
        ],
        "result": {
          "item": "pamhc2foodcore:potroastitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:potroast')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:protein/corn"},
          {"tag": "forge:butter"},
          {"tag": "forge:salt"}
        ],
        "result": {
          "item": "pamhc2foodextended:cornonthecobitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:cornonthecob')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:rawchicken"},
          {"tag": "forge:batter"},
          {"tag": "forge:cookingoil"},
          {"tag": "forge:cream"},
          {"tag": "forge:crops/spiceleaf"}
        ],
        "result": {
          "item": "pamhc2foodextended:ranchfriedchickenitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:ranchfriedchicken')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:cornmeal"},
          {"tag": "forge:eggs"},
          {"tag": "forge:vegetables/onion"}
        ],
        "result": {
          "item": "pamhc2foodextended:hushpuppiesitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:hushpuppies')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:stock"},
          {"tag": "forge:flour"}
        ],
        "result": {
          "item": "pamhc2foodextended:gravyitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:gravy')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:water"},
          {"tag": "forge:sugar"},
          {"tag": "forge:fruits/orange"}
        ],
        "result": {
          "item": "pamhc2foodextended:orangesodaitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:orangesoda')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:crops/potato"},
          {"tag": "forge:stock"}
        ],
        "result": {
          "item": "pamhc2foodcore:potatosoupitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:potatosoup')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:protein/corn"},
          {"tag": "forge:salt"},
          {"tag": "forge:cookingoil"}
        ],
        "result": {
          "item": "pamhc2foodextended:cornchipsitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:cornchips')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"item": "pamhc2foodextended:cornedbeefitem"},
          {"tag": "forge:salad_ingredients/cabbage"}
        ],
        "result": {
          "item": "pamhc2foodextended:cornedbeefandcabbageitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:cornedbeefandcabbage')

    e.custom(
      {
        "type": "farmersdelight:cooking",
        "ingredients": [
          {"tag": "forge:fruits/mango"},
          {"tag": "forge:crops/spiceleaf"},
          {"tag": "forge:crops/mustardseeds"},
          {"tag": "forge:cookingoil"}
        ],
        "result": {
          "item": "pamhc2foodextended:mangochutneyitem"
        },
        "experience": 0.1,
        "cookingtime": 100
        }
    ).id('kubejs:mangochutney')
    
})