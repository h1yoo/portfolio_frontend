$(document).ready(function(){
    //상단메뉴 배경색 조절
    //휴대폰에서는 배경색 보임
    if( $(window).width()<=600 ) {
        $("nav").addClass("act");
    }
    else {  //휴대폰보다 큰 화면일 때는 스크롤 높이에 따라 베경색을 조절함
        $(window).scroll(function(){
            //if( $(window).scrollTop() >= $("#top".height()+$("nav").height())  ) {
            if( $(window).scrollTop() >= $("#top").height()-100 ) {
                $("nav").addClass('act');
            }
            else    {
                $("nav").removeClass('act');
            }
        });
    }


    //타자치는 효과
    if( $(window).width() <= 600 ) {  //모바일에서 타자치는 효과
        const $typings = " 안녕하세요.\n유혜원의\n포트폴리오입니다.";
        const tyLens = $typings.length;
        let j=0;
        let txts = "";
        function types() {
            if( j < tyLens ) {
                txts += $typings[j];
                document.querySelector("#typing").innerText = txts;
                j++;
                setTimeout(types, 200);
            }
        }
        types();
    }
    else {
        const $typing = "안녕하세요.\n유혜원의 포트폴리오입니다.";
        //console.log($typing[7]);  //홍
        const tyLen = $typing.length;
        //console.log($typing.length); $typing이라는 상수의 문자 개수 = 21
        let i = 0;
        let txt = "";
        function type() {
            if(i < tyLen) {
                txt += $typing[i];
                //$("#typing").text(txt); javascript하기 위해 지움. 이것은 jQery
                document.querySelector("#typing").innerText = txt;
                i++;
                setTimeout(type, 180);
            }
        }
        type();
    }  ///타자치는 효과 끝


    /////상단 메뉴 호버 활성화 유지
    $('#menu a').click(function(){
        $(this).addClass('act').siblings().removeClass('act');
    });

	
	
	///////////////////////////////////////////

    //포트폴리오 부분 슬라이드
	let i = $(".slider-circle .on").index();   /////일회성. 한 번 밖에 못 받아옴
	 
	let sliding = setInterval(slide, 3000, i);

    //슬라이드 원형블릿 클릭시
    $("#portfolio .slider-circle div").click(function(){
		clearInterval(sliding);
        i = $(this).index();		
        slide(i);
    });
	
    ////슬라이드 함수
    function slide(i){	
		clearInterval(sliding);
		$(".slider-circle div").eq(i).addClass('on').siblings().removeClass("on");
        const j = i * 500 * (-1);   //0, -500, -1000 (위로 500px씩 올라감)		
		// console.log(j);
		$("#portfolio .slider-wrap").stop().animate({top:j}, "fast");
		i++;
		if(i>2) {i=0;}
		//console.log(i);
		
		sliding = setInterval(slide, 3500, i);		
    }	
	
	 
    //슬라이드 일시정지/재생 아이콘 클릭 시
    $('#portfolio button.pnp').click(function(){
        if( $(this).text() == 'pause_circle') {  //일시정지 아이콘 클릭 시
            $(this).text('play_circle');
			clearInterval(sliding);
        }
        else {  //재생 아이콘 클릭 시
            $(this).text('pause_circle');
			i = $(".slider-circle .on").index();			
			if(i>2) {i=0;}
			sliding = setInterval(slide, 3500, i);
        }
    });
	
	
	

	////////////////////////////////////////////
    //포트폴리오 부분 글씨 PC와 모바일에 따라 다르게
    if( $(window).width() <= 600 ) {  //포트폴리오1
        const $typing1 = "메가박스 홈페이지를 따라 만들었습니다.\n포스터 이미지가 호버되면 줄거리가\n나오게 했고, 메인 메뉴에 호버되면\n메인 메뉴 글씨 아래에 하얀색 줄이\n생기면서 서브 메뉴가 보이도록\n하였습니다.";
        document.querySelector("#portfolio .slider-cell-1 .sliderR span").innerText = $typing1;
        const $typing2 = "할리스 홈페이지를 모방해보았습니다.\n메인 메뉴가 호버되면 메인 배경색이\n빨간색이 되고 메인 메뉴에 작은 글씨가\n보이게 하였습니다. 서브 메뉴가 호버되면\n메인 메뉴에 배경색을 빨갛게\n유지하게 하였습니다.";
        document.querySelector("#portfolio .slider-cell-2 .sliderR span").innerText = $typing2;
        const $typing3 = "공차 애플리케이션을 만들었습니다.\n메인부분 아이콘을 클릭하면 로그인 안내\n팝업창이 나오게 했고, 아래는\n배너가 슬라이드 되게 하였습니다.";
        document.querySelector("#portfolio .slider-cell-3 .sliderR span").innerText = $typing3;
    }
    else {
        const $typing1 = "메가박스 홈페이지를 따라 만들었습니다.\n포스터 이미지가 호버되면 줄거리가 나오게 했고,\n메인 메뉴에 호버되면 메인 메뉴 글씨 아래에\n하얀색 줄이 생기면서 서브 메뉴가 보이도록 하였습니다.";
        document.querySelector("#portfolio .slider-cell-1 .sliderR span").innerText = $typing1;
        const $typing2 = "할리스 홈페이지를 모방해보았습니다.\n메인 메뉴가 호버되면 메인 메뉴 배경색이 빨간색이 되고\n메인 메뉴에 작은 글씨가 보이게 하였습니다.\n서브 메뉴가 호버되면 메인 메뉴에 배경색을\n빨갛게 유지하게 하였습니다.";
        document.querySelector("#portfolio .slider-cell-2 .sliderR span").innerText = $typing2;
        const $typing3 = "공차 애플리케이션을 만들었습니다.\n메인부분 아이콘을 클릭하면 로그인 안내 팝업창이 나오게 했고,\n아래는 배너가 슬라이드되게 하였습니다.\n";
        document.querySelector("#portfolio .slider-cell-3 .sliderR span").innerText = $typing3;
    }


    //스크롤바를 내렸을 때의 효과 (== 스크롤이벤트 감지!)
    if( $(window).width <= 600 ) {   ////모바일에서의 스크롤 이벤트
        const homeTop = $("body").offset().top;
        const aboutTop = $("#about").offset().top - 400;  //해당 콘텐츠의 top값을 '절대값'으로 얻어온다.
        const portTop = $("#portfolio").offset().top - 600;
        const eventTop = $("#event").offset().top - 600;
        const contactTop = $("#contact").offset().top - 400;
        //==>상대값은 position()이고 절대값은 offset()  => 상대값은 기준이 부모이고 절대값은 기준이 윈도우
        let st = 0;  //scrollTop 변수 st의 값 0으로 설정
        let pos = 0;
        $(window).scroll(function(){
            st = $(window).scrollTop();
            //console.log(st);
            if( st <= 50 ) {  //새가 날아가는 애니메이션 나타나게 하기
                $("#top .bird-container").stop().fadeIn();
            }
            if( st >= aboutTop/2 ) {  //새가 날아가는 애니메이션 사라지게 하기
                $("#top .bird-container").fadeOut();
            }
            if( st >= homeTop && st < aboutTop ) {
                pos = 0;
            }
            if( st >= aboutTop && st < portTop ) {
                //About에서 오른쪽 "skill" bar 애니메이션
                $("#photo progress").delay(200).animate({value : 80});
                $("#html progress").delay(300).animate({value : 85});
                $("#jquery progress").delay(400).animate({value : 50});
                $("#java progress").delay(500).animate({value : 65});
                $("#cpp progress").delay(600).animate({value : 50});
                $("#oven progress").delay(700).animate({value : 55});
                pos = 1;
            }
            if( st >= portTop ) {  
            /*//포트폴리오 부분 슬라이드
            위에 공통으로 작성*/
            
            pos = 2;
            }
            if( st >= eventTop && st < contactTop ) {
                pos = 3;
            }
            if( st >= contactTop ) {
                pos = 4;
            }
            $('#menu a').eq(pos).addClass('act').siblings().removeClass('act');
        });
    }
    else {  ///////PC 데스크탑에서의 스크롤 이벤트
        const homeTop = $("body").offset().top;
        const aboutTop = $("#about").offset().top;  //해당 콘텐츠의 top값을 '절대값'으로 얻어온다.
        const portTop = $("#portfolio").offset().top -200;
        const eventTop = $("#event").offset().top - 200;
        const contactTop = $("#contact").offset().top - 200;
        //==>상대값은 position()이고 절대값은 offset()  => 상대값은 기준이 부모이고 절대값은 기준이 윈도우
        let st = 0;  //scrollTop 변수 st의 값 0으로 설정
        let pos = 0;
        $(window).scroll(function(){
            st = $(window).scrollTop();
            //console.log(st);
            if( st <= 50 ) {  //새가 날아가는 애니메이션 나타나게 하기
                $("#top .bird-container").stop().fadeIn();
            }
            if( st >= aboutTop/2 ) {  //새가 날아가는 애니메이션 사라지게 하기
                $("#top .bird-container").fadeOut();
            }
            if( st >= homeTop && st < aboutTop ) {
                pos = 0;
            }
            if( st >= aboutTop && st < portTop ) {
                //About에서 오른쪽 "skill" bar 애니메이션
                $("#photo progress").delay(100).animate({value : 80});
                $("#html progress").delay(200).animate({value : 85});
                $("#jquery progress").delay(300).animate({value : 50});
                $("#java progress").delay(400).animate({value : 70});
                $("#cpp progress").delay(500).animate({value : 65});
                $("#oven progress").delay(600).animate({value : 55});
                pos = 1;
            }
            if( st >= portTop ) {   
                pos = 2;
            }
            if( st >= eventTop && st < contactTop ) {
                pos = 3;
            }
            if( st >= contactTop ) {
                pos = 4;
            }
            $('#menu a').siblings().removeClass('act').eq(pos).addClass('act');
        });


        //이벤트 이미지를 클릭하면 큰 이미지가 나타난다
        $("#event>div>div").click(function(){
            //클릭한 썸네일이미지 주소를 가져온다
            const thumb = $(this).children("img").attr("src");
            //가져온 주소를 큰이미지주소로 변경한다.
            const change = thumb.replace('images/', 'images/big/');
            //변경한 이미지주소를 큰이미지에 대입한다.
            $("#popup img").attr("src", change);

            //클릭한 썸네일 이미지에서 alt값을 가져온다.
            const alt = $(this).children("img").attr("alt");
            //검정팝업 상단에 작품 제목
            $("#popup h3").text(alt);

            $("#popup").fadeIn();

            $("body>nav").fadeOut();
        });

        //큰 팝업창 닫기
        $("#popup").click(function(){
            $("body>nav").fadeIn();

            $(this).fadeOut();            
        });
    }
    
    
}); ////////////END
