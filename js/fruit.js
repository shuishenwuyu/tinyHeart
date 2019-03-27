var fruitObj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
        this.fruitType[i] = 'orange';
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.017 + 0.003;
    }
    this.orange.src = './image/fruit.png';
    this.blue.src = './image/blue.png';
}
fruitObj.prototype.draw = function(){
    for(var i = 0; i < this.num; i++){
        if(this.alive[i] == false){
            continue;
        }
        if(this.l[i] <= 14){
            this.l[i] += this.spd[i] * deltaTime;
        } else {
            if(this.y[i] >= 0){
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            } else {
                this.alive[i] = false;
            }
        }
        var pic;
        if(this.fruitType[i] === 'blue'){
            pic = this.blue;
        } else {
            pic = this.orange;
        }
        ctx2.drawImage(pic, this.x[i] - this.l[i] / 2, this.y[i] - this.l[i] / 2, this.l[i], this.l[i]);
    }
}
fruitObj.prototype.born = function(i){
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.alive[i] = true;
    var r = Math.random();
    if(r < 0.2){
        this.fruitType[i] = 'blue';
    } else {
        this.fruitType[i] = 'orange';
    }
}

function fruitMonitor(){
     var num = 0;
     for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i]){
            num++;
        }
     }
     if(num < 15){
        sendFruit();
        return;
    }
 }

function sendFruit(){
    for(var i = 0; i < fruit.num; i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}