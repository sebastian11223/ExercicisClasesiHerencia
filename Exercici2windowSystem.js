
function size(width = 80, height = 60) {
    
    return {width, height};
}

size.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
    
    return this.width + " " + this.height;
}

//exercici 2
function position (x = 0, y = 0) {
    return {x,y};
}

position.move = function(newX, newY) {
    this.x = newX;
    this.y = newY;

    return this.x + " " + this.y
}

//exercici 3
class programWindow {
    constructor() {
        this.screenSize = new size(800,600);
        this.size = new size();
        this.position = new position();
    }


//exercici 4 ,5 y 6
resize(newSize) {
    
    let newWidth = Math.max(newSize.width, 1);
    let newHeight = Math.max(newSize.height, 1);
  
    newWidth = Math.min(newWidth, this.screenSize.width - this.position.x);
    newHeight = Math.min(newHeight, this.screenSize.height - this.position.y);
    this.size.resize(newWidth, newHeight);
}
move(newPosition) {
    
    let newX = Math.max(newPosition.x, 0);
    let newY = Math.max(newPosition.y, 0);

    newX = Math.min(newX, this.screenSize.width - this.size.width);
    newY = Math.min(newY, this.screenSize.height - this.size.height);
    this.position.move(newX, newY);
}

}
function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new position(100, 150));
    return programWindow;
}