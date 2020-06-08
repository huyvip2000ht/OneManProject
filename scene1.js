class scene1 extends Phaser.Scene {

    constructor() {
        super("scene1");

    }


    text1;

    create () {


        this.add.image(config.width/2,config.height/2,'background');


        let back = this.add.image(200, 200, 'back');
        back.setInteractive();
        back.on('pointerup', function (pointer) {
            this.scene.start('menu');
        }, this);

        /////////

        this.text1= this.add.text(10, 10, '', { fill: '#00ff00' });
      //  this.input.mouse.disableContextMenu();

        let x=4;
        let y=6;

        let word1="pancake";
        let word2="pizza";
        let word3="popcorn";
        let word4="pasta";

        let words = word1+word2+word3+word4;


        let a=createArray(x,y);

        let randomX=Math.floor(Math.random()*x);
        let randomY=Math.floor(Math.random()*y);

        console.log(randomX +' '+randomY);

        defaultArray(a,x,y,randomX,randomY);


        dfs(a,x,y,randomX,randomY,1);
        for(let h=0;h<x;h++){
            for(let k=0;k<y;k++){
                //console.log('a['+h+']['+k+']='+a[h][k]);

                console.log('a['+h+']['+k+']='+a[h][k]);
            }
        }

        for(let h=0;h<x;h++){
            for(let k=0;k<y;k++){
                //console.log('a['+h+']['+k+']='+a[h][k]);
                a[h][k]=words[a[h][k]-1];
                console.log('a['+h+']['+k+']='+a[h][k]);
            }
        }

        let boxes = createArray(x, y);

        let isPointerDown = false;

        let randomTint;

        let previousX;
        let previousY;

        let wentThrough=createArray(50,2);
        defaultArraysss(wentThrough,50,2);
        let indexX=0;
        let pickedWord;

        for(let h=0;h<x;h++){
            for(let k=0;k<y;k++){

                boxes[h][k]=this.add.image(550+k*200*(3/y) , 150+h*200*(3/x) , a[h][k]).setScale(3/y,3/x);
                boxes[h][k].setInteractive();
                boxes[h][k].on('pointerdown', function (pointer)
                {
                    pickedWord='';
                    defaultArraysss(wentThrough,50,2);
                    indexX=0;
                    isPointerDown=true;
                    randomTint=Math.random() * 16000000;

                    }, this);

                boxes[h][k].on('pointerup', function (pointer)
                {
                    isPointerDown=false;
                    /////////////////////////
                    for(let h=0;h<x;h++) {
                        for (let k = 0; k < y; k++) {
                            boxes[h][k].clearTint();
                        }
                    }


                    for(var m=0;m<indexX;m++){
                        pickedWord= pickedWord +  a[wentThrough[m][0]][wentThrough[m][1]];
                    }
                    console.log("cac chu cai duoc chon la: "+pickedWord);
                    /////////////////////

                }, this);

                boxes[h][k].on('pointermove', function (pointer)
                {
                    if(isPointerDown) {
                       // if(isCloseTo(////////////////////////////////////////////////////////////////))

                        boxes[h][k].setTint(randomTint);
                     //   console.log('h ='+h+', k = '+k);

                        if(indexX===0){     // số đầu tiên
                            wentThrough[indexX][0]=h;
                            wentThrough[indexX][1]=k;
                            console.log('wentThrough['+indexX+'][0] = '+ h + ' , '+
                                'wentThrough['+indexX+'][1] = '+ k);
                            indexX++;
                        }
                        else if(indexX>=2)      // từ số thứ 2 trở lên có tính năng lùi lại
                            if(wentThrough[indexX-2][0]===h && wentThrough[indexX-2][1]===k){
                                indexX--;
                                boxes[wentThrough[indexX][0]][wentThrough[indexX][1]].clearTint();
                                wentThrough[indexX][0]=-1;
                                wentThrough[indexX][1]=-1;

                                console.log('delete wentThrough['+indexX+'][0] = '+ h + ' , '+
                                    'wentThrough['+indexX+'][1] = '+ k);

                            }

                        if(wentThrough[indexX-1][0]!==h || wentThrough[indexX-1][1]!==k){   // tính năng bôi đen các số
                            var duplicate=false;
                            for(var temp=0;temp<indexX;temp++){
                                if(wentThrough[temp][0]===h && wentThrough[temp][1]===k){
                                    duplicate=true;

                                }
                            }

                            if(!duplicate) {
                                wentThrough[indexX][0] = h;
                                wentThrough[indexX][1] = k;
                                console.log('wentThrough[' + indexX + '][0] = ' + h + ' , ' +
                                    'wentThrough[' + indexX + '][1] = ' + k);
                                indexX++;
                            }
                            else console.log("Duplicate !");

                        }



                    }
                }, this);


            }
        }






        ///////
    }

    isCloseTo(previousX,previousY,nowX,nowY){
        return ((Math.abs(previousX-nowX)===1&&Math.abs(previousY-nowY)===0)
            || (Math.abs(previousX-nowX)===0&&Math.abs(previousY-nowY)===1));
    }

    update ()
    {
        var pointer = this.input.activePointer;

        this.text1.setText([
            'x: ' + pointer.worldX,
            'y: ' + pointer.worldY,
            'isDown: ' + pointer.isDown
        ]);

    }
}