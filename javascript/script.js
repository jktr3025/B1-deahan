$(function(){

//메뉴 방법1
// $(".main > li").hover(function(){
//     $(".sub").stop().slideDown();
// }, function(){
//     $(".sub").stop().slideUp();
// })

//메뉴 방법2
$(".main > li").mouseover(function(){
    $(".sub").stop().slideDown();
})
$(".main > li").mouseout(function(){
    $(".sub").stop().slideUp();
})

// //이미지슬라이드 방법1
// var n = 0; // 현재 보인 인덱스 번호 (0~2)
// setInterval(function(){
//     if(n == 2){
//         n = 0;
//     }else {
//         n++;
//     }//if
//     pos = n * -1200 + "px";
//     console.log(n);
//     console.log(pos);
//     $(".move").animate({left:pos},500);
// },2000)

//이미지 슬라이드 방법2
    setInterval(function(){
        $(".move").animate({left:"-1200px"},500, function(){
            $(".move").css({left:0});
            $(".move").append($(".move li").eq(0))
        })//animate
    },2000)


//탭
$(".cont1 h2").click(function(){
    $(".cont1 h2").removeClass("on");
    $(this).addClass("on");

    $(".cont1 ul").hide();
    $(this).next().show();
})

//pop
$(".p_click").click(function(){
    $(".pop").show();
})//

$(".close").click(function(){
    $(".pop").hide();
})//









})//jquery