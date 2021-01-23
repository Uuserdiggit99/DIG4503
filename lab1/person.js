const chalk=require("chalk");

class person{
    constructor(name,favoriteColors,backgroundColors){
        this.name=name;
        this.favoriteColors=favoriteColors;
        this.backgroundColors=backgroundColors;
    }
    speak(){
        for(let i=0;i<this.favoriteColors.length;i++ ){
            console.log(chalk.bgHex(this.backgroundColors[i]).hex(this.favoriteColors[i])(this.name));
        }
    }
}
module.exports=person;
