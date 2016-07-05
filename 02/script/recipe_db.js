/**
 * Recepies database
 *
 * Calories in kcal
 * Fat, carbohydrate and protein values are percentage in dry matter content
 *
 */
var recipes = [
  {
    name: 'Télapó sütije',
    author: 'blacktori',
    publishDate: '2010.12.04.',
    description: 'A vajat, a cukrot a sóval kikeverjük, majd egyenként beledolgozzuk a tojásokat.A dióval és a sütőporral elvegyített lisztet a tojásos keverékhez adjuk. A citromlével meglocsolt almát és a csokireszeléket belekeverjük. A tésztát margarinnal kikent és mandulaforgáccsal megszórt formába öntjük. Előmelegített sütőben sütjük, majd kikapcsolt sütőben 10 percig pihentetjük.',
    timeRequired: '55 perc',
    servingsRange: [8, 8],
    ingredients: [
      { name: 'mandula', quantity: '100', quantitySuffix: 'g' },
      { name: 'vaj', quantity: '200', quantitySuffix: 'g' },
      { name: 'cukor', quantity: '100', quantitySuffix: 'g' },
      { name: 'só', quantity: '1', quantitySuffix: 'csipet' },
      { name: 'tojás', quantity: '4', quantitySuffix: 'db' },
      { name: 'finomliszt', quantity: '270', quantitySuffix: 'g' },
      { name: 'sütőpor', quantity: '3', quantitySuffix: 'teáskanál' },
      { name: 'citromlé', quantity: '1', quantitySuffix: 'teáskanál' },
      { name: 'alma', quantity: '20', quantitySuffix: 'dkg' },
      { name: 'csokoládé', quantity: '5', quantitySuffix: 'dkg' }
    ],
    allergens: ['mandula'],
    nutritionInfo: {
      calories: 1200,
      fat: 10,
      carbohydrate: 70,
      protein: 2
    }
  },
  {
    name: '"Az igazi" svéd húsgolyók',
    author: 'Dacota',
    publishDate: '2014.04.01.',
    description: 'A húsokat kétszer ledaráljuk (vagy ledaráltatjuk). A hagymát 1 kanál vajon, kis lángon süssük aranybarnára. A darált kétszersültet áztassuk a vízbe, a krumpli törjük össze krumplinyomóval. Az összes hozzávalót tegyük egy tálba, fűszerezzük, és jól dolgozzuk össze. Ha kész, vizes kézzel formázzunk belőle diónyinál nagyobb gombócokat (mindenki evett már a kék-sárga áruházban, tudja, kb mekkorák kellenek:) ). Olvasszuk fel a vajat egy nagyobb serpenyőben, és kis lángon, forgatva, több adagban süssük ki őket.',
    timeRequired: '40 perc',
    servingsRange: [4, 4],
    ingredients: [
      { name: 'darált marhahús', quantity: 250, quantitySuffix: 'g' },
      { name: 'darált sertéshús', quantity: 250, quantitySuffix: 'g' },
      { name: 'tojás', quantity: 1, quantitySuffix: 'db' },
      { name: 'habtejszín', quantity: 200, quantitySuffix: 'ml' },
      { name: 'vöröshagyma', quantity: 6, quantitySuffix: 'g' },
      { name: 'kétszersült', quantity: 0.5, quantitySuffix: 'db' },
      { name: 'burgonya', quantity: 2, quantitySuffix: 'db' },
      { name: 'vaj', quantity: 5, quantitySuffix: 'evőkanál' },
      { name: 'só', quantity: 'ízlés', quantitySuffix: 'szerint' },
      { name: 'bors', quantity: 'ízlés', quantitySuffix: 'szerint' },
      { name: 'víz', quantity: 100, quantitySuffix: 'ml' }
    ],
    allergens: false,
    nutritionInfo: {
      calories: 750,
      fat: 50,
      carbohydrate: 10,
      protein: 40
    }
  },
  {
    name: '"Ezersziget" csirke',
    author: 'egelkatalin',
    publishDate: '2010.11.21.',
    description: 'A csirkemelleket keresztben 2 szeletre vágjuk, kivajazott tálba tesszük és megsózzuk. Összekeverjük a tejszínt, a ketchupot, a zúzott fokhagymát és a parmezánt, majd a húsokra öntjük. Kb. 180 fokos sütőben 30-40 perc alatt lefedve puhára sütjük a húst, majd a fedőt / alufóliát levéve 10 perc alatt kicsit rápirítjuk a szószt.',
    timeRequired: '1 óra',
    servingsRange: [4],
    ingredients: [
      { name: 'csirkemell filé', quantity: 2, quantitySuffix: 'db' },
      { name: 'főzőtejszín', quantity: 2, quantitySuffix: 'dl' },
      { name: 'ketchup', quantity: 100, quantitySuffix: 'ml' },
      { name: 'fokhagyma', quantity: 2, quantitySuffix: 'gerezd' },
      { name: 'parmezán sajt', quantity: 5, quantitySuffix: 'dkg' },
      { name: 'só', quantity: 'ízlés', quantitySuffix: 'szerint' },
      { name: 'vaj', quantity: '1-2', quantitySuffix: 'evőkanál' }
    ],
    allergens: ['tejszín', 'vaj'],
    nutritionInfo: {
      calories: 913,
      fat: 20,
      carbohydrate: 40,
      protein: 40
    }
  },
  {
    name: 'Indiai vöröslencse-krémleves',
    author: 'sWaddyWaddy',
    publishDate: '2016.06.12.',
    description: 'A kókuszzsírt egy wokban vagy nagyobb főzőedényben felolvasztjuk.\nA hagymát megtisztítjuk, felvágjuk apró darabokra, és üvegesre pároljuk.\nA köménymagot a hagymára szórjuk, és együtt pirítjuk pár percig.\nA vöröslencsét átmossuk, majd a hagymára dobjuk. Összekeverjük, majd fedőt teszünk rá.\nA forró vizet a lencsére öntjük, elkeverjük.\nBeleszórjuk a kurkumát, elkeverjük.\nA gyömbér héját lekaparjuk, felszeljük, apró kockákra vágjuk. A lencsébe keverjük.\nA paradicsomokat felkockázzuk, és a lencséhez adjuk. Együtt puhára főzzük 20 perc alatt.\nHa a lencse megpuhult, összeturmixoljuk, majd visszaöntjük a főzőedénybe.\nHozzáöntjük a kókusztejet, beleszórjuk a sót, borsot, koriandert, és hagyjuk átforrósodni.\nAzonnal tálalhatjuk, vagy másnap még finomabb.',
    timeRequired: '30 perc',
    servingsRange: [3, 5],
    ingredients: [
      { name: 'kókuszzsír', quantity: 2, quantitySuffix: 'evőkanál' },
      { name: 'vöröshagyma', quantity: '1 közepes', quantitySuffix: 'db' },
      { name: 'római kömény', quantity: 1, quantitySuffix: 'kávéskanál' },
      { name: 'vöröslencse', quantity: 25, quantitySuffix: 'dkg' },
      { name: 'forró víz', quantity: 6, quantitySuffix: 'dl' },
      { name: 'kurkuma', quantity: 1, quantitySuffix: 'teáskanál' },
      { name: 'friss gyömbér', quantity: 30, quantitySuffix: 'g' },
      { name: 'paradicsom', quantity: 2, quantitySuffix: 'db, közepes' },
      { name: 'kókusztej', quantity: 2, quantitySuffix: 'dl' },
      { name: 'só', quantity: 1, quantitySuffix: 'kávéskanál' },
      { name: 'bors', quantity: 'ízlés', quantitySuffix: 'szerint' },
      { name: 'szárított koriander', quantity: '1', quantitySuffix: 'teáskanál' }
    ],
    allergens: [],
    nutritionInfo: {
      calories: 842,
      fat: 31,
      carbohydrate: 60,
      protein: 5
    }
  }
]
