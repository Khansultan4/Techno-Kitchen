'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          title: 'Intel Core i5-12400F OEM',
          price: 12199,
          specifications:
            JSON.stringify({"Сокет":"LGA 1700", "Общее количество ядер":6, "Базовая частота процессора":"2.5", "Тип памяти":["DDR4", "DDR5"], "Техпроцесс": 10, "Максимальная температура процессора": 100, "TDP": 117}),
          description:
            'LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 Вт',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/7ad86053c27f424add781cf3fdbf87a0/200e4a08e74afcc3cf1d54d47b758cbbf14c71973a64009553347d2b234b5af4.jpg.webp',
          TypeId: 1,
        },
        {
          title: 'AMD Ryzen 5 5600 OEM',
          price: 10899,
          specifications:
            JSON.stringify({"Сокет":"AM4", "Общее количество ядер":6, "Базовая частота процессора":"3.5", "Тип памяти":["DDR4"], "Техпроцесс":7, "Максимальная температура процессора": 90, "TDP": 65}),
          description:
            'AM4, 6 x 3.5 ГГц, L2 - 3 МБ, L3 - 32 МБ, 2 х DDR4-3200 МГц, TDP 65 Вт',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/fbee8c19017b22dbc7dba6f7fef889e2/923c2be60cfd72de7906f3c654d78c880ebec785c7d62041b4bb7713f33acf36.jpg.webp',
          TypeId: 1,
        },
        {
          title: 'AMD Ryzen 5 7500F OEM',
          price: 17599,
          specifications:
            JSON.stringify({"Сокет":"AM5", "Общее количество ядер":6, "Базовая частота процессора":"3.7", "Тип памяти":["DDR5"], "Техпроцесс":5 , "Максимальная температура процессора": 95, "TDP": 65}),
          description:
            'AM5, 6 x 3.7 ГГц, L2 - 6 МБ, L3 - 32 МБ, 2 х DDR5-5200 МГц, TDP 65 Вт',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c7c28253ee6da8c47d6323f5cbb5b852/e6293f21cc6d64c505e37405fa55d329827db7f8cd863e254841198e037f2386.jpg.webp',
          TypeId: 1,
        },
        {
          title: 'ASRock AMD Radeon RX 7900 XT Phantom Gaming OC',
          price: 84999,
                    specifications:
            JSON.stringify({"Объем видеопамяти": 20, "Рекомендуемый блок питания": 750, "Интерфейс подключения": "PCIe 4.0", "Тип и количество установленных вентиляторов": "3 осевых"}),
          description:
            'PCIe 4.0 20 ГБ GDDR6, 320 бит, 3 x DisplayPort, HDMI, GPU 1500 МГц',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/0/0/cc04b864c76b9bca6c2bdb5b51acd1f8/6704b780a24526a10a7d9590223607b4fc0a156005a308a66a227f1ba7a939e7.png.webp',
          TypeId: 2,
        },
        {
          title: 'MSI GeForce RTX 4070 SUPER GAMING X SLIM MLG',
          price: 82999,
                    specifications:
            JSON.stringify({"Объем видеопамяти": 12, "Рекомендуемый блок питания": 650, "Интерфейс подключения": "PCIe 4.0", "Тип и количество установленных вентиляторов": "3 осевых"}),
          description:
            'PCIe 4.0 12 ГБ GDDR6X, 192 бит, 3 x DisplayPort, HDMI, GPU 1980 МГц',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/c7b3ee493b5986e766e8fb555b81d59b/0288e45a0f01d9efecdad117cbf1d71b3dcf1b24bb48f30ed0e1a55377a01dfa.jpg.webp',
          TypeId: 2,
        },
        {
          title: 'MSI GeForce RTX 4080 SUPER GAMING TRIO',
          price: 144999,
                    specifications:
            JSON.stringify({"Объем видеопамяти": 16, "Рекомендуемый блок питания": 850, "Интерфейс подключения": "PCIe 4.0", "Тип и количество установленных вентиляторов": "3 осевых"}),
          description:
            'PCIe 4.0 16 ГБ GDDR6X, 256 бит, 3 x DisplayPort, HDMI, GPU 2295 МГц',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/a84e2f808434bf3df76b6a99b12089cf/2185ee82b55a84a3c33ddfd6e7dc95412d6cd257a16a6a8a7c65c8f4c968dddc.jpg.webp',
          TypeId: 2,
        },
        {
          title: 'MSI PRO H610M-E DDR4',
          price: 7199,
                    specifications:
            JSON.stringify({"Форм-фактор": "Micro-ATX", "Сокет": "LGA 1700", "Чипсет": "Intel H610", "Тип поддерживаемой памяти": "DDR4", "Количество каналов памяти": 2, "Максимальный объем памяти": 64, "Совместимые ядра процессоров": ["Alder Lake", "Raptor Lake", "Raptor Lake Refresh"], "Версия PCI Express": "4.0"}),
          description:
            'LGA 1700, Intel H610, 2xDDR4-3200 МГц, 1xPCI-Ex16, 1xM.2, Micro-ATX',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/b7a3669825fbc667094c86f5e0f101ed/42b825362ccf8279b9369bce65f661ba05014e6da6ed6681f4c3715c622ea2b2.jpg.webp',
          TypeId: 3,
        },
        {
          title: 'MSI MPG B550 GAMING PLUS',
          price: 15199,
                    specifications:
            JSON.stringify({"Форм-фактор": "Standard-ATX", "Сокет": "AM4", "Чипсет": "AMD B550", "Тип поддерживаемой памяти": "DDR4", "Количество каналов памяти": 2, "Максимальный объем памяти": 128, "Совместимые ядра процессоров": ["Cezanne", "Matisse", "Regor", "Vermeer"], "Версия PCI Express": "4.0"}),
          description:
            'AM4, AMD B550, 4xDDR4-3200 МГц, 2xPCI-Ex16, 2xM.2, Standard-ATX',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/0/0/65626ee1400c512d3c9584c15ec983a0/489e1dfb774c68ca8c80a1cd66477739765abc0c00722185d2c1178489ffdec3.png.webp',
          TypeId: 3,
        },
        {
          title: 'MSI B650M GAMING PLUS WIFI',
          price: 18999,
                    specifications:
            JSON.stringify({"Форм-фактор": "Micro-ATX", "Сокет": "AM5", "Чипсет": "AMD B650", "Тип поддерживаемой памяти": "DDR5", "Количество каналов памяти": 2, "Максимальный объем памяти": 256, "Совместимые ядра процессоров": ["Phoenix", "Raphael"], "Версия PCI Express": "4.0"}),
          description:
            'AM5, AMD B650, 4xDDR5-4800 МГц, 1xPCI-Ex16, 2xM.2, Micro-ATX',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/9b0a6b341de9afdd6434ee60b835dd6d/929188b9cee5dda3cfd0a45ddb1eb92039478e518c550990f0a81044ab256413.jpg.webp',
          TypeId: 3,
        },
        {
          title: 'Kingston FURY Beast Black',
          price: 4699,
                    specifications:
            JSON.stringify({"Тип памяти": "DDR4", "Объем одного модуля памяти": 8, "Напряжение питания": "1.35", "Тактовая частота": 3200}),
          description: 'DDR4, 8 ГБx2 шт, 3200 МГц, 16-18-18-36',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/f64fe2fb135f57399d4d3860c5278ce0/f562d5d7c5aded9062b33c2f7f46ca625e7391fc96aeda3e27f56955a0906641.jpg.webp',
          TypeId: 4,
        },
        {
          title: 'ADATA XPG GAMMIX D20',
          price: 3999,
                    specifications:
            JSON.stringify({"Тип памяти": "DDR4", "Объем одного модуля памяти": 8, "Напряжение питания": "1.35", "Тактовая частота": 3200}),
          description: 'DDR4, 8 ГБx2 шт, 3200 МГц, 16-20-20',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/97725571c436e5fde9ca1c14e14f916c/b90836eb633948dcdb7e6fff41e88be4ecbe47d4900c7b89341773d31aced3f5.jpg.webp',
          TypeId: 4,
        },
        {
          title: 'G.Skill AEGIS',
          price: 3699,
                    specifications:
            JSON.stringify({"Тип памяти": "DDR4", "Объем одного модуля памяти": 16, "Напряжение питания": "1.35", "Тактовая частота": 3200}),
          description: 'DDR4, 8 ГБx2 шт, 3200 МГц, 16-18-18-38',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/9c6b392a4a95073fb3600ce2f6d625e0/f555efe07a7124e5ab86d8e9d3ccc520d6330e78db04f9d05d3b020f76beb67d.jpg.webp',
          TypeId: 4,
        },
        {
          title: 'SATA накопитель Samsung 870 EVO',
          price: 11599,
                    specifications:
            JSON.stringify({"Объем накопителя": 1000, "Тип": "SSD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 560}),
          description:
            'SATA, чтение - 560 Мбайт/сек, запись - 530 Мбайт/сек, 3D NAND 3 бит MLC (TLC), TBW - 600 ТБ',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/c9d0a5ee75c43d457aceaa85f9aca862/2a8dc611d1748befbe216861600a5a3432e0d69b63ab5f43c203573041d59394.jpg.webp',
          TypeId: 5,
        },
        {
          title: 'SATA накопитель DEXP C100',
          price: 2150,
                    specifications:
            JSON.stringify({"Объем накопителя": 1024, "Тип": "SSD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 550}),
          description:
            'SATA, чтение - 550 Мбайт/сек, запись - 495 Мбайт/сек, 3D NAND 3 бит TLC, TBW - 250 ТБ',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/490a98b6da9c3cf96e7ba999ecc21840/7c4a20a5dadf5455c1861ed9529f8daecc9340a18eb1e29cb1ceb9339e395d75.jpg.webp',
          TypeId: 5,
        },
        {
          title: 'SATA накопитель MSI SPATIUM S270',
          price: 2799,
                    specifications:
            JSON.stringify({"Объем накопителя": 48, "Тип": "SSD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 500}),
          description:
            'SATA, чтение - 500 Мбайт/сек, запись - 400 Мбайт/сек, 3D NAND 3 бит TLC, TBW - 110 ТБ',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/fb43861238c7a0fcae98afe5095ef504/34c64ead98b0a26cf7e8fad8eada53d35bec9d7d32c9e76c6cd17c1a12d417b3.jpg.webp',
          TypeId: 5,
        },
        {
          title: 'Кулер для процессора DEEPCOOL AK620',
          price: 5999,
          specifications: JSON.stringify({"Тип": "кулер для процессора", "Материал основания": "медь", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 1850, "Максимальный уровень шума": 28}),
            description: "основание - медь, 1850 об/мин, 28 дБ, 4 pin, 260 Вт",
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/1bbd7b4f5e7ba2ffd677c5a49110a47b/2af03faaa5eb582ef09ba817fb746b8d13470af715e70b86c331ffd1772927b8.jpg.webp',
          TypeId: 6,
        },
        {
          title: 'Кулер для процессора DEEPCOOL AK620 ZERO DARK',
          price: 6299,
                    specifications:
            JSON.stringify({"Тип": "кулер для процессора", "Материал основания": "медь", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 1850, "Максимальный уровень шума": 28}),
          description: 'основание - медь, 1850 об/мин, 28 дБ, 4 pin, 260 Вт',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/59a8a3f20b32a4e5ac953a8680eb8785/e86e51d253703b062e1040304d1789b499c851482d3ee2c60d89e611396b9df8.jpg.webp',
          TypeId: 6,
        },
        {
          title: 'Кулер для процессора ID-COOLING FROZN A620 ARGB WHITE',
          price: 5799,
                    specifications:
            JSON.stringify({"Тип": "кулер для процессора", "Материал основания": "медь", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 2000, "Максимальный уровень шума": 29.9}),
          description:
            'основание - медь, 2000 об/мин, 29.9 дБ, 2 x 4 pin, 270 Вт',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/0/0/959e0a807dce1803e0dbe553313f5b32/643db65300edc14f3ebde9b3ffcb8bb1500a54fc8b89ad1ac13bbee72a429191.jpg.webp',
          TypeId: 6,
        },
        {
          title: '4 ТБ Жесткий диск WD Purple Surveillance',
          price: 12799,
                    specifications:
            JSON.stringify({"Объем накопителя": 4000, "Тип": "HDD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 180}),
          description:
            'SATA III, 6 Гбит/с, 5400 об/мин, кэш память - 256 МБ, RAID Edition',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/fca596337e13df5297e19b8ecf7ab0cf/6f2d0da472212bef82b41439701ab13ef7e0481c20bbbeb2ae818aed772272a3.jpg.webp',
          TypeId: 7,
        },
        {
          title: '8 ТБ Жесткий диск Seagate SkyHawk',
          price: 19499,
                    specifications:
            JSON.stringify({"Объем накопителя": 8000, "Тип": "HDD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 214}),
          description: 'SATA III, 6 Гбит/с, кэш память - 256 МБ, RAID Edition',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/8c54bb139ea99be49bf856965dc1c37a/0a7fdc254fadde045bdff5ae5b44618c59e777d861e2a4b95b32bb358ff35a77.jpg.webp',
          TypeId: 7,
        },
        {
          title: '2 ТБ Жесткий диск Seagate BarraCuda',
          price: 8699,
                    specifications:
            JSON.stringify({"Объем накопителя": 2000, "Тип": "HDD", "Разъем подключения": "SATA III", "Максимальная скорость передачи данных": 220}),
          description: 'SATA III, 6 Гбит/с, 7200 об/мин, кэш память - 256 МБ',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/b5214a7a069c16d7026bf0b4cea35a0c/29e26541d1767649daf686170862ce541a2ab1d726299a9335f3a06903c8f9dd.jpg.webp',
          TypeId: 7,
        },
        {
          title: 'Блок питания DEEPCOOL PF750',
          price: 5599,
                    specifications:
            JSON.stringify({"Мощность (номинал)": 750, "Форм-фактор": "ATX",   "Основной разъем питания": "20+4 pin", "Разъемы для питания процессора (CPU) ": "2 x 4+4 pin", "Разъемы для питания видеокарты (PCI-E) ": "4 x 6+2 pin", "Количество разъемов 15-pin SATA": 6, "Количество разъемов 4-pin Molex": 2, "Разъем 4 pin Floppy": "нет", "Длина основного кабеля питания": 550, "Длина кабеля питания процессора": 610, "Длина кабеля питания PCI-E": 510, "Длина кабеля питания SATA": 450, "Длина кабеля питания Molex": 900}),
          description:
            '750 Вт, 80+, APFC, 20+4 pin, 2 x 4+4 pin CPU, 6 SATA, 4 x 6+2 pin PCI-E',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/dd31979c2b755910411b8d67f1b28194/74c7a89208c221e785c0d1da83dbbf565f4636c187bce0b6c803074a329228be.jpg.webp',
          TypeId: 8,
        },
        {
          title: 'Блок питания MSI MAG A650BN',
          price: 5199,
                    specifications:
            JSON.stringify({"Мощность (номинал)": 650, "Форм-фактор": "ATX", "Основной разъем питания": "20+4 pin", "Разъемы для питания процессора (CPU) ": "4+4 pin", "Разъемы для питания видеокарты (PCI-E) ": "2 x 6+2 pin", "Количество разъемов 15-pin SATA": 5, "Количество разъемов 4-pin Molex": 2, "Разъем 4 pin Floppy": "есть", "Длина основного кабеля питания": 600, "Длина кабеля питания процессора": 600, "Длина кабеля питания PCI-E": 600, "Длина кабеля питания SATA": 400, "Длина кабеля питания Molex": 400}),
          description:
            '650 Вт, 80+ Bronze, APFC, 20+4 pin, 4+4 pin CPU, 5 SATA, 2 x 6+2 pin PCI-E',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/abba71dd54733c15db3def0ae47da998/e4492d0443e1e046d74d674874d899b2a4e47e966df3f617add06b8d047f759b.jpg.webp',
          TypeId: 8,
        },
        {
          title: 'Блок питания Cougar STX 700W',
          price: 5999,
                    specifications:
            JSON.stringify({"Мощность (номинал)": 700, "Форм-фактор": "ATX",   "Основной разъем питания": "20+4 pin", "Разъемы для питания процессора (CPU) ": "4+4 pin, 8 pin", "Разъемы для питания видеокарты (PCI-E) ": "2 x 6+2 pin", "Количество разъемов 15-pin SATA": 6, "Количество разъемов 4-pin Molex": 3, "Разъем 4 pin Floppy": "есть", "Длина основного кабеля питания": 600, "Длина кабеля питания процессора": 600, "Длина кабеля питания PCI-E": 550, "Длина кабеля питания SATA": 500, "Длина кабеля питания Molex": 450}),
          description:
            '700 Вт, 80+, APFC, 20+4 pin, 4+4 pin, 8 pin CPU, 6 SATA, 2 x 6+2 pin PCI-E',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/b7d1d5380cb41f1684dc87258d605bb6/3d330d2ed182880b1f2b1b4593e58b73f8e01bdc718874949c94470a2ab234fa.jpg.webp',
          TypeId: 8,
        },
        {
          title: 'Корпус ARDOR GAMING Rare M2 ARGB черный',
          price: 5899,
                    specifications:
            JSON.stringify({"Длина": 447, "Ширина": 220, "Высота": 510, "Типоразмер корпуса": "Mid-Tower", "Ориентация материнской платы": "вертикально", "Форм-фактор совместимых плат": ["E-ATX", "Micro-ATX", "Mini-ITX", "Standard-ATX"], "Форм-фактор совместимых блоков питания": "ATX", "Вентиляторы в комплекте": "4 x 120 мм", "Разъемы": ["3.5 мм jack (аудио)", "3.5 мм jack (микрофон)", "USB 2.0 Type-A x2", "USB 3.2 Gen1 Type-A x2"]}),
          description:
            'Mid-Tower, E-ATX, Micro-ATX, Mini-ITX, Standard-ATX, USB 2.0 Type-A, USB 3.2 Gen 1 Type-A, ARGB вентиляторы, 4 x 120 мм',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/f8961e4f58c675019cb367daa3e71906/ff08f890aa46d09aab8f054d2ef8cbfbe7e2e61642541a304093deea91790a22.jpg.webp',
          TypeId: 9,
        },
        {
          title: 'Корпус Cougar Duoface Pro RGB',
          price: 8499,
                    specifications:
            JSON.stringify({"Длина": 465, "Ширина": 240,"Высота": 496, "Типоразмер корпуса": "Mid-Tower", "Ориентация материнской платы": "вертикально", "Форм-фактор совместимых плат": ["E-ATX", "Micro-ATX", "Mini-ITX", "SSI-CEB", "Standard-ATX"], "Форм-фактор совместимых блоков питания": "ATX", "Вентиляторы в комплекте": " 4 x 120 мм", "Разъемы": ["3.5 мм jack (микрофон/аудио)", "USB 2.0 Type-A", "USB 3.2 Gen1 Type-A x2", "USB 3.2 Gen 2 Type-C"]}),
          description:
            'Mid-Tower, E-ATX, Micro-ATX, Mini-ITX, SSI-CEB, USB 2.0 Type-A, USB 3.2 Gen 1 Type-A, USB 3.2 Gen 2 Type-C, ARGB вентиляторы, 4 x 120 мм',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/7fb1890f586623193ffdf22b282b60b5/cfd49a0538d79124ecd9eefc851013e7c6fe6433e5fbebd7494d0fb55b0a8738.jpg.webp',
          TypeId: 9,
        },
        {
          title: 'Корпус ZALMAN N4 Rev.1 черный',
          price: 4999,
                    specifications:
            JSON.stringify({"Длина": 396, "Ширина": 204,"Высота": 446, "Типоразмер корпуса": "Mid-Tower", "Ориентация материнской платы": "вертикально", "Форм-фактор совместимых плат": ["Micro-ATX", "Mini-ITX", "Standard-ATX"], "Форм-фактор совместимых блоков питания": "ATX", "Вентиляторы в комплекте": "3 x 120 мм, 3 x 140 мм", "Разъемы": ["3.5 мм jack (аудио)", "3.5 мм jack (микрофон)", "USB 2.0 Type-A x2", "USB 3.2 Gen 1 Type-A"]}),
          description:
            'Mid-Tower, Micro-ATX, Mini-ITX, Standard-ATX, USB 2.0 Type-A, USB 3.2 Gen 1 Type-A, FRGB вентиляторы, 3 x 120 мм, 3 x 140 мм',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/cd34ff64a0c8e5837bfe468ab369cb93/f91f61ac4625fb2bfa4526058795241c91ce2f686ae04e89386c85baf7bf506f.jpg.webp',
          TypeId: 9,
        },
        {
          title: 'Вентилятор MONTECH AX 120 PWM',
          price: 999,
                    specifications:
            JSON.stringify({"Тип": "вентилятор", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 1850, "Максимальный уровень шума": 28}),
          description:
            '120 x 120 мм, 4 pin, 800 об/мин - 1600 об/мин, - 27 дБ, в комплекте - 1',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/0/0/2b5c60a7089713713221c04bc45d5d46/b7ef10dc951bf77159e896ac0993ea63ac3725194bc61539524694075a60547d.png.webp',
          TypeId: 6,
        },
        {
          title: 'Вентилятор ID-COOLING XF Series',
          price: 599,
                    specifications:
            JSON.stringify({"Тип": "вентилятор", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 1500, "Максимальный уровень шума": 30}),
          description:
            '120 x 120 мм, 4 pin Male / 4 pin Female, 500 об/мин - 1500 об/мин, 13.8 дБ - 30.5 дБ, в комплекте - 1',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/b138137c6c6cc38625f2aa5bd4eb7b99/5da865755a0aabf9d3548ffea4aa70c674a5ac18371f9becf7b46c5c142cb48b.jpg.webp',
          TypeId: 6,
        },
        {
          title: 'Вентилятор ID-COOLING ARGB Series',
          price: 699,
                    specifications:
            JSON.stringify({"Тип": "вентилятор", "Минимальная скорость вращения": 500, "Максимальная скорость вращения": 1500, "Максимальный уровень шума": 31}),
          description:
            '120 x 120 мм, 4 pin Male / 4 pin Female, 700 об/мин - 1800 об/мин, - 35.2 дБ, в комплекте - 1',
          image:
            'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/97a2bd528ff2e732e77ee8f6dfdb1591/348278865c9d4570a3c50a2d357adfc5cac9a4964c775e279ca4d204e9dd07d1.jpg.webp',
          TypeId: 6,
        },
        {
          title: 'Термопаста STEEL КПТ-8',
          price: 90,
                    specifications:
            JSON.stringify({Теплопроводность: "0.7", "Максимальная рабочая температура": 180, "Минимальная рабочая температура": -60, "Тип": "термопаста"}),
          description: 'шприц, 1.5 г, 0.7 Вт/мК',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/fa21897bf4dc6d0779a0778df76ee5e8/e4b78e73e3e6f9d8aff8386b60b3057f9bb8b55411bad9ea4511b71f8a4623fd.jpg.webp',
          TypeId: 10,
        },
        {
          title: 'Термопаста STEEL КПТ-8',
          price: 120,
                    specifications:
            JSON.stringify({Теплопроводность: "0.7", "Максимальная рабочая температура": 180, "Минимальная рабочая температура": -60, "Тип": "термопаста"}),
          description: 'шприц, 5 г, 0.7 Вт/мК',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/a0822cb2e0d9cd52ebc9363889c8323a/be7e6bde08826f2743ce97e4f415fa73147420ad3f497e032d466a725968c1bf.jpg.webp',
          TypeId: 10,
        },
        {
          title: 'Жидкий металл Thermal Grizzly Conductonaut',
          price: 1599,
                    specifications:
            JSON.stringify({Теплопроводность: 73, "Максимальная рабочая температура": 140, "Минимальная рабочая температура": 10, "Тип": "жидкий металл"}),
          description: 'шприц, 1 г, 73 Вт/мК',
          image:
            'https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/a91cb03ec7e71982eceb257ee89eaf9e/9fca7f0eba01fb00715b3dd87e11d3ffdbdb558e401ac823f15eabf2dd175bd8.jpg.webp',
          TypeId: 10,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
