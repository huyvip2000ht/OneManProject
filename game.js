var config = {
    width: 1500,
    height: 700,
    backgroundColor: 0x000000,
    scene: [loadingScene, menu,scene1],
    pixelArt: true,
    // 1.1 set the physics to arcade
    physics: {
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}
var game = new Phaser.Game(config);