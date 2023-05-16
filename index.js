alert("welcome to my page!");
$(function(){
    var duration = 300;
//buttons第一排
    $('#buttons1 button:nth-child(-n+4)')
    //#button中的1~4元素
    .on('mouseover',function(){
        $(this).stop(true).animate({
            backgroundColor:'#F46B5D', /*bagound hover*/
            color:'#fff'
        },duration);
    })
    .on('mouseout',function(){
        $(this).stop(true).animate({
            backgroundColor:'#fff',
            color:'#EBC000'
        },duration);
    });
//buttons第二排
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
　　.on('mouseover',function(){
      $(this).stop(true).animate({
        borderWidth:'12px',
      color:'#AE5E9B'
  },duration,'easeOutSine');
})
     .on('mouseout',function(){
        $(this).stop(true).animate({
            borderWidth:'0px',
            color:'#EBC000'
        },duration,'easeOutSine');
     });
         // buttons第三排
    $('#buttons1 button:nth-child(n+9):nth-child(-n+12)')
    .on('mouseover',function(){
        $(this).find('>span').stop(true).animate({
            width:'100%',
        },duration,'easeOutQuad')
    })
        .on('mouseleave',function(){
        $(this).find('>span').stop(true).animate({
            width:'0%',
        },duration,'easeOutQuad')
    });
    // buttons第四四排
        $('#buttons1 button:nth-child(n+13)')
　　.on('mouseover',function(){
      $(this).stop(true).animate({
        fontSize:'3rem',
  },duration,'easeOutSine');
})
     .on('mouseout',function(){
        $(this).stop(true).animate({
            fontSize:'1.5rem',
        },duration,'easeOutSine');
     });
});