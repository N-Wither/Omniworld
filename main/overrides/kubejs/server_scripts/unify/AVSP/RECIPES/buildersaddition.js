//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//BUILDERS ADDITION RECIPE INTEGRATION.
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('recipes', event => {
	//REMOVAL OF BUILDERS ADDITION INGOT TO ROD RECIPE IN SHAPED CRAFTING.
	//If you want to keep this feature. Just comment out this entire section.
	event.remove({id: 'buildersaddition:iron_rod'})
//
//fin
//
})