/* Original clue writing. Each of the 366 themes selects its own focus vocabulary.
 * Format: collection, answer|clue lines, then six title|focus word lines.
 * Theme focus words are guaranteed in the candidate pool; the rest come only
 * from the same topic collection. See themes.js for the stable calendar map. */
export const collections = [];
function add(category, vocabulary, themes) {
  const words = vocabulary.trim().split('\n').map(line => {const [answer,...clue]=line.split('|');return {answer:answer.trim().toUpperCase(),clue:clue.join('|').trim()};});
  const entries = themes.trim().split('\n').map(line => {const [title,focus]=line.split('|');return {title,focus:focus.split(' ')};});
  collections.push({category,words,themes:entries});
}
add('Winter', `
FROST|A delicate coat of ice on a window
SNOW|Flakes that can close a school
SLEET|Rain that freezes before it lands
ICICLE|A frozen drip hanging from a roof
MITTEN|A hand warmer with one space for four fingers
SCARF|A warm wrap around the neck
PARKA|A hooded coat for bitter weather
BOOTS|Footwear for a snowy walk
SLED|A downhill ride without wheels
SKATE|Glide on a frozen rink
SKI|A long runner strapped to a boot
SLOPE|The downhill part of a ski run
LODGE|A cozy base for a mountain holiday
COCOA|A chocolate drink for a cold evening
FIRE|A crackling source of hearth heat
EMBER|A glowing remnant in a fireplace
QUILT|A bedcover pieced together and stitched
THAW|A spell when frozen ground softens
BLIZZARD|A snowstorm with strong winds
FLURRY|A brief, light fall of snow
SHOVEL|A tool for clearing a snowy path
WOOL|A warm fiber from sheep
`, `
Snow day|SNOW SLED FLURRY SHOVEL BLIZZARD BOOTS
Wrapped up warm|MITTEN SCARF PARKA BOOTS WOOL QUILT
On thin ice|SKATE ICICLE FROST SLEET THAW SNOW
At the ski lodge|SKI SLOPE LODGE COCOA BOOTS PARKA
Fireside comforts|FIRE EMBER COCOA QUILT WOOL LODGE
The big freeze|BLIZZARD FROST ICICLE SNOW SLEET THAW
`);
add('Space', `
ORBIT|A path around a planet or star
COMET|An icy visitor with a glowing tail
METEOR|A streak of light from burning space debris
ASTEROID|A rocky body smaller than a planet
MOON|Earth's natural satellite
CRATER|A bowl-shaped impact scar
LUNAR|Relating to Earth's natural satellite
ECLIPSE|When one heavenly body hides another
SOLAR|Relating to the Sun
FLARE|A sudden burst from the Sun's surface
CORONA|The Sun's outer atmosphere
STAR|A self-luminous ball of hot gas
NEBULA|An interstellar cloud of gas and dust
GALAXY|A vast system of stars
COSMOS|The universe as an ordered whole
ROCKET|A vehicle propelled by expelled gases
LAUNCH|The start of a spacecraft's journey
ROVER|A robotic explorer on another world
PROBE|An uncrewed craft sent to investigate space
SATURN|The planet famous for its rings
VENUS|The second planet from the Sun
MARS|The planet nicknamed the Red Planet
`, `
Moonstruck|MOON CRATER LUNAR ECLIPSE ORBIT ROVER
Our solar neighbors|SATURN VENUS MARS SOLAR MOON ORBIT
Rocket science|ROCKET LAUNCH PROBE ROVER ORBIT CRATER
Starlight, star bright|STAR NEBULA GALAXY COSMOS SOLAR CORONA
Visitors from space|COMET METEOR ASTEROID CRATER ORBIT COSMOS
Here comes the Sun|SOLAR FLARE CORONA STAR ECLIPSE ORBIT
`);
add('Baking', `
FLOUR|The powdery foundation of most bread
YEAST|The organism that makes bread dough rise
DOUGH|A mixture ready for kneading
KNEAD|Work bread mixture with the hands
PROOF|Let yeast dough rise before baking
CRUST|The browned outer layer of a loaf
LOAF|A shaped unit of bread
SOURDOUGH|Bread made with a fermented starter
BUTTER|Cream churned into a baking staple
SUGAR|Sweet crystals measured into cake batter
WHISK|Beat ingredients with a wire tool
BATTER|A pourable mixture for cakes
OVEN|The hot heart of a bakery
TIMER|A device that tells a baker when to check
TRAY|A flat baking pan
PASTRY|A dough used for pies and tarts
TART|An open-topped pastry with a filling
GLAZE|A thin, glossy coating on a baked treat
SCONE|A crumbly baked companion to tea
MUFFIN|An individual quick bread in a paper cup
COOKIE|A small, flat baked sweet
SIEVE|A tool for sifting dry ingredients
`, `
The bread basket|FLOUR YEAST DOUGH KNEAD CRUST LOAF
Rise and shine|PROOF YEAST SOURDOUGH KNEAD DOUGH LOAF
Cake chemistry|BATTER WHISK BUTTER SUGAR OVEN SIEVE
A pastry affair|PASTRY TART GLAZE BUTTER FLOUR TRAY
The cookie jar|COOKIE SUGAR BUTTER DOUGH TRAY TIMER
Afternoon at the bakery|SCONE MUFFIN TART COOKIE GLAZE PASTRY
`);
add('Music', `
TEMPO|The speed of a musical piece
BEAT|A steady musical pulse
RHYTHM|A pattern of sounds in time
METER|The grouping of beats in music
CHORD|Three or more notes played together
SCALE|A sequence of notes arranged by pitch
MELODY|The tune you might hum
HARMONY|Notes sounding together in agreement
PIANO|A keyboard instrument with hammers and strings
VIOLIN|A four-stringed instrument played with a bow
CELLO|A bowed instrument held between the knees
FLUTE|A woodwind often held sideways
BRASS|The orchestral family that includes trumpets
DRUM|A percussion instrument with a stretched head
BASS|The lowest part in many musical arrangements
JAZZ|A music tradition known for improvisation and swing
BLUES|A music tradition often using a twelve-bar form
SOLO|A passage for one performer
CHOIR|A group of singers
VERSE|A song section before a repeated refrain
CHORUS|A recurring section of a song
LYRIC|A word or line in a song
`, `
Keep the beat|TEMPO BEAT RHYTHM METER DRUM BASS
Keys to the melody|PIANO SCALE CHORD MELODY HARMONY SOLO
The string section|VIOLIN CELLO BASS CHORD HARMONY SCALE
A night of jazz|JAZZ BLUES SOLO BRASS PIANO BASS
Sing it back|CHOIR VERSE CHORUS LYRIC MELODY HARMONY
Wind instruments|FLUTE BRASS TEMPO SOLO MELODY SCALE
`);
add('Ocean', `
TIDE|The sea's regular rise and fall
WAVE|A moving ridge on the water's surface
SURF|Waves breaking near the shore
CURRENT|A directed flow of ocean water
REEF|An underwater ridge that may be built by coral
CORAL|A tiny marine animal that can build a reef
ATOLL|A ring-shaped island surrounding a lagoon
LAGOON|A shallow body of water sheltered from the sea
KELP|Large brown seaweed forming underwater forests
ALGAE|Photosynthetic organisms common in water
PLANKTON|Tiny organisms drifting with the current
SEAL|A flippered marine mammal
WHALE|A large mammal that surfaces to breathe
DOLPHIN|A marine mammal known for clicks and whistles
SHARK|A fish with a skeleton made of cartilage
OCTOPUS|A marine animal with eight arms
SQUID|A tentacled swimmer that can squirt ink
SHELL|A mollusk's protective outer covering
SAND|Tiny grains under a beach towel
SHORE|Where the sea meets the land
ABYSS|A very deep region of the ocean
SALT|The mineral that seasons seawater
`, `
Life on the reef|REEF CORAL ATOLL LAGOON SHARK ALGAE
The deep blue|ABYSS SQUID OCTOPUS WHALE PLANKTON CURRENT
Beside the seaside|SAND SHORE SHELL SURF WAVE TIDE
Gentle giants|WHALE DOLPHIN SEAL PLANKTON CURRENT OCEAN
Underwater forests|KELP ALGAE PLANKTON CURRENT SEAL SHARK
Turn of the tide|TIDE CURRENT WAVE SURF SHORE SALT
`.replace('CURRENT OCEAN','CURRENT SALT'));
add('Garden', `
SEED|A small beginning for a new plant
SPROUT|A plant's first little shoot
ROOT|The part that anchors a plant and absorbs water
STEM|The supporting stalk of a plant
LEAF|A plant's main photosynthetic organ
PETAL|One colorful segment of a flower
BLOOM|A flower, or the act of flowering
POLLEN|Fine grains carried between flowers
BULB|An underground storehouse that can become a tulip
TULIP|A cup-shaped spring flower grown from a bulb
ROSE|A thorny garden flower associated with romance
LILY|A flower often with six showy petal-like parts
IRIS|A garden flower named for a Greek rainbow goddess
DAISY|A flower with a sunny center and rays of petals
SOIL|The earthy medium in a flower bed
MULCH|A protective layer spread over garden soil
COMPOST|Decayed organic matter used to enrich soil
TROWEL|A small hand tool for planting
PRUNE|Trim a plant to encourage healthy growth
HEDGE|A living boundary of closely planted shrubs
TRELLIS|A lattice that supports climbing plants
WATER|What a thirsty seedling needs
`, `
From seed to sprout|SEED SPROUT ROOT STEM LEAF WATER
Spring bulbs|BULB TULIP IRIS LILY ROOT BLOOM
Say it with flowers|ROSE LILY DAISY IRIS PETAL BLOOM
Down to earth|SOIL MULCH COMPOST ROOT TROWEL WATER
The climbing garden|TRELLIS HEDGE PRUNE STEM LEAF ROSE
A pollinator's paradise|POLLEN PETAL BLOOM DAISY SEED ROSE
`);
add('Cinema', `
ACTOR|A person who plays a character on screen
CAST|All the performers in a film
ROLE|The character assigned to a performer
SCENE|One continuous part of a film's action
SCRIPT|The written dialogue and directions for a film
DIRECTOR|The person guiding a film's performances and vision
CAMERA|The device recording a movie's images
LENS|The optical component that focuses an image
FRAME|A single still image in a movie
EDIT|Assemble and trim recorded footage
CUT|A transition from one shot to another
TAKE|One recorded attempt at a shot
STUNT|A daring action performed for a scene
PROP|An object used by a performer
SET|The constructed space where a scene is filmed
SCORE|Music written to accompany a film
SOUND|The audible part of a movie
SILENT|Describing films without synchronized spoken dialogue
COMEDY|A film genre intended to amuse
THRILLER|A film genre built around tension and suspense
CREDIT|An acknowledgment of a contributor at a film's end
SCREEN|The surface on which a movie is projected
`, `
Lights, camera, action|CAMERA DIRECTOR TAKE SCENE SET LENS
Behind the scenes|PROP STUNT SET SCRIPT DIRECTOR CAST
The cutting room|EDIT CUT FRAME SCENE TAKE SCREEN
Leading roles|ACTOR CAST ROLE SCRIPT SCENE CREDIT
Sound and silence|SCORE SOUND SILENT SCREEN SCENE EDIT
A double feature|COMEDY THRILLER SCREEN ACTOR SCORE CAST
`);
add('Books', `
NOVEL|A long work of prose fiction
STORY|A narrative of connected events
PLOT|The sequence of events in a narrative
CHAPTER|A major division of a book
PAGE|One side of a leaf in a book
SPINE|The edge of a book visible on a shelf
COVER|A book's protective outer surface
TITLE|The name of a written work
AUTHOR|The person who writes a book
EDITOR|A person who prepares a manuscript for publication
DRAFT|An early version of a written work
PROSE|Ordinary writing without a verse structure
VERSE|Writing arranged in lines with poetic rhythm
POEM|A literary work that often uses imagery and rhythm
STANZA|A grouped set of lines in a poem
RHYME|Similarity of sounds at the ends of words
FABLE|A short tale that teaches a moral
MYTH|A traditional story involving gods or heroes
EPIC|A long poem about heroic deeds
MEMOIR|A personal account drawn from the writer's life
LIBRARY|A place to borrow books
SHELF|A horizontal support for a row of books
`, `
A novel idea|NOVEL PLOT CHAPTER AUTHOR PROSE STORY
Between the covers|COVER SPINE PAGE TITLE SHELF CHAPTER
The poet's corner|POEM STANZA RHYME VERSE EPIC AUTHOR
Once upon a time|FABLE MYTH STORY EPIC PLOT PROSE
The writing desk|AUTHOR EDITOR DRAFT TITLE PROSE PAGE
At the library|LIBRARY SHELF NOVEL MEMOIR COVER SPINE
`);
add('Travel', `
MAP|A drawing that helps you find your way
ATLAS|A bound collection of maps
ROUTE|The way chosen to reach a destination
GUIDE|A person or book that shows a visitor around
PASSPORT|An official booklet for international travel
VISA|Official permission to enter a foreign country
TICKET|Proof of a paid journey or admission
FARE|The price of a trip on public transport
HOTEL|A place offering rooms to travelers
HOSTEL|Budget lodging often with shared rooms
INN|A small establishment offering food and lodging
SUITE|A connected set of hotel rooms
BAG|A traveler's container for belongings
TRUNK|A large, sturdy travel chest
PACK|Put belongings into luggage
TRIP|A journey away and back
TOUR|A journey with several planned stops
CRUISE|A holiday aboard a passenger ship
FLIGHT|A journey through the air
TRAIN|A line of railway cars pulled by an engine
BEACH|A sandy or pebbly holiday destination
RESORT|A place designed for holidays and recreation
`, `
Passport, please|PASSPORT VISA TICKET FLIGHT BAG FARE
Room for the night|HOTEL HOSTEL INN SUITE RESORT BAG
The road less traveled|MAP ROUTE GUIDE TRIP ATLAS TOUR
All aboard|TRAIN TICKET FARE ROUTE TRIP BAG
Island getaway|BEACH RESORT CRUISE TOUR HOTEL SUITE
Packing light|PACK BAG TRUNK PASSPORT TICKET MAP
`);
add('Weather', `
RAIN|Water falling in drops from clouds
DRIZZLE|Very light rain in fine drops
SHOWER|A brief spell of rainfall
DOWNPOUR|A sudden heavy fall of rain
CLOUD|A visible mass of tiny water droplets in the air
CIRRUS|A high, wispy type of cloud
CUMULUS|A puffy cloud with a fairly flat base
STRATUS|A low cloud that forms a broad layer
WIND|Air moving relative to the ground
GUST|A short, strong burst of wind
BREEZE|A gentle wind
GALE|A very strong wind
THUNDER|The sound following a lightning flash
BOLT|A jagged flash of lightning
STORM|A disturbance bringing severe weather
HAIL|Balls of ice falling from a storm cloud
FOG|A cloud resting at ground level
MIST|Fine suspended droplets that reduce visibility
DEW|Water beads formed on a cool surface
HUMID|Describing air with a lot of moisture
DROUGHT|A prolonged shortage of rainfall
FORECAST|A prediction of coming weather
`, `
Rain check|RAIN DRIZZLE SHOWER DOWNPOUR CLOUD FORECAST
Cloud watching|CLOUD CIRRUS CUMULUS STRATUS MIST FOG
Against the wind|WIND GUST BREEZE GALE STORM FORECAST
Thunderstruck|THUNDER BOLT STORM HAIL CLOUD RAIN
Misty morning|FOG MIST DEW HUMID CLOUD BREEZE
Dry spell|DROUGHT HUMID FORECAST WIND CLOUD DEW
`);
add('Birds', `
ROBIN|A songbird with a red or orange breast
WREN|A small songbird often seen with its tail cocked
FINCH|A small songbird with a seed-cracking beak
SPARROW|A small, commonly brownish seed-eating bird
THRUSH|A songbird family known for melodious calls
OWL|A bird of prey often active after dark
EAGLE|A large bird of prey with a hooked beak
HAWK|A sharp-eyed bird of prey
FALCON|A swift bird of prey with pointed wings
HERON|A long-legged bird that hunts in shallow water
CRANE|A tall, long-necked wading bird
DUCK|A broad-billed waterbird
SWAN|A large waterbird with a graceful neck
GOOSE|A waterbird known for honking
GULL|A coastal bird with a famously opportunistic appetite
NEST|A bird's nursery
EGG|A bird's offspring in a shell
BEAK|A bird's bill
WING|A feathered structure used for flight
FEATHER|One of the light structures covering a bird
FLOCK|A group of birds traveling together
MIGRATE|Move seasonally between habitats
`, `
The dawn chorus|ROBIN WREN FINCH SPARROW THRUSH BEAK
Birds of prey|OWL EAGLE HAWK FALCON WING FEATHER
By the duck pond|DUCK SWAN GOOSE HERON CRANE NEST
Flying south|MIGRATE FLOCK GOOSE CRANE WING GULL
A feathered nest|NEST EGG FEATHER BEAK WING ROBIN
Along the shore|GULL HERON CRANE DUCK SWAN BEAK
`);
add('Pets', `
KITTEN|A young cat
PUPPY|A young dog
TABBY|A cat with stripes, spots, or swirls in its coat
CALICO|A cat with a coat usually of three colors
POODLE|A dog breed known for its curly coat
BEAGLE|A small hound with an excellent sense of smell
COLLIE|A herding dog associated with Lassie
CORGI|A short-legged Welsh herding dog
HAMSTER|A small pet rodent with cheek pouches
RABBIT|A long-eared mammal often kept as a pet
GERBIL|A small, long-tailed pet rodent
PARROT|A hooked-beaked bird that may mimic speech
CANARY|A small pet songbird often colored yellow
GOLDFISH|A familiar orange aquarium pet
GUPPY|A small tropical aquarium fish
LEASH|A lead used when walking a dog
COLLAR|A band worn around a pet's neck
TREAT|A small food reward for a pet
TOY|An object for a pet to play with
PURR|A contented cat's rumbling sound
BARK|A dog's familiar call
PAW|The foot of a cat or dog
PERCH|A bar where a pet bird can rest
CAGE|An enclosure for a small pet
FEATHER|A lightweight structure in a bird’s coat
AQUARIUM|A glass tank for keeping fish
FIN|A fish’s stabilizing or propelling appendage
GILL|A fish’s organ for drawing oxygen from water
`, `
The cat's whiskers|KITTEN TABBY CALICO PURR PAW TOY
Who's a good dog|PUPPY POODLE BEAGLE COLLIE CORGI BARK
Little companions|HAMSTER RABBIT GERBIL TREAT TOY PAW
Feathered friends|PARROT CANARY PERCH CAGE FEATHER TREAT
Life in a fishbowl|GOLDFISH GUPPY AQUARIUM FIN GILL TREAT
Walkies|LEASH COLLAR TREAT PUPPY PAW BARK
`);
add('Coffee & tea', `
COFFEE|A drink brewed from roasted beans
BEAN|A small seed that becomes coffee after roasting
ROAST|Heat coffee beans to develop flavor
GRIND|Crush coffee beans into small particles
BREW|Prepare a drink by steeping or infusing
FILTER|A porous barrier that catches coffee grounds
ESPRESSO|Concentrated coffee brewed under pressure
LATTE|Espresso with plenty of steamed milk
MOCHA|A drink combining coffee and chocolate
CREMA|The golden foam on a well-made espresso
MILK|The dairy base for a latte's foam
FROTH|A layer of tiny bubbles atop a drink
TEA|A drink made by steeping leaves
OOLONG|A tea oxidized between green and black
MATCHA|Powdered green tea whisked into water
CHAI|A word for tea used for a spiced milk drink
STEEP|Let leaves infuse in hot water
KETTLE|A vessel used to boil water for tea
CUP|A small vessel for a hot drink
SAUCER|A shallow dish beneath a teacup
MUG|A sturdy drinking vessel with a handle
SIP|Drink a little at a time
`, `
But first, coffee|COFFEE BEAN ROAST GRIND BREW FILTER
The espresso bar|ESPRESSO LATTE MOCHA CREMA MILK FROTH
Tea for two|TEA KETTLE CUP SAUCER STEEP SIP
Leaves of flavor|OOLONG MATCHA CHAI TEA STEEP BREW
Milk and foam|MILK FROTH LATTE MOCHA ESPRESSO CREMA
The morning ritual|MUG SIP COFFEE BREW KETTLE TEA
`);
add('Sports', `
BAT|A club used to hit a baseball
BALL|A round object central to many sports
BASE|One of four stations on a baseball diamond
PITCH|Throw a baseball toward the batter
CATCH|Secure a ball before it touches the ground
INNING|A division of a baseball game
GOAL|A scoring target in soccer or hockey
NET|Mesh that catches a scored ball or puck
PUCK|The flat disk used in ice hockey
RINK|The surface on which ice hockey is played
RACKET|A strung implement used in tennis
SERVE|The stroke that begins a tennis point
VOLLEY|Hit a tennis ball before it bounces
COURT|The playing area for tennis or basketball
HOOP|The ring a basketball must pass through
DRIBBLE|Move a ball with repeated small bounces or taps
SPRINT|A short race run at full speed
RELAY|A race in which teammates take turns
TRACK|An oval running course
LAP|One complete circuit of a course
MEDAL|An award worn on a ribbon
COACH|A person who trains a sports team
`, `
Play ball|BAT BALL BASE PITCH CATCH INNING
On the ice|PUCK RINK NET GOAL COACH MEDAL
Game, set, match|RACKET SERVE VOLLEY COURT NET BALL
Nothing but net|HOOP DRIBBLE COURT BALL COACH GOAL
Off to the races|SPRINT RELAY TRACK LAP MEDAL COACH
Team spirit|COACH RELAY GOAL MEDAL CATCH SERVE
`);
add('Art', `
PAINT|Colored material applied to make a picture
BRUSH|A tool with bristles used by a painter
CANVAS|Fabric stretched as a surface for a painting
EASEL|A stand supporting a painter's work
PALETTE|A board on which a painter mixes colors
PIGMENT|A substance that gives paint its color
HUE|A particular color or shade
TINT|A color lightened by adding white
SHADE|A color darkened by adding black
TONE|The relative lightness or darkness of a color
SKETCH|A quick, rough drawing
PENCIL|A graphite drawing tool
CHARCOAL|Burned wood used for rich, dark drawing marks
INK|A liquid medium for drawing or writing
PASTEL|A drawing stick made of powdered pigment
CLAY|A moldable material used for sculpture
MARBLE|A stone used for classical sculpture
CHISEL|A tool used to carve stone
STATUE|A sculpture representing a person or animal
MURAL|A painting made directly on a wall
FRESCO|A wall painting made on wet plaster
GALLERY|A space where art is exhibited
`, `
The painter's studio|PAINT BRUSH CANVAS EASEL PALETTE PIGMENT
A study in color|HUE TINT SHADE TONE PALETTE PIGMENT
Drawing the line|SKETCH PENCIL CHARCOAL INK PASTEL TONE
Set in stone|MARBLE CHISEL STATUE CLAY SKETCH GALLERY
Off the wall|MURAL FRESCO PAINT PIGMENT BRUSH GALLERY
An afternoon of art|GALLERY STATUE CANVAS SKETCH MURAL PASTEL
`);
add('Laboratory', `
BEAKER|A wide-mouthed laboratory container
FLASK|A laboratory vessel with a narrow neck
PIPETTE|A tool for transferring small volumes of liquid
VIAL|A small container for a sample
SLIDE|A glass plate for a microscope specimen
LENS|The focusing glass in a microscope
CELL|The basic structural unit of living things
TISSUE|A group of similar cells working together
GENE|A unit of hereditary information
HELIX|The spiral shape of a DNA strand
ATOM|The smallest unit retaining an element's identity
ION|An atom or molecule with an electrical charge
ACID|A substance with a pH below seven in water
BASE|A substance that can neutralize an acid
SAMPLE|A small portion taken for testing
TRIAL|One run of an experiment
CONTROL|An experimental comparison kept without the tested change
RESULT|The outcome recorded after an experiment
THEORY|A well-supported explanatory framework in science
DATA|Recorded observations used in research
SAFETY|The reason for goggles and a lab coat
GOGGLES|Protective eyewear worn at the lab bench
`, `
Glassware and goggles|BEAKER FLASK PIPETTE VIAL SAFETY GOGGLES
Under the microscope|SLIDE LENS CELL TISSUE SAMPLE DATA
Written in our genes|GENE HELIX CELL TISSUE THEORY DATA
Acids and bases|ACID BASE ION ATOM BEAKER SAMPLE
The scientific method|TRIAL CONTROL RESULT THEORY DATA SAMPLE
A tiny world|ATOM ION CELL GENE HELIX LENS
`);
add('Mountains', `
PEAK|The pointed top of a mountain
SUMMIT|The highest point reached by a climber
RIDGE|A long, narrow high crest
SLOPE|A hillside's inclined surface
CLIFF|A steep, exposed rock face
LEDGE|A narrow shelf on a rock face
VALLEY|Low land between hills or mountains
GORGE|A narrow valley with steep sides
PASS|A route through a mountain range
TRAIL|A marked path for hikers
CAIRN|A pile of stones used as a waymarker
BOOT|A sturdy piece of hiking footwear
ROPE|A climber's essential safety line
HARNESS|A climber's secured arrangement of straps
AXE|The head of an ice climber's striking tool
CRAMPON|A spiked device fastened to a climbing boot
GLACIER|A slowly moving mass of ice
SNOW|The white cap of many high peaks
ALPINE|Relating to high mountains
ALTITUDE|Height above sea level
ASCENT|A climb upward
DESCENT|A journey down from a summit
`, `
Summit fever|SUMMIT PEAK ASCENT ALTITUDE RIDGE ALPINE
The valley below|VALLEY GORGE PASS DESCENT SLOPE TRAIL
Rock solid|CLIFF LEDGE ROPE HARNESS AXE BOOT
Ice and altitude|GLACIER CRAMPON SNOW AXE ALTITUDE ALPINE
Follow the cairns|CAIRN TRAIL BOOT PASS RIDGE ASCENT
The way back down|DESCENT SLOPE VALLEY LEDGE ROPE TRAIL
`);
add('City life', `
STREET|An urban road lined with buildings
AVENUE|A broad city road, often lined with trees
ALLEY|A narrow passage behind or between buildings
BLOCK|A city area bounded by streets
PLAZA|An open public square in a city
PARK|A green public space among buildings
BENCH|A long seat in a public place
FOUNTAIN|A decorative feature with flowing water
SUBWAY|An underground urban railway
METRO|Another name for an urban rapid-transit system
TAXI|A car hired for a metered journey
BUS|A road vehicle carrying many passengers
CAFE|A small place to get coffee and light meals
BAKERY|A shop selling bread and baked goods
MARKET|A place where vendors sell their goods
KIOSK|A small open-fronted sales booth
TOWER|A tall, narrow building
SKYLINE|The outline of buildings against the sky
BRIDGE|A structure spanning a river or road
DOME|A rounded roof over a building
MUSEUM|A building displaying collections of art or history
LIBRARY|A public place to borrow reading material
`, `
Street level|STREET AVENUE ALLEY BLOCK PLAZA KIOSK
Urban oasis|PARK BENCH FOUNTAIN PLAZA BRIDGE LIBRARY
The daily commute|SUBWAY METRO TAXI BUS STREET BLOCK
A city of flavors|CAFE BAKERY MARKET KIOSK STREET PLAZA
Look up|TOWER SKYLINE BRIDGE DOME BLOCK AVENUE
Culture around the corner|MUSEUM LIBRARY PLAZA CAFE PARK DOME
`);
add('Kitchen', `
KNIFE|A sharp-edged tool for preparing ingredients
PEELER|A tool that removes a vegetable's outer skin
GRATER|A tool that shreds cheese into small pieces
BOARD|A flat surface for chopping food
PAN|A shallow vessel for frying
POT|A deep vessel for cooking soup
SKILLET|A frying pan, often made of cast iron
WOK|A rounded pan used for stir-frying
LADLE|A deep-bowled spoon for serving soup
SPATULA|A flat tool for turning food in a pan
TONGS|A two-armed tool for gripping hot food
SPOON|A utensil for stirring or eating soup
BOIL|Cook in bubbling water
SIMMER|Cook gently just below boiling
SEAR|Brown a food's surface with intense heat
SAUTE|Cook quickly in a little fat
CHOP|Cut food into rough pieces
DICE|Cut food into small cubes
MINCE|Chop food into very tiny pieces
SLICE|Cut a thin, flat piece from food
SINK|The basin where dishes are washed
APRON|A protective garment worn over a cook's clothes
`, `
A cut above|KNIFE PEELER GRATER BOARD CHOP SLICE
Pots and pans|PAN POT SKILLET WOK BOIL SIMMER
Stir things up|LADLE SPATULA TONGS SPOON POT WOK
Turn up the heat|BOIL SIMMER SEAR SAUTE PAN SKILLET
Knife skills|CHOP DICE MINCE SLICE KNIFE BOARD
The home chef|APRON SINK KNIFE PAN SPOON BOARD
`);
add('Woodland', `
FOREST|A large area covered chiefly with trees
CANOPY|The leafy roof above a woodland floor
GROVE|A small group of trees
GLADE|An open clearing among trees
OAK|The tree that grows acorns
ACORN|The nut that may become an oak
MAPLE|A tree famous for syrup and lobed leaves
BIRCH|A tree often recognized by pale, peeling bark
PINE|An evergreen tree with needle-like leaves
CEDAR|An aromatic evergreen used for wooden chests
FERN|A woodland plant with fronds instead of flowers
MOSS|A small, soft plant forming green carpets
LICHEN|A partnership between a fungus and an alga or cyanobacterium
FUNGI|The kingdom that includes mushrooms
DEER|A woodland mammal whose males often grow antlers
FOX|A bushy-tailed wild member of the dog family
BADGER|A burrowing mammal with a striped face
SQUIRREL|A tree-climbing rodent that caches nuts
OWL|A bird of prey with forward-facing eyes
TRAIL|A path worn through the woods
BARK|The protective outer layer of a tree trunk
ROOT|A tree's underground anchor
`, `
Into the woods|FOREST CANOPY GROVE GLADE TRAIL BARK
Under the old oak|OAK ACORN SQUIRREL ROOT BARK GROVE
The forest floor|FERN MOSS LICHEN FUNGI ROOT TRAIL
Evergreen afternoon|PINE CEDAR CANOPY FOREST BARK GROVE
Woodland neighbors|DEER FOX BADGER SQUIRREL OWL FOREST
Leaves are turning|MAPLE BIRCH OAK ACORN CANOPY TRAIL
`);
add('Insects', `
BEE|A striped pollinator that makes honey
HONEY|A sweet substance stored by bees
HIVE|A home for a colony of bees
COMB|A wax structure with hexagonal cells
QUEEN|The egg-laying female in a bee colony
ANT|A social insect often seen carrying crumbs
COLONY|A community of insects living together
MOUND|A raised pile of earth made by some ants
BEETLE|An insect with hardened forewings
LADYBUG|A spotted beetle that eats aphids
APHID|A small insect that sucks sap from plants
WEEVIL|A beetle with an elongated snout
MOTH|A usually nocturnal relative of a butterfly
COCOON|A protective case spun by some insect larvae
LARVA|An immature insect stage before adulthood
PUPA|The transformation stage between larva and adult
WING|The flight surface of many adult insects
ANTENNA|One of an insect's paired sensory feelers
CRICKET|A chirping relative of the grasshopper
CICADA|An insect known for loud summer buzzing
FIREFLY|A beetle whose abdomen can glow
MANTIS|A predatory insect with folded front legs
`, `
Busy as a bee|BEE HONEY HIVE COMB QUEEN COLONY
An ant's world|ANT COLONY MOUND LARVA ANTENNA QUEEN
Little garden helpers|LADYBUG BEETLE APHID MANTIS BEE WING
A beautiful transformation|LARVA PUPA COCOON MOTH WING ANTENNA
Summer soundtrack|CRICKET CICADA WING ANTENNA FIREFLY MOTH
Beetle mania|BEETLE LADYBUG WEEVIL FIREFLY LARVA WING
`);
add('Handmade', `
YARN|A continuous strand used for knitting
NEEDLE|A pointed tool used for stitching
STITCH|A single loop or pass in sewn work
KNIT|Make fabric by interlocking loops of yarn
PURL|A knitting stitch with a bump on the front
CROCHET|Make fabric with yarn and a single hook
HOOK|The tool used to make crochet stitches
LOOM|A frame for weaving fabric
WARP|The lengthwise threads on a loom
WEFT|The threads woven across the lengthwise ones
WEAVE|Interlace strands to make fabric
FELT|A fabric formed by matting fibers together
THREAD|A thin strand used for sewing
SEAM|The line where two pieces of fabric join
HEM|A folded and stitched fabric edge
THIMBLE|A small finger cap that pushes a sewing needle
PATCH|A piece of cloth covering a hole
QUILT|A stitched bedcover with a padded middle
BEAD|A small decorative object with a hole
CORD|A thick string used for knots or jewelry
KNOT|An interlaced fastening in string
MACRAME|A textile craft based on decorative knotting
`, `
Knit one, purl one|KNIT PURL YARN NEEDLE STITCH THREAD
Hooked on crochet|CROCHET HOOK YARN STITCH KNOT CORD
On the loom|LOOM WARP WEFT WEAVE THREAD YARN
A stitch in time|NEEDLE THREAD SEAM HEM THIMBLE PATCH
The quilting circle|QUILT PATCH STITCH SEAM HEM THREAD
Tied together|MACRAME KNOT CORD BEAD WEAVE HOOK
`);
add('Technology', `
CODE|Instructions written for a computer
LOOP|Code that repeats a set of instructions
ARRAY|An ordered collection of indexed values
STRING|A sequence of characters in a program
BUG|An unintended defect in software
DEBUG|Find and fix software defects
STACK|A last-in, first-out data structure
QUEUE|A first-in, first-out data structure
CHIP|A small piece of silicon carrying electronic circuits
PIXEL|The smallest addressable element of a digital image
SCREEN|A display showing a computer's output
MOUSE|A pointing device named after a small mammal
ROUTER|A device that directs data between networks
PACKET|A small unit of data sent over a network
SERVER|A computer that provides resources to clients
CLIENT|Software that requests a service from another system
CACHE|A store of data kept for faster access
FILE|A named collection of stored data
FOLDER|A container used to organize digital documents
BINARY|A number system using only zero and one
LOGIC|The rules used to evaluate true and false conditions
INPUT|Data supplied to a program or device
`, `
Hello, world|CODE LOOP ARRAY STRING INPUT LOGIC
Bug hunt|BUG DEBUG CODE LOOP STACK LOGIC
Data structures|ARRAY STACK QUEUE STRING CACHE FILE
Across the network|ROUTER PACKET SERVER CLIENT CACHE BINARY
The desktop|SCREEN MOUSE PIXEL CHIP FILE FOLDER
Zeros and ones|BINARY LOGIC CHIP CODE INPUT PACKET
`);
add('Transport', `
WHEEL|A circular component that turns on an axle
AXLE|A shaft around which wheels rotate
PEDAL|A foot-operated lever on a bicycle
SPOKE|One of the rods between a wheel's hub and rim
CHAIN|Linked metal loops transmitting power on a bike
BRAKE|A device used to slow a vehicle
ENGINE|The machine supplying a vehicle's power
PISTON|A moving cylinder component in many engines
GEAR|A toothed wheel that transmits motion
CLUTCH|A mechanism connecting an engine to its transmission
RAIL|One of the steel tracks carrying a train
TRAIN|A linked line of railway carriages
TRAM|A streetcar running on rails
DEPOT|A base where transport vehicles are housed
WING|An aircraft's main lifting surface
PILOT|The person controlling an aircraft
COCKPIT|The space from which a pilot controls a plane
RUNWAY|The strip where planes take off and land
HULL|The main body of a boat
SAIL|Fabric used to catch wind and propel a boat
OAR|A long lever used to row a boat
RUDDER|A surface used to steer a boat or aircraft
`, `
On two wheels|WHEEL AXLE PEDAL SPOKE CHAIN BRAKE
Under the hood|ENGINE PISTON GEAR CLUTCH AXLE BRAKE
On the rails|RAIL TRAIN TRAM DEPOT ENGINE WHEEL
Ready for takeoff|WING PILOT COCKPIT RUNWAY ENGINE RUDDER
Messing about in boats|HULL SAIL OAR RUDDER WHEEL GEAR
Moving parts|GEAR CHAIN AXLE WHEEL PISTON CLUTCH
`);
add('Architecture', `
ARCH|A curved structure spanning an opening
COLUMN|An upright architectural support
PILLAR|A freestanding vertical support
BEAM|A horizontal structural member
DOME|A rounded vault forming a roof
VAULT|An arched ceiling or roof
SPIRE|A tapering point at the top of a tower
TOWER|A tall structure rising above its surroundings
BRICK|A rectangular block used in masonry
MORTAR|The binding material between bricks
STONE|A natural building material quarried from rock
TIMBER|Wood prepared for construction
DOOR|A hinged barrier at an entrance
WINDOW|A glazed opening that admits light
STAIR|A step in a flight between floors
FLOOR|A room's lower walking surface
FACADE|The front face of a building
PORTICO|A roofed entrance supported by columns
ATRIUM|An open central space inside a building
CORNICE|A projecting molding near the top of a wall
PLAN|A drawing showing a building from above
MODEL|A small three-dimensional version of a proposed building
`, `
Under the arch|ARCH COLUMN PILLAR BEAM VAULT PORTICO
Above the rooftops|DOME SPIRE TOWER VAULT CORNICE FACADE
Brick by brick|BRICK MORTAR STONE TIMBER BEAM PILLAR
A room of one's own|DOOR WINDOW STAIR FLOOR ATRIUM PLAN
First impressions|FACADE PORTICO DOOR COLUMN CORNICE WINDOW
The architect's table|PLAN MODEL BEAM ARCH FLOOR WINDOW
`);
add('Ancient worlds', `
PYRAMID|A monumental tomb with sloping triangular sides
PHARAOH|A ruler of ancient Egypt
NILE|The river central to ancient Egyptian civilization
MUMMY|A body preserved by an ancient embalming process
SPHINX|A mythical creature with a lion's body and a human head
PAPYRUS|An ancient writing material made from a wetland plant
ROME|The city traditionally founded by Romulus
SENATE|A governing council in the Roman Republic
TOGA|A draped garment worn by ancient Roman citizens
FORUM|A public meeting place in an ancient Roman city
LEGION|A major unit of the ancient Roman army
AQUEDUCT|A structure carrying water to a city
ATHENS|The ancient Greek city associated with the Acropolis
AGORA|A public gathering place in an ancient Greek city
TEMPLE|A building dedicated to worship
SCROLL|A rolled document used before bound books
COIN|A stamped metal piece used as money
RELIC|An object surviving from an earlier time
RUIN|The remains of a once-complete building
DIG|An archaeological excavation
`, `
Along the Nile|NILE PHARAOH PYRAMID PAPYRUS MUMMY SPHINX
When in Rome|ROME SENATE TOGA FORUM LEGION AQUEDUCT
Ancient Athens|ATHENS AGORA TEMPLE SCROLL COIN RELIC
The archaeologist's brush|DIG RELIC RUIN COIN SCROLL TEMPLE
Messages from antiquity|PAPYRUS SCROLL RELIC COIN FORUM AGORA
Monuments to time|PYRAMID SPHINX AQUEDUCT TEMPLE RUIN FORUM
`);
add('Mythology', `
ZEUS|The thunderbolt-wielding ruler of Greek gods
HERA|The Greek queen of the gods
ATHENA|The Greek goddess of wisdom
APOLLO|A Greek god associated with music and prophecy
HERMES|The messenger of the Greek gods
ARES|The Greek god of war
ODIN|The one-eyed chief god of Norse mythology
THOR|The Norse god with a mighty hammer
LOKI|The trickster figure of Norse mythology
RUNE|A character in an old Germanic alphabet
TROLL|A creature of Scandinavian folklore
GIANT|An enormous being in traditional tales
DRAGON|A legendary reptilian creature, often fire-breathing
GRIFFIN|A mythical creature part eagle and part lion
PHOENIX|A mythical bird reborn from its ashes
UNICORN|A legendary horse with a single horn
QUEST|A hero's search for a difficult goal
ORACLE|A source of divine prophecy in ancient tales
HERO|A central figure known for courageous deeds
FATE|The course of events believed to be predetermined
`, `
On Mount Olympus|ZEUS HERA ATHENA APOLLO HERMES ARES
Thunder from the north|ODIN THOR LOKI RUNE TROLL GIANT
Fantastic beasts|DRAGON GRIFFIN PHOENIX UNICORN GIANT TROLL
The hero's journey|QUEST HERO ORACLE FATE DRAGON GRIFFIN
Messengers and muses|HERMES APOLLO ATHENA ORACLE ZEUS HERA
Ashes to wings|PHOENIX GRIFFIN DRAGON UNICORN FATE QUEST
`);
add('Theatre', `
STAGE|The area where a theatrical performance takes place
CURTAIN|The fabric that rises at the start of a play
WING|An offstage area at the side of a theatre
APRON|The part of a stage extending beyond its main arch
ACT|A major division of a play
SCENE|A smaller division within a theatrical act
CUE|A signal to speak, enter, or change a stage effect
LINE|A piece of dialogue assigned to a performer
CAST|The complete group of performers in a play
LEAD|The principal performer in a production
EXTRA|A performer with a small background role
CHORUS|A group singing together in a musical
MASK|A face covering used to portray a character
COSTUME|Clothing worn to portray a role
PROP|A portable object used by an actor
WIG|Artificial hair worn for a character
OPERA|A theatrical work told principally through singing
BALLET|A theatrical dance form often using pointe work
DRAMA|A serious play or the art of theatrical performance
FARCE|A comedy built on exaggerated, improbable situations
`, `
Curtain up|CURTAIN STAGE WING APRON CUE SCENE
Learn your lines|LINE CUE ACT SCENE LEAD CAST
In the dressing room|MASK COSTUME WIG PROP LEAD EXTRA
A musical evening|CHORUS OPERA BALLET STAGE CAST CUE
Comedy of errors|FARCE DRAMA ACT SCENE LINE PROP
The whole company|CAST LEAD EXTRA CHORUS COSTUME STAGE
`);
add('Tabletop games', `
CHESS|A strategy game played by two armies of sixteen pieces
KING|The chess piece whose capture is threatened by check
QUEEN|The chess piece combining rook and bishop movement
ROOK|A chess piece that moves along ranks and files
BISHOP|A chess piece that moves diagonally
KNIGHT|A chess piece that moves in an L shape
PAWN|The most numerous piece on a chessboard
CHECK|A direct attack on a chess king
DICE|Small numbered cubes rolled in games
TOKEN|A small object representing a player on a board
TILE|A flat game piece used in dominoes or Scrabble
BOARD|The playing surface for many tabletop games
CARD|One rectangle in a shuffled deck
DECK|A complete pack of playing cards
SPADE|The playing-card suit shaped like a pointed leaf
HEART|The red card suit shaped like a symbol of love
CLUB|The card suit resembling a three-leaf clover
TRUMP|A card suit given special winning power
TURN|One player's opportunity to act
SCORE|A tally of points earned in a game
`, `
A royal game|CHESS KING QUEEN ROOK BISHOP KNIGHT
Opening moves|PAWN CHECK KNIGHT BOARD TURN CHESS
Roll with it|DICE TOKEN BOARD TURN SCORE TILE
In the cards|CARD DECK SPADE HEART CLUB TRUMP
Game night|DICE TILE TOKEN BOARD CARD SCORE
Your move|TURN SCORE PAWN CHECK TOKEN CARD
`);
add('Workshop', `
HAMMER|A hand tool for driving nails
NAIL|A pointed metal fastener driven into wood
SAW|A toothed tool for cutting material
PLANE|A woodworking tool that shaves surfaces flat
CHISEL|A sharp-edged tool for cutting wood or stone
MALLET|A hammer with a large wooden or rubber head
DRILL|A rotating tool used to bore holes
BIT|A cutting attachment fitted to a drill
SCREW|A threaded fastener turned into place
DRIVER|The turning tool in a screw-fastening pair
WRENCH|A tool for gripping and turning nuts
PLIERS|A hinged gripping tool with two handles
CLAMP|A device that holds workpieces together
VISE|A bench-mounted tool that grips a workpiece
FILE|A rough-surfaced tool for smoothing material
SAND|Smooth a surface with abrasive paper
LEVEL|A tool used to check that a surface is horizontal
RULER|A straight strip marked for measuring length
SQUARE|A tool for checking right angles
TAPE|A flexible, retractable measuring strip
`, `
Woodworking weekend|SAW PLANE CHISEL MALLET CLAMP SAND
Nailed it|HAMMER NAIL DRILL SCREW DRIVER BIT
Measure twice|LEVEL RULER SQUARE TAPE PLANE SAW
A firm grip|WRENCH PLIERS CLAMP VISE HAMMER MALLET
Smooth operator|FILE SAND PLANE CHISEL SAW CLAMP
The tool bench|DRILL BIT DRIVER WRENCH LEVEL VISE
`);
add('Fruit', `
APPLE|A crisp orchard fruit that can be pressed for cider
PEAR|A sweet orchard fruit with a narrow neck
PLUM|A smooth-skinned stone fruit that becomes a prune
PEACH|A fuzzy-skinned stone fruit
CHERRY|A small stone fruit often perched on a sundae
APRICOT|A small orange stone fruit
ORANGE|A round citrus fruit divided into juicy segments
LEMON|A tart yellow citrus fruit
LIME|A green citrus fruit used in key pies
GRAPE|A small fruit grown in bunches on vines
BERRY|A small, juicy fruit such as a blueberry
MELON|A large fruit with a thick rind and juicy flesh
BANANA|A curved yellow fruit sold in bunches
MANGO|A tropical stone fruit with golden flesh
PAPAYA|A tropical fruit with orange flesh and black seeds
GUAVA|A tropical fruit often used in pink juice
FIG|A soft fruit with many tiny seeds inside
DATE|A sweet fruit grown on a particular palm
RAISIN|A dried grape
PRUNE|A dried plum
`, `
In the orchard|APPLE PEAR PLUM PEACH CHERRY APRICOT
Citrus sunshine|ORANGE LEMON LIME GRAPE MANGO GUAVA
A tropical escape|BANANA MANGO PAPAYA GUAVA LIME MELON
The fruit bowl|APPLE PEAR GRAPE BANANA ORANGE MELON
A little stone fruit|PLUM PEACH CHERRY APRICOT MANGO PRUNE
Sweet and dried|FIG DATE RAISIN PRUNE GRAPE PLUM
`);
add('Vegetables', `
CARROT|An orange root vegetable famously associated with rabbits
TURNIP|A round root vegetable often purple at the top
BEET|A root vegetable that can stain fingers deep red
RADISH|A small, peppery root vegetable
POTATO|A starchy tuber used for fries and mash
YAM|A starchy edible tuber with a rough skin
ONION|A layered bulb that can make a cook cry
LEEK|A mild allium with a long white stem
GARLIC|A strongly flavored bulb divided into cloves
SHALLOT|A small onion relative with a delicate flavor
PEA|A small round green seed from a pod
BEAN|An edible seed often found in a long pod
CORN|A cereal with kernels growing on a cob
SQUASH|A vegetable family that includes pumpkins
KALE|A leafy cabbage relative popular in salads
SPINACH|A leafy green famously eaten by Popeye
LETTUCE|A leafy base for many salads
CHARD|A leafy vegetable with colorful edible stalks
CELERY|A crisp vegetable sold in ribbed stalks
FENNEL|A vegetable with an anise-flavored bulb
`, `
Back to our roots|CARROT TURNIP BEET RADISH POTATO YAM
Layers of flavor|ONION LEEK GARLIC SHALLOT FENNEL CELERY
Peas in a pod|PEA BEAN CORN SQUASH POTATO CARROT
Leaf it to me|KALE SPINACH LETTUCE CHARD CELERY FENNEL
The salad bar|LETTUCE RADISH CARROT BEET CELERY SPINACH
Roast dinner sides|POTATO TURNIP CARROT SQUASH ONION GARLIC
`);
add('Herbs & spices', `
BASIL|A fragrant herb central to pesto
THYME|A tiny-leaved herb used in a bouquet garni
SAGE|A gray-green herb often paired with browned butter
MINT|A cooling herb used in tea and juleps
DILL|A feathery herb often used with pickles
CHIVE|A slender onion-flavored herb
PARSLEY|A leafy herb often used as a garnish
OREGANO|An aromatic herb often scattered over pizza
ROSEMARY|An herb with woody stems and needle-like leaves
TARRAGON|A French cooking herb with an anise-like flavor
CUMIN|An earthy spice often used in chili
CLOVES|Dried flower buds with a warm, pungent flavor
NUTMEG|A warm spice grated from a seed
GINGER|A pungent rhizome used fresh or dried
PEPPER|A seasoning ground from dried peppercorns
PAPRIKA|A red spice made from dried peppers
SAFFRON|A costly spice made from crocus stigmas
ANISE|A seed spice with a licorice-like flavor
VANILLA|A flavoring from an orchid's cured seedpods
SESAME|Tiny seeds used to make tahini
`, `
The herb garden|BASIL THYME SAGE MINT DILL CHIVE
Italian seasoning|BASIL OREGANO ROSEMARY PARSLEY PEPPER GARLIC
Warm spice cupboard|CUMIN CLOVES NUTMEG GINGER ANISE PEPPER
Freshly garnished|PARSLEY CHIVE DILL BASIL MINT TARRAGON
A pinch of color|PAPRIKA SAFFRON PEPPER CUMIN SESAME GINGER
Sweet aromatics|VANILLA ANISE CLOVES NUTMEG GINGER MINT
`.replace('PEPPER GARLIC','PEPPER THYME'));
add('Dessert', `
CAKE|A sweet baked centerpiece for a birthday
ICING|A sweet topping spread over a cake
FUDGE|A soft, dense confection made with sugar and fat
CARAMEL|Sugar heated until golden brown
TOFFEE|A hard confection made by cooking sugar with butter
TRUFFLE|A small chocolate confection often dusted with cocoa
MOUSSE|A light, airy dessert with a whipped texture
SORBET|A frozen dessert made with fruit and sweetened water
GELATO|An Italian frozen dessert typically churned slowly
SUNDAE|Ice cream served with toppings and sauce
CUSTARD|A dessert thickened with eggs and milk
FLAN|A baked custard often topped with caramel
TART|An open pastry filled with fruit or custard
PIE|A filled pastry baked in a dish
CRUMBLE|A baked fruit dessert with a loose, crumbly topping
STRUDEL|A layered pastry rolled around a filling
DONUT|A fried ring or filled round of sweet dough
WAFFLE|A batter cake cooked in a patterned iron
CREPE|A very thin pancake that can hold a sweet filling
SYRUP|A thick, sweet liquid poured over dessert
`, `
Let them eat cake|CAKE ICING CUSTARD CARAMEL FUDGE TRUFFLE
Frozen delights|SORBET GELATO SUNDAE SYRUP CARAMEL FUDGE
Chocolate box|TRUFFLE FUDGE MOUSSE TOFFEE CARAMEL ICING
Just desserts|CUSTARD FLAN MOUSSE TART PIE CRUMBLE
Fruit under pastry|PIE TART CRUMBLE STRUDEL CUSTARD SYRUP
Sweet street food|DONUT WAFFLE CREPE SYRUP GELATO CARAMEL
`);
add('Waterways', `
RIVER|A large natural flow of water toward a sea or lake
STREAM|A small natural flow of water
CREEK|A small watercourse, often narrower than a river
BROOK|A small flowing watercourse in a pastoral setting
SOURCE|The place where a river begins
MOUTH|Where a river empties into another body of water
DELTA|A sediment-built landform at a river's mouth
ESTUARY|Where fresh river water mixes with seawater
BANK|The land along the edge of a river
BED|The channel bottom over which a river flows
BEND|A curve in a river's course
MEANDER|A winding curve in a river
RAPIDS|A turbulent, fast-flowing stretch of river
FALLS|Water dropping over a steep rock edge
CASCADE|A small waterfall or a series of descending falls
POOL|A still, deep part of a stream
CANAL|An artificial waterway
LOCK|A chamber that raises or lowers boats in a canal
DAM|A barrier built to hold back water
RESERVOIR|An artificial lake used to store water
`, `
Down by the river|RIVER BANK BED BEND STREAM BROOK
From source to sea|SOURCE MOUTH DELTA ESTUARY RIVER MEANDER
Whitewater|RAPIDS FALLS CASCADE POOL STREAM BED
Canal boats|CANAL LOCK BANK DAM RESERVOIR WATER
A winding way|MEANDER BEND CREEK BROOK SOURCE BANK
Water in reserve|DAM RESERVOIR LOCK CANAL SOURCE POOL
`.replace('RESERVOIR WATER','RESERVOIR RIVER'));
add('Night sky', `
STAR|A shining ball of gas seen as a point in the night sky
MOON|The bright natural satellite in Earth's night sky
DUSK|The dim period just after sunset
TWILIGHT|The soft light while the Sun is below the horizon
DAWN|The first appearance of light before sunrise
NIGHT|The time between sunset and sunrise
NORTH|The direction indicated by Polaris
POLARIS|The star currently close to the north celestial pole
ORION|The constellation with a distinctive three-star belt
LYRA|The constellation representing a small harp
VEGA|The brightest star in Lyra
SIRIUS|The brightest star in the night sky
AURORA|A colorful glow in the polar night sky
GLOW|A steady light without a visible flame
HALO|A luminous ring around the Sun or Moon
METEOR|A shooting star's actual phenomenon
LUNAR|Relating to the Moon
CRESCENT|The shape of a slender young Moon
PHASE|One stage in the Moon's cycle of appearances
ECLIPSE|An event that temporarily darkens the Sun or Moon
`, `
After the sunset|DUSK TWILIGHT NIGHT STAR MOON GLOW
Written in the stars|ORION LYRA VEGA SIRIUS POLARIS NORTH
Northern lights|AURORA GLOW NORTH NIGHT STAR POLARIS
Phases of the Moon|MOON LUNAR CRESCENT PHASE ECLIPSE HALO
Make a wish|METEOR STAR NIGHT GLOW ORION VEGA
Until the dawn|DAWN DUSK TWILIGHT NIGHT MOON CRESCENT
`);
add('Geology', `
ROCK|A solid aggregate of natural minerals
MINERAL|A naturally occurring inorganic solid with a crystal structure
QUARTZ|A common mineral made of silicon dioxide
MICA|A mineral that splits into thin, shiny sheets
GRANITE|A coarse-grained igneous rock used for countertops
BASALT|A dark volcanic rock common on the ocean floor
MARBLE|Limestone transformed by heat and pressure
SLATE|A fine-grained rock that splits into flat sheets
SHALE|A layered sedimentary rock formed from mud
CHALK|A soft white limestone made from tiny marine remains
LAVA|Molten rock after it reaches the surface
MAGMA|Molten rock beneath Earth's surface
CRATER|A bowl-shaped depression at a volcano's top
VENT|An opening through which volcanic material escapes
FAULT|A fracture along which rock has moved
FOLD|A bend in rock layers caused by pressure
FOSSIL|Preserved evidence of ancient life
STRATA|Layers of rock viewed collectively
EROSION|The wearing away and transport of rock or soil
SEDIMENT|Particles deposited by water, wind, or ice
`, `
Rock collection|ROCK MINERAL QUARTZ MICA GRANITE BASALT
Volcanic temper|LAVA MAGMA CRATER VENT BASALT ROCK
Under pressure|MARBLE SLATE FOLD FAULT GRANITE MINERAL
Layers of history|STRATA FOSSIL SEDIMENT SHALE CHALK ROCK
Worn away|EROSION SEDIMENT ROCK CHALK SHALE STRATA
Crystal clear|QUARTZ MICA MINERAL GRANITE MARBLE ROCK
`);
add('Human body', `
BONE|The hard tissue forming most of the skeleton
SKULL|The bony case protecting the brain
RIB|One of the curved bones protecting the chest
SPINE|The column of vertebrae supporting the back
JOINT|The place where two bones meet
KNEE|The joint between the thigh and lower leg
ELBOW|The joint between upper arm and forearm
WRIST|The joint between the hand and forearm
MUSCLE|Tissue that contracts to produce movement
TENDON|A band attaching muscle to bone
HEART|The muscular organ that pumps blood
PULSE|The rhythmic beat felt in an artery
VEIN|A blood vessel carrying blood toward the heart
ARTERY|A blood vessel carrying blood away from the heart
LUNG|One of the paired organs used to breathe
BREATH|One inhalation and exhalation
BRAIN|The organ central to thought and nervous control
NERVE|A bundle carrying signals through the body
SKIN|The body's largest organ by surface area
TOUCH|The sense experienced through receptors in the skin
`, `
The bare bones|BONE SKULL RIB SPINE JOINT KNEE
Bend and stretch|JOINT KNEE ELBOW WRIST MUSCLE TENDON
Matters of the heart|HEART PULSE VEIN ARTERY MUSCLE BREATH
Take a breath|LUNG BREATH HEART RIB MUSCLE PULSE
A nervous connection|BRAIN NERVE TOUCH SKIN SPINE SKULL
Skin deep|SKIN TOUCH NERVE VEIN MUSCLE PULSE
`);
add('Healthcare', `
NURSE|A healthcare professional providing hands-on patient care
DOCTOR|A medical practitioner who diagnoses and treats illness
CLINIC|A facility for outpatient healthcare
WARD|A hospital unit with beds for patients
GAUZE|A loosely woven material used to dress wounds
SPLINT|A rigid support used to immobilize an injured limb
CAST|A hard covering that supports a healing broken bone
SLING|A fabric support for an injured arm
PULSE|The rhythmic beat checked at the wrist
FEVER|A body temperature higher than normal
COUGH|A sudden expulsion of air from the lungs
SYMPTOM|A reported sign of a health condition
THERAPY|Treatment intended to restore or improve health
REST|A pause from activity that supports recovery
HYGIENE|Practices that help maintain cleanliness and health
SOAP|A cleaning substance used for handwashing
VACCINE|A preparation that helps train an immune response
IMMUNE|Relating to the body's defense against disease
DOSE|A measured amount of medicine
TABLET|A compressed solid form of medicine
`, `
At the clinic|CLINIC NURSE DOCTOR WARD PULSE SYMPTOM
First aid kit|GAUZE SPLINT CAST SLING SOAP REST
Signs and symptoms|FEVER COUGH SYMPTOM PULSE DOCTOR NURSE
On the mend|THERAPY REST CAST SLING SPLINT WARD
Clean hands|HYGIENE SOAP NURSE CLINIC IMMUNE VACCINE
The medicine cabinet|DOSE TABLET VACCINE IMMUNE DOCTOR CLINIC
`);
add('Clothing', `
SHIRT|An upper-body garment often with buttons and a collar
BLOUSE|A loose-fitting upper-body garment
SWEATER|A knitted garment worn for warmth
VEST|A sleeveless upper-body garment
COAT|An outer garment worn over other clothes
JACKET|A shorter outer garment with sleeves
PARKA|A hooded coat made for cold conditions
CAPE|A sleeveless outer garment hanging from the shoulders
SKIRT|A garment hanging from the waist without separate legs
DRESS|A one-piece garment with an upper part and a skirt
SUIT|A matching jacket and trousers or skirt
TUXEDO|A formal evening suit often worn with a bow tie
SOCK|A fitted foot covering worn inside a shoe
BOOT|Footwear extending above the ankle
SANDAL|Open footwear held on by straps
SNEAKER|A rubber-soled shoe for casual wear or sport
SCARF|A long strip of fabric worn around the neck
GLOVE|A hand covering with separate fingers
BELT|A band worn around the waist
HAT|A shaped covering for the head
`, `
Layer by layer|SHIRT BLOUSE SWEATER VEST COAT JACKET
Out in the cold|COAT PARKA SCARF GLOVE BOOT HAT
All dressed up|DRESS SUIT TUXEDO SHIRT BELT SKIRT
Put your best foot forward|SOCK BOOT SANDAL SNEAKER BELT HAT
The finishing touch|SCARF GLOVE BELT HAT CAPE VEST
In the wardrobe|SKIRT DRESS BLOUSE JACKET SWEATER SUIT
`);
add('Dance', `
BALLET|A classical dance form with codified positions
POINTE|A ballet technique dancing on the tips of the toes
BARRE|A support rail used during ballet practice
PLIE|A ballet movement bending the knees
TUTU|A short skirt worn by some ballet dancers
LEAP|A spring from the floor into the air
TANGO|A partnered dance with roots around the Rio de la Plata
WALTZ|A ballroom dance commonly in triple time
FOXTROT|A smooth ballroom dance with slow and quick steps
POLKA|A lively dance commonly in duple time
SALSA|A social dance sharing its name with a spicy sauce
MAMBO|A Cuban dance associated with syncopated rhythms
RUMBA|A dance name linked to Afro-Cuban music traditions
SAMBA|A Brazilian dance associated with Carnival
TAP|A dance style using shoes fitted with metal plates
SWING|A dance family associated with big-band jazz
STEP|A single movement of the feet in a dance
TURN|A rotation of the body in a dance
RHYTHM|A pattern of beats guiding dancers
PARTNER|The person dancing with you in a couple
`, `
At the ballet barre|BALLET POINTE BARRE PLIE TUTU LEAP
Ballroom evening|TANGO WALTZ FOXTROT POLKA PARTNER TURN
Latin rhythms|SALSA MAMBO RUMBA SAMBA RHYTHM STEP
Tap your feet|TAP SWING RHYTHM STEP TURN LEAP
Shall we dance|PARTNER WALTZ TANGO STEP TURN RHYTHM
Across the floor|LEAP TURN STEP POINTE SWING POLKA
`);
add('Language', `
NOUN|A word that names a person, place, or thing
VERB|A word expressing an action or state
ADJECTIVE|A word that describes a noun
ADVERB|A word that can modify a verb
PRONOUN|A word that can stand in for a noun
CLAUSE|A group of words containing a subject and predicate
COMMA|A punctuation mark that separates list items
COLON|A punctuation mark often introducing a list
PERIOD|A punctuation mark ending a statement
DASH|A punctuation mark used for an interruption or break
QUOTE|Repeat someone else's exact words
PHRASE|A group of words forming a meaningful unit
IDIOM|An expression whose meaning is not simply literal
SIMILE|A comparison often using like or as
METAPHOR|A description of one thing as if it were another
PUN|A joke exploiting multiple meanings or similar sounds
VOWEL|A speech sound made without a major vocal-tract obstruction
SYLLABLE|A unit of pronunciation centered on a vowel sound
ACCENT|A distinctive way of pronouncing a language
DIALECT|A variety of language associated with a group or region
`, `
Parts of speech|NOUN VERB ADJECTIVE ADVERB PRONOUN CLAUSE
Pause for punctuation|COMMA COLON PERIOD DASH QUOTE PHRASE
Figuratively speaking|IDIOM SIMILE METAPHOR PUN PHRASE QUOTE
The sound of words|VOWEL SYLLABLE ACCENT DIALECT NOUN VERB
A play on words|PUN IDIOM METAPHOR SIMILE QUOTE PHRASE
Build a sentence|CLAUSE PHRASE NOUN VERB ADJECTIVE PRONOUN
`);
add('Office', `
DESK|A work surface with room for a laptop and notes
CHAIR|A seat with a back for one person
DRAWER|A sliding storage compartment in a desk
LAMP|A source of light on a work surface
PEN|An ink-writing instrument
PENCIL|A writing tool with an erasable graphite core
PAPER|Thin sheets used for writing and printing
ERASER|A tool that removes pencil marks
STAPLE|A wire fastener driven through sheets of paper
CLIP|A bent-wire holder for loose papers
FOLDER|A folded cover holding documents together
FILE|A collection of related documents
MEMO|A brief written message within an organization
AGENDA|A list of items for a meeting
MINUTES|The written record of a meeting
REPORT|A structured account of findings or work
PRINTER|A device that produces physical copies of digital pages
SCANNER|A device that digitizes physical documents
COPIER|A machine that duplicates printed pages
STAPLER|A tool that fastens pages using bent wire
`, `
The desk drawer|DESK DRAWER PEN PENCIL ERASER CLIP
Paperwork|PAPER FILE FOLDER STAPLE CLIP REPORT
In the meeting|AGENDA MINUTES MEMO REPORT PEN PAPER
Office machines|PRINTER SCANNER COPIER STAPLER DESK LAMP
Write this down|PEN PENCIL PAPER ERASER MEMO REPORT
A place to work|DESK CHAIR DRAWER LAMP FOLDER PRINTER
`);
add('School', `
CLASS|A group of students learning together
LESSON|A period of teaching on a particular subject
TEACHER|A person who guides learning in a classroom
PUPIL|A student, especially in school
CHALK|A soft stick used to write on a traditional board
BOARD|A classroom surface for displaying a lesson
DESK|A student's table for reading and writing
BOOK|A bound collection of pages used for study
PENCIL|A graphite tool used for writing answers
ERASER|A tool used to remove a pencil mistake
RULER|A marked straightedge used in a geometry lesson
ATLAS|A book of maps used in geography
QUIZ|A short test of knowledge
EXAM|A formal assessment of what a student has learned
GRADE|A mark representing a student's achievement
ESSAY|A short written piece developing an argument or idea
RECESS|A break for play during the school day
LUNCH|The midday meal between lessons
LIBRARY|A room or building for borrowing books
DIPLOMA|A document awarded after completing a course of study
`, `
Back to school|CLASS LESSON TEACHER PUPIL DESK BOOK
The pencil case|PENCIL ERASER RULER CHALK BOOK ATLAS
Test your knowledge|QUIZ EXAM GRADE ESSAY LESSON PUPIL
Beyond the classroom|RECESS LUNCH LIBRARY BOOK ATLAS PUPIL
At the chalkboard|CHALK BOARD TEACHER CLASS RULER LESSON
Graduation day|DIPLOMA GRADE EXAM ESSAY TEACHER CLASS
`);
add('Farm', `
BARN|A farm building for livestock or harvested crops
SILO|A tall structure used to store grain or silage
FIELD|An area of land used to grow crops
FENCE|A barrier keeping livestock in a pasture
TRACTOR|A powerful farm vehicle used to pull equipment
PLOW|A tool used to turn soil before planting
SEED|A small beginning sown to grow a crop
HARVEST|The gathering of ripe crops
WHEAT|A cereal grain commonly milled into bread flour
BARLEY|A cereal grain used in malt and soups
OATS|A cereal grain often served as porridge
RYE|A cereal grain used in a dark, hearty bread
COW|A female bovine often kept for milk
CALF|A young bovine
SHEEP|A wool-bearing farm animal
LAMB|A young sheep
GOAT|A horned farm animal known for sure footing
PIG|A stout farm animal with a snout
HEN|A female chicken
ROOSTER|An adult male chicken
`, `
Down on the farm|BARN SILO FIELD FENCE TRACTOR PLOW
Sow and reap|SEED HARVEST FIELD PLOW WHEAT BARLEY
Amber waves|WHEAT BARLEY OATS RYE FIELD HARVEST
The dairy barn|COW CALF BARN FIELD FENCE GOAT
Counting sheep|SHEEP LAMB GOAT FIELD FENCE BARN
In the farmyard|HEN ROOSTER PIG COW BARN FENCE
`);
add('Desert', `
DUNE|A mound of sand shaped by the wind
SAND|The granular material covering many desert dunes
OASIS|A fertile spot where desert water reaches the surface
MIRAGE|An optical illusion that may suggest distant water
CACTUS|A desert plant often covered in spines
AGAVE|A succulent whose varieties can be used for tequila
ALOE|A succulent known for gel inside its leaves
YUCCA|A dryland plant with stiff, pointed leaves
CAMEL|A desert-adapted mammal with one or two humps
FENNEC|A small desert fox with very large ears
GECKO|A small lizard often able to climb smooth surfaces
VIPER|A venomous snake with hinged fangs
SCORPION|An arachnid with pincers and a stinging tail
LIZARD|A usually four-legged, scaly reptile
ARID|Extremely dry, as a desert climate
HEAT|A defining condition of a hot desert afternoon
SHADE|Shelter from direct sunlight
NOMAD|A person whose life involves moving from place to place
CARAVAN|A group traveling together across a desert
WIND|Moving air that sculpts desert dunes
WADI|A dry channel that may fill after rain
`, `
Shifting sands|DUNE SAND WIND MIRAGE ARID HEAT
An oasis awaits|OASIS SHADE WADI CARAVAN NOMAD CAMEL
Spines and succulents|CACTUS AGAVE ALOE YUCCA ARID SAND
Desert dwellers|CAMEL FENNEC GECKO VIPER SCORPION LIZARD
The long caravan|CARAVAN NOMAD CAMEL OASIS DUNE SAND
Out of the heat|HEAT SHADE MIRAGE ARID OASIS WADI
`);
add('Polar world', `
ARCTIC|The polar region surrounding the North Pole
TUNDRA|A treeless biome with permanently frozen subsoil
ICEBERG|A large floating mass broken from a glacier
FLOE|A floating sheet of sea ice
GLACIER|A slowly moving mass of land ice
ICECAP|An extensive covering of ice over land
SEAL|A streamlined marine mammal with flippers
WALRUS|A large marine mammal with long tusks
NARWHAL|An Arctic whale famous for a long spiral tusk
BELUGA|A pale Arctic whale nicknamed the sea canary
PENGUIN|A flightless Southern Hemisphere seabird
PUFFIN|A northern seabird with a colorful bill
TERN|A seabird whose Arctic species makes an immense migration
KRILL|Tiny crustaceans important in polar food webs
BLUBBER|A thick insulating fat layer in marine mammals
FUR|An insulating coat of animal hair
PARKA|A hooded outer coat associated with Arctic clothing
SLED|A runner-mounted vehicle used on snow and ice
IGLOO|A dome-shaped shelter built from snow blocks
AURORA|A luminous polar display caused by charged particles
`, `
North of the Arctic Circle|ARCTIC TUNDRA FLOE ICECAP AURORA PARKA
Ice, ice, everywhere|ICEBERG FLOE GLACIER ICECAP ARCTIC TUNDRA
Under polar seas|NARWHAL BELUGA WALRUS SEAL KRILL BLUBBER
Birds at the ends of Earth|PENGUIN PUFFIN TERN KRILL FLOE GLACIER
Keeping warm|BLUBBER FUR PARKA IGLOO SLED ARCTIC
Across the frozen north|SLED IGLOO AURORA TUNDRA PARKA FLOE
`);
add('Rainforest', `
JUNGLE|A dense tropical forest
CANOPY|The interlocking upper layer of a forest
LIANA|A woody climbing vine of tropical forests
VINE|A plant with a long climbing or trailing stem
ORCHID|A flowering plant family with many tropical members
BROMELIAD|A tropical plant family that includes pineapples
FERN|A nonflowering plant with fronds
MOSS|A small green plant thriving on damp surfaces
JAGUAR|A large spotted cat native to the Americas
TAPIR|A hoofed mammal with a short, flexible snout
SLOTH|A slow-moving tree-dwelling mammal
TOUCAN|A tropical bird with a very large colorful bill
MACAW|A large, long-tailed tropical parrot
FROG|An amphibian associated with leaping and moist skin
BOA|A large snake that kills by constriction
GECKO|A small tropical lizard with adhesive toe pads
HUMID|Rich in atmospheric moisture
RAIN|The precipitation that gives a rainforest its name
RIVER|A major watercourse through a forest
ROOT|A plant structure that anchors it in the soil
`, `
Beneath the canopy|JUNGLE CANOPY LIANA VINE HUMID RAIN
Tropical blooms|ORCHID BROMELIAD FERN MOSS VINE ROOT
Hidden in the green|JAGUAR TAPIR SLOTH BOA GECKO JUNGLE
A flash of feathers|TOUCAN MACAW CANOPY VINE RIVER RAIN
After the tropical rain|RAIN HUMID FROG MOSS RIVER FERN
Life in the treetops|SLOTH CANOPY LIANA MACAW TOUCAN ORCHID
`.replace('L IANA','LIANA'));
add('Camping', `
TENT|A portable shelter made of fabric
PEG|A stake securing a tent to the ground
POLE|A support holding a tent upright
FLY|A tent's outer waterproof sheet
CAMP|A temporary outdoor place to stay
SITE|The spot selected for a tent or camper
PACK|A bag carried on the back during a hike
MAT|A sleeping pad laid under a camping bag
FIRE|A crackling camp source of warmth and light
TINDER|Dry, easily ignited material used to start a fire
KINDLING|Small sticks used to build up a fire
EMBER|A glowing piece left after a fire burns down
COMPASS|A tool whose needle helps find north
MAP|A drawing showing paths and terrain
TRAIL|A marked route through the countryside
TORCH|A portable electric light, in British usage
LANTERN|A portable light with a protective enclosure
FLASK|A container that can keep a drink warm on a hike
ROPE|A useful length of twisted fibers in camp
KNOT|An interlaced fastening in a piece of cord
`, `
Pitch perfect|TENT PEG POLE FLY CAMP SITE
Around the campfire|FIRE TINDER KINDLING EMBER CAMP LANTERN
Off the beaten track|COMPASS MAP TRAIL PACK FLASK TORCH
Under canvas|TENT FLY MAT POLE PEG SITE
Light up the night|TORCH LANTERN FIRE EMBER CAMP TINDER
A knotty problem|ROPE KNOT PEG POLE FLY TENT
`);
add('Sailing', `
SAIL|A sheet of material used to catch the wind
MAST|The upright spar carrying a vessel's sails
BOOM|A spar supporting the foot of a sail
RIGGING|The ropes and cables supporting a sailboat's spars
HULL|The main watertight body of a vessel
KEEL|The lengthwise structure along a vessel's bottom
BOW|The forward end of a ship
STERN|The rear end of a ship
PORT|The left side of a vessel when facing forward
STARBOARD|The right side of a vessel when facing forward
HELM|The steering position or apparatus of a ship
RUDDER|The moving surface used to steer a boat
ANCHOR|A heavy device used to hold a vessel in place
BUOY|A floating marker guiding or warning mariners
DOCK|A structure alongside which a boat can be secured
PIER|A raised walkway extending over water
KNOT|A nautical speed unit of one sea mile per hour
TACK|Change a sailboat's direction by turning its bow through wind
GYBE|Change a sailboat's direction with its stern passing through wind
CHART|A map used for navigation on water
`, `
Set sail|SAIL MAST BOOM RIGGING HULL KEEL
Fore and aft|BOW STERN PORT STARBOARD HULL KEEL
At the helm|HELM RUDDER TACK GYBE KNOT CHART
Safe harbor|ANCHOR BUOY DOCK PIER CHART PORT
Learning the ropes|RIGGING MAST BOOM SAIL TACK GYBE
Chart a course|CHART BUOY KNOT HELM PORT STARBOARD
`);
add('Celebrations', `
CANDLE|A small flame-topped cylinder placed on a birthday cake
CAKE|A baked centerpiece for a birthday celebration
GIFT|A wrapped present for someone
WISH|A hopeful thought before blowing out birthday candles
HEART|A shape used to symbolize love
ROSE|A flower traditionally given on Valentine's Day
CARD|A folded greeting sent for a special occasion
LOVE|The feeling celebrated on Valentine's Day
PUMPKIN|An orange squash carved for Halloween
GHOST|A spooky figure often dressed in a white sheet
WITCH|A Halloween character with a pointed hat
COSTUME|An outfit worn to become a Halloween character
SANTA|The gift-bringing figure of a Christmas tradition
CAROL|A song traditionally sung at Christmas
HOLLY|A glossy-leaved plant with red holiday berries
TINSEL|Sparkly strands draped on a holiday tree
TOAST|A spoken tribute made with raised glasses
CHEER|A shout of celebration or encouragement
PARTY|A gathering to celebrate an occasion
CONFETTI|Small pieces of paper tossed at a celebration
`, `
Make a birthday wish|CANDLE CAKE GIFT WISH CARD PARTY
Love letters|HEART ROSE CARD LOVE GIFT WISH
A haunting evening|PUMPKIN GHOST WITCH COSTUME CANDLE PARTY
A Christmas story|SANTA CAROL HOLLY TINSEL GIFT CARD
Here's to a new year|TOAST CHEER PARTY CONFETTI WISH CARD
The art of giving|GIFT CARD LOVE WISH ROSE CHEER
`);
add('Time', `
CLOCK|A device showing the time of day
WATCH|A small timepiece worn on the wrist
DIAL|The face of an analog timepiece
HAND|One of an analog clock's moving pointers
TICK|A short sound made by a running clock
CHIME|A musical sound marking the hour
SECOND|One sixtieth of a minute
MINUTE|One sixtieth of an hour
HOUR|A span of sixty minutes
DAY|One rotation of Earth relative to the Sun, approximately
WEEK|A period of seven days
MONTH|One of twelve divisions of a calendar year
YEAR|The time taken for Earth to travel around the Sun
LEAP|The kind of year that has February 29
DATE|A particular day identified in a calendar
CALENDAR|A system for organizing days and months
DECADE|A span of ten years
CENTURY|A span of one hundred years
ERA|A long period distinguished by a particular character
EPOCH|The start of a distinctive period or time standard
`, `
Watch this space|WATCH CLOCK DIAL HAND TICK CHIME
Every second counts|SECOND MINUTE HOUR TICK CLOCK HAND
A week at a time|DAY WEEK MONTH DATE CALENDAR YEAR
One extra day|LEAP YEAR DATE CALENDAR DAY MONTH
Through the ages|DECADE CENTURY ERA EPOCH YEAR CALENDAR
Strike the hour|CHIME HOUR CLOCK DIAL HAND TICK
`);
add('Mathematics', `
SUM|The result of adding numbers
TOTAL|The complete amount after addition
PLUS|The sign or word indicating addition
MINUS|The sign or word indicating subtraction
FACTOR|A whole number that divides another exactly
PRIME|A whole number greater than one with exactly two positive divisors
DIGIT|One symbol used to write a number
ZERO|The number representing no quantity
ANGLE|The figure formed by two rays meeting at a point
ARC|A part of a circle's circumference
RADIUS|The distance from a circle's center to its edge
CHORD|A straight segment joining two points on a circle
SQUARE|A four-sided shape with equal sides and right angles
CUBE|A solid with six square faces
CONE|A solid tapering from a circular base to a point
SPHERE|A perfectly round three-dimensional surface
RATIO|A comparison between two quantities by division
MEAN|The arithmetic average of a set of numbers
MODE|The most frequent value in a data set
MEDIAN|The middle value in an ordered data set
`, `
It all adds up|SUM TOTAL PLUS MINUS DIGIT ZERO
Prime time|PRIME FACTOR DIGIT ZERO RATIO SUM
Around in circles|ARC RADIUS CHORD ANGLE SPHERE CONE
In good shape|SQUARE CUBE CONE SPHERE ANGLE ARC
The average day|MEAN MODE MEDIAN TOTAL SUM RATIO
A numbers game|RATIO FACTOR PLUS MINUS PRIME DIGIT
`);
add('Physics', `
FORCE|A push or pull that can change motion
MASS|A measure of an object's inertia
SPEED|Distance traveled per unit time
MOTION|A change in position over time
INERTIA|An object's resistance to a change in its motion
GRAVITY|The attraction between objects with mass
ENERGY|The capacity to do work
WORK|Force acting through a displacement
POWER|The rate at which work is done
WATT|The SI unit of power
HEAT|Energy transferred because of a temperature difference
JOULE|The SI unit of energy
WAVE|A disturbance that transfers energy
CREST|The highest point of a wave
TROUGH|The lowest point of a wave
AMPLITUDE|The greatest displacement from a wave's rest position
CHARGE|The property of matter responsible for electric interaction
VOLT|The unit of electric potential difference
AMPERE|The SI unit of electric current
OHM|The unit of electrical resistance
`, `
A moving experience|MOTION SPEED FORCE MASS INERTIA GRAVITY
What goes up|GRAVITY MASS FORCE MOTION SPEED INERTIA
Full of energy|ENERGY WORK POWER WATT HEAT JOULE
Make some waves|WAVE CREST TROUGH AMPLITUDE ENERGY MOTION
An electric feeling|CHARGE VOLT AMPERE OHM POWER WATT
By the units|WATT JOULE VOLT AMPERE OHM MASS
`);
add('Chemistry', `
ATOM|The smallest unit that retains an element's properties
PROTON|A positively charged particle in an atomic nucleus
NEUTRON|An electrically neutral particle in an atomic nucleus
ELECTRON|A negatively charged particle surrounding an atomic nucleus
ELEMENT|A substance made of only one kind of atom
ISOTOPE|A form of an element with a different neutron count
CARBON|The element central to organic chemistry
OXYGEN|The element with atomic number eight
IRON|The metal whose chemical symbol is Fe
GOLD|The precious metal whose chemical symbol is Au
SILVER|The metal whose chemical symbol is Ag
COPPER|The reddish metal whose chemical symbol is Cu
ACID|A proton donor in the Bronsted-Lowry definition
BASE|A proton acceptor in the Bronsted-Lowry definition
SALT|An ionic compound often formed by neutralization
ION|An atom or molecule with a net electric charge
BOND|An interaction holding atoms together
MOLE|The SI unit of amount of substance
SOLUTE|The substance dissolved in a solution
SOLVENT|The substance that dissolves another in a solution
`, `
Inside the atom|ATOM PROTON NEUTRON ELECTRON ELEMENT ISOTOPE
Heavy metal|IRON GOLD SILVER COPPER ELEMENT ATOM
Organic beginnings|CARBON OXYGEN BOND MOLE ELEMENT ATOM
A balanced reaction|ACID BASE SALT ION BOND MOLE
All mixed up|SOLUTE SOLVENT SALT ION MOLE ACID
The periodic table|ELEMENT CARBON OXYGEN IRON GOLD SILVER
`);
add('Light & color', `
LIGHT|Electromagnetic radiation visible to the human eye
RAY|A narrow directed line of light
BEAM|A directed stream of light
PHOTON|A quantum of electromagnetic radiation
PRISM|An optical object that can split white light into colors
SPECTRUM|The range of colors produced by dispersing white light
RAINBOW|An arc of colors formed by sunlight and water droplets
REFRACT|Bend as light passes between media
MIRROR|A polished surface that reflects an image
REFLECT|Bounce light back from a surface
LENS|A shaped transparent object used to focus light
FOCUS|The point where converging rays meet
RED|The rainbow color with the longest visible wavelengths
ORANGE|The rainbow color between red and yellow
YELLOW|The bright rainbow color between orange and green
GREEN|The rainbow color between yellow and blue
BLUE|The color of a clear daytime sky
VIOLET|The visible spectrum color with the shortest wavelengths
SHADOW|A dark region where light has been blocked
SHADE|Partial darkness created by shelter from light
`, `
Over the rainbow|RAINBOW RED ORANGE YELLOW GREEN BLUE
Through a prism|PRISM SPECTRUM REFRACT LIGHT RAY VIOLET
Mirror, mirror|MIRROR REFLECT LENS FOCUS BEAM RAY
In the spotlight|LIGHT BEAM RAY PHOTON FOCUS SHADOW
Light and shade|SHADOW SHADE LIGHT REFLECT MIRROR BEAM
A sharper image|LENS FOCUS REFRACT RAY LIGHT PHOTON
`);
add('Communication', `
LETTER|A written message sent to someone
STAMP|A small label showing postage has been paid
ENVELOPE|A folded paper cover for a letter
POST|Send a letter through the mail
PARCEL|A wrapped package sent or delivered
ADDRESS|The location written on a mailed item
PHONE|A device used to speak with someone at a distance
CALL|A conversation made over a telephone
DIAL|Enter a telephone number
RING|The sound announcing an incoming call
VOICE|The sound produced when a person speaks
MESSAGE|Information sent from one person to another
RADIO|A medium using transmitted electromagnetic signals
SIGNAL|An encoded transmission carrying information
MORSE|A code based on dots and dashes
CODE|A system of symbols representing information
EMAIL|A digital message sent over a network
INBOX|The place where received digital messages collect
REPLY|An answer to a message
SEND|Dispatch a message to its recipient
`, `
Sealed with a stamp|LETTER STAMP ENVELOPE POST PARCEL ADDRESS
On the line|PHONE CALL DIAL RING VOICE MESSAGE
A message in Morse|MORSE CODE SIGNAL RADIO MESSAGE SEND
You've got mail|EMAIL INBOX REPLY SEND MESSAGE ADDRESS
Return to sender|REPLY ADDRESS LETTER POST ENVELOPE STAMP
Loud and clear|VOICE SIGNAL RADIO CALL PHONE MESSAGE
`);
add('Working lives', `
CHEF|A professional cook who may lead a kitchen
BAKER|A person who makes bread and pastries
BARISTA|A person who prepares and serves coffee
WAITER|A person who serves food at restaurant tables
PILOT|A person qualified to operate an aircraft
DRIVER|A person who operates a road vehicle
SAILOR|A person who works aboard a ship
PORTER|A worker who carries luggage or goods
MASON|A craftsperson who builds with brick or stone
PLUMBER|A tradesperson who installs and repairs water pipes
WELDER|A worker who joins metal using heat
JOINER|A craftsperson who makes wooden fittings and joints
ARTIST|A person who creates visual or other creative work
WRITER|A person who creates written work
EDITOR|A person who prepares written work for publication
ACTOR|A person who portrays characters for an audience
NURSE|A professional who cares for patients
TEACHER|A person who helps students learn
FARMER|A person who raises crops or livestock
TAILOR|A person who makes or alters fitted clothing
`, `
Service with a smile|CHEF BAKER BARISTA WAITER PORTER DRIVER
People who move us|PILOT DRIVER SAILOR PORTER WAITER FARMER
Built by hand|MASON PLUMBER WELDER JOINER TAILOR FARMER
Creative calling|ARTIST WRITER EDITOR ACTOR TAILOR CHEF
Everyday helpers|NURSE TEACHER FARMER TAILOR PLUMBER BAKER
Words at work|WRITER EDITOR TEACHER ACTOR ARTIST BARISTA
`);
add('The senses', `
SIGHT|The sense that lets us perceive light and color
SOUND|Vibrations perceived through hearing
TOUCH|The sense that perceives pressure and texture
TASTE|The sense experienced by the tongue's receptors
SMELL|The sense that detects airborne chemicals
SENSE|A way the body perceives its surroundings
SWEET|The taste of sugar
SOUR|The taste associated with lemon juice
SALTY|The taste associated with table salt
BITTER|The taste associated with unsweetened cocoa
UMAMI|The savory basic taste associated with glutamate
AROMA|A distinctive, often pleasant smell
SOFT|Yielding easily to pressure
ROUGH|Having an uneven or coarse surface
SMOOTH|Having an even surface without roughness
SILKY|Smooth and lustrous to the touch
ECHO|A sound reflected back to its source
PITCH|How high or low a sound seems
HUSH|A sudden or deliberate silence
VIVID|Strikingly bright and clear, as a color
`, `
A feast for the senses|SIGHT SOUND TOUCH TASTE SMELL SENSE
Sweet, sour, savory|SWEET SOUR SALTY BITTER UMAMI TASTE
Follow your nose|SMELL AROMA SWEET BITTER SOUR SENSE
A touch of texture|SOFT ROUGH SMOOTH SILKY TOUCH SENSE
Can you hear it|SOUND ECHO PITCH HUSH SENSE VIVID
A colorful world|SIGHT VIVID SMOOTH SILKY SENSE TOUCH
`);
add('World kitchen', `
PASTA|Italian noodles made from flour and water or eggs
RISOTTO|An Italian rice dish cooked by gradually adding broth
PESTO|A sauce traditionally blending basil, pine nuts, cheese, and oil
PIZZA|A baked dough base topped with sauce and other ingredients
SUSHI|A Japanese dish centered on seasoned rice
RAMEN|Japanese noodles typically served in broth
MISO|A Japanese fermented soybean paste
TOFU|A bean-curd food made from soy milk
TACO|A tortilla folded around a filling
SALSA|A sauce whose name is Spanish for sauce
MOLE|A family of complex Mexican sauces
QUESO|The Spanish word for cheese
CURRY|A broad term for seasoned dishes associated with South Asia
NAAN|A leavened flatbread often cooked in a tandoor
DAL|Split pulses, or a dish cooked from them
RAITA|A yogurt-based accompaniment in South Asian cooking
HUMMUS|A spread traditionally made from chickpeas and tahini
PITA|A round flatbread that can form a pocket
FALAFEL|Fried patties often made from chickpeas or fava beans
TAHINI|A paste made from ground sesame seeds
`, `
An Italian table|PASTA RISOTTO PESTO PIZZA SALSA QUESO
A taste of Japan|SUSHI RAMEN MISO TOFU PASTA DAL
Taco night|TACO SALSA MOLE QUESO PITA TOFU
The spice route|CURRY NAAN DAL RAITA RICE MISO
A Middle Eastern spread|HUMMUS PITA FALAFEL TAHINI NAAN TOFU
Meatless around the world|TOFU DAL HUMMUS FALAFEL PESTO MISO
`.replace('RAITA RICE','RAITA TOFU'));
add('Mysteries', `
CLUE|A detail that helps solve a mystery
SLEUTH|An informal name for a detective
CASE|A mystery or investigation to be solved
PROOF|Evidence sufficient to establish a fact
ALIBI|A claim of being elsewhere when an event occurred
MOTIVE|The reason someone might commit an act
SUSPECT|A person thought possibly responsible for an offense
WITNESS|A person who saw an event occur
TRACE|A small sign left behind
PRINT|An impression that may identify a finger or shoe
TRAIL|A sequence of clues followed in an investigation
SCENE|The location where a particular event occurred
SECRET|Information deliberately kept hidden
CIPHER|A system for concealing a message by changing its symbols
RIDDLE|A puzzling question with an indirect answer
ENIGMA|Something difficult to understand or explain
KEY|The information needed to decode an encrypted message
CODE|A system of symbols used to conceal or convey meaning
TWIST|An unexpected turn in a mystery's plot
REVEAL|The moment when a mystery's answer becomes known
`, `
The plot thickens|CASE SUSPECT MOTIVE ALIBI WITNESS TWIST
Follow the clues|CLUE TRACE PRINT TRAIL SCENE SLEUTH
Crack the code|CIPHER CODE KEY SECRET PROOF REVEAL
Riddle me this|RIDDLE ENIGMA CLUE SECRET KEY REVEAL
The final reveal|REVEAL PROOF TWIST CASE SLEUTH MOTIVE
A well-kept secret|SECRET CIPHER ENIGMA ALIBI WITNESS CODE
`);
