
var myCar  = {
    makes : "Ford",
    model : "Mustang",
    year : 1969,
    CoolCar : 'yes',
    cost : 300000,
    speed : 250,
    rastoyanie : 1000
    }
    var daveCar = {
    makes : "Dawoo",
    model : "Lanos",
    year : 2001,
    CoolCar : 'no',
    cost : 4000,
    speed : 160,
    rastoyanie : 1000
    }
    
    var garryCar = {
    makes : "Subaru",
    model : "Impreza",
    year : 2020,
    CoolCar : 'yes',
    cost : 500000,
    speed : 280,
    rastoyanie : 1000
    }
    console.log(garryCar.makes+garryCar.model+' edet so skorostiyu '+ garryCar.speed + ' km/ch '+ garryCar.rastoyanie+' kilometrov ' + 'Chtobi uznat vremya rastyanie podelyu na skorost = ' +  (garryCar.rastoyanie / garryCar.speed) + ' chasov' )
    console.log(daveCar.makes+daveCar.model+' edet so skorostiyu '+ daveCar.speed + ' km/ch '+ daveCar.rastoyanie+' kilometrov ' + 'Chtobi uznat vremya rastyanie podelyu na skorost = ' +  (daveCar.rastoyanie / daveCar.speed) + ' chasov' )
    console.log(myCar.makes+myCar.model+' edet so skorostiyu '+ myCar.speed + ' km/ch '+ myCar.rastoyanie+' kilometrov ' + 'Chtobi uznat vremya rastyanie podelyu na skorost = ' +  (myCar.rastoyanie / myCar.speed) + ' chasov' )
    console.log('V '+ garryCar.makes + garryCar.model + ' pomeshaetsa '+ ( garryCar.cost / daveCar.cost + ' shtuk ' )+ daveCar.makes + daveCar.model )
    console.log(garryCar.speed>daveCar.speed>myCar.speed)
    console.log(daveCar.speed>garryCar.speed>myCar.speed)
    console.log(garryCar.speed < myCar.speed < daveCar.speed)
    console.log(garryCar.makes + ' samaya bistrayua ')
    console.log(daveCar.makes + ' samaya medlennaya ')