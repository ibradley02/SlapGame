function SlapService(){
    //PRIVATE
    let bigBoss = new Target(100, 'King K. Rool', 1, 5, 10)
    let items = {
        banana: new Item('banana', 1, 'Yellow and Tasty? Must be the banana'),
        tnt: new Item('TNT', 10, 'Cause I\'m T.N.T. I\'m dynamite'),
        barrel: new Item('BARREL', 0.5, 'It\'s a barrel... and a missile?')
    }
    let totalMods = 0
    
    function Target(health, name, slap, punch, kick) {
        this.health = health
        this.name = name
        this.hits = 0
        this.attack = {
            slap: slap,
            punch: punch,
            kick: kick
        }
        this.items = []
    }
    function Item(name, modifier, description) {
        this.name = name
        this.modifier = modifier
        this.description = description
    }
    function addMods() {
        for (var i = 0; i < bigBoss.items.length; i++) {
            var modValue = bigBoss.items[i].modifier;
            totalMods += modValue
        }
        return totalMods
    }
    
    //PUBLIC
    this.attack = function attack(type){
        if (bigBoss.attack[type]){
            bigBoss.health -= bigBoss.attack[type]
            bigBoss.hits++
        }

    }
    this.getTarget = function getTarget(){
        return JSON.parse(JSON.stringify(bigBoss))
    }
    this.getItems = function getItems(type){
        return (JSON.parse(JSON.stringify(items)))
    }
    this.reset = function reset(){
        bigBoss = new Target(100, 'King K. Rool', 1, 5, 10);
        totalMods = 0;
    }
}