var health = 100;
function slap(){
    health = health - 1;
    update()
    return
}
function update(){
    document.getElementById('Health').innerText = health
}
update()