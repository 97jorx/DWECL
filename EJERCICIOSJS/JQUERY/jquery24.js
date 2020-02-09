



$(document).ready(function(){
    $("button").click(function(){
      $("div:eq(1)").animate(
        {
          left:  '375px', 
          width: '150px',
          height:'150px' 
        });
    });
    
});

