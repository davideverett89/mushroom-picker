/* eslint-disable max-len */
const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Bolet',
    description: 'You may know this wild mushroom as porcini or king bolet, and if you\'ve ever tasted it pan fried in olive oil or cooked in an omelet, you\'re in love.',
    imgUrl: 'https://img-aws.ehowcdn.com/600x600p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/b79da434dc7e45efba3280749e48b7ed',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Button Mushroom',
    description: 'Agaricus bisporus is an edible mushroom which has two color states while immature – white and brown – both of which have various names. When mature, it is known as portobello mushroom.',
    imgUrl: 'https://www.diet-health.info/images/recipes/1400/agaricus-augustus-47964-cropped.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Oyster Mushroom',
    description: 'If you\'ve only ever eaten button mushrooms, then the appearance of oyster mushrooms might be a bit intimidating at first. Don\'t worry if you don\'t enjoy seafood. They might look like oysters, but they don\'t taste like them.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Oyster-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Chanterelle Mushroom',
    description: 'Chanterelle mushrooms have a distinctive bright yellow color. They\'ve got a sweet and peppery flavor that goes well with eggs.  They last longer in the fridge than most other varieties of mushrooms: about 10 days.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chanterelle-Mushrooms2.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Hedgehog Mushroom',
    description: 'Hedgehog or sweet tooth mushrooms get their name from the gills underneath their cap. They hang down, forming spiky shapes that resemble a hedgehog.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Hedgehog-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Chicken Of The Woods',
    description: '​As you might expect, it gets its name because many people think it tastes like chicken. In fact, you can cook it many of the same ways that you\'d prepare chicken. This makes it a​ great meat substitute for vegetarians.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chicken-Of-The-Woods-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Black Trumpet Mushrooms',
    description: '​They aren\'t a very attractive mushroom to look at, but their flavor is quite sought after. People describe the flavor as rich and smoky. When allowed to dry, their flavor even takes on hints of black truffle.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/black-chanterelles.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Wood Blewit Mushroom',
    description: '​Wood blewits are considered edible, although they may cause allergic reactions in some people. Especially when eaten raw, although they can cause reactions even when cooked. So it\'s best to start by eating small amounts.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Wood-Blewit-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Morel Mushroom',
    description: 'Morels are some of the most sought after wild mushrooms. They aren\'t farmed and sold in stores.  ​In fact, families will often have secret "morel spots" where they know these mushrooms grow that they\'ll keep for themselves, going each year to harvest these delicious mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Morel-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Enoki Mushroom',
    description: 'These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps. They go nicely in soups, especially ramen.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/shutterstock_1013649136.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Shimeji Mushroom',
    description: 'Shimeji is another mushroom native to East Asia, but they can also be found in Northern Europe.  They are also known as white beech mushrooms. They add a rich umami flavor to dishes.  However, they taste quite bitter when eaten raw, so they should always be cooked. They go great in stir fries or with seafood or wild game.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shimeji-Mushrooms-1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Shiitake Mushroom',
    description: 'Shiitake mushrooms are commonly used in Asian cuisine​. They are also considered to have medicinal benefits in traditional Asian medicine.  Shiitake mushrooms have a meaty texture much like portobellos. They have a more smoky, earthy flavor when cooked. Shiitake mushrooms are most commonly sold dried.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shiitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Maitake Mushroom',
    description: 'Maitake mushrooms are also called hen-of-the-woods. However, they shouldn\'t be confused with chicken of the woods mushrooms. Nor with shiitakes, which also have a similar sounding name.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Maitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Lion\'s Mane Mushroom',
    description: 'Lion\'s mane grows in shaggy clumps on the side of trees and can look a bit like stalactite formations that hang inside of caves.  ​Lion\'s mane is purported to boost concentration and mood, keep the brain healthy, support the immune system, and decrease inflammation in the body.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Lions-Mane-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Matsutake Mushroom',
    description: 'The matsutake mushroom, or pine mushroom, isn\'t very well known in the West. But it\'s a highly prized mushroom in Chinese, Korean, and Japanese cuisine. It has a distinctive spicy odor.Matsutake mushrooms can be hard to find since they grow under specific trees and are normally hidden by leaves and other brush on the forest floor.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Matsutake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Psilocybin Mushroom',
    description: 'Psilocybin mushrooms may have been used in ancient religious rites and ceremonies.  They may be depicted in Stone Age rock art in Africa and Europe, but are most famously represented in the Pre-Columbian sculptures and glyphs seen throughout Central and South America.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Psilocybe_semilanceata_6514.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Death Cap',
    description: 'Perhaps the deadliest of all mushrooms, the death cap is found throughout Europe and closely resembles edible straw mushrooms and caesar’s mushrooms. Its heat-stable amatoxins withstand cooking temperatures and quickly damage cells throughout the body.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom18',
    name: 'Webcaps',
    description: 'These mushrooms feature a poison known as orellanin, which initially causes symptoms similar to the common flu. Orellanin has an insidiously long latency period and may take 2 days to 3 weeks to cause symptoms, often leading to a misdiagnosis.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Cort_semi.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Autumn Skullcap',
    description: 'Common throughout the Northern Hemisphere and parts of Australia, Galerina marginata is a gilled, wood-rotting mushroom with the same amatoxins as the death cap mushroom. Ingestion causes diarrhea, vomiting, hypothermia, and liver damage, and can result in death if left untreated.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/03/180803-050-11B5EAE5/skullcaps-mushrooms-autumn-skullcap.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Destroying Angels',
    description: 'The destroying angels are actually several species of all-white mushrooms in the genus Amanita. These incredibly toxic fungi are very similar in appearance to edible button mushrooms and the meadow mushrooms, and have been collected by mistake on numerous occassions.',
    imgUrl: 'https://townsquare.media/site/543/files/2018/10/mushroom.jpg?w=980&q=75',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const pickedPoisonousMushroom = () => {
  if (basket.length < 2) {
    basket.splice(0, 1);
  } else {
    basket.splice(0, 2);
  }
};

const pickedDeadlyMushroom = () => {
  basket.splice(0, basket.length);
};

const pickedMagicMushroom = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isPoisonous === false && mushroom.isDeadly === false && mushroom.isMagic === false) {
      basket.push(mushroom);
    }
  });
};

const checkForWinner = () => {
  const safeMushrooms = mushrooms.filter((mushroom) => mushroom.isPoisonous === false && mushroom.isDeadly === false && mushroom.isMagic === false);
  const basketMushroomLog = safeMushrooms.map((mushroom) => {
    const isIncluded = basket.includes((mushroom));
    return isIncluded;
  });
  const isWinner = basketMushroomLog.every((x) => x === true);
  return isWinner;
};

const pickAMushroom = () => {
  const randomNum = Math.floor(Math.random() * mushrooms.length);
  let isDark = false;
  let isWinner = false;
  const pickedMushroom = mushrooms[randomNum];
  if (pickedMushroom.isPoisonous) {
    pickedPoisonousMushroom();
    isDark = true;
  } else if (pickedMushroom.isDeadly) {
    pickedDeadlyMushroom();
    isDark = true;
  } else if (pickedMushroom.isMagic) {
    pickedMagicMushroom();
  } else {
    basket.push(pickedMushroom);
  }
  isWinner = checkForWinner();
  const newMushroom = pickedMushroom;
  return { newMushroom, isDark, isWinner };
};

export default {
  getMushrooms,
  getBasket,
  pickAMushroom,
};
