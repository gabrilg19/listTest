

const animaldata = [
  { id: '1', name: 'Coyote', image: require =('./assets/animals/coyote.jpg',true), info: 'El coyote is..' },
  { id: '2', name: 'Eastern C..', image: require =  ('./assets/animals/eastern cottontail.jpg',true), info: 'eastern cotton tail' },
  { id: '3', name: 'Eastern G..', image: require =('./assets/animals/Eastern gray squirrel.jpg',true), info: 'Eastern Gray Squirrel' },
  { id: '4', name: 'Fox Squirrel', image: require =('./assets/animals/fox squirrel.jpg',true), info: 'rabit is beautiful..' },
  { id: '5', name: 'Little Br..', image: require =('./assets/animals/little brown bat.jpgg',true), info: 'Little brown bat' },
  { id: '6', name: 'Meadow_vole', image: require =('./assets/animals/meadow_vole.jpg',true), info: 'Meadow_vole' },
  { id: '7', name: 'Northern B..', image: require = ('./assets/animals/northern brown snake.jpg',true), info: 'Northern Brown Snake' },
  { id: '8', name: 'Plains Gar..', image: require  =('./assets/animals/plains garter snake.jpg',true), info: 'Plains Garter Snake' },
  { id: '9', name: 'Opossum', image: require =('./assets/animals/opossum.jpgg',true), info: 'Opossum' },
  { id: '10', name: 'Prairie Cr..', image: require= ('./assets/animals/prairie crayfish.jpg',true), info: 'Prairie Crayfish' },
  { id: '11', name: 'Raccon', image: require =('./assets/animals/raccoon.jpg',true), info: 'Raccon.' },
  { id: '12', name: 'Skunk', image: require =('./assets/animals/skunk.jpg',true), info: 'Skunk' },

];

const birdsData = [
  { id: '1', name: 'American C..', image: require =  ('.assets/Birds/American crow.jpg',true), info: 'The American Crow is an all-black bird thats found across most of the U.S. Known for its familiar “caw,” the crow eats almost anything – from seeds to insects and even small animals.  ' },
  { id: '2', name: 'American G..', image: require = ('./assets/Birds/American goldfinch.jpg',true), info: 'The American Goldfinch is often found in open areas near thistle plants. Listen for its flight call, which sounds like, “po-ta-to-chip.”' },
  { id: '3', name: 'American R..', image: require = ('./assets/Birds/american robin.jpg',true), info: 'The American Robin is known as the harbinger of spring. You may find this orange-breasted bird hunting for earthworms, or sitting in a tree chirping, “cheerily cheer up.”' },
  { id: '4', name: 'Baltimore ..', image: require = ('./assets/Birds/Baltimore oriole.jpg',true), info: 'The brightly-colored Baltimore Oriole sings a whistling song. It eats fruit and weaves a nest that hangs high off the ground.' },
  { id: '5', name: 'Black Capp..', image: require  =('./assets/Birds/Black-capped chickadee.jpg',true), info: 'The Black-capped Chickadee is a tiny bird with a black cap and bib. Known for its “chicka-dee-dee-dee” call, the bird often hides seeds to eat later. You may see a chickadee hanging upside down on a tree branch.' },
  { id: '6', name: 'Brown Head..', image: require = ('./assets/Birds/Brown-headed cowbird.jpg',true), info: 'The Brown-headed Cowbird lays its eggs in the nests of other birds, leaving its young to be raised by other species. Look for it in fields and meadows.' },
  { id: '7', name: 'Common Gra..', image: require = ('./assets/Birds/common grackle.jpg',true), info: 'The Common Grackle is found in open woodlands and marshes. The species is taller and has a longer tail than other similar-looking birds.' },
  { id: '8', name: 'European S..', image: require = ('./assets/Birds/European starling.jpg',true), info: 'The European Starling was first brought to New York by Shakespeare enthusiasts. The birds are now found across the country, and often move in large, noisy flocks.g'},
  { id: '9', name: 'House Spar..', image: require  =('./assets/Birds/house sparrow.jpg',true), info: 'The House Sparrow is frequently found at backyard feeders, and often nests in manmade structures, like the eaves of buildings or in street lights.' },
  { id: '10', name: 'Northern C..',image: require = ('./assets/Birds/northern cardinal.jpg',true), info: 'The male Northern Cardinal is an eye-catching bright red, while the female is mostly brown. Both have a sharp crest and may sound as if they’re saying, “Cheer! Cheer! Cheer!” or “Birdie, birdie, birdie!”' },
  { id: '11', name: 'Red tailed..', image: require = ('./assets/Birds/Red tailed hawk.jpg',true), info: 'Look for the Red-tailed Hawk soaring above open fields, where it hunts for voles and rabbits. Notice its broad wings and short tail. ' },
  { id: '12', name: 'Red Winged..', image: require  =('./assets/Birds/red winged black bird.jpg',true), info: 'The Red-winged Blackbird is common in the DRNA and other wetlands across the U.S. Look for the male’s red and yellow shoulder patches, and listen for its conk-la-lee song.' },
  
]

const bugsData = [
  { id: '1', name: 'Bumble bee', image: require = ('./assets/Insects/bumble bee.jpg',true), info: 'Bumble bee' },
  { id: '2', name: 'Cabbage bu..', image: require = ('./assets/Insects/cabbage white butterfly.jpg',true), info: 'Cabbage white buterfly' },
  { id: '3', name: 'Cicada', image: require = ('./assets/Insects/cicada.jpg',true), info: 'cicada' },
  { id: '4', name: 'Dragonfly', image: require = ('./assets/Insects/dragonfly.jpg',true), info: 'Dragonfly' },
  { id: '5', name: 'Firefly', image: require = ('./assets/Insects/firefly.jpg',true), info: 'Firefly' },
  { id: '6', name: 'Goldenrod S..', image: require = ('./assets/Insects/goldenrod soldier beetle.jpg',true), info: 'Goldenrod Soldier beetle' },
  { id: '7', name: 'Grasshopper',  image: require = ('./assets/Insects/grasshopper.jpg',true),info: 'Grasshopper' },
  { id: '8', name: 'LadyBug',  image: require = ('./assets/Insects/Ladybug.jpg',true),info: 'LadyBug' },
  { id: '9', name: 'Milkweed Bug', image: require = ('./assets/Insects/milkweed bug.jpg',true), info: 'buterfly is fragil.' },
  { id: '10', name: 'Monarch Bu..', image: require = ('./assets/Insects/monarch butterfly.jpg',true), info: 'Milkweed Bug' },
  { id: '11', name: 'Praying Ma..', image: require = ('./assets/Insects/praying mantis.jpg',true), info: 'Praying Mantis' },
  { id: '12', name: 'Red Admir..', image: require = ('./assets/Insects/red admiral butterfly.jpg',true), info: 'Red Admiral Butterfly' },
 
]

const plantsData = [
  { id: '1', name: 'Ash Tree', image: require = ('./assets/plants/ash tree.jpg',true), info: 'Ash tree' },
  { id: '2', name: 'Bluestem G..', image: require = ('./assets/plants/big bluestem grass.jpg',true), info: 'Big bluestem grass' },
  { id: '3', name: 'Buckthorn', image: require = ('./assets/plants/buckthorn.jpg',true), info: 'buckthorn' },
  { id: '4', name: 'Daisy Flea ', image: require = ('./assets/plants/daisy flea bane.jpg',true), info: 'Daisy flea bane' },
  { id: '5', name: 'Horsetail', image: require = ('./assets/plants/horsetail.jpg',true), info: 'Horsetail' },
  { id: '6', name: 'Joe Pye W..', image: require = ('./assets/plants/joe pye weed.jpg',true), info: 'Joe Pye Weed' },
  { id: '7', name: 'New Engla.. ', image: require = ('./assets/plants/new england aster.jpg',true), info: 'New England Aster' },
  { id: '8', name: 'Phragmites', image: require = ('./assets/plants/phragmites.jpg',true), info: 'Phragmites' },
  { id: '9', name: 'Prairie C..', image: require = ('./assets/plants/prairie coreopsis.jpg',true), info: 'Prairie Coreopsis' },
  { id: '10', name: 'Red Oak', image: require = ('./assets/plants/red oak.jpg',true), info: 'Red Oak.' },
  { id: '11', name: 'Teasel', image: require = ('./assets/plants/teasel.jpg',true), info: 'Teasel' },
  { id: '12', name: 'Wild Ber..', image: require = ('./assets/plants/wild bergamot.jpg',true), info: 'Wild Bergamot' },
  
]