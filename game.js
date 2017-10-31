var bigBoss = new Target(100, 'King K. Rool', 0)
var banana = new Item('banana', 1, 'Yellow and Tasty? Must be the banana')
var tnt = new Item('TNT', 10, 'Cause I\'m T.N.T. I\'m dynamite')
var barrel = new Item('BARREL', 0.5, 'It\'s a barrel... and a missile?')
totalMods = 0
update(bigBoss);
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
}
function kick() {
    bigBoss.hits += 1;
    imDead(bigBoss.health -= (10 + totalMods))
    update(bigBoss)
}
function punch() {
    bigBoss.hits += 1;
    imDead(bigBoss.health -= (5 + totalMods));
    update(bigBoss)
}
function update(target) {
    document.getElementById('health').innerText = target.health
    document.getElementById('hits').innerText = target.hits
    document.getElementById('name').innerText = target.name
    document.getElementById('text-display').innerText = ''
}
function giveItem(item) {
    bigBoss.items.push(item)
    document.getElementById('text-display').innerText = 'You picked an item, but is it enough?'
    addMods()
}
function addMods() {
    for (var i = 0; i < bigBoss.items.length; i++) {
        var modValue = bigBoss.items[i].modifier;
        totalMods += modValue
    }
    return totalMods
}
function imDead(target) {
    if (bigBoss.health <= 0) {
        bigBoss.health = 0;
        alert('YOU HAVE DEFEATED KING K. RULE')
        resetGlobalVar()
    }
}
function resetGlobalVar(){
    bigBoss = new Target(100, 'King K. Rool', 0);
    totalMods = 0;
    update(bigBoss);
}