var bigBoss = new Target(100, 'King K. Rool', 0)
var banana = new Item('banana', 1, 'Yellow and Tasty? Must be the banana')
var tnt = new Item('TNT', 1, 'Cause I\'m T.N.T. I\'m dynamite')
var barrel = new Item('BARREL', 1, 'It\'s a barrel... and a missile?')
var hits = 0
var health = 100
function Target(health, name, hits, items) {
    this.health = health
    this.name = name
    this.hits = hits
    this.items = []
}
function Item(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
}
function slap() {
    hits += 1;
    health -= 1;
    update()
    return
}
function kick() {
    health -= 10;
    hits += 1;
    update()
    return
}
function punch() {
    health -= 5;
    hits += 1;
    update()
    return
}
function update() {
    document.getElementById('health').innerText = health
    document.getElementById('hits').innerText = hits
    document.getElementById('name').innerText = name
}
function giveBanana(banana) {
    bigBoss.items.push(banana)
}
function giveItem(item) {
    bigBoss.items.push(item)
}
var totalMods = 0
// function addMods(){
//     for (var i = 0; i < bigBoss.items.length; i++) {
//         var modValue = bigBoss.items.modifier[i];
//         totalMods += modValue
//     }
//     return totalMods
// }
update();
giveItem(banana);
giveItem(tnt);
giveItem(barrel);
console.log(bigBoss)