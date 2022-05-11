onEvent('server.datapack.low_priority', (event) => {
    var data = [
      //tier 1
       {
            identifier: 'livingrock',
            recipes: [
                {
                    "craftable": true,
                    "tier": 1,
                    "sortOrder": 1,
                    "textColor": '#f6eed8'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 191,
                        "miningSpeed": 4.5,
                        "harvestLevel": 1,
                        "attack": 1.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "botania:livingrock"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:livingrock"
                }
            ]
        },
        {
            identifier: 'treated_wood',
            recipes: [
                {
                    "craftable": true,
                    "tier": 1,
                    "sortOrder": 0,
                    "textColor": '#5c2d19'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.9,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 60,
                        "miningSpeed": 2.5,
                        "harvestLevel": 0,
                        "attack": 0.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:cultivated",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:treated_wood"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:treated_wood"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:rods/treated_wood"
                    },
                    "value": 1,
                    "needed": 2,
                    "material": "tconstruct:treated_wood"
                }
            ]
        },
      //tier 2
        {
            identifier: 'andesite_alloy',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 0,
                    "textColor": '#a6a6a7'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.05,
                        "attackDamage": 0.95
                      },
                      "tconstruct:head": {
                        "durability": 200,
                        "miningSpeed": 5.5,
                        "harvestLevel": 2,
                        "attack": 1.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightweight",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:stone",
                    "fluid": [
                      {
                        "tag": "tconstruct:molten_iron",
                        "amount": 16
                      },
                      {
                        "tag": "tconstruct:molten_zinc",
                        "amount": 16
                      }
                    ],
                    "temperature": 800,
                    "output": "tconstruct:andesite_alloy"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/andesite_alloy"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:andesite_alloy"
                }
            ]
        },
        {
            identifier: 'tin',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#8eadb1'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 150,
                        "miningSpeed": 6.0,
                        "harvestLevel": 2,
                        "attack": 1.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "tconstruct:molten_tin",
                      "amount": 144
                    },
                    "temperature": 225,
                    "output": "tconstruct:tin"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/tin"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:tin"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/tin"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:tin",
                    "leftover": {
                      "tag": "forge:ingots/tin"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/tin"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:tin"
                }
            ]
        },
        {
            identifier: 'zinc',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#b8bd89'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 200,
                        "miningSpeed": 6.0,
                        "harvestLevel": 2,
                        "attack": 1.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "tconstruct:molten_zinc",
                      "amount": 144
                    },
                    "temperature": 420,
                    "output": "tconstruct:zinc"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/zinc"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:zinc",
                    "leftover": {
                      "tag": "forge:ingots/zinc"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/zinc"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:zinc"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/zinc"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:zinc"
                }
            ]
        },
      //tier 3
        {
            identifier: 'blazing_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 3,
                    "sortOrder": 2,
                    "textColor": '#d79811'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.0,
                        "attackSpeed": 0.9,
                        "attackDamage": 1.2
                      },
                      "tconstruct:head": {
                        "durability": 600,
                        "miningSpeed": 5.0,
                        "harvestLevel": 3,
                        "attack": 3.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:fiery",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_blazing_crystal",
                      "amount": 144
                    },
                    "temperature": 950,
                    "output": "tconstruct:blazing_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_blazing"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:blazing_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:blazing_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:blazing_crystal",
                    "leftover": {
                      "item": "powah:crystal_blazing"
                    }
                }
            ]
        },
        {
          identifier: 'energized_steel',
          recipes: [
              {
                  "craftable": false,
                  "tier": 3,
                  "sortOrder": 0,
                  "textColor": '#b89365'
              },
              {
                  stats: {
                    "tconstruct:extra": {},
                    "tconstruct:handle": {
                      "durability": 1.0,
                      "miningSpeed": 1.05,
                      "attackSpeed": 1.05,
                      "attackDamage": 1.0
                    },
                    "tconstruct:head": {
                      "durability": 500,
                      "miningSpeed": 7.0,
                      "harvestLevel": 3,
                      "attack": 2.5
                    }
                  }
              },
              {
                  "default": [
                    {
                      "name": "tconstruct:magnetic",
                      "level": 1
                    }
                  ]
              },
              {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_energized_steel",
                    "amount": 144
                  },
                  "temperature": 875,
                  "output": "tconstruct:energized_steel"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "item": "powah:steel_energized"
                  },
                  "value": 1,
                  "needed": 1,
                  "material": "tconstruct:energized_steel"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "item": "powah:energized_steel_block"
                  },
                  "value": 9,
                  "needed": 1,
                  "material": "tconstruct:energized_steel",
                  "leftover": {
                    "item": "powah:steel_energized"
                  }
              }
          ]
        },
        {
          identifier: 'azurium',
          recipes: [
              {
                  "craftable": false,
                  "tier": 3,
                  "sortOrder": 0,
                  "textColor": '#66ffff'
              },
              {
                  stats: {
                    "tconstruct:extra": {},
                    "tconstruct:handle": {
                      "durability": 1.05,
                      "miningSpeed": 1.0,
                      "attackSpeed": 1.0,
                      "attackDamage": 1.0
                    },
                    "tconstruct:head": {
                      "durability": 700,
                      "miningSpeed": 8.0,
                      "harvestLevel": 3,
                      "attack": 3.0
                    }
                  }
              },
              {
                  "default": [
                    {
                      "name": "tconstruct:lightweight",
                      "level": 1
                    }
                  ]
              },
              {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "jaopca:molten.azurium",
                    "amount": 144
                  },
                  "temperature": 860,
                  "output": "tconstruct:azurium"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:ingots/azurium"
                  },
                  "value": 1,
                  "needed": 1,
                  "material": "tconstruct:azurium"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:storage_blocks/azurium"
                  },
                  "value": 9,
                  "needed": 1,
                  "material": "tconstruct:azurium",
                  "leftover": {
                    "tag": "forge:ingots/azurium"
                  }
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:nuggets/azurium"
                  },
                  "value": 1,
                  "needed": 9,
                  "material": "tconstruct:azurium"
              }
          ]
      },
    {
      identifier: 'anemonium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#64d0ac'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 0.95,
                  "miningSpeed": 1.2,
                  "attackSpeed": 1.2,
                  "attackDamage": 1.0
                },
                "tconstruct:head": {
                  "durability": 632,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 3.0
                }
              }
          },
          {
              "default": [
                {
                  "name": "tconstruct:lightweight",
                  "level": 2
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.anemonium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:anemonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/anemonium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:anemonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/anemonium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:anemonium",
              "leftover": {
                "tag": "forge:ingots/anemonium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/anemonium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:anemonium"
          }
      ]
    },
    {
      identifier: 'geonium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#e5912f'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 1.1,
                  "miningSpeed": 0.9,
                  "attackSpeed": 0.9,
                  "attackDamage": 1.1
                },
                "tconstruct:head": {
                  "durability": 750,
                  "miningSpeed": 7.0,
                  "harvestLevel": 3,
                  "attack": 3.5
                }
              }
          },
          {
              "default": [
                {
                  "name": "tconstruct:heavy",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.geonium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:geonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/geonium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:geonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/geonium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:geonium",
              "leftover": {
                "tag": "forge:ingots/geonium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/geonium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:geonium"
          }
      ]
    },
    {
      identifier: 'cryonium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#7caae7'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 1.05,
                  "miningSpeed": 0.95,
                  "attackSpeed": 1.0,
                  "attackDamage": 1.05
                },
                "tconstruct:head": {
                  "durability": 648,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 3.0
                }
              }
          },
          {
              "default": [
                {
                  "name": "materialis:freezing",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.cryonium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:cryonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/cryonium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:cryonium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/cryonium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:cryonium",
              "leftover": {
                "tag": "forge:ingots/cryonium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/cryonium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:cryonium"
          }
      ]
    },
    {
      identifier: 'pyronium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#de2d05'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 0.95,
                  "miningSpeed": 1.05,
                  "attackSpeed": 1.05,
                  "attackDamage": 1.05
                },
                "tconstruct:head": {
                  "durability": 720,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 3.5
                }
              }
          },
          {
              "default": [
                {
                  "name": "tconstruct:autosmelt",
                  "level": 1
                },
                {
                  "name": "tconstruct:fiery",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.pyronium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:pyronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/pyronium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:pyronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/pyronium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:pyronium",
              "leftover": {
                "tag": "forge:ingots/pyronium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/pyronium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:pyronium"
          }
      ]
    },
    {
      identifier: 'dendronium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#7ccf4c'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 1.1,
                  "miningSpeed": 1.0,
                  "attackSpeed": 1.0,
                  "attackDamage": 1.05
                },
                "tconstruct:head": {
                  "durability": 648,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 3.0
                }
              }
          },
          {
              "default": [
                {
                  "name": "tconstruct:cultivated",
                  "level": 1
                },
                {
                  "name": "tconstruct:overslime",
                  "level": 1
                },
                {
                  "name": "tconstruct:overgrowth",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.dendronium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:dendronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/dendronium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:dendronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/dendronium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:dendronium",
              "leftover": {
                "tag": "forge:ingots/dendronium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/dendronium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:dendronium"
          }
      ]
    },
    {
      identifier: 'electronium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#7a58d2'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 1.1,
                  "miningSpeed": 1.05,
                  "attackSpeed": 1.05,
                  "attackDamage": 1.1
                },
                "tconstruct:head": {
                  "durability": 780,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 4.0
                }
              }
          },
          {
              "default": [
                {
                  "name": "natureminerals:electrifying",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.electronium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:electronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/electronium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:electronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/electronium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:electronium",
              "leftover": {
                "tag": "forge:ingots/electronium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/electronium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:electronium"
          }
      ]
    },
    {
      identifier: 'hydronium',
      recipes: [
          {
              "craftable": false,
              "tier": 3,
              "sortOrder": 0,
              "textColor": '#5ab5de'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 0.9,
                  "miningSpeed": 1.1,
                  "attackSpeed": 1.1,
                  "attackDamage": 0.9
                },
                "tconstruct:head": {
                  "durability": 630,
                  "miningSpeed": 8.0,
                  "harvestLevel": 3,
                  "attack": 2.5
                }
              }
          },
          {
              "default": [
                {
                  "name": "materialis:neptunes_blessing",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "jaopca:molten.hydronium",
                "amount": 144
              },
              "temperature": 860,
              "output": "tconstruct:hydronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/hydronium"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:hydronium"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/hydronium"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:hydronium",
              "leftover": {
                "tag": "forge:ingots/hydronium"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/hydronium"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:hydronium"
          }
      ]
    },
      //tier 4
        {
            identifier: 'enderium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 2,
                    "textColor": '#2c8c9c'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.9,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.2
                      },
                      "tconstruct:head": {
                        "durability": 1800,
                        "miningSpeed": 7.0,
                        "harvestLevel": 4,
                        "attack": 4.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:experienced",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "forge:molten_enderium",
                      "amount": 144
                    },
                    "temperature": 1450,
                    "output": "tconstruct:enderium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/enderium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:enderium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/enderium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:enderium",
                    "leftover": {
                      "tag": "forge:ingots/enderium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/enderium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:enderium"
                }
            ]
        },
        {
            identifier: 'gaia_spirit',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#94a0bf'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.15,
                        "miningSpeed": 1.25,
                        "attackSpeed": 0.95,
                        "attackDamage": 0.95
                      },
                      "tconstruct:head": {
                        "durability": 1950,
                        "miningSpeed": 10.0,
                        "harvestLevel": 4,
                        "attack": 8.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "materialis:manashield",
                        "level": 1
                      },
                      {
                        "name": "materialis:terrabeam",
                        "level": 1
                      },
                      {
                        "name": "tconstruct:maintained",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "materialis:terrasteel",
                    "fluid": {
                      "name": "kubejs:molten_gaia_spirit",
                      "amount": 144
                    },
                    "temperature": 1350,
                    "output": "tconstruct:gaia_spirit"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/gaia_spirit"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:gaia_spirit"
                }
            ]
        },
        {
            identifier: 'lumium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#fceea8'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1.25,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 300,
                        "miningSpeed": 11.0,
                        "harvestLevel": 3,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightspeed",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "forge:molten_lumium",
                      "amount": 144
                    },
                    "temperature": 1354,
                    "output": "tconstruct:lumium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/lumium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:lumium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/lumium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:lumium",
                    "leftover": {
                      "tag": "forge:ingots/lumium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/lumium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:lumium"
                }
            ]
        },
        {
            identifier: 'niotic_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 0,
                    "textColor": '#54e5ea'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.25,
                        "miningSpeed": 0.95,
                        "attackSpeed": 0.95,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 1600,
                        "miningSpeed": 7.5,
                        "harvestLevel": 3,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:sturdy",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_niotic_crystal",
                      "amount": 144
                    },
                    "temperature": 1250,
                    "output": "tconstruct:niotic_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_niotic"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:niotic_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:niotic_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:niotic_crystal",
                    "leftover": {
                      "item": "powah:crystal_niotic"
                    }
                }
            ]
        },
        {
            identifier: 'nitro_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 2,
                    "textColor": '#a42022'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.25,
                        "miningSpeed": 0.95,
                        "attackSpeed": 0.95,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 1850,
                        "miningSpeed": 5.0,
                        "harvestLevel": 4,
                        "attack": 5.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lacerating",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_nitro_crystal",
                      "amount": 144
                    },
                    "temperature": 1450,
                    "output": "tconstruct:nitro_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_nitro"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:nitro_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:nitro_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:nitro_crystal",
                    "leftover": {
                      "item": "powah:crystal_nitro"
                    }
                }
            ]
        },
        {
            identifier: 'signalum',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#ec3606'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.85,
                        "miningSpeed": 1.2,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 350,
                        "miningSpeed": 11.0,
                        "harvestLevel": 3,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightweight",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "forge:molten_signalum",
                      "amount": 144
                    },
                    "temperature": 1272,
                    "output": "tconstruct:signalum"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/signalum"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:signalum"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/signalum"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:signalum",
                    "leftover": {
                      "tag": "forge:ingots/signalum"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/signalum"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:signalum"
                }
            ]
        },
        {
            identifier: 'spirited_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#86c52d'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.1,
                        "miningSpeed": 1.2,
                        "attackSpeed": 1.0,
                        "attackDamage": 0.9
                      },
                      "tconstruct:head": {
                        "durability": 1600,
                        "miningSpeed": 9.5,
                        "harvestLevel": 3,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:momentum",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_spirited_crystal",
                      "amount": 144
                    },
                    "temperature": 1350,
                    "output": "tconstruct:spirited_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_spirited"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:spirited_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:spirited_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:spirited_crystal",
                    "leftover": {
                      "item": "powah:crystal_spirited"
                    }
                }
            ]
        },
        {
            identifier: 'crystal_matrix',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#43ffff'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.7,
                        "miningSpeed": 1.3,
                        "attackSpeed": 1.3,
                        "attackDamage": 1.1
                      },
                      "tconstruct:head": {
                        "durability": 2700,
                        "miningSpeed": 9.5,
                        "harvestLevel": 6,
                        "attack": 19.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "bettercompat:crystallized",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "kubejs:molten_crystal_matrix",
                      "amount": 144
                    },
                    "temperature": 1200,
                    "output": "tconstruct:crystal_matrix"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/crystal_matrix"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:crystal_matrix"
                }
            ]
        },
        {
          identifier: 'bedrock',
          recipes: [
              {
                  "craftable": true,
                  "tier": 4,
                  "sortOrder": 1,
                  "textColor": '#333333'
              },
              {
                  stats: {
                    "tconstruct:extra": {},
                    "tconstruct:handle": {
                      "durability": 1.0,
                      "miningSpeed": 1.0,
                      "attackSpeed": 1.0,
                      "attackDamage": 1.0
                    },
                    "tconstruct:head": {
                      "durability": 1400,
                      "miningSpeed": 9.5,
                      "harvestLevel": 127,
                      "attack": 14.0
                    }
                  }
              },
              {
                  "default": [
                    {
                      "name": "tconstruct:unbreakable",
                      "level": 1
                    }
                  ]
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "item": "minecraft:bedrock"
                  },
                  "value": 1,
                  "needed": 1,
                  "material": "tconstruct:bedrock"
              }
          ]
      },
      {
        identifier: 'insanium',
        recipes: [
            {
                "craftable": false,
                "tier": 4,
                "sortOrder": 1,
                "textColor": '#640099'
            },
            {
                stats: {
                  "tconstruct:extra": {},
                  "tconstruct:handle": {
                    "durability": 1.55,
                    "miningSpeed": 1.5,
                    "attackSpeed": 1.3,
                    "attackDamage": 1.65
                  },
                  "tconstruct:head": {
                    "durability": 2500,
                    "miningSpeed": 11.0,
                    "harvestLevel": 6,
                    "attack": 18.25
                  }
                }
            },
            {
                "default": [
                  {
                    "name": "mysticalagradditions:prosperous",
                    "level": 1
                  }
                ]
            },
            {
                "type": "tconstruct:material_fluid",
                "fluid": {
                  "name": "kubejs:molten_insanium",
                  "amount": 144
                },
                "temperature": 1272,
                "output": "tconstruct:insanium"
            },
            {
                "type": "tconstruct:material",
                "ingredient": {
                  "item": "mysticalagradditions:insanium_ingot"
                },
                "value": 1,
                "needed": 1,
                "material": "tconstruct:insanium"
            },
            {
                "type": "tconstruct:material",
                "ingredient": {
                  "item": "mysticalagradditions:insanium_block"
                },
                "value": 9,
                "needed": 1,
                "material": "tconstruct:insanium",
                "leftover": {
                  "item": "mysticalagradditions:insanium_ingot"
                }
            },
            {
                "type": "tconstruct:material",
                "ingredient": {
                  "item": "mysticalagradditions:insanium_nugget"
                },
                "value": 1,
                "needed": 9,
                "material": "tconstruct:insanium"
            }
        ]
    },
    /*
    {
      identifier: 'draconium_awakened',
      recipes: [
          {
              "craftable": false,
              "tier": 4,
              "sortOrder": 1,
              "textColor": '#fc9e00'
          },
          {
              stats: {
                "tconstruct:extra": {},
                "tconstruct:handle": {
                  "durability": 1.45,
                  "miningSpeed": 1.55,
                  "attackSpeed": 1.35,
                  "attackDamage": 1.4
                },
                "tconstruct:head": {
                  "durability": 3750,
                  "miningSpeed": 16.0,
                  "harvestLevel": 16,
                  "attack": 24
                }
              }
          },
          {
              "default": [
                {
                  "name": "tconstruct:raging",
                  "level": 1
                },
                {
                  "name": "tconstruct:lacerating",
                  "level": 1
                }
              ]
          },
          {
              "type": "tconstruct:material_fluid",
              "fluid": {
                "name": "kubejs:molten_draconium_awakened",
                "amount": 144
              },
              "temperature": 1600,
              "output": "tconstruct:draconium_awakened"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:ingots/draconium_awakened"
              },
              "value": 1,
              "needed": 1,
              "material": "tconstruct:draconium_awakened"
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:storage_blocks/draconium_awakened"
              },
              "value": 9,
              "needed": 1,
              "material": "tconstruct:draconium_awakened",
              "leftover": {
                "tag": "forge:ingots/draconium_awakened"
              }
          },
          {
              "type": "tconstruct:material",
              "ingredient": {
                "tag": "forge:nuggets/draconium_awakened"
              },
              "value": 1,
              "needed": 9,
              "material": "tconstruct:draconium_awakened"
          }
        ]
      }
      */
    ];

    data.forEach((recipeType) => {
        event.addJson(`tconstruct:materials/definition/${recipeType.identifier}.json`, recipeType.recipes[0]);
        event.addJson(`tconstruct:materials/stats/${recipeType.identifier}.json`, recipeType.recipes[1]);
        event.addJson(`tconstruct:materials/traits/${recipeType.identifier}.json`, recipeType.recipes[2]);
        for(let i = 3; i < recipeType.recipes.length; i++) {
          event.addJson(`tconstruct:recipes/tools/materials/${recipeType.identifier}/${recipeType.identifier}${i}.json`, recipeType.recipes[i]);
        }
    });
});
