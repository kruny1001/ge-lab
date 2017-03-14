'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:pixiTest
 * @description
 * # pixiTest
 *
 * http://www.rocketshipgames.com/blogs/tjkopena/2015/09/basic-scaling-animation-and-parallax-in-pixi-js-v3/
 *
 */
angular.module('statsdsuApp')
  .directive('pixiTest', function () {
    return {
      template: '<div class="booth">'+
      '<video id="video" width="0" height="0"></video>'+
      //'<md-button ng-click="capture()">Take photo</md-button>'+
      //'<canvas id="canvas" width="720" height="450"></canvas>'+
      //'<img id="photo" src="" alt="Photo of you">'+
      '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var video = document.getElementById('video'),
          //canvas = document.getElementById('canvas'),
          //context = canvas.getContext('2d'),
          //photo = document.getElementById('photo'),
          vendorUrl = window.URL || window.webkitURL;

        var texture;
        var moveSprite;
        navigator.getMedia = navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;

        navigator.getMedia({
          video: true,
          audio:false
        }, function(stream){
          video.src = vendorUrl.createObjectURL(stream);
          texture =PIXI.Texture.fromVideo(video);
          console.log(video.src)
          moveSprite = new PIXI.Sprite(texture);
          moveSprite.width = 800;
          moveSprite.height = 600;
          moveSprite.scale.x = 1;
          moveSprite.scale.y = 1;
          //moveSprite.position.x = 20;
          //moveSprite.position.y = 20;
          console.log(texture);
          video.play();
        }, function(err){
          alert(err);
        })

        console.log('start');
        var GAME_WIDTH = 800;  // Conceptual dimensions of the game
        var GAME_HEIGHT = 600;

        var renderer;
        var stage;

        var background;
        var foreground;
        var BG_RATE = 50;
        var FG_RATE = 125;

        var monster;
        var FRAMES = [
          "frame-1.png",
          "frame-2.png",
          "frame-3.png",
          "frame-4.png",
        ];
        var frameindex;
        var frametime;
        var FRAMERATE = 0.08;
        var VELOCITY = 100;
        var lasttime;

        function preload() {
          console.log("Preload")

          createrenderer(); // Create renderer to test which kind in loading,
                            // do preloader animations (not implemented)

          var loader = PIXI.loader;
          loader.reset();
          if (window.devicePixelRatio >= 2) {
            //loader.add("monster", "image/monster@2x.json");
            loader.add("monster", "dImages/PIXI/monster.json");
          } else {
            loader.add("monster", "dImages/PIXI/monster.json");
          }
          if (window.devicePixelRatio >= 2 &&
            renderer instanceof PIXI.WebGLRenderer) {
            // WebGL clause works around an apparent issues with
            // TilingSprites on high-res devices using canvas:
            // https://github.com/pixijs/pixi.js/issues/2083
            //loader.add("background", "dImages/PIXI/background@2x.png");
            //loader.add("foreground", "dImages/PIXI/foreground@2x.png");
            loader.add("background", "dImages/PIXI/background.png");
            loader.add("foreground", "dImages/PIXI/foreground.png");
          } else {
            loader.add("background", "dImages/PIXI/background.png");
            loader.add("foreground", "dImages/PIXI/foreground.png");
          }

          loader.once('complete', init);
          loader.load();
        }


        function createrenderer() {
          console.log("Create Renderer");

          var rendererOptions = {
            antialiasing: false,
            transparent: false,
            resolution: window.devicePixelRatio,
            autoResize: true,
            preserveDrawingBuffer:true
          }

          // Create the canvas in which the game will show, and a
          // generic container for all the graphical objects
          renderer = PIXI.autoDetectRenderer(GAME_WIDTH, GAME_HEIGHT,
            rendererOptions);

          // Put the renderer on screen in the corner
          //renderer.view.style.position = "absolute";
          renderer.view.style.top = "0px";
          renderer.view.style.left = "0px";

          // The stage is essentially a display list of all game objects
          // for Pixi to render; it's used in resize(), so it must exist
          stage = new PIXI.Container();

          // Size the renderer to fill the screen
          resize();

          // Actually place the renderer onto the page for display
          element.append(renderer.view);

          // Listen for and adapt to changes to the screen size, e.g.,
          // user changing the window or rotating their device
          window.addEventListener("resize", resize);

          // Mod the title so it's easy to determine renderer on mobile
          if (renderer instanceof PIXI.WebGLRenderer) {
            document.title += " (WebGL)";
          } else {
            document.title += " (Canvas)";
          }
        }


        function init() {
          console.log("Init");
          // Create the scrolling background
          background =
            new PIXI.extras.TilingSprite(PIXI.loader.resources.background.texture,
              GAME_WIDTH, GAME_HEIGHT);
          console.log("BG " + background.width + "," + background.height +
            " res " + background.texture.baseTexture.resolution);
          stage.addChild(background);

          // Create the monster sprite
          monster = new PIXI.Sprite(PIXI.Texture.fromFrame(FRAMES[0]));
          frameindex = 0;
          frametime = FRAMERATE;
          monster.anchor.x = 0.5;
          monster.anchor.y = 0.5;
          monster.position.x = -monster.width/2;
          monster.position.y = GAME_HEIGHT/2 - monster.height/2;
          console.log("Monster " + monster.width + "," + monster.height +
            " res " + monster.texture.baseTexture.resolution);
          //stage.addChild(monster);

          // Create the scrolling foreground tile
          foreground =
            new PIXI.extras.TilingSprite(PIXI.loader.resources.foreground.texture,
              GAME_WIDTH,82);
          foreground.position.y = GAME_HEIGHT - foreground.height;
          console.log("FG " + foreground.width + "," + foreground.height +
            " res " + foreground.texture.baseTexture.resolution);
          stage.addChild(foreground);
          stage.addChild(moveSprite);
          stage.addChild(monster);

          var aoa = new PIXI.Sprite(PIXI.Texture.fromImage('dImages/aoa1.png'));
          aoa.width=500;
          aoa.height=500;
          aoa.anchor.x = -0.3;
          aoa.anchor.y = -0.3;
          stage.addChild(aoa)


          // Prepare for first frame of game loop/animation
          lasttime = new Date().getTime();
          requestAnimationFrame(animate);

        }

        function resize() {

          // Determine which screen dimension is most constrained
          var ratio = Math.min(window.innerWidth/GAME_WIDTH,
            window.innerHeight/GAME_HEIGHT);

          // Scale the view appropriately to fill that dimension
          stage.scale.x = stage.scale.y = ratio;

          // Update the renderer dimensions
          renderer.resize(Math.ceil(GAME_WIDTH * ratio),
            Math.ceil(GAME_HEIGHT * ratio));

          console.log("Resize\n" +
            "  Window inner " + window.innerWidth + "," +
            window.innerHeight +
            " pixel ratio " + window.devicePixelRatio + "\n" +
            "  Renderer " + renderer.width + "," +
            renderer.height + " res " + renderer.resolution + "\n" +
            "  Scale " + stage.scale.x + "," + stage.scale.y + "\n");

        }

        function animate() {

          // Determine seconds elapsed since last frame
          var currtime = new Date().getTime();
          var delta = (currtime-lasttime)/1000;

          // Scroll the terrain
          background.tilePosition.x -= BG_RATE*delta;
          foreground.tilePosition.x -= FG_RATE*delta;

          // Move the monster
          monster.position.x += VELOCITY*delta;
          if (monster.position.x > GAME_WIDTH + monster.width/2) {
            monster.position.x = -monster.width/2;
          }

          // Animate the monster
          frametime -= delta;
          if (frametime <= 0) {
            frameindex++;
            if (frameindex >= FRAMES.length) {
              frameindex = 0;
            }
            monster.texture = PIXI.Texture.fromFrame(FRAMES[frameindex]);
            frametime = FRAMERATE;
          }

          // Draw the stage and prepare for the next frame
          renderer.render(stage);
          requestAnimationFrame(animate);
          lasttime = currtime;

        }
        preload();
      }
    };
  });