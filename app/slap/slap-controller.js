function SlapController(){
    var slapService = new SlapService()
    //PRIVATE PARTS
    function update() {
        var target = slapService.getTarget()
        document.getElementById('health').innerText = target.health
        document.getElementById('hits').innerText = target.hits
        document.getElementById('name').innerText = target.name
        document.getElementById('text-display').innerText = ''
        if (target.health <= 0){
            document.getElementById('text-display').innerText = 'YOU DEFEATED KING K. RULE!'
            target.health = 0
            update()
        }
    }
    //PUBLIC PARTS
    this.attack = function attack(type){
        slapService.attack(type)
        update()
    }
    update()
}