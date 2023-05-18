<!DOCTYPE html><html lang="en"><head>
    <meta charset="utf-8">
    <title>Angular</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  <style>*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }@tailwind forms;body{background-color:#e5e7eb}</style><link rel="stylesheet" href="/assets/angular/styles.039f9a7b486ec88e.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="/assets/angular/styles.039f9a7b486ec88e.css"></noscript></head>
  <body>
    <script>
      function CSSDone(){
              if($(window).width()>640){
                  $(".grid-item").css({"height":$(".grid-item").width()*0.2});
                  $(".grid_item_img").css({"height":$(".grid-item").width()*0.2});
              console.log("a");
              }else{
                  $(".grid-item").css({"height":$(".grid-item").width()*0.33});
                  $(".grid_item_img").css({"height":$(".grid-item").width()*0.33});
              console.log("b");
              }
          }
      document.addEventListener('readystatechange', function(e){
        if(document.readyState == 'complete' && document.location.pathname.match(/\badmin\b/gm) != null){
          console.log("cargando bootstrap");
          var link = document.createElement('link');
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("type", "text/css");
          link.onload = CSSDone;
          link.setAttribute("href", 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css');
          document.getElementsByTagName("head")[0].appendChild(link);
        }
      })
    </script>
    <app-root></app-root>
  <script src="/assets/angular/runtime.732494fdcb7b1dad.js" type="module"></script><script src="/assets/angular/polyfills.957fb13f029a2128.js" type="module"></script><script src="/assets/angular/scripts.e4a1df024a887f03.js" defer></script><script src="/assets/angular/main.6ca01b7a1beed45e.js" type="module"></script>

  </body></html>
