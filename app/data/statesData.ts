export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
}

export interface Place {
  name: string;
  description: string;
  image?: string;
}

export interface StateData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  places: Place[];
  itinerary: ItineraryDay[];
}

export const statesData: StateData[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Land of Kings',
    description: 'Rajasthan is a state in northwestern India. It is the largest Indian state by area and the seventh largest by population. It covers 342,239 square kilometres (132,139 mi2) or 10.4 per cent of India\'s total geographical area. It is on India\'s northwestern side, where it comprises most of the wide and...',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Jaipur (Pink City)', description: 'Jaipur is the capital and the largest city of the north-western Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Located 268 km from the national capital New Delhi...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Udaipur (City of Lakes)', description: 'Udaipur is a city in the north-western Indian state of Rajasthan, about 415 km (258 mi) south of the state capital Jaipur. It serves as the administrative headquarters of Udaipur district. It is the historic capital of the kingdom of Mewar in the for...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1280px-Evening_view%2C_City_Palace%2C_Udaipur.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Evening_view%2C_City_Palace%2C_Udaipur.jpg/1280px-Evening_view%2C_City_Palace%2C_Udaipur.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Jodhpur (Blue City)', description: 'Jodhpur is the second-largest city of the north-western Indian state of Rajasthan, after its capital Jaipur. As of 2025, the city has a population of 1.6 million. It serves as the administrative headquarters of the Jodhpur district and Jodhpur divisi...', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Mehrangarh_Fort_sanhita.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Jaisalmer (Golden City)', description: 'Jaisalmer, nicknamed The Golden City, is a city in the north-western Indian state of Rajasthan, located 575 kilometres (357 mi) west of the state capital Jaipur, in the heart of the Thar Desert. It serves as the administrative headquarters of Jaisalm...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Jaisalmer_Fort.jpg/1280px-Jaisalmer_Fort.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Jaisalmer_Fort.jpg/1280px-Jaisalmer_Fort.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Ranthambore National Park', description: 'Ranthambore National Park is a national park in the Indian state of Rajasthan with an area of 1,334 km2 (515 sq mi). It is bounded to the north by the Banas River and to the south by the Chambal River. It is named after the historic Ranthambore Fort,...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Ranthambore_National_Park.JPG/1280px-Ranthambore_National_Park.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Ranthambore_National_Park.JPG/1280px-Ranthambore_National_Park.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Pushkar', description: 'Pushkar is an ancient temple town located on the shore of Pushkar Lake near Ajmer City and headquarters of Pushkar tehsil in the Ajmer district in the Indian state of Rajasthan. It is situated about 10 km (6.2 mi) northwest of Ajmer and about 150 km ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Pushkar.jpg/1280px-Pushkar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Pushkar.jpg/1280px-Pushkar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Mount Abu', description: 'Aburaj is a hill station in the Sirohi district of the state of Rajasthan in western India. Here, the mountain forms a rocky plateau 22 km long by 9 km wide. It is sometimes referred to as an "oasis in the desert" due to the presence of rivers, lakes...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Mount_Abu.jpg/1280px-Mount_Abu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Mount_Abu.jpg/1280px-Mount_Abu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Bikaner', description: 'Bikaner is a city in the Indian state of Rajasthan. It is situated approximately 330 kilometres (205 mi) northwest of the state capital, Jaipur, in the Thar Desert region of western Rajasthan. Bikaner serves as the administrative headquarters of Bika...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg/1280px-The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg/1280px-The_Laxmi_Niwas_Palace%2C_Bikaner%2C_Rajasthan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Arrival in Jaipur', description: 'Explore the Amber Fort, Hawa Mahal, and the bustling local bazaars of the Pink City.' },
      { day: 'Day 3', title: 'Journey to Jodhpur', description: 'Travel to the Blue City. Visit the magnificent Mehrangarh Fort and Jaswant Thada.' },
      { day: 'Day 4-5', title: 'The Lakes of Udaipur', description: 'Experience the romantic City of Lakes. Enjoy a boat ride on Lake Pichola and visit the City Palace.' },
      { day: 'Day 6-7', title: 'Desert Magic in Jaisalmer', description: 'Head to the Golden City. Experience a camel safari in the Sam Sand Dunes and sleep under the stars.' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: 'God\'s Own Country',
    description: 'A tropical paradise known for its tranquil backwaters, lush tea gardens, pristine beaches, and rejuvenating Ayurvedic therapies.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2086&auto=format&fit=crop',
    places: [
      { name: 'Munnar', description: 'Munnar is a town located in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level, in the Western Ghats mountain range. This ancient plantation settlement, dominated ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/1280px-Munnar_Overview.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Munnar_Overview.jpg/1280px-Munnar_Overview.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Alleppey (Alappuzha)', description: 'Alappuzha or Alleppey is a city and municipality on the Laccadive Sea in the southern Indian state of Kerala. It is the headquarters of Alappuzha district, located about 62 km (39 mi) south of the commercial city of Kochi and 152 km (94.4 mi) northwe...' },
      { name: 'Kochi (Cochin)', description: 'Kochi, formerly known as Cochin, is a major port city along the Malabar Coast of India bordering the Laccadive Sea. It is part of the district of Ernakulam in the state of Kerala and is the financial, industial and commercial capital of the state. Th...', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Kochi_Skyline.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Wayanad', description: 'Wayanad district, or Wynad, is a district in the north-east of the Indian state of Kerala, with its administrative headquarters at the municipality of Kalpetta. It is the only plateau in Kerala. The Wayanad Plateau forms a continuation of the Mysore ...' },
      { name: 'Varkala', description: 'Varkala is a town and municipality in Thiruvananthapuram district of the Indian state of Kerala. The Varkala cliff formations found along a 7.5 km (4.7 mi) stretch of the Arabian Sea coast, formed by erosion during the Miocene–Pliocene, has been decl...', image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Varkala_Beach%2C_Varkala%2C_Kerala.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Thekkady (Periyar)', description: 'Thekkady in Idukki district is a town near Periyar National Park, a tourist attraction in the Indian state of Kerala. The name Thekkady is derived from the word "thekku" which means teak and "adi" meaning bottom. Temperatures are lowest in the months...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Thekkady.jpg/1280px-Thekkady.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kumarakom', description: 'Kumarakom is a tourism destination near the city of Kottayam in Kerala, India. It is near the Vembanad Lake, the largest lake in the state of Kerala. In January 2023 The New York Times mentioned Kumarakom\'s backwater tourism.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Kumarkom.jpg/1280px-Kumarkom.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kovalam', description: 'Kovalam is a beach and seaside resort in the city of Thiruvananthapuram in Kerala, India. Kovalam is located 12.6 km (7.8 mi) southeast of the city center. The beaches around Kovalam are popular vacation destinations for both domestic and internation...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Kovalam_beach_trivandrum_kerala.jpg/1280px-Kovalam_beach_trivandrum_kerala.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Historic Kochi', description: 'Arrive in Kochi. Explore Fort Kochi, the Chinese Fishing Nets, and the historic Jewish Synagogue.' },
      { day: 'Day 3-4', title: 'Tea Gardens of Munnar', description: 'Drive up to the hills of Munnar. Visit the rolling tea plantations and the Tea Museum.' },
      { day: 'Day 5', title: 'Backwater Houseboat', description: 'Travel to Alleppey. Board a traditional houseboat for an overnight cruise through the tranquil backwaters.' },
      { day: 'Day 6-7', title: 'Beachside Relaxation', description: 'Head to Marari or Varkala beach for a relaxing end to your journey with optional Ayurvedic treatments.' }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    tagline: 'Devbhoomi (Land of Gods)',
    description: 'Uttarakhand, is a state in northern India. It shares international borders with Tibet to the north and Nepal to the east, while the Indian states of Himachal Pradesh and Uttar Pradesh border it to the west and south, respectively. Formerly known as Uttaranchal, the state was established on 9 Novembe...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Nanda_Devi_-_Hidden_Summit%2C_Uttarakhand_India_2013.jpg/1280px-Nanda_Devi_-_Hidden_Summit%2C_Uttarakhand_India_2013.jpg',
    places: [
      { name: 'Rishikesh', description: 'Rishikesh or Hrishikesh is a municipal corporation and tehsil of the Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the Ganges river and is a pilgrimage town for Hindus associated with famous sages and yogis. T...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/1280px-Trayambakeshwar_Temple_VK.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Haridwar', description: 'Haridwar is a city and municipal corporation in the Haridwar district of Uttarakhand, India. With a population of 228,832 according to 2011 census, it is the second-largest city in the state and the largest in the district. Haridwar is located at the...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Ganga_aarti_haridwar_01.jpg/1280px-Ganga_aarti_haridwar_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Nainital', description: 'Nainital, formerly anglicized as Naini Tal, is a town and headquarters of Nainital district of Kumaon division, Uttarakhand, India. It is the judicial capital of Uttarakhand, the High Court of the state being located there and is the headquarters of ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Nainital_metro.jpg/1280px-Nainital_metro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Auli', description: 'A premier ski destination offering panoramic views of Himalayan peaks. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to exp...' },
      { name: 'Jim Corbett National Park', description: 'Jim Corbett National Park is a national park in the Nainital district of the state of Uttarakhand, India. It was established in 1936 as the country\'s first national park and is named in honour of Jim Corbett, who had played a leading role in its esta...', image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Mussoorie', description: 'Mussoorie is a hill station and a municipal board in the Dehradun district of the Indian state of Uttarakhand. It is about 26 kilometres (16 mi) from the state Winter capital Dehradun and 289 km (180 mi) north of the national capital of New Delhi. Th...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Mussoorie_Snow_Over_Dehradun_%2814831297545%29.jpg/1280px-Mussoorie_Snow_Over_Dehradun_%2814831297545%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kedarnath', description: 'Kedarnath is a town and Nagar Panchayat in the Rudraprayag district of Uttarakhand, India, known primarily for the Kedarnath Temple. It is approximately 86.5 kilometres from Rudraprayag, the district headquarters. Kedarnath is the most remote of the ...', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Kedarnath_View1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Valley of Flowers', description: 'Valley of Flowers National Park is an Indian national park which was established in 1982. It is located in Chamoli in the state of Uttarakhand and is known for its meadows of endemic alpine flowers and the variety of flora. This richly diverse area i...' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Spiritual Rishikesh', description: 'Arrive in Rishikesh. Attend the evening Ganga Aarti, visit the ashrams, and try river rafting.' },
      { day: 'Day 3-4', title: 'Wildlife in Corbett', description: 'Travel to Jim Corbett National Park. Enjoy morning and evening jungle safaris looking for the Bengal Tiger.' },
      { day: 'Day 5-6', title: 'Lake City of Nainital', description: 'Drive to Nainital. Enjoy boating on Naini Lake and take the ropeway to Snow View Point.' },
      { day: 'Day 7', title: 'Departure', description: 'Return journey to Delhi for your onward flight.' }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    tagline: 'Pearl of the Orient',
    description: 'Goa is a state on the southwestern coast of India within the Konkan region. It is geographically separated from the Deccan highlands by the Western Ghats. It is bordered by the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coa...',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop',
    places: [
      { name: 'Old Goa', description: 'Old Goa is a historical site and city situated on the southern banks of the River Mandovi, within the Tiswadi taluka (Ilhas) of North Goa district, in the Indian state of Goa.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/%22Plan_de_Goa%22%2C_in_Histoire_g%C3%A9n%C3%A9rale_des_voyages%2C1750.jpg/1280px-%22Plan_de_Goa%22%2C_in_Histoire_g%C3%A9n%C3%A9rale_des_voyages%2C1750.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Palolem Beach', description: 'Palolem Beach is in Canacona in Kushavati district, Goa, India.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Palolem_Beach%2C_South_Goa.jpg/1280px-Palolem_Beach%2C_South_Goa.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Dudhsagar Waterfalls', description: 'A magnificent four-tiered waterfall located deep within the forest. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to explor...' },
      { name: 'Panjim', description: 'Panaji, also known as Panjim, is the capital of the Indian state of Goa and the headquarters of the North Goa district. It was previously the territorial capital of the former Portuguese India. It lies on the banks of the Mandovi river estuary in the...' },
      { name: 'Anjuna & Baga', description: 'Bustling North Goa beaches known for nightlife, shacks, and flea markets. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to ...' },
      { name: 'Arambol', description: 'Arambol is a traditional fisherman village in the Pernem administrative region of North Goa, India, located 24.6 km (15.3 mi) north of Goa\'s capital city of Panaji. As of 2011, it has a population of around 5,300.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Arambol_2022-01-04-2.jpg/1280px-Arambol_2022-01-04-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Chapora Fort', description: 'Chapora Fort, located in Bardez, Goa, rises high above the Chapora River. The site is the location of a fort built by Adil Shahi dynasty ruler Adil Shah and called Shahpoora, whose name was altered to Shapora (chapora) by Malvankar on the request of ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Fort_Chapora_26012016.jpg/1280px-Fort_Chapora_26012016.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Spice Plantations', description: 'Tropical farms where you can learn about traditional Indian spices. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to explor...' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'North Goa Vibes', description: 'Arrive and settle in North Goa. Explore the bustling beaches of Baga and Anjuna, and enjoy the sunset.' },
      { day: 'Day 3', title: 'Heritage and History', description: 'Visit the UNESCO World Heritage churches of Old Goa and walk through the Latin Quarter of Fontainhas in Panjim.' },
      { day: 'Day 4-5', title: 'South Goa Serenity', description: 'Move to South Goa. Relax on the quieter, pristine white sands of Palolem or Agonda beach.' },
      { day: 'Day 6', title: 'Nature Excursion', description: 'Take a day trip to the majestic Dudhsagar Waterfalls and explore a local spice plantation.' }
    ]
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    tagline: 'Snow-Clad Mountains',
    description: 'Himachal Pradesh is a state in the northern part of India. Situated in the Western Himalayas, it is one of the 13 mountain states and is characterised by an extreme landscape featuring several peaks and extensive river systems. Himachal Pradesh is the northernmost state of India and shares borders w...',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Shimla', description: 'Shimla, also known as Simla, is the capital and the largest city of the northern Indian state of Himachal Pradesh. In 1864, Shimla was declared the summer capital of British India. After independence, the city became the capital of East Punjab and wa...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Manali', description: 'A high-altitude resort town popular for backpacking and adventure sports. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to ...' },
      { name: 'Dharamshala', description: 'Dharamshala is a town in the Indian state of Himachal Pradesh. It serves as the winter capital of the state and the administrative headquarters of the Kangra district since 1855. Since 1960, the town has hosted the 14th Dalai Lama and the Tibetan gov...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Dharamshala_03_%28Cropped%29.jpg/1280px-Dharamshala_03_%28Cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Spiti Valley', description: 'Spiti is a high-altitude region of the Himalayas, located in the north-eastern part of the northern Indian state of Himachal Pradesh. The name "Spiti" means "The middle land", i.e. the land between Tibet in China and India. Spiti incorporates mainly ...' },
      { name: 'Dalhousie', description: 'Dalhousie, derived from the Scottish Earl of Dalhousie title of 1633, may refer to:' },
      { name: 'Kasol', description: 'Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River between Bhuntar and Manikaran. It is located 30 km (19 mi) from Bhuntar, 3.5 km from Manikaran and 36...', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Rohtang Pass', description: 'Rohtang Pass is a high mountain pass on the eastern end of the Pir Panjal Range of the Himalayas around 51 km (32 mi) from Manali in the Indian state of Himachal Pradesh, It connects the Kullu Valley with the Lahaul and Spiti Valleys of Himachal Prad...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Kullu_Valley_from_Rohtang_Pass%2C_India.jpg/1280px-Kullu_Valley_from_Rohtang_Pass%2C_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Khajjiar', description: 'Khajjiar is a hill station near the town of Chamba in Chamba district of Himachal Pradesh, India. Located approximately 24 kilometres (15 mi) from Dalhousie, it lies on a small plateau about 2,000 meters above sea level in the foothills of the Dhaula...', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Nature_of_Khajjiar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Colonial Charm of Shimla', description: 'Arrive in Shimla. Walk down the Mall Road, visit the Christ Church, and enjoy the pine forests.' },
      { day: 'Day 3-4', title: 'Mountain Adventures in Manali', description: 'Drive to Manali. Experience the Solang Valley and the historic Hadimba Temple.' },
      { day: 'Day 5-6', title: 'Spiritual Dharamshala', description: 'Travel to McLeod Ganj. Visit the Dalai Lama Temple Complex and hike to Bhagsu Waterfall.' },
      { day: 'Day 7', title: 'Departure', description: 'Head back with unforgettable mountain memories.' }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    tagline: 'Gateway to the Heart of India',
    description: 'Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. It is bordered by the Arabian Sea to the west, the Indian states of Karnataka and Goa to the south, Telangana to the southeast and Chhattisgarh to the east, Gujarat and Madhya Prad...',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Mumbai', description: 'Mumbai, also known as Bombay, is the capital city of the Indian state of Maharashtra and the financial capital of India. Located on the Konkan coast along the west coast of India, it has a deep natural harbour. As per the 2011 Census of India, it is ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Mumbai_Bandra-Worli_Sea_Link.jpg/1280px-Mumbai_Bandra-Worli_Sea_Link.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Ajanta & Ellora Caves', description: 'UNESCO World Heritage rock-cut cave monuments featuring ancient art. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to explo...' },
      { name: 'Mahabaleshwar', description: 'Mahabaleshwar is a small town and a municipal council in Satara district, Maharashtra, India. It is a place of pilgrimage because the Krishna River, which considered sacred by Hindus, has its origin here along with five of its tributaries. The Britis...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/MAHABALESWAR_LANDSCAPE.jpg/1280px-MAHABALESWAR_LANDSCAPE.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Pune', description: 'Pune, previously spelled in English as Poona, is a city in the state of Maharashtra in the Deccan Plateau in Western India. It is the administrative headquarters of the Pune district, and of Pune division. In terms of the total amount of land under i...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Pune_West_skyline_-_March_2017.jpg/1280px-Pune_West_skyline_-_March_2017.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Tadoba National Park', description: 'The Tadoba Andhari Tiger Reserve is a protected area in Chandrapur district of Maharashtra state in India that consists of Tadoba National Park and Andhari Wildlife Sanctuary. The reserve includes 577.96 km2 (223.15 sq mi) of reserved forest and 32.5...' },
      { name: 'Lonavala & Khandala', description: 'Twin hill stations popular for weekend getaways and scenic waterfalls. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to exp...' },
      { name: 'Nashik', description: 'Nashik, formerly Nasik, is a city in the northern region of the Indian state of Maharashtra situated on the banks of the river Godavari, about 165 km (103 mi) northeast of the state capital Mumbai. The city lies in the Nashik Metropolitan Region. It ...', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/NashikViewfromPandavLeni.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Raigad Fort', description: 'Raigad, located in the Raigad district of Maharashtra, India, is a hill fort situated near the town of Mahad. It is one of the strongest fortresses on the Deccan Plateau and was historically referred to as Rairee or Rairy Fort. Raigad is the largest ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Nagarkhana%2C_Raigad_Fort%2C_India.jpg/1280px-Nagarkhana%2C_Raigad_Fort%2C_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Maximum City: Mumbai', description: 'Explore the Gateway of India, Marine Drive, and the historic Elephanta Caves.' },
      { day: 'Day 3-4', title: 'Ancient Rock-Cut Architecture', description: 'Travel to Aurangabad. Spend days exploring the breathtaking Ajanta and Ellora UNESCO caves.' },
      { day: 'Day 5-6', title: 'Hill Station Retreat', description: 'Head to Mahabaleshwar in the Western Ghats for strawberry farms and panoramic valley views.' },
      { day: 'Day 7', title: 'Departure from Pune', description: 'Visit the Aga Khan Palace in Pune before your flight home.' }
    ]
  },
  {
    id: 'tamilnadu',
    name: 'Tamil Nadu',
    tagline: 'Enchanting Tamil Nadu',
    description: 'Tamil Nadu is the southernmost state of India. The tenth largest Indian state by area and the sixth largest by population, it is the home of the Tamils, who speak the Tamil language, the state\'s official language and the first to be recognised as a classical language in India. Chennai is the state\'s...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Mamallapuram_view.jpg/1280px-Mamallapuram_view.jpg',
    places: [
      { name: 'Chennai', description: 'Chennai, also known as Madras, is the capital and largest city of Tamil Nadu, the southernmost state of India. It is located on the Coromandel Coast of the Bay of Bengal. As per the 2011 Indian census, Chennai is the sixth-most-populous city in India...', image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Madurai', description: 'Madurai is a major city in the Indian state of Tamil Nadu. It is the cultural capital of Tamil Nadu and the administrative headquarters of Madurai district, which is governed by the Madurai Municipal Corporation established on 1 November 1866. As of ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Meenakshi_Amman_West_Tower.jpg/1280px-Meenakshi_Amman_West_Tower.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Mahabalipuram', description: 'Mamallapuram is a town in Chengalpattu district in the southeastern Indian state of Tamil Nadu, best known for the UNESCO World Heritage Site of 7th- and 8th-century Hindu Group of Monuments at Mahabalipuram. It is one of the famous tourist sites in ...' },
      { name: 'Ooty', description: 'Ooty is a town and seat of the Nilgiris district in the Indian state of Tamil Nadu. It is located at an altitude of 2,240 m (7,350 ft), in the Nilgiri Mountains, which forms part of the Western Ghats, and is known by the epithet "Queen of hill statio...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Ooty_lake.jpg/1280px-Ooty_lake.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kanyakumari', description: 'Kanyakumari is a town and municipality in Kanyakumari district in the state of Tamil Nadu, India. It is the southernmost tip of the contiguous Indian subcontinent and the southernmost city in mainland India, and thus it is informally referred to as "...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg/1280px-Vivekananda_Rock_Memorial%2C_Kanyakumari.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Rameshwaram', description: 'Rameswaram is a town in the Ramanathapuram district of the Indian state of Tamil Nadu. It is situated on the Pamban Island, separated from mainland India by the Pamban channel and is about 40 kilometres (25 mi) from Mannar Island, Sri Lanka, across t...' },
      { name: 'Kodaikanal', description: 'Kodaikanal is a town and hill station in Dindigul district in the state of Tamil Nadu, India. It is situated at an altitude of 2,225 m (7,300 ft) in the Palani Hills of the Western Ghats. Kodaikanal was established in 1845 to serve as a refuge from t...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Boating_in_Kodaikanal_Lake_with_Mist.jpg/1280px-Boating_in_Kodaikanal_Lake_with_Mist.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Thanjavur', description: 'Thanjavur, also known as Thanjai, previously known as Tanjore, is a city in the Indian state of Tamil Nadu. It is the 12th biggest city in Tamil Nadu. Thanjavur is an important center of southern Indian religion, art, and architecture. Most of the Gr...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Thanjavur_2.jpg/1280px-Thanjavur_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Heritage of Mahabalipuram', description: 'Arrive in Chennai and head to Mahabalipuram to explore the ancient Shore Temple and rock carvings.' },
      { day: 'Day 3-4', title: 'Temple City of Madurai', description: 'Visit the magnificent Meenakshi Amman Temple and witness the evening ceremony.' },
      { day: 'Day 5-6', title: 'The Queen of Hill Stations', description: 'Take the Nilgiri Mountain Railway to Ooty. Enjoy the tea gardens and cool climate.' },
      { day: 'Day 7', title: 'The Southern Tip', description: 'Watch the sunrise at Kanyakumari, where three oceans meet.' }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    tagline: 'One State, Many Worlds',
    description: 'Karnataka is a state on the southwestern coast of India. It was formed as Mysore State on 1 November 1956, with the passage of the States Reorganisation Act, and renamed Karnataka in 1973. The state is bordered by the Lakshadweep Sea to the west, Goa to the northwest, Maharashtra to the north, Telan...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/1280px-Hampi_virupaksha_temple.jpg',
    places: [
      { name: 'Bangalore', description: 'Bengaluru, also known as Bangalore, is the capital and largest city of the southern Indian state of Karnataka. As per the 2011 census, the city had a population of 8.4 million, making it the third most populous city in India and the most populous in ...' },
      { name: 'Mysore', description: 'Mysore, officially Mysuru, is a city in the southern Indian state of Karnataka. It is the administrative headquarters of Mysore district and Mysore division. As the traditional seat of the Wadiyar dynasty, the city functioned as the capital of the Ki...', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Mysuru_Montage.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Hampi', description: 'Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in the town of Hampi in Vijayanagara district, east-central Karnataka, India. Hampi predates the Vijayanagara Empire; it is mentioned in the ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg/1280px-Wide_angle_of_Galigopuram_of_Virupaksha_Temple%2C_Hampi_%2804%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Coorg', description: 'Kodagu district is an administrative district in the Karnataka state of India. Before 1956, it was an administratively separate Coorg State at which point it was merged into an enlarged Mysore State.' },
      { name: 'Gokarna', description: 'A coastal town known for its pristine beaches and revered temples. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to explore...' },
      { name: 'Bandipur National Park', description: 'Bandipur National Park is a national park covering 1,456.3 km2 (562.3 sq mi) in Chamarajnagar district in the Indian state of Karnataka. It was established as a tiger reserve under Project Tiger in 1973. It is part of the Nilgiri Biosphere Reserve si...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Prince_in_the_Jungle_crop.jpg/1280px-Prince_in_the_Jungle_crop.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Badami', description: 'Bādāmi, formerly known as Vātāpi, is a town and headquarters of a taluk by the same name, in the Bagalkot district of Karnataka, India. It was the regal capital of the Badami Chalukyas from 540 to 757. It is famous for its rock cut monuments such as ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/BadamiCaves87.JPG/1280px-BadamiCaves87.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Udupi', description: 'Udupi is a city in the Indian state of Karnataka. It is the administrative headquarters and taluka of Udupi district, and one of the fastest-growing cities in Karnataka. Udupi is one of the top tourist attractions in Karnataka and has various educati...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Udupi_Krishna_Temple.jpg/1280px-Udupi_Krishna_Temple.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Royal Mysore', description: 'Arrive in Bangalore and travel to Mysore. Marvel at the illuminated Mysore Palace and Chamundi Hill.' },
      { day: 'Day 3-4', title: 'Coffee and Nature in Coorg', description: 'Head to the Scotland of India, Coorg. Tour coffee estates and visit the Abbey Falls.' },
      { day: 'Day 5-6', title: 'The Ruins of Hampi', description: 'Travel north to the mesmerizing boulder-strewn landscape and ancient ruins of the Vijayanagara Empire.' },
      { day: 'Day 7', title: 'Departure', description: 'Return journey to Bangalore.' }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    tagline: 'Vibrant Gujarat',
    description: 'Gujarat is a state along the western coast of India. Its coastline of about 2,340 km (1,450 mi) is the longest in the country, most of which lies on the Kathiawar peninsula. Gujarat is the fifth-largest Indian state by area, covering some 196,024 km2 (75,685 mi2); and the ninth-most populous state, ...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/1280px-Rani_ki_vav_02.jpg',
    places: [
      { name: 'Ahmedabad', description: 'Ahmedabad, also spelt Amdavad and historically known as Karnavati, is the most populous city in the Indian state of Gujarat. It is the administrative headquarters of the Ahmedabad district and the seat of the Gujarat High Court. Ahmedabad\'s populatio...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Sabarmati_riverside.jpg/1280px-Sabarmati_riverside.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Rann of Kutch', description: 'The Rann of Kutch is a large area of salt marshes located in the northwestern part of the Indian subcontinent, and spans the border between India and Pakistan. Most of the region is located in the Kutch district of the Indian state of Gujarat, with a...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Rann_of_Kutch_-_White_Desert.jpg/1280px-Rann_of_Kutch_-_White_Desert.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Gir National Park', description: 'Gir National Park and Wildlife Sanctuary, also known as Sasan Gir, is a national park and wildlife sanctuary in Gujarat, India. It was established in 1965 in the erstwhile Nawab of Junagarh\'s private hunting area, with a total area of 1,410.30 km2 (5...', image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Somnath', description: 'Somanatha Temple is a Hindu temple, located in Prabhas Patan, Veraval, in Gujarat, India. It is one of the most sacred pilgrimage sites, or Tirtha Kshetra for Hindus and is the first among the twelve jyotirlinga shrines of Shiva. The date of construc...' },
      { name: 'Statue of Unity', description: ' The Statue of Unity is the world\'s tallest statue, with a height of 182 metres, located in Narmada valley, near Kevadia in the state of Gujarat, India. It depicts Indian politician and independence activist Sardar Patel (1875–1950), who was the firs...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Statue_of_Unity.jpg/1280px-Statue_of_Unity.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Dwarka', description: 'Dwarka is a coastal town and municipality of Devbhumi Dwarka district in the Indian state of Gujarat. It is located on the western shore of the Okhamandal Peninsula on the right bank of the Gomti River at the mouth of the Gulf of Kutch facing the Ara...', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Dwarakadheesh_Temple%2C_2014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Champaner-Pavagadh', description: 'An archaeological park featuring magnificent Islamic and Hindu architecture. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity ...' },
      { name: 'Lothal', description: 'Lothal was one of the southernmost sites of the ancient Indus Valley Civilisation, located in the Bhal region of the Indian state of Gujarat. Construction of the city is believed to have begun around 2300 BCE.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/The_drainage_system_at_Lothal_2.JPG/1280px-The_drainage_system_at_Lothal_2.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Heritage Walk in Ahmedabad', description: 'Explore India’s first UNESCO Heritage City. Visit the Sabarmati Ashram and intricate stepwells.' },
      { day: 'Day 3-4', title: 'Lions of Gir', description: 'Travel to Gir National Park, the only natural habitat of the Asiatic Lion in the world.' },
      { day: 'Day 5-6', title: 'The White Desert', description: 'Experience the surreal landscape of the Rann of Kutch and its vibrant local handicrafts.' },
      { day: 'Day 7', title: 'Departure', description: 'Return to Ahmedabad for departure.' }
    ]
  },
  {
    id: 'madhyapradesh',
    name: 'Madhya Pradesh',
    tagline: 'The Heart of Incredible India',
    description: 'Madhya Pradesh is a state in central India. Its capital is Bhopal. Other major cities include Indore, Gwalior, Jabalpur, Chhindwara and Sagar. Madhya Pradesh is the second largest Indian state by area and the fifth largest state by population with over 72 million residents. It borders the states of ...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/India-5749_-_Visvanatha_Temple_-_Flickr_-_archer10_%28Dennis%29.jpg/1280px-India-5749_-_Visvanatha_Temple_-_Flickr_-_archer10_%28Dennis%29.jpg',
    places: [
      { name: 'Khajuraho', description: 'Khajuraho is a city, near Chhatarpur in Chhatarpur district of the Indian state of Madhya Pradesh. One of the most popular tourist destinations in India, Khajuraho has the country\'s largest group of medieval Hindu and Jain temples, famous for their e...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/1_Khajuraho.jpg/1280px-1_Khajuraho.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Bandhavgarh National Park', description: 'Bandhavgarh National Park is a national park of India, located in the Umaria district of Madhya Pradesh. It spreads over an area of 105 km2 (41 sq mi) and was declared a national park in 1968. It became Tiger Reserve in 1993 with a core area of 716 k...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Tigress_in_Bandhavgarh_NP.jpg/1280px-Tigress_in_Bandhavgarh_NP.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kanha National Park', description: 'Kanha Tiger Reserve, also known as Kanha–Kisli National Park, is one of the tiger reserves of India and the largest national park of the state of Madhya Pradesh. It covers an area of 940 km2 (360 sq mi) in the two districts Mandla and Balaghat. The p...' },
      { name: 'Gwalior', description: 'Gwalior is the fourth largest city of the Indian state of Madhya Pradesh where it serves as the capital and the administrative headquarters of the eponymous district and division. It is an important cultural, industrial, sports and political centre. ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Gwalior_Fort_front.jpg/1280px-Gwalior_Fort_front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Sanchi', description: 'Sanchi Stupa is a Buddhist complex, famous for its Great Stupa, on a hilltop at Sanchi Town in Raisen District of the State of Madhya Pradesh, India. It is located about 23 kilometres from Raisen town, the district headquarters and 46 kilometres (29 ...' },
      { name: 'Ujjain', description: 'Ujjain, also known as Ujjayini, is a city in Ujjain district of the Indian state of Madhya Pradesh. It is the fifth-largest city in Madhya Pradesh by population and is the administrative as well as religious centre of Ujjain district and Ujjain divis...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Mahakaleshwar_Temple%2C_Ujjain.jpg/1280px-Mahakaleshwar_Temple%2C_Ujjain.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Pachmarhi', description: 'Pachmarhi is a hill station in Madhya Pradesh state of central India. It has been the location of a cantonment since the British Raj. The municipality is located in a valley of the Satpura Range and is widely known as Satpura ki Rani.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Pachmarhi_valley_Madhya_Pradesh_INDIA.jpg/1280px-Pachmarhi_valley_Madhya_Pradesh_INDIA.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Orchha', description: 'Orchha is a city near the city of Niwari in the Niwari district of Madhya Pradesh state, India. The city was established by a Bundela Rajput ruler Rudra Pratap Singh some time after 1501, as the seat of an eponymous former princely state including pa...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Chaturbhuj_Temple%2C_Orchha.jpg/1280px-Chaturbhuj_Temple%2C_Orchha.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Khajuraho Temples', description: 'Marvel at the intricate sculptures of the UNESCO-listed Khajuraho Group of Monuments.' },
      { day: 'Day 3-4', title: 'Tiger Safari at Bandhavgarh', description: 'Venture into the dense forests of Bandhavgarh National Park for thrilling tiger sightings.' },
      { day: 'Day 5-6', title: 'Peace at Sanchi', description: 'Visit the Great Stupa at Sanchi, one of the oldest stone structures in India.' },
      { day: 'Day 7', title: 'Departure', description: 'Head to Bhopal or Gwalior for your onward journey.' }
    ]
  },
  {
    id: 'westbengal',
    name: 'West Bengal',
    tagline: 'Beautiful Bengal',
    description: 'West Bengal is a state in the eastern part of India. It is situated along the Bay of Bengal. In 2011, its population was around 91 million in an area of 88,752 km2 (34,267 sq mi), while the population estimate as of 2026 is 100.6 million. West Bengal is the fourth-most populous and thirteenth-larges...',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2070&auto=format&fit=crop',
    places: [
      { name: 'Kolkata', description: 'Kolkata, also known as Calcutta, is the capital and largest city of the Indian state of West Bengal. It lies on the eastern bank of the Hooghly River, 80 km (50 mi) west of the border with Bangladesh. It is the primary financial and commercial centre...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Kolkata_maidan.jpg/1280px-Kolkata_maidan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Darjeeling', description: 'Darjeeling is a city in the northernmost region of the Indian state of West Bengal. Located in the Eastern Himalayas, it has an average elevation of 2,045 metres (6,709 ft). To the west of Darjeeling lies the easternmost province of Nepal, to the eas...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/DarjeelingTrainFruitshop_%282%29.jpg/1280px-DarjeelingTrainFruitshop_%282%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Sundarbans', description: 'Sundarbans is a mangrove forest area in the Ganges Delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Hooghly River in India\'s state of West Bengal to the Baleswar River in Ban...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Save_the_sundarbans_20.jpg/1280px-Save_the_sundarbans_20.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Kalimpong', description: 'Kalimpong is a town and the headquarters of an eponymous district in the Indian state of West Bengal. It is located at an average elevation of 1,250 metres (4,101 ft). The town is the headquarters of the Kalimpong district. The region comes under the...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/View_of_Kalimpong%2C_India.jpg/1280px-View_of_Kalimpong%2C_India.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Shantiniketan', description: 'Santiniketan is a neighbourhood of Bolpur town in the Bolpur subdivision of Birbhum district in West Bengal, India, approximately 152 km north of Kolkata. It was established by Debendranath Tagore, and later expanded by his son, Rabindranath Tagore w...' },
      { name: 'Murshidabad', description: 'Murshidabad is a town in the Indian state of West Bengal. This town is the headquarters of Lalbag subdivision of Murshidabad district. It is located on the eastern bank of the Bhagirathi River. During the 18th century, Murshidabad was a prosperous an...', image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Nizamat_Imambara_2%2C_Murshidabad.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Digha', description: 'Digha is a seaside resort town located in the Purba Medinipur district in the state of West Bengal, India. Situated at the northern end of the Bay of Bengal, it is a popular coastal tourist destination known for its low gradient and shallow sand beac...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Digha_Tourist_Lodge_front_yard_1.jpg/1280px-Digha_Tourist_Lodge_front_yard_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Bishnupur', description: 'Famous for its exquisite terracotta temples and Baluchari sarees. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to explore ...' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'City of Joy: Kolkata', description: 'Explore the Victoria Memorial, Howrah Bridge, and enjoy the famous Bengali sweets.' },
      { day: 'Day 3-4', title: 'Tigers of the Mangroves', description: 'Take a boat safari through the Sundarbans, the largest mangrove forest in the world.' },
      { day: 'Day 5-6', title: 'Tea and Mountains in Darjeeling', description: 'Fly to Bagdogra and drive to Darjeeling. Ride the Toy Train and watch the sunrise over Kanchenjunga.' },
      { day: 'Day 7', title: 'Departure', description: 'Travel to Bagdogra for your flight home.' }
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    tagline: 'A Himalayan Wonderland',
    description: 'Sikkim is a state in northeast India. It borders Bhutan in the east, the Tibet Autonomous Region of China in the north and northeast, Koshi Province of Nepal in the west, and West Bengal in the south. Sikkim is one of the two Indian states that share their border with just one other Indian state — W...',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Gurudongmar_Lake_Sikkim%2C_India_%28edit%29.jpg/1280px-Gurudongmar_Lake_Sikkim%2C_India_%28edit%29.jpg',
    places: [
      { name: 'Gangtok', description: 'Gangtok is the capital and the most populous city of the Indian state of Sikkim. The seat of eponymous district, Gangtok is in the eastern Himalayan range, at an elevation of 1,650 m (5,410 ft). The city\'s population of 100,000 consists of the three ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Kangch-Goechala.jpg/1280px-Kangch-Goechala.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Pelling', description: 'Pelling  is a hill station in ( རྒྱལ་ཤིང་རྫོང་།) Gyalshing district of Sikkim, India. Pelling is nestled at an altitude of 2,150 m (7,050 ft). The town is located at a distance of 10 km from Gyalshing city, the district headquarters and 131 km from G...', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Sunrise_over_Kangchenjunga.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' },
      { name: 'Nathu La Pass', description: 'Nathu La is a mountain pass in the Dongkya Range of the Himalayas between China A mesmerizing location that stands as a testament to history and natural beauty. Visitors are often left in awe of its majestic presence and the vibrant atmosphere that ...' },
      { name: 'Lachung & Yumthang', description: 'Picturesque mountain villages serving as a base for the Valley of Flowers. Experience a journey like no other, where ancient traditions blend seamlessly with modern wonders. This breathtaking destination offers visitors an unparalleled opportunity to...' },
      { name: 'Tsomgo Lake', description: 'Tsomgo Lake, also known as Tsongmo Lake or Changgu Lake, is a glacial lake in Changu in the Gangtok district of the Indian state of Sikkim, some 40 kilometres (25 mi) from the capital Gangtok. Located at an elevation of 3,753 m (12,313 ft), the lake ...' },
      { name: 'Gurudongmar Lake', description: 'Gurudongmar Lake is one of the highest lakes in the world and in India, at an elevation of 5,430 m (17,800 ft) according to the Government of Sikkim. It is located in the Great Himalayas in the Mangan district in Indian state of Sikkim, and considere...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Gurudongmar_Lake_Sikkim%2C_India_%28edit%29.jpg/1280px-Gurudongmar_Lake_Sikkim%2C_India_%28edit%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Ravangla', description: 'Rabong or Ravangla is a small town with an elevation of 8000 feet located, near Namchi City in the Namchi district of the Indian state of Sikkim. It is connected by state highway to other major towns in the state and lies between Namchi, Pelling and ...', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Ravangla_Town.jpg/1280px-Ravangla_Town.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail' },
      { name: 'Yuksom', description: 'Yuksom, also spelt Yuksum, is a historical town about 40 km north of Gyalshing in the Gyalshing district, in the northeast Indian state of Sikkim. It was the first capital of the Kingdom of Sikkim, established in 1642 by Phuntsog Namgyal, the first C...', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Yuksom_Village.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled' }
    ],
    itinerary: [
      { day: 'Day 1-2', title: 'Exploring Gangtok', description: 'Arrive in Gangtok. Visit the Rumtek Monastery, MG Marg, and the Namgyal Institute of Tibetology.' },
      { day: 'Day 3', title: 'The High Altitude Pass', description: 'Take a day trip to the spectacular Tsomgo Lake and the Nathu La Pass on the Indo-China border.' },
      { day: 'Day 4-5', title: 'Valley of Flowers', description: 'Travel to Lachung and visit the stunning Yumthang Valley, known for its hot springs and rhododendrons.' },
      { day: 'Day 6-7', title: 'Majestic Pelling', description: 'Head to Pelling for incredible, up-close views of Mount Kanchenjunga before departure.' }
    ]
  }
];
