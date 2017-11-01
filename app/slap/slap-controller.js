function SlapController(){
    var slapService = new SlapService()
    //PRIVATE PARTS
    function drawItems() {
        var items = slapService.getItems()
        var template = ``
        for (var item in items) {
            template += `<button type="button" class="btn btn-style" onclick="app.controllers.slapController.giveItem('` + item + `')">` + item + `</button>`
        }
        document.getElementById('items').innerHTML = template
    }
    function update() {
        var target = slapService.getTarget()
        document.getElementById('health').innerText = target.health
        document.getElementById('hits').innerText = target.hits
        document.getElementById('name').innerText = target.name
        document.getElementById('text-display').innerText = ''
        if (target.health <= 0){
            document.getElementById('text-display').innerText = 'YOU DEFEATED KING K. RULE!'
            document.getElementById('health').innerText = 0
        }
    }
    //PUBLIC PARTS
    this.attack = function attack(type){
        slapService.attack(type)
        update()
    }
    this.reset = function reset(){
        slapService.reset()
        update()
    }
    this.giveItem = function giveItem(item){
        slapService.getItems(item)
    }
    update()
    drawItems()
}