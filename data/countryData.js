const countries = [ { name: 'Mexico',
    flag: './images/flags/Mexico.png',
    outline: './images/outlines/Mexico.png',
    questions: 
     [ 'Tabasco Hoy',
       'El Financiero & The Oaxaca Times',
       'Oaxaca,Durango,Nayarit' ] },
  { name: 'Hungary',
    flag: './images/flags/Hungary.png',
    outline: './images/outlines/Hungary.png',
    questions: 
     [ 'Magyar Nemzet',
       'Its first king is known in English as St. Stephen & locally as Szent Istvan',
       'Nograd,Pest,Somogy' ] },
  { name: 'Vietnam',
    flag: './images/flags/Vietnam.png',
    outline: './images/outlines/Vietnam.png',
    questions: [ 'Nhan Dan' ] },
  { name: 'Ireland',
    flag: './images/flags/Ireland.png',
    outline: './images/outlines/Ireland.png',
    questions: 
     [ 'The Connaught Telegraph & The Galway Advertiser',
       'In this country\'s parliament, the Dail has 166 seats, the Seanad, 60' ] },
  { name: 'Sweden',
    flag: './images/flags/Sweden.png',
    outline: './images/outlines/Sweden.png',
    questions: 
     [ 'Svenska Dagbladet & Sundsvalls Tidning',
       'Ostergotland,Vasterbotten,Uppsala' ] },
  { name: 'South Africa',
    flag: './images/flags/South Africa.png',
    outline: './images/outlines/South Africa.png',
    questions: 
     [ 'The Cape Business News & The Natal Witness',
       'This country\'s post-apartheid national anthem is "Nkosi Sikelel\' Iafrka"',
       'Prince Edward & Marion, 2 small islands of this country, lie about 1200 miles southeast of Cape Town',
       'Namaqualand,Bushmanland,Zululand' ] },
  { name: 'Australia',
    flag: './images/flags/Australia.png',
    outline: './images/outlines/Australia.png',
    questions: 
     [ 'The Warrnambool Standard & The Alice Springs News',
       'It takes up an entire continent',
       'The Bunyip &The Alice Springs News',
       'Western Plateau,Great Victoria Desert,Great Artesian Basin' ] },
  { name: 'Grenada',
    flag: './images/flags/Grenada.png',
    outline: './images/outlines/Grenada.png',
    questions: 
     [ 'Site of a 1983 U.S. invasion, it\'s also known as the Isle of Spice',
       'Site of a 1983 U.S. invasion, it\'s also known as the Isle of Spice' ] },
  { name: 'Haiti',
    flag: './images/flags/Haiti.png',
    outline: './images/outlines/Haiti.png',
    questions: 
     [ 'The reverend Gerard Jean-Juste championed the cause of refugees from this Caribbean country',
       'The reverend Gerard Jean-Juste championed the cause of refugees from this Caribbean country',
       'Honoring the country\'s liberator, "La Dessalinienne" is this country\'s national anthem' ] },
  { name: 'Jamaica',
    flag: './images/flags/Jamaica.png',
    outline: './images/outlines/Jamaica.png',
    questions: 
     [ 'Kingston & Montego Bay are 2 of its largest towns',
       'Kingston & Montego Bay are 2 of its largest towns',
       'Goat is served as an entree; Spanish Town is the former capital; it\'s home to the Reggae Sunfest' ] },
  { name: '(St.) Vincent',
    flag: './images/flags/(St.) Vincent.png',
    outline: './images/outlines/(St.) Vincent.png',
    questions: 
     [ 'Saint paired with the Grenadines in a country\'s name',
       'Saint paired with the Grenadines in a country\'s name' ] },
  { name: 'Barbados',
    flag: './images/flags/Barbados.png',
    outline: './images/outlines/Barbados.png',
    questions: 
     [ 'A type of raw sugar is named for this easternmost island of the West Indies',
       'A type of raw sugar is named for this easternmost island of the West Indies' ] },
  { name: 'Israel',
    flag: './images/flags/Israel.png',
    outline: './images/outlines/Israel.png',
    questions: 
     [ 'Yitzhak Rabin was this country\'s first native-born prime minister',
       'In a 1948-49 war, this Middle Eastern country increased the territory it controlled by about 50%',
       'On May 14, 1948 Rachel Cohen & David Ben-Gurion signed this country\'s Declaration of Independence' ] },
  { name: 'Denmark',
    flag: './images/flags/Denmark.png',
    outline: './images/outlines/Denmark.png',
    questions: 
     [ 'From 1380 to 1918 Iceland was ruled by this country',
       'Most of Copenhagen is on the island of Sjaelland, this country\'s most densely populated area',
       'It\'s the only Scandinavian nation that borders only one other country (Germany)',
       'Lots of Lutherans live there; its parliament is the Folketing; its royal library is in Copenhagen',
       'Jyllands-Posten,Dagbladet' ] },
  { name: 'Borneo',
    flag: './images/flags/Borneo.png',
    outline: './images/outlines/Borneo.png',
    questions: 
     [ '(Kelly of the Clue Crew points to a map of Southeast Asia on the monitor.) Malaysia consists of two regions--West Malaysia, on the Malay Peninsula, & East Malaysia, which occupies the northern part of this large island' ] },
  { name: 'Switzerland',
    flag: './images/flags/Switzerland.png',
    outline: './images/outlines/Switzerland.png',
    questions: 
     [ 'More than half of this country is covered by the Alps & the Jura mounitains',
       'It\'s been said that this country "has but one hero, William Tell, and he is a myth"',
       'In 2002 this country shifted out of neutral & finally joined the U.N.',
       'About one-sixth of its people were born elsewhere; watches are still made in Jura; yodeling is still popular' ] },
  { name: 'Colombia',
    flag: './images/flags/Colombia.png',
    outline: './images/outlines/Colombia.png',
    questions: 
     [ 'Bogota, Bolivar & Boyaca are political divisions of this country' ] },
  { name: 'Monaco',
    flag: './images/flags/Monaco.png',
    outline: './images/outlines/Monaco.png',
    questions: 
     [ '(Jon of the Clue Crew indicates a map of the Western Mediterranean on the monitor.)  From Vatican City, the world\'s smallest independent country, travel about 280 miles northwest & you\'ll reach this second-smallest country at less than 1 square mile in size',
       'It uses the Monegasque franc',
       'It\'s the country where you\'ll find a theatre, library & rose garden all named for Grace Kelly',
       'It\'s famous for its luxury hotels; it\'s on the Riviera; Princess Stephanie was born there' ] },
  { name: 'Saudi Arabia',
    flag: './images/flags/Saudi Arabia.png',
    outline: './images/outlines/Saudi Arabia.png',
    questions: 
     [ 'In 2005 Prince Bandar ended 22 years as this country\'s ambassador to the U.S.',
       'There are no permanent lakes in this country that\'s home to Mecca' ] },
  { name: 'Belize',
    flag: './images/flags/Belize.png',
    outline: './images/outlines/Belize.png',
    questions: 
     [ 'If I\'m on the Hummingbird Highway headed for Belmopan, I\'m in this Central American country' ] },
  { name: 'Armenia',
    flag: './images/flags/Armenia.png',
    outline: './images/outlines/Armenia.png',
    questions: 
     [ 'Yerevan, the capital of this republic, lies about 35 miles from Mount Ararat' ] },
  { name: 'Spain',
    flag: './images/flags/Spain.png',
    outline: './images/outlines/Spain.png',
    questions: 
     [ 'Lace up your sneakers & run with the bulls through the streets of Pamplona in this country' ] },
  { name: 'the Philippines',
    flag: './images/flags/the Philippines.png',
    outline: './images/outlines/the Philippines.png',
    questions: 
     [ 'In February 2006 a coup attempted to overthrow President Gloria Arroyo of this country' ] },
  { name: 'the Bahamas',
    flag: './images/flags/the Bahamas.png',
    outline: './images/outlines/the Bahamas.png',
    questions: 
     [ 'The Internet country code for this country near Florida is .bs' ] },
  { name: 'India',
    flag: './images/flags/India.png',
    outline: './images/outlines/India.png',
    questions: 
     [ 'Discovered in 1650, the 787-carat Great Mogul Diamond is the largest ever found in this country',
       'This country is credited with giving Buddhism to Asia & what are called Arabic numbers to the West',
       'The Sanskrit words at the bottom of this country\'s national emblem mean "truth alone triumphs"',
       'Huge Asian country whose national anthem is "Jana-Gana-Mana"',
       'The Deccan Herald& The Bihar Times',
       'Bihar,Chota Nagpur Plateau, Deccan Plateau' ] },
  { name: 'Portugal',
    flag: './images/flags/Portugal.png',
    outline: './images/outlines/Portugal.png',
    questions: 
     [ 'To tour a port wine lodge in the city of Oporto, you\'d have to go to this country',
       '3 rivers, the Minho, the Douro,& the Tagus, divide this country into 3 distinct geographic areas' ] },
  { name: 'Ethiopia',
    flag: './images/flags/Ethiopia.png',
    outline: './images/outlines/Ethiopia.png',
    questions: 
     [ 'In 1993 Eritrea formally declared its independence from this country',
       'Sorghum is a major crop; the Zagwe dynasty once ruled it; Addis Ababa University is there' ] },
  { name: 'Sri Lanka',
    flag: './images/flags/Sri Lanka.png',
    outline: './images/outlines/Sri Lanka.png',
    questions: 
     [ 'The Sinhalese make up nearly 75% of this island country\'s population' ] },
  { name: 'Jordan',
    flag: './images/flags/Jordan.png',
    outline: './images/outlines/Jordan.png',
    questions: 
     [ 'Under Hussein I this country gave its women the right to vote in 1973',
       'It grows a lot of barley; its national anthem is "Long Live The King"; it\'s ruled by the man seen here(King Hussein)' ] },
  { name: 'Iceland',
    flag: './images/flags/Iceland.png',
    outline: './images/outlines/Iceland.png',
    questions: 
     [ 'Girls can see geysers in this country where the name originated' ] },
  { name: 'Italy',
    flag: './images/flags/Italy.png',
    outline: './images/outlines/Italy.png',
    questions: 
     [ 'Calabria is a region in the "toe" of this country\'s "boot"',
       'It\'s known as "The Land of the Apennines"',
       'The name of this Mediterranean country comes from an ancient Greek word for "calf" (as in cow, not leg)' ] },
  { name: 'Honduras',
    flag: './images/flags/Honduras.png',
    outline: './images/outlines/Honduras.png',
    questions: 
     [ 'This Central American country\'s name means "depths"; it\'s what Columbus named the region',
       'This Central American country is home to the ruins of Copan, one of the Mayan\'s largest cities' ] },
  { name: 'North Korea',
    flag: './images/flags/North Korea.png',
    outline: './images/outlines/North Korea.png',
    questions: 
     [ 'If you wear your DKNY to the DPRK, you\'ll be well dressed in this east Asian land' ] },
  { name: 'France',
    flag: './images/flags/France.png',
    outline: './images/outlines/France.png',
    questions: 
     [ 'Since 1819 Monaco\'s judicial system has been based on this neighbor\'s code',
       'This country borders both Belgium & Monaco',
       'Corse,Auvergne,Bretagne' ] },
  { name: 'Morocco',
    flag: './images/flags/Morocco.png',
    outline: './images/outlines/Morocco.png',
    questions: 
     [ 'The Spanish ports of Ceuta & Melilla actually lie on the Mediterranean coast of this North African nation',
       'In October 1956 the international city of Tangier became part of this country',
       'Al Bayane,La Gazette du Maroc' ] },
  { name: 'Rwanda',
    flag: './images/flags/Rwanda.png',
    outline: './images/outlines/Rwanda.png',
    questions: 
     [ 'About 90% of the people of this country which borders Burundi on the north are Hutu, about 9% Tutsi' ] },
  { name: 'Orange',
    flag: './images/flags/Orange.png',
    outline: './images/outlines/Orange.png',
    questions: 
     [ 'The coat of arms of the Netherlands is a combination of those of the Dutch republic & this royal house' ] },
  { name: 'Russia',
    flag: './images/flags/Russia.png',
    outline: './images/outlines/Russia.png',
    questions: 
     [ 'The Kremlin Cup is this country\'s most important tennis event',
       'The largest country in the world, it has 21 republics, 49 oblasts & 6 krays',
       'Murmansk in this country is the largest city in population found north of the Arctic Circle',
       'The world\'s longest oil pipeline runs 2,500 miles from Samara in this country to Mozyr in Belarus' ] },
  { name: 'Paraguay & Uruguay',
    flag: './images/flags/Paraguay & Uruguay.png',
    outline: './images/outlines/Paraguay & Uruguay.png',
    questions: 
     [ 'The 2 South American countries whose names end with the letters "guay"' ] },
  { name: 'Indonesia',
    flag: './images/flags/Indonesia.png',
    outline: './images/outlines/Indonesia.png',
    questions: 
     [ 'The name of Java, an island in this country, is also spelled Djawa' ] },
  { name: 'Uganda',
    flag: './images/flags/Uganda.png',
    outline: './images/outlines/Uganda.png',
    questions: 
     [ 'You\'ll find this African country\'s national museum in its capital, Kampala' ] },
  { name: 'Thailand',
    flag: './images/flags/Thailand.png',
    outline: './images/outlines/Thailand.png',
    questions: 
     [ 'For centuries before 1939, this country was known as Siam',
       'It\'s a leading tin producer; fish fights are all the rage; it\'s the country formerly known as Siam' ] },
  { name: 'Romania',
    flag: './images/flags/Romania.png',
    outline: './images/outlines/Romania.png',
    questions: 
     [ 'This country was once part of the Roman Empire & its name means "Land of the Romans"' ] },
  { name: 'Mauritania',
    flag: './images/flags/Mauritania.png',
    outline: './images/outlines/Mauritania.png',
    questions: 
     [ 'Of Malta, Mauritius or Mauritania, the one that isn\'t an island' ] },
  { name: 'Austria',
    flag: './images/flags/Austria.png',
    outline: './images/outlines/Austria.png',
    questions: 
     [ 'Burgenland, Vorarlberg & Salzburg are 3 of this German-speaking country\'s 9 provinces',
       'The Wiener Zeitung,The Osterreich Journal' ] },
  { name: 'Chile',
    flag: './images/flags/Chile.png',
    outline: './images/outlines/Chile.png',
    questions: 
     [ 'Its borders with Bolivia & Peru are much shorter than its border with Argentina',
       'Conger eel is a taste treat; the cowboys are called huasos; its national congress is in Valparaiso' ] },
  { name: 'The Netherlands/Holland',
    flag: './images/flags/The Netherlands/Holland.png',
    outline: './images/outlines/The Netherlands/Holland.png',
    questions: 
     [ 'Numerous dikes cover the coast of Ijsselmeer in this country' ] },
  { name: 'Lebanon',
    flag: './images/flags/Lebanon.png',
    outline: './images/outlines/Lebanon.png',
    questions: [ 'A cedar tree is featured on this country\'s coat of arms' ] },
  { name: 'Slovakia',
    flag: './images/flags/Slovakia.png',
    outline: './images/outlines/Slovakia.png',
    questions: 
     [ 'Bratislava, capital of this eastern neighbor of the Czech Republic, was known as Pressburg until 1919' ] },
  { name: 'Malaysia',
    flag: './images/flags/Malaysia.png',
    outline: './images/outlines/Malaysia.png',
    questions: 
     [ 'This country\'s territory on Borneo is over 50% larger than its territory on the Asian mainland',
       'It has a tropical climate; its king is called the Yang Di-Pertuan Agong; there\'s a beautiful zoo near Kuala Lumpur' ] },
  { name: 'Kenya',
    flag: './images/flags/Kenya.png',
    outline: './images/outlines/Kenya.png',
    questions: 
     [ 'Politically, this country is divided into 7 provinces & Nairobi' ] },
  { name: 'Ecuador',
    flag: './images/flags/Ecuador.png',
    outline: './images/outlines/Ecuador.png',
    questions: 
     [ 'The Bay of Ancon de Sardinas is shared by Colombia & this neighbor to the south' ] },
  { name: 'Norway',
    flag: './images/flags/Norway.png',
    outline: './images/outlines/Norway.png',
    questions: 
     [ 'Olav V was crowned this Scandinavian country\'s king in 1957 & reigned there for 34 years',
       'Slightly larger than New Mexico  it contains the northernmost point in continental Europe',
       'Oppland,Nordland,Telemark' ] },
  { name: 'Angola',
    flag: './images/flags/Angola.png',
    outline: './images/outlines/Angola.png',
    questions: 
     [ 'On southern Africa\'s west coast, it\'s been independent of Portugal since 1975' ] },
  { name: 'England',
    flag: './images/flags/England.png',
    outline: './images/outlines/England.png',
    questions: 
     [ 'In 2007, the 100th anniversary of the founding of boy scouting was celebrated in this country where it began',
       'The Newham Recorder,The Luton News' ] },
  { name: 'Belgium',
    flag: './images/flags/Belgium.png',
    outline: './images/outlines/Belgium.png',
    questions: 
     [ 'Stanley Kowalski might yell out for a Stella Artois beer from this country' ] },
  { name: 'South Korea',
    flag: './images/flags/South Korea.png',
    outline: './images/outlines/South Korea.png',
    questions: 
     [ 'Daegu Polytechnic College & the Catholic University of Pusan are 2 colleges in this country' ] },
  { name: 'the Netherlands',
    flag: './images/flags/the Netherlands.png',
    outline: './images/outlines/the Netherlands.png',
    questions: 
     [ 'Until the mid-20th century, Indonesia was known as this country\'s "East Indies"' ] },
  { name: 'Cuba',
    flag: './images/flags/Cuba.png',
    outline: './images/outlines/Cuba.png',
    questions: 
     [ 'Hand-rolled Cohiba & Montecristo cigars originated in this country',
       'In 1998 Pope John Paul II concluded his visit to this country with a mass at the Plaza de la Revolucion' ] },
  { name: 'Rwanda & Burundi',
    flag: './images/flags/Rwanda & Burundi.png',
    outline: './images/outlines/Rwanda & Burundi.png',
    questions: 
     [ 'Hutus & Tutsis predominate in these 2 neighboring countries once part of German East Africa' ] },
  { name: 'Panama',
    flag: './images/flags/Panama.png',
    outline: './images/outlines/Panama.png',
    questions: 
     [ 'Popular newspapers in this Western Hemisphere nation include The Isthmian & The Bocas Breeze' ] },
  { name: 'Georgia',
    flag: './images/flags/Georgia.png',
    outline: './images/outlines/Georgia.png',
    questions: 
     [ 'This former Soviet republic is less than half the size of the U.S. state of the same name' ] },
  { name: 'Guyana',
    flag: './images/flags/Guyana.png',
    outline: './images/outlines/Guyana.png',
    questions: 
     [ 'Sadly, it was the site of the Jonestown mass suicide in 1978' ] },
  { name: 'Taiwan',
    flag: './images/flags/Taiwan.png',
    outline: './images/outlines/Taiwan.png',
    questions: 
     [ 'Its national anthem, "San-Min-Chu-I", was co-written by Dr. Sun Yat-sen' ] },
  { name: 'Samoa',
    flag: './images/flags/Samoa.png',
    outline: './images/outlines/Samoa.png',
    questions: 
     [ '"Please, Sir, I want" this Polynesian island that dropped "Western" from its name in 1997' ] },
  { name: 'Madagascar',
    flag: './images/flags/Madagascar.png',
    outline: './images/outlines/Madagascar.png',
    questions: 
     [ 'The Mozambique Channel separates this island nation from the African mainland',
       'In World War 2, the British occupied this island because it maintained ties with Vichy France' ] },
  { name: 'Somalia',
    flag: './images/flags/Somalia.png',
    outline: './images/outlines/Somalia.png',
    questions: 
     [ 'Barren and arid, this troubled country hasn\'t had a real working central government since 1991' ] },
  { name: 'Bolivia',
    flag: './images/flags/Bolivia.png',
    outline: './images/outlines/Bolivia.png',
    questions: 
     [ 'Alpacas are bred for wool there; Singani is a favorite drink; the National Museum of Arts is in La Paz' ] },
  { name: 'Liechtenstein',
    flag: './images/flags/Liechtenstein.png',
    outline: './images/outlines/Liechtenstein.png',
    questions: 
     [ 'It\'s about the same size as Washington, D.C.; it\'s a principality; it\'s next to Switzerland' ] },
  { name: 'Sudan',
    flag: './images/flags/Sudan.png',
    outline: './images/outlines/Sudan.png',
    questions: 
     [ 'Sandals are popular there; many of the people speak Dinka; the second largest city is Khartoum' ] },
  { name: 'Brunei',
    flag: './images/flags/Brunei.png',
    outline: './images/outlines/Brunei.png',
    questions: 
     [ 'Its official language is Malay; Bandar Seri Begawan is its capital; its head of state is a sultan' ] },
  { name: 'Peru',
    flag: './images/flags/Peru.png',
    outline: './images/outlines/Peru.png',
    questions: 
     [ 'Some locals eat a fruit called tuna; it\'s the home base of the Lima Times; llamas live there' ] },
  { name: 'Ivory Coast',
    flag: './images/flags/Ivory Coast.png',
    outline: './images/outlines/Ivory Coast.png',
    questions: 
     [ 'It\'s a republic; it\'s in Africa; it has a tusk material in its name' ] },
  { name: 'Argentina',
    flag: './images/flags/Argentina.png',
    outline: './images/outlines/Argentina.png',
    questions: 
     [ 'Diario de los Andes,The Buenos Aires Herald',
       'El Cronista &El Patagonico',
       'Chaco Central,Pampa de las Salinas,Chaco Austral',
       'Cordoba,La Pampa,Tierra del Fuego' ] },
  { name: 'Poland',
    flag: './images/flags/Poland.png',
    outline: './images/outlines/Poland.png',
    questions: [ 'Przewodnik Katolicki &Glos Koszalinski' ] },
  { name: 'Greece',
    flag: './images/flags/Greece.png',
    outline: './images/outlines/Greece.png',
    questions: [ 'Dimokratiki &Peloponnisos', 'Thessaly,Epirus,Peloponnesus' ] },
  { name: 'China',
    flag: './images/flags/China.png',
    outline: './images/outlines/China.png',
    questions: [ 'Hebei,Hubei,Shandong' ] },
  { name: 'Canada',
    flag: './images/flags/Canada.png',
    outline: './images/outlines/Canada.png',
    questions: 
     [ 'The Mackenzie Mountains,Wood Buffalo National Park,the Queen Elizabeth Islands' ] },
  { name: 'Egypt',
    flag: './images/flags/Egypt.png',
    outline: './images/outlines/Egypt.png',
    questions: [ 'Damietta,Suez,Gharbiya' ] },
  { name: 'Brazil',
    flag: './images/flags/Brazil.png',
    outline: './images/outlines/Brazil.png',
    questions: [ 'Roraima,Maranhao,Amazonas' ] },
  { name: 'Turkmenistan',
    flag: './images/flags/Turkmenistan.png',
    outline: './images/outlines/Turkmenistan.png',
    questions: 
     [ 'Oral epics are sung by poets & composers known as bakhashi in this central Asian "stan" nation' ] },
  { name: 'Turkey',
    flag: './images/flags/Turkey.png',
    outline: './images/outlines/Turkey.png',
    questions: 
     [ 'Slightly larger than Texas, it borders the Black Sea & the Mediterranean Sea' ] },
  { name: 'Tunisia',
    flag: './images/flags/Tunisia.png',
    outline: './images/outlines/Tunisia.png',
    questions: 
     [ 'It thrusts out towards Sicily as the northernmost bulge of Africa' ] },
  { name: 'Tanzania',
    flag: './images/flags/Tanzania.png',
    outline: './images/outlines/Tanzania.png',
    questions: [ 'It shares dominion over Lake Victoria with Kenya & Uganda' ] },
  { name: 'Tonga',
    flag: './images/flags/Tonga.png',
    outline: './images/outlines/Tonga.png',
    questions: 
     [ 'This South Pacific island nation is ruled by a king & a 30-member legislative assembly' ] } ]

     module.exports = countries