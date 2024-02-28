export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  like: number;
}

export const products = [
    {
      id: 1,
      image: 'https://cdn1.ozone.ru/s3/multimedia-w/c1200/6041139752.jpg',
      name: 'Подушка-игрушка Кот Батон dlinii.kot, высота 110 см, серый',
      description:
        'Мягкая, милая игрушка-подушка в виде длинного серого кота не только украсит интерьер, но и поможет расслабиться. Игрушка выполнена из самого мягкого материала, который можно придумать - эластичного плюша, а наполнена нежнейшим холлофайбером. Плюшевого кота можно брать с собой в дальние поездки, чтобы подкладывать под шею или спину или же уютно обнять его для комфортного кино просмотра или прочтения книги в кровати.  Милый зверек всегда подстроится под вас и ваши желания',
      rating: 4,
      link:
        'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'accessory',
      like: 0,
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.FCKZrbOvR9yv61QSx1a_twHaGr?rs=1&pid=ImgDetMain',
      name: 'Умная колонка Яндекс Станция Лайт фиолетовый',
      description:
        'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и аккаунт на Яндексе.',
      rating: { rate: 4.5, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'phone',
      like: 0,
    },
    {
      id: 3,
      image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-38/346/192/739/161/0/600010709343b0.jpeg',
      name: 'Игровое кресло Defender Watcher, белый',
      description:
        'Стильное игровое кресло со встроенной подсветкой - удачное решение для геймеров, которые проводят много времени за компьютером. Откидывающаяся спинка и подставка для ног обеспечивают непревзойденный уровень комфорта. Кресло представлено в черном и белом цвете.',
      rating: { rate: 3.9, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'phone',
      like: 0,
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/OIP.kW0vwsI0pRBe4G2s51qaXQHaLA?rs=1&pid=ImgDetMain',
      name: 'Кеды DD&OO 6901-BB белый 35',
      description:
        'Кроссовки женские, белые на шнурке, дополнительно золотистые шнурки, упакован в коробки. Особенности размера: мало мерят на один размер. Товар полностью соответствует фото.',
      rating: { rate: 3.6, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'watch',
      like: 0,
    },
    {
      id: 5,
      image: 'https://www.clife.ru/upload/himg_cache/detail-middle/302/302aa591e399ab429be2e4beaecbd297/logitech_g102_lightsync_2.jpg',
      name: 'Мышь Logitech G102 Lightsync черный',
      description:
        'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания.',
      rating: { rate: 3.0, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'watch',
      like: 0,
    },
    {
      id: 6,
      image: 'https://th.bing.com/th/id/OIP.MuYkULMwvv2JZjhpG-7XFQHaEs?rs=1&pid=ImgDetMain',
      name: 'Стул N-12, 81x50x25 см, белый',
      description:
        'Благодаря сочетанию пластика с металлом и деревом изделие органично вписывается практически в любую среду, делая обстановку более естественной и «живой». Еще одно достоинство модели – удобная для обеденного стола высота',
      rating: { rate: 3.3, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'phone',
      like: 0,
    },
    {
      id: 7,
      image: 'https://static.tildacdn.com/tild3964-6132-4231-a531-663937346436/PERFECT_HAIR__-_15__.png',
      name: 'Ollin Professional Perfect Hair 15 в 1 спрей-кондиционер 250',
      description:
        'Уникальное многофункциональное средство заменит вам целых 15 продуктов для ухода за волосами. Легкий крем-спрей обладает потрясающими свойствами: он великолепно увлажняет и питает волосы, облегчает расчесывание, восстанавливает повреждения, обладает термозащитой и защищает цвет окрашенных волос, усиливая их яркость.',
      rating: { rate: 3.2, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'watch',
      like: 0,
    },
    {
      id: 8,
      image: 'https://a.lmcdn.ru/product/R/T/RTLABP476801_17574903_1_v1.jpg',
      name: 'Herbal Essences Глубокое восстановление Марокканское Аргановое Масло шампунь 400 мл',
      description:
        'Веганский шампунь Herbal Essences (Хербал Эсенсес) Глубокое Восстановление из коллекции Марокканское аргановое масло подходит для поврежденных волос. Шампунь бережно очищает и глубоко восстанавливает волосы, наполняя их чарующим ароматом арганового масла. В результате волосы становятся более живыми, мягкими и блестящими.',
      rating: { rate: 4.9, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'computer',
      like: 0,
    },
    {
      id: 9,
      image: 'https://img.rukzakmania.ru/images/products/1/6667/365935115/Stilus-WiWU-Wi-Pencil-white-02.jpg',
      name: 'Стилус TCM Pencil V2 белый',
      description:
        'TCM Pencil V2 - это стилус, который сочетает в себе высокое качество, универсальную совместимость и доступную цену. Он является отличной альтернативой дорогим стилусам от Apple, предлагая множество функций и превосходную производительность для вашего творчества и повседневных задач',
      rating: { rate: 4.7, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'phone',
      like: 0,
    },
    {
      id: 10,
      image: 'https://printermo.ru/images/styles/public/mini-printer-kittyprint-belo-goluboy_2.jpg',
      name: 'Мини-принтер Centechia Mini голубой',
      description:
        'сделан из высокопрочного abs-пластика; полная зарядка 90 мин; мощный аккумулятор, разрешение 203x200 dpi; инструкция на русском языке',
      rating: { rate: 3.8, count: 0 },
      link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-defender-watcher-belyi-110723371/?c=750000000',
      category: 'watch',
      like: 0,
    },  
    {
        id: 11,
        name: "CASIO MTP-1374L-1AVDF",
        description: "Analog quartz wristwatch, steel case, non-shock-resistant, for men, black.",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha1/ha8/63763581960222.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374l-1avdf-stal--21400996/?c=750000000#!/item",
        category: "watch",
        like: 0,
    },
    {
        id: 12,
        name: "Часы Кварцевые 528706 титан, нержавеющая сталь",
        description: "способ отображения времени: аналоговый (стрелки)\n" +
            "тип: кварцевые\n" +
            "материал корпуса: титан, ,нержавеющая сталь\n" +
            "для кого: для женщин\n" +
            "цвет: серебристый",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h5a/h47/69016126193694.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/kvartsevye-528706-titan-nerzhavejuschaja-stal--108902460/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 13,
        name: "Часы Кварцевые SKMEI 1251 пластик, нержавеющая сталь",
        description: "способ отображения времени: цифровой (электронный)\n" +
            "тип: кварцевые\n" +
            "материал корпуса: пластик, ,нержавеющая сталь\n" +
            "для кого: для мужчин\n" +
            "цвет: черный",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h6b/64410943324190.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/kvartsevye-skmei-1251-plastik-nerzhavejuschaja-stal--103561408/?c=750000000",
        category: "watch",
        like: 0,
    },
    {
        id: 14,
        name: "Apple iPhone 15 Pro 1Tb",
        description: "NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h26/hc5/83559836745758.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 15,
        name: 'Apple iPhone 14 Pro Max 256Gb Purple',
        description: 'NFC technology: Yes\n' +
            'color: purple\n' +
            'Screen type: OLED, Super Retina XDR display\n' +
            'diagonal: 6.7 inch\n' +
            'main memory size: 6GB\n' +
            'processor: 6-core Apple A16 Bionic\n' +
            'Built-in memory: 256GB\n' +
            'Battery capacity: 3095mAh',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
        category: "phone",
        like: 0,
    },
    {
        id: 16,
        name: "Apple iPhone 15 128Gb",
        description: "Apple iPhone 15 128Gb",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium",
        link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
        category: "phone",
        like: 0,
    },
    {
        id: 17,
        name: "Системный блок KompTrust Comfort Game RTX черный",
        description: "установленная ОС: Win 11 Pro\n" +
            "процессор: Intel Core I5 - 10400F\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 1000.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce RTX 2060 SUPER\n" +
            "форм-фактор корпуса: Micro-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/he3/he1/81461966143518.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/komptrust-comfort-game-rtx-chernyi-111077990/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 18,
        name: "Системный блок UniComp Gaming-5 Pro белый\n" +
            " (98 ",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Xeon E5 2670\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1660\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h56/h5d/69226582016030.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/unicomp-gaming-5-pro-belyi-108980574/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 19,
        name: "Системный блок KompTrust Pro game белый",
        description: "установленная ОС: Win 11 Pro\n" +
            "процессор: Intel Core i5 10400f\n" +
            "размер оперативной памяти: 32.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1660 Super\n" +
            "форм-фактор корпуса: Micro-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h34/81178097844254.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/komptrust-pro-game-belyi-110770955/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 20,
        name: "Системный блок PIXEL 13 черный",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Core i5-10400F\n" +
            "размер оперативной памяти: 16.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce RTX 3060\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/pixel-13-chernyi-103421555/?c=750000000",
        category: "computer",
        like: 0,
    },
    {
        id: 21,
        name: "Системный блок Empire Computers Gaming PRO 69 черный",
        description: "установленная ОС: Win 10\n" +
            "процессор: Intel Core i5 10400F\n" +
            "размер оперативной памяти: 16.0 Гб\n" +
            "объем SSD: 512.0 Гб\n" +
            "видеопроцессор: NVIDIA GeForce GTX 1050 Ti\n" +
            "форм-фактор корпуса: Midi-Tower",
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hb5/hfa/68183485415454.jpg?format=gallery-large",
        link: "https://kaspi.kz/shop/p/empire-computers-gaming-pro-69-chernyi-108560458/?c=750000000",
        category: "computer",
        like: 0,
    },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/