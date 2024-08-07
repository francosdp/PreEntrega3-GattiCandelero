
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