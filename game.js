var health = 100;
var name = 'KING K. ROOL'
var hits = 0
function slap(){
    health -= 1;
    hits += 1;
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