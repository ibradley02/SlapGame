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
            document.getElementById('text-display').innerText = 'YOU HAVE DEFEATED KING K. RULE! YOU DESERVE A BANANA!'
        }
    }
    //PUBLIC PARTS
    update()
}