<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/v4-shims.css">
<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>

<script>
	setTimeout(addMenuButton.bind(this), 1000);
    
  	
   function addMenuButton() {
     var menuButton = "<a class='main-menu-burger'><i class='fas fa-bars'></i></a>"
     $('.Header-nav--secondary').append(menuButton);
     this.toggleMainMenu();
     
   }
  
  function toggleMainMenu() {
       
  	$('.main-menu-burger').on('click', function() {
      var scrollbarWidth = window.innerWidth-$(document).width();
     	if ($('body').hasClass('sidebar-nav-active')){
        	$('body').removeClass('sidebar-nav-active');
          	$('body').css('padding-right', 0);
        } else { 
        	$('body').addClass('sidebar-nav-active');
          	$('body').css('padding-right', scrollbarWidth + "px");
        }
     })
  }
</script>