window.onload = function() {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function() {
      if(document.hidden) {
        $('[rel="icon"]').attr('href', "/failure.ico");
        $('[rel="shortcut icon"]').attr('href', "/failure.ico");
        document.title = '喔唷，崩溃啦！';
        clearTimeout(titleTime);
      } else {
        $('[rel="icon"]').attr('href', "/favicon-32x32.ico");
        $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.ico");
        document.title = '咦，页面又好了！';
        titleTime = setTimeout(function() {
          document.title = OriginTitile;
        }, 2000);
      }
    });
  }