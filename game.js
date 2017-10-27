function Target(health, name, hits){
    this.health = health
    this.name = name
    this.hits = hits
}
function Items(name, modifier, description){
    this.name = name
    this.modifier = modifier
    this.description = description
}
Target(100, 'King K. Rool', 0)
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
    document.getElementById('health').innerText = this.health
    document.getElementById('hits').innerText = this.hits
    document.getElementById('name').innerText = this.name
}
update()