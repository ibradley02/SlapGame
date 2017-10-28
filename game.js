var bigBoss = new Target(100, 'King K. Rool', 0)
var banana = new Item('banana', 1, 'Yellow and Tasty? Must be the banana')
var tnt = new Item('TNT', 1, 'Cause I\'m T.N.T. I\'m dynamite')
var barrel = new Item('BARREL', 1, 'It\'s a barrel... and a missile?')
var player = new Player(100, 'Donkey Kong', 0)
var totalMods = 0
update(bigBoss);
function Player(health, name, hits, items){
    this.playerHealth = playerHealth
    this.playerName = playerName
    this.playerHits = playerHits
    this.items = []
}
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
    bigBoss.hits += 1;
    imDead(bigBoss.health -= (1 + totalMods));
    update(bigBoss)
    return
}
function kick() {
    bigBoss.hits += 1;
    imDead(bigBoss.health -= (10 + totalMods))
    update(bigBoss)
    return
}
function punch() {
    bigBoss.hits += 1;
    imDead(bigBoss.health -= (5 + totalMods));
    update(bigBoss)
    return
}
function update(target) {
    document.getElementById('health').innerText = target.health
    document.getElementById('hits').innerText = target.hits
    document.getElementById('name').innerText = target.name
}
function giveItem(item) {
    bigBoss.items.push(item)
    alert('You picked up an item! But is it enough?')
    addMods()
}
function addMods() {
    for (var i = 0; i < bigBoss.items.length; i++) {
        var modValue = bigBoss.items[i].modifier;
        totalMods += modValue
    }
    return totalMods
}
function imDead() {
    if (bigBoss.health <= 0) {
        bigBoss.health = 0;
        alert('YOU HAVE DEFEATED KING K. ROOL')
        resetGlobalVar()
    }
}
function resetGlobalVar(){
    bigBoss = new Target(100, 'King K. Rool', 0);
    totalMods = 0;
    update(bigBoss);
}