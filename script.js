function drawPlayer(){

    // Ship Body
    ctx.save();

    ctx.translate(
        player.x + player.width/2,
        player.y + player.height/2
    );

    // Rotate slightly while moving
    let angle = 0;

    if(keys["ArrowLeft"] || keys["a"]){
        angle = -0.3;
    }

    if(keys["ArrowRight"] || keys["d"]){
        angle = 0.3;
    }

    ctx.rotate(angle);

    // Main body
    ctx.fillStyle = "#00e5ff";

    ctx.beginPath();
    ctx.moveTo(0,-35);
    ctx.lineTo(-30,35);
    ctx.lineTo(30,35);
    ctx.closePath();
    ctx.fill();

    // Gun
    ctx.fillStyle = "white";

    ctx.fillRect(
        -6,
        -45,
        12,
        30
    );

    // Glass
    ctx.fillStyle = "#90e0ef";

    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2);
    ctx.fill();

    ctx.restore();
}