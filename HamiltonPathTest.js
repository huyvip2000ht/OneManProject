/*
let x=4;
let y=6;

let word1="pancake";
let word2="pizza";
let word3="popcorn";
let word4="pasta";

let words = word1+word2+word3+word4;


let a=createArray(x,y);

defaultArray(a,x,y,2,2);


dfs(a,x,y,2,2,1);

for(var h=0;h<x;h++){
    for(var k=0;k<y;k++){
        //console.log('a['+h+']['+k+']='+a[h][k]);
        a[h][k]=words[a[h][k]-1];
        console.log('a['+h+']['+k+']='+a[h][k]);
    }
}

*/
//readTextFile("file:///C:/Users/HP/Desktop/OneManProject/words.txt");

///////////////////////////////////////////////////////////////////

function defaultArray(a,x,y,startX,startY) {
    for(var h=0;h<x;h++){
        for(var k=0;k<y;k++){
            a[h][k]=-1;

        }
    }
    a[startX][startY]=1;
}

function isSafe(x,y,nextX,nextY) {
    return nextX >= 0 && nextY >= 0 && nextX <= x - 1 && nextY <= y - 1;
}

function  dfs(a,x,y,tempX, tempY,  cnt) {
    let xMove;
    xMove = [0,0,1,-1]; // xuống, lên, phải, trái
    let yMove;
    yMove = [1,-1,0,0];

    for (let i=0; i < 4; i++) {
     //   console.log('i= '+i);
        let nextX = tempX + xMove[i];
        let nextY = tempY + yMove[i];

        if (cnt === x*y) {
            console.log('bye bye');
            return 1;
        }

        if (isSafe(x,y,nextX, nextY)) {

            if (a[nextX][nextY] === -1) {
                a[nextX][nextY] = cnt + 1;

                if (dfs(a,x,y,nextX, nextY, cnt+1) === 1) {
                    return 1;
                }
                else {
                    a[nextX][nextY] = -1; // Solution 1.
                }
            }
        }
    }
    return 0;
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}
/*
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
*/
/*function findHamiltonPath(array,width,height,tempX,tempY,count) {

    if(array[tempX][tempY]===0){        // lần đầu vào lệnh
        count=1;
        array[tempX][tempY]=1;
        console.log(array[tempX][tempY]+' is in '+tempX+' '+tempY);
        findHamiltonPath(array,width,height,tempX,tempY,count);

    }
    if(tempX+1<width){
        if(array[tempX+1][tempY]===0){      // bên phải trống
            count++;
            tempX++;
            array[tempX][tempY]=count;
            console.log(array[tempX][tempY]+' is in '+tempX+' '+tempY);
            findHamiltonPath(array,width,height,tempX,tempY,count);
        }
    }
    if(tempX-1>-1) {
        if (array[tempX - 1][tempY] === 0) {     // bên trái trống
            count++;
            tempX--;
            array[tempX][tempY] = count;
            console.log(array[tempX][tempY]+' is in '+tempX+' '+tempY);
            findHamiltonPath(array, width, height, tempX, tempY, count);
        }
    }
    if(tempY+1<height){
        if(array[tempX][tempY+1]===0){     // bên dưới trống
            count++;
            tempY++;
            array[tempX][tempY]=count;
            console.log(array[tempX][tempY]+' is in '+tempX+' '+tempY);
            findHamiltonPath(array,width,height,tempX,tempY,count);
        }
    }
    if(tempY-1>-1) {
        if (array[tempX][tempY - 1] === 0) {     // bên trên trống
            count++;
            tempY--;
            array[tempX][tempY] = count;
            console.log(array[tempX][tempY]+' is in '+tempX+' '+tempY);
            findHamiltonPath(array, width, height, tempX, tempY, count);
        }
    }
    if(count===width*height){          // đã hết chỗ
        console.log('bye bye');

    }



}

*/


