function SlapController(){
    var slapService = new SlapService()
    //PRIVATE PARTS
    function update(target) {
        document.getElementById('health').innerText = bigBoss.health
        document.getElementById('hits').innerText = bigBoss.hits
        document.getElementById('name').innerText = bigBoss.name
        document.getElementById('text-display').innerText = ''
    }
    //PUBLIC PARTS
    update()
}