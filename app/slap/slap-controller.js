function SlapController(){
    var slapService = new SlapService()
    //PRIVATE PARTS
    function update(target) {
        document.getElementById('health').innerText = target.health
        document.getElementById('hits').innerText = target.hits
        document.getElementById('name').innerText = target.name
        document.getElementById('text-display').innerText = ''
    }
    //PUBLIC PARTS
    update()
}