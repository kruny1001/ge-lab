'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:pixiWebcam
 * @description
 * # pixiWebcam
 */
angular.module('statsdsuApp')
  .directive('pixiWebcam', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        //var renderer = new PIXI.WebGLRenderer(800, 600);
        //document.body.appendChild(renderer.view);
        //var stage = new PIXI.Container();
        //var texture = PIXI.Texture.fromVideoUrl("image/vid.mp4");
        //// var texture = PIXI.Texture.fromImage("logo.png");
        //var bunny = new PIXI.Sprite(texture);
        //bunny.position.x = 0;
        //bunny.position.y = 0;
        //bunny.width = 800;
        //bunny.height = 600;
        //stage.addChild(bunny);
        //requestAnimationFrame(animate);
        //function animate() {
        //  renderer.render(stage);
        //  requestAnimationFrame(animate);
        //}

        tools.mixin(tools, window);
        var w = 800;
        var h = 600;
        var out = new Stage(w, h, false).out;

        var webcam = new Webcam();
        webcam.onError.add(function(){webcam.init()});//lol
        webcam.onReady.add(onWebcam);
        webcam.init();


        var stage = new PIXI.Stage(0x66FF99);
        var renderer = PIXI.autoDetectRenderer(w, h);


        var texture = PIXI.Texture.fromCanvas(out.canvas);
        var img = new PIXI.Sprite(texture);
        stage.addChild(img);

        //var blurFilter = new PIXI.BlurFilter();
        //blurFilter.blur = 30;

        var nColors = 20;
        var paletteCanvas = createPalette(nColors);

        //var palette = PIXI.Texture.fromCanvas(paletteCanvas);
        //var colorMapFilter = new PIXI.ColorMapFilter(palette);

        //img.filters = [blurFilter, colorMapFilter];

        var loop = new Loop(update, this, false);

        var time = 0;

        function onWebcam()
        {
          loop.play();
          var w = 800//webcam.video.width;
          var h = 600//webcam.video.height;
          out.setTransform(-1, 0, 0, 1, w, 0);
          document.body.appendChild(renderer.view);

          window.onresize = onResize;
          onResize();
        }

        function update()
        {
          out.drawImage(webcam.video, 0, 0);
          //colorMapFilter.timeOffset = time += -1;
          //PIXI.updateWebGLTexture(texture.baseTexture, renderer.gl);
          //PIXI.texturesToUpdate.push(texture.baseTexture);
          renderer.render(stage);
          requestAnimationFrame(update);

        }

        function onResize()
        {
          var w = window.innerWidth || document.body.clientWidth;
          var h = window.innerHeight || document.body.clientHeight;
          renderer.resize(w, h);

          var ww = webcam.video.width;
          var wh = webcam.video.height;

          var scale = 1;
          var ratio = ww / wh;
          if(ratio < w / h) scale = w / ww;
          else scale = h / wh;
          img.scale.x = img.scale.y = scale;
          img.position.x = 0.5 * (w - scale * ww);
          img.position.y = 0.5 * (h - scale * wh);
        }


        function createPalette(nColors)
        {

          var canvas = document.createElement("canvas");
          canvas.width = 	256;
          canvas.height = 64;
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "red";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          var width = Math.round(0xFF / nColors);

          var h = Math.random() * 360;
          var s = Math.random() * 0.3;
          var l = Math.random() * Math.random() * 0.2;

          for(var i = 0; i < nColors; i++)
          {
            var hue = (Math.random() < 0.3 ? 90 : 0) + h + Math.random() * 50;
            hue = Math.round(hue);
            var sat = s + Math.random() * 0.7 + 0.2;
            sat = Math.round(100 * sat);
            var lig = l + Math.random() * 0.9;
            lig = Math.round(100 * lig);
            ctx.fillStyle = "hsl(" + hue + "," + sat + "%," + lig + "%)";
            ctx.fillRect(i * width, 0, width, canvas.height);
          }

          return canvas;
        }
      }
    };
  });