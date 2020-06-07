class loadingScene extends Phaser.Scene{
    constructor() {
        super("bootGame");
    }

    preload(){
        this.load.image("background","assets/background.png");

        this.load.image("playButton","assets/playButton.png");

        this.load.image("back","assets/back.png");

        this.load.image("canvas",'assets/canvas.png');

        for(var i=0;i<26;i++){
            console.log(String.fromCharCode(97 + i));
            this.load.image(String.fromCharCode(97 + i),"assets/alphabet/"+String.fromCharCode(97 + i)+".png");
        }

    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("menu");
    }
}