$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(255, 253, 253)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    //createPlatform(x, y, width, height, "color")
createPlatform(700, 500, 150, 25, "whitesmoke")
createPlatform(440, 620, 150, 25, "whitesmoke")
createPlatform(950, 400, 150, 25, "")
createPlatform(1200, 300, 150, 25, "")
createPlatform(900, 200, 150, 25, "")
createPlatform(600, 200, 150, 25, "")
    // TODO 3 - Create Collectables
createCollectable("kennedi", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("kennedi", 1000, 150);



    
    // TODO 4 - Create Cannons
createCannon("top", 200, 100);
createCannon("right", 300, 2000);
createCannon("right", 200, 2000);
createCannon("right", 700, 100);
createCannon("top", 600, 1000);
createCannon("top", 900, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
