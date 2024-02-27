export interface Product {
    id: number;
    name: string;
    price: number; 
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    description: string;
    url: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Подушка-игрушка Кот Батон dlinii.kot, высота 110 см, серый',
      price: 4300,
      image : 'https://cdn1.ozone.ru/s3/multimedia-w/c1200/6041139752.jpg',
      rating: { rate: 4.9, count: 140 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Мягкая, милая игрушка-подушка в виде длинного серого кота не только украсит интерьер, но и поможет расслабиться. Игрушка выполнена из самого мягкого материала, который можно придумать - эластичного плюша, а наполнена нежнейшим холлофайбером. Плюшевого кота можно брать с собой в дальние поездки, чтобы подкладывать под шею или спину или же уютно обнять его для комфортного кино просмотра или прочтения книги в кровати.  Милый зверек всегда подстроится под вас и ваши желания'
    },
    {
      id: 2,
      name: 'Умная колонка Яндекс Станция Лайт фиолетовый',
      price: 27000,
      image : 'https://th.bing.com/th/id/OIP.FCKZrbOvR9yv61QSx1a_twHaGr?rs=1&pid=ImgDetMain',
      rating: { rate: 4.5, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и аккаунт на Яндексе. '
    },
    {
      id: 3,
      name: 'Игровое кресло Defender Watcher, белый',
      price: 71690,
      image : 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-38/346/192/739/161/0/600010709343b0.jpeg',
      rating: { rate: 3.9, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Стильное игровое кресло со встроенной подсветкой - удачное решение для геймеров, которые проводят много времени за компьютером. Откидывающаяся спинка и подставка для ног обеспечивают непревзойденный уровень комфорта. Кресло представлено в черном и белом цвете.'
    },
    {
       id: 4,
      name: 'Кеды DD&OO 6901-BB белый 35',
      price: 5600,
      image : 'https://th.bing.com/th/id/OIP.kW0vwsI0pRBe4G2s51qaXQHaLA?rs=1&pid=ImgDetMain',
      rating: { rate: 3.6, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Кроссовки женские, белые на шнурке, дополнительно золотистые шнурки, упакован в коробки. Особенности размера : мало мерят на один размер. Товар полностью соответствует фото.'
    },
    {
      id: 5,
      name : 'Мышь Logitech G102 Lightsync черный',
      price: 8900,
      image : 'https://www.clife.ru/upload/himg_cache/detail-middle/302/302aa591e399ab429be2e4beaecbd297/logitech_g102_lightsync_2.jpg',
      rating: { rate: 3.0, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description : 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания.'
    },
    {
      id: 6,
      name: 'Стул N-12, 81x50x25 см, белый',
      price: 7290,
      image : 'https://th.bing.com/th/id/OIP.MuYkULMwvv2JZjhpG-7XFQHaEs?rs=1&pid=ImgDetMain',
      rating: { rate: 3.3, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота'
    },
    {
      id: 7,
      name: 'Ollin Professional Perfect Hair 15 в 1 спрей-кондиционер 250',
      price: 2900,
     image : 'https://static.tildacdn.com/tild3964-6132-4231-a531-663937346436/PERFECT_HAIR__-_15__.png',
      rating: { rate: 3.2, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Уникальное многофункциональное средство заменит вам целых 15 продуктов для ухода за волосами. Легкий крем-спрей обладает потрясающими свойствами: он великолепно увлажняет и питает волосы, облегчает расчесывание, восстанавливает повреждения, обладает термозащитой и защищает цвет окрашенных волос, усиливая их яркость.'
    },
    {
      id: 8,
      name: 'Herbal Essences Глубокое восстановление Марокканское Аргановое Масло шампунь 400 мл',
      price: 1900,
      image : 'https://a.lmcdn.ru/product/R/T/RTLABP476801_17574903_1_v1.jpg',
      rating: { rate: 4.9, count: 120 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'Веганский шампунь Herbal Essences (Хербал Эсенсес) Глубокое Восстановление из коллекции Марокканское аргановое масло подходит для поврежденных волос. Шампунь бережно очищает и глубоко восстанавливает волосы, наполняя их чарующим ароматом арганового масла. В результате волосы становятся более живыми, мягкими и блестящими.'
    },
    {
      id: 9,
      name: 'Стилус TCM Pencil V2 белый',
      price: 6945,
      image : 'https://img.rukzakmania.ru/images/products/1/6667/365935115/Stilus-WiWU-Wi-Pencil-white-02.jpg',
      rating: { rate: 4.7, count: 233 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'TCM Pencil V2 - это стилус, который сочетает в себе высокое качество, универсальную совместимость и доступную цену. Он является отличной альтернативой дорогим стилусам от Apple, предлагая множество функций и превосходную производительность для вашего творчества и повседневных задач'
    },
    {
      id: 10,
      name: 'Мини-принтер Centechia Mini голубой',
      price: 7959,
      image : 'https://printermo.ru/images/styles/public/mini-printer-kittyprint-belo-goluboy_2.jpg',
      rating: { rate: 3.8, count: 220 },
      url : 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      description: 'сделан из высокопрочного abs-пластика; полная зарядка 90 мин; мощный аккумулятор, разрешение 203x200 dpi; инструкция на русском языке'
    }
    
  ];
  
  