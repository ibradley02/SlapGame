var bigBoss = new Target(100, 'King K. Rool', 0, 0)
var hits = 0
var health = 100
function Target(health, name, hits, items){
    this.health = health
    this.name = name
    this.hits = hits
    this.items = []
}
function Items(name, modifier, description){
    this.name = name
    this.modifier = modifier
    this.description = description
}
var items = {
    banana: new Items('banana', 0.3, 'Yellow and Tasty? Must be the banana'),
    TNT: new Items('TNT', 0.3, 'Cause I\'m T.N.T. I\'m dynamite'),
    BARREL: new Items('BARREL', 0.4, 'It\'s a barrel... and a missile?')
}
function slap(){
    hits += 1;
    health -= 1;
    update()
    return
}
function kick(){
    health -= 10;
    hits += 1;    
    update()
    return
}
function punch(){
    health -= 5;
    hits += 1;    
    update()
    return
}
function update(){
    document.getElementById('health').innerText = health
    document.getElementById('hits').innerText = hits
    document.getElementById('name').innerText = name
}
update()
function giveBanana(){
    bigBoss.items.push(items.banana);
}
function giveTNT(){
    bigBoss.items.push(items.TNT);
}
function giveBARREL(){
    bigBoss.items.push(items.BARREL);
}
