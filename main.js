// Calculadora de Daño InGame.

// Efectos de la distancia
const distance1 = {
    meters: "100 a 200 metros.",
    distanceObjId: 155,
    reducedShock: 1,
    reducedPenetration: 1,
    reducedDamage: 0.1,
}
const distance2 = {
    meters: "200 a 300 mts.",
    distanceObjId: 156,
    reducedShock: 1.5,
    reducedPenetration: 1.3,
    reducedDamage: 1.4,
}
const distance3 = {
    meters: "300 a 400 mts.",
    distanceObjId: 157,
    reducedShock: 1.8,
    reducedPenetration: 1.5,
    reducedDamage: 1.5,
}
const distance4 = {
    meters: "400 a 500 mts.",
    distanceObjId: 158,
    reducedShock: 2,
    reducedPenetration: 1.7,
    reducedDamage: 1.7,
}
const distance5 = {
    meters: "500 a 600 mts.",
    distanceObjId: 159,
    reducedShock: 2.4,
    reducedPenetration: 2,
    reducedDamage: 1.9,
}
const distance6 = {
    meters: "600 a 700 mts.",
    distanceObjId: 160,
    reducedShock: 2.6,
    reducedPenetration: 2.1,
    reducedDamage: 2,
}
const distance7 = {
    meters: "+700 mts.",
    distanceObjId: 161,
    reducedShock: 3,
    reducedPenetration: 2.5,
    reducedDamage: 2.3,
}

const distances = [distance1, distance2, distance3, distance4, distance5, distance6, distance7]

//   Chalecos / Armadura
const tier1Vest = {
    tier: "Tier 1",
    vestId: 105,
    shockProtection: 2,
    penetrationProtection: 2,
    damageProtection: 1.5,
}
const tier2Vest = {
    tier: "Tier 2",
    vestId: 106,
    shockProtection: 2.3,
    penetrationProtection: 2.5,
    damageProtection: 1.8,
}
const tier3Vest = {
    tier: "Tier 3",
    vestId: 107,
    shockProtection: 2.6,
    penetrationProtection: 3,
    damageProtection: 2.5,
}
const tier4Vest = {
    tier: "Tier 4",
    vestId: 108,
    shockProtection: 2.8,
    penetrationProtection: 5,
    damageProtection: 3.5,
}
const tier5Vest = {
    tier: "Tier 5",
    vestId: 109,
    shockProtection: 3,
    penetrationProtection: 6.5,
    damageProtection: 5,
}

const vests = [tier1Vest, tier2Vest, tier3Vest, tier4Vest, tier5Vest]

// Objeto Pistolas y Array
// Calculadora de Daño InGame.
const MKII = {
    objId: 10,
    name: "MK II",
    ammo: ".22 LR",
    firemode: "Semi-Automatica",
    hitShock: 2,
    hitPenetration: 8,
    hitDamage: 12,

}
const Mlock91 = {
    objId: 11,
    name: "Mlock91",
    ammo: "9x19mm",
    firemode: "Semi-Automatica",
    hitShock: 10,
    hitPenetration: 15,
    hitDamage: 18,
}
const Kolt1911 = {
    objId: 12,
    name: "Kolt 1911",
    ammo: ".45ACP",
    firemode: "Semi-Automatica",
    hitShock: 15,
    hitPenetration: 13,
    hitDamage: 24,
}
const Deagle = {
    objId: 13,
    name: "Deagle",
    ammo: ".357",
    firemode: "Semi-Automatica",
    hitShock: 25,
    hitPenetration: 18,
    hitDamage: 29,
}
const pistolas = [MKII, Mlock91, Kolt1911, Deagle]
// Objeto Escopetas y Array

const BK133 = {
    objId: 20,
    name: "BK-133",
    ammo: "12ga",
    firemode: "Pump",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const BK43 = {
    objId: 21,
    name: "BK-43",
    ammo: "12ga",
    firemode: "Cañon Doble",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const Vaiga = {
    objId: 22,
    name: "Vaiga",
    ammo: "12ga",
    firemode: "Semi-Automática y Automática",
    hitShock: 70,
    hitPenetration: 25,
    hitDamage: 50,
}
const escopetas = [BK133, BK43, Vaiga]
// Objeto Subfusiles y Array

const SG5K = {
    objId: 30,
    name: "SG5-K",
    ammo: "9x19mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 17,
    hitPenetration: 20,
    hitDamage: 22,
}
const USG45 = {
    objId: 31,
    name: "USG -45",
    ammo: ".45ACP",
    firemode: "Semi-Automática y Automática",
    hitShock: 19,
    hitPenetration: 18,
    hitDamage: 29,
}
const subfusiles = [SG5K, USG45]
// Objeto Fusiles y Array

const M4A1 = {
    objId: 40,
    name: "M4-A1",
    ammo: "5.56x45mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 41,
    hitPenetration: 52,
    hitDamage: 43,
}
const KA74 = {
    objId: 41,
    name: "KA-74",
    ammo: "5.45x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 39,
    hitPenetration: 48,
    hitDamage: 39,
}
const LAR = {
    objId: 42,
    name: "LAR",
    ammo: "308WIN",
    firemode: "Semi-Automática y Automática",
    hitShock: 60,
    hitPenetration: 64,
    hitDamage: 55,
}

const KAM = {
    objId: 43,
    name: "KA-M",
    ammo: "7.62x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 57,
    hitPenetration: 59,
    hitDamage: 49,
}

const SVAL = {
    objId: 44,
    name: "SVAL",
    ammo: "9x39mm",
    firemode: "Semi-Automática y Automática",
    hitShock: 29,
    hitPenetration: 70,
    hitDamage: 39,
}
const fusiles = [M4A1, KA74, LAR, KAM, SVAL]
// Objeto Fusiles y Array

const M70Tundra = {
    objId: 50,
    name: "M70 Tundra",
    ammo: "308WIN",
    firemode: "Cerrojo",
    hitShock: 80,
    hitPenetration: 80,
    hitDamage: 67,
}
const Mosin = {
    objId: 51,
    name: "Mosin 91/30",
    ammo: "7.62x54mmR",
    firemode: "Cerrojo",
    hitShock: 84,
    hitPenetration: 82,
    hitDamage: 72,
}
const VSD = {
    objId: 52,
    name: "VSD",
    ammo: "7.62x39mm",
    firemode: "Semi-Automática",
    hitShock: 70,
    hitPenetration: 67,
    hitDamage: 59,
}
const Blaze = {
    objId: 53,
    name: "Blaze",
    ammo: "308WIN",
    firemode: "Unico y Doble Disparo",
    hitShock: 76,
    hitPenetration: 73,
    hitDamage: 49,
}
const rifles = [M70Tundra, Mosin, VSD, Blaze]

// Array General

const weapons = [pistolas, escopetas, subfusiles, fusiles, rifles]


// Panel Usuario
const inputNick = document.getElementById("input-nick")
const submitNick = document.getElementById("submit-nick")
let nick
let wpnId
inputNick.addEventListener('change', function () {
})

submitNick.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Nick Recibido " + inputNick.value)
    const chooseWpn = document.getElementById("choose-text")
    chooseWpn.innerText = "Bien " + inputNick.value + " elije tu arma"
    nick = inputNick.value
})

// Selector Pistolas
const ClassBtn1 = document.getElementById('btn1')
const ClassBtn2 = document.getElementById('btn2')
const ClassBtn3 = document.getElementById('btn3')
const ClassBtn4 = document.getElementById('btn4')
const ClassBtn5 = document.getElementById('btn5')
let foundWeapon

const wpnShowname = document.getElementById("wpn-showname")
const wpnShowcal = document.getElementById("wpn-showcal")
const wpnShowFiremode = document.getElementById("wpn-showfiremode")
const wpnShock = document.getElementById("wpn-shock")
const wpnPen = document.getElementById("wpn-pen")
const wpnDmg = document.getElementById("wpn-dmg")

ClassBtn1.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 10
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn2.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 11
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn3.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 12
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn4.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 13
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock

})
const ClassBtn20 = document.getElementById('btn20')
const ClassBtn21 = document.getElementById('btn21')
const ClassBtn22 = document.getElementById('btn22')

ClassBtn20.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 20
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn21.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 21
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn22.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 22
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


function buscarArma(wpnId) {
    foundWeapon = weapons.flat().find(arma => arma.objId === wpnId);
}


const ClassBtn30 = document.getElementById('btn30')
const ClassBtn31 = document.getElementById('btn31')

ClassBtn30.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 30
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn31.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 31
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


const ClassBtn40 = document.getElementById('btn40')
const ClassBtn41 = document.getElementById('btn41')
const ClassBtn42 = document.getElementById('btn42')
const ClassBtn43 = document.getElementById('btn43')
const ClassBtn44 = document.getElementById('btn44')


ClassBtn40.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 40
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn41.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 41
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn42.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 42
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn43.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 43
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn44.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 44
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


const ClassBtn50 = document.getElementById('btn50')
const ClassBtn51 = document.getElementById('btn51')
const ClassBtn52 = document.getElementById('btn52')
const ClassBtn53 = document.getElementById('btn53')

ClassBtn50.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 50
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn51.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 51
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn52.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 52
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})
ClassBtn53.addEventListener('click', function (event) {
    event.preventDefault()
    wpnId = 53
    console.log(wpnId)
    buscarArma(wpnId)
    console.log(foundWeapon)
    wpnShowname.innerText = foundWeapon.name
    wpnShowcal.innerText = foundWeapon.ammo
    wpnShowFiremode.innerText = foundWeapon.firemode
    wpnDmg.innerText = foundWeapon.hitDamage
    wpnPen.innerText = foundWeapon.hitPenetration
    wpnShock.innerText = foundWeapon.hitShock
})


const ClassBtn105 = document.getElementById('btn105')
const ClassBtn106 = document.getElementById('btn106')
const ClassBtn107 = document.getElementById('btn107')
const ClassBtn108 = document.getElementById('btn108')
const ClassBtn109 = document.getElementById('btn109')

const vestShock = document.getElementById("vest-shock")
const vestPen = document.getElementById("vest-penetration")
const vestDmg = document.getElementById("vest-damage")

let foundArmor


function buscarChaleco(vestsId) {
    foundArmor = vests.flat().find(vest => vest.vestId === vestsId);
}

ClassBtn105.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 105
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn106.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 106
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn107.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 107
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})
ClassBtn108.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 108
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection

})
ClassBtn109.addEventListener('click', function (event) {
    event.preventDefault()
    let vestsId = 109
    console.log(vestsId)
    buscarChaleco(vestsId)
    console.log(foundArmor)
    vestShock.innerText = foundArmor.shockProtection
    vestPen.innerText = foundArmor.penetrationProtection
    vestDmg.innerText = foundArmor.damageProtection
})






let foundRange

const ClassBtn155 = document.getElementById('btn155')
const ClassBtn156 = document.getElementById('btn156')
const ClassBtn157 = document.getElementById('btn157')
const ClassBtn158 = document.getElementById('btn158')
const ClassBtn159 = document.getElementById('btn159')
const ClassBtn160 = document.getElementById('btn160')
const ClassBtn161 = document.getElementById('btn161')

const rangeShock = document.getElementById('range-shock')
const rangePen = document.getElementById('range-penetration')
const rangeDmg = document.getElementById('range-damage')



function buscarRango(rangeId) {
    foundRange = distances.flat().find(distance => distance.distanceObjId === rangeId);
}


ClassBtn155.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 155
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn156.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 156
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn157.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 157
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn158.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 158
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn159.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 159
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn160.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 160
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})
ClassBtn161.addEventListener('click', function (event) {
    event.preventDefault()
    rangeId = 161
    console.log(rangeId)
    buscarRango(rangeId)
    console.log(foundRange)
    rangeShock.innerText = foundRange.reducedShock
    rangePen.innerText = foundRange.reducedPenetration
    rangeDmg.innerText = foundRange.reducedDamage
})

const btnNext = document.getElementById("next")
const nextNick = document.getElementById('next-nick')

btnNext.addEventListener('click', function (event) {
    event.preventDefault()
    nextNick.innerText = "Perfecto " + nick + " estos son sus resultados:"
    console.log(nick)
})

const btnCalcular = document.getElementById("do-calcular")
const strongWpn = document.getElementById("strong-wpn")
const strongVest = document.getElementById("strong-vest")
const strongRange = document.getElementById("strong-range")
const strongShock = document.getElementById("strong-shock")
const strongPen = document.getElementById("strong-pen")
const strongDmg = document.getElementById("strong-dmg")

let shockDone
let penetrationDone
let damageDone
let searchHistory = []
let historyDiv = document.getElementById("history-search")

function damageCalculator(a, b, c) {
    return a / b / c
}

let lastSearch = []

function newSearch(weapon, vest, range, a, b, c) {
    return {
        weaponName: weapon,
        vestTier: vest,
        rangeDistance: range,
        shockHit: a,
        penHit: b,
        dmgHit: c,
    }
}
function saveSearchLocal() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}
const getSearchLocal = () => {
    const searchStorage = JSON.parse(localStorage.getItem("searchHistory"));
    return searchStorage;
};

function addSearch(search) {
    searchHistory.push(search);
}


const showSearch = (searchHistory) => {
    const div = document.createElement("div");

    historyDiv.innerHTML = '';

    searchHistory.forEach(search => {
        div.innerHTML += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Arma</strong>: ${search.weaponName} -
                    <strong>Vest Tier</strong>: ${search.vestTier}
                    <strong>Distancia</strong>: ${search.rangeDistance}
                    <p>Stats Shock/Penetracion/Daño</p> ${search.shockHit}/${search.penHit}/${search.dmgHit}
                </div>
            </div>
        `;
        historyDiv.appendChild(div);
    });
};

const getSearchs = () => {
    if (localStorage.getItem("searchHistory")) {
        searchHistory = getSearchLocal();
        showSearch(searchHistory)
    };
};


btnCalcular.addEventListener('click', function (event) {
    event.preventDefault()
    strongWpn.innerText = foundWeapon.name
    strongVest.innerText = foundArmor.tier
    strongRange.innerText = foundRange.meters
    shockDone = damageCalculator(foundWeapon.hitShock, foundRange.reducedShock, foundArmor.shockProtection)
    penetrationDone = damageCalculator(foundWeapon.hitPenetration, foundRange.reducedPenetration, foundArmor.penetrationProtection)
    damageDone = damageCalculator(foundWeapon.hitDamage, foundRange.reducedDamage, foundArmor.penetrationProtection)
    strongShock.innerText = shockDone.toFixed(2)
    strongPen.innerText = penetrationDone.toFixed(2)
    strongDmg.innerText = damageDone.toFixed(2)
    let search = newSearch(foundWeapon.name, foundArmor.tier, foundRange.meters, shockDone.toFixed(2), penetrationDone.toFixed(2), damageDone.toFixed(2))
    console.log(search)
    addSearch(search)
    console.log(searchHistory)
    saveSearchLocal()
})
document.addEventListener("DOMContentLoaded", getSearchs);

let btnClear = document.getElementById("clear-history")

btnClear.addEventListener('click', function (event) { 
    localStorage.clear()
    location.reload()}
)
let btnRefresh =document.getElementById("new-search")
btnRefresh.addEventListener('click',function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
})
setTimeout(function() {  
    location.reload();  
}, 1000);
})


//Aun falta el diseño de la pagina y algunos detalles
// Pero en principio la calculadora funciona bien
// Registra datos, guarda en local y modifica el dom.