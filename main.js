var canvas=new fabric.Canvas("myCanvas");

var block_image_width=30;
var block_image_height=30;

var player_x=10;
var player_y=10;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
        top:player_y,left:player_x
            });
            canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey==true && keyPressed=='80'){
        console.log("Shift and P pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    }
    if(e.shiftKey==true && keyPressed=='77'){
        console.log("Shift and M pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed=='38'){
        console.log("Up arrow pressed");
        up();
    }
    if(keyPressed=='40'){
        console.log("Down arrow pressed");
        down();
    }
    if(keyPressed=='37'){
        console.log("Left arrow pressed");
        left();
    }
    if(keyPressed=='39'){
        console.log("Right arrow pressed");
        right();
    }
    if(keyPressed=='87'){
        console.log("W pressed");
        new_image('wall.jpg');
    }
    if(keyPressed=='71'){
        console.log("G pressed");
        new_image('ground.jpg');
    }
    if(keyPressed=='76'){
        console.log("L pressed");
        new_image('light_green.png');
    }
    if(keyPressed=='84'){
        console.log("T pressed");
        new_image('trunk.jpg');
    }
    if(keyPressed=='82'){
        console.log("R pressed");
        new_image('roof.jpg');
    }
    if(keyPressed=='89'){
        console.log("Y pressed");
        new_image('yellow_wall.png');
    }
    if(keyPressed=='68'){
        console.log("D pressed");
        new_image('dark_green.png');
    }
    if(keyPressed=='85'){
        console.log("U pressed");
        new_image('unique.png');
    }
    if(keyPressed=='67'){
        console.log("C pressed");
        new_image('cloud.jpg');
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height = "+block_image_height);
        console.log("When up arrow is pressed x= "+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height = "+block_image_height);
        console.log("When down arrow is pressed x= "+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("block image width = "+block_image_width);
        console.log("When down arrow is pressed x= "+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block image width = "+block_image_width);
        console.log("When down arrow is pressed x= "+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}