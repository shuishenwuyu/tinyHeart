var fruitObj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.orange = new Image();
    this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.01 + 0.005;
        this.born(i);
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
        ctx2.drawImage(this.orange, this.x[i] - this.l[i] / 2, this.y[i] - this.l[i] / 2, this.l[i], this.l[i]);
    }
}
fruitObj.prototype.born = function(i){
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
}