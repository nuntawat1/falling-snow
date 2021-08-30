(() => {
    function setup(){
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        return {
        canvas,
        canvasContext: canvas.getContext('2d'),
        numberOfSnowBalls: 250
        }
    }

    function random(max, min){
       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber; 

    }

    function drawSnowBalls(canvasContext, snowBalls){
        canvasContext.beginPath();
        canvasContext.arc(snowBalls.x, snowBalls.y,snowBalls.radius, snowBalls.opacity, Math.PI * 2 *snowBalls.radius);
        canvasContext.fillStyle = `rgba(255, 255, 255, ${snowBalls.opacity})`;
        canvasContext.fill();
    }

    function createSnowBalls(canvas, numberOfSnowBalls){
      const snowBallPropety = [...Array(numberOfSnowBalls)].map(()=>{
          return {
              x: random(canvas.width, 0),
              y: random(canvas.height, 0),
              radius: random(1, 5),
              opacity: random(4, 2),
              speedX: random (5, -5), 
              speedY: random (3, 1),
            } 
        });
      return snowBallPropety;
      
    }

    function moveSnowBalls(canvas, snowBall){
        snowBall.x += snowBall.speedX;
        snowBall.y += snowBall.speedY;

        if (snowBall.x > canvas.width) {
            snowBall.x = 0;            
        }   else if (snowBall.x < 0) {
            snowBall.x = canvas.width;
        }
        if (snowBall.y > canvas.height) {
            snowBall.y = 0;
        } else if (snowBall.y < 0) {
            snowBall.y = canvas.height;
        }
    }

    function run(){
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    setInterval(() => {
        canvasContext.clearRect(0,0, canvas.width, canvas.height);
        snowBalls.forEach((snowBall) => {
            drawSnowBalls(canvasContext, snowBall);
        });
        snowBalls.forEach((snowBall) => {
            moveSnowBalls(canvas, snowBall);
        });
    },40);
    }
    run();

 } )(); 