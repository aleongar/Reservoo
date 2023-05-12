<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Angular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
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
</body>
</html>
