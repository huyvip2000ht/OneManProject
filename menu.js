class menu extends Phaser.Scene{
    constructor() {
        super("menu");
    }

    create () {

        this.add.image(config.width/2,config.height/2,'background');
        var play=this.add.image(config.width/2,config.height/2,'playButton');



        //  Make them all input enabled
        play.setInteractive();

        //  The images will dispatch a 'clicked' event when they are clicked on
        play.on('pointerup', function (pointer) {

            this.scene.start('scene1');

        }, this);
    }
}