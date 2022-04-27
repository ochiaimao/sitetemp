/*-----------------------------
スライドショー
HTMLファイルに以下を記述
<!-- ------------------------------------
    javascript　jQuery　スライダー
------------------------------------ -->

    <div id="slide">
    <img src="img/hero.jpg">
    <img src="img/hero.jpg">
    <img src="img/hero.jpg">
    <p id="nav-r"><a href="#" class="btns">＞</a></p>
    <p id="nav-l"><a href="#" class="btns">＜</a></p>
    </div>
    

<script type="text/javascript" src="slide.js"></script>
-------------------------------*/

//（0）全体の囲みは即時関数です、決り文句としてこの枠内に記述を書くと他のjsの影響などを受けなくなります。
(()=>{
    'use strict';
    
    $(function(){
    //（１）ページの概念・初期ページを設定
      var page = 0;
    
    //（２）イメージの数を最後のページ数として変数化
    // parseInt()でimgの数すべて(=length)を数えて、-1している。ここでは2の値がlastPageに入る。
    // 0から数えているため、2は3つめという意味になります。
      var lastPage = parseInt($("#slide img").length-1);
    
    //（３）最初に全部のイメージを一旦非表示にします
      $("#slide img").css("display","none");
    
    //（４）初期ページを表示
    //eqはcssセレクタで0番目(最初)のimgを選びdisplay:block;で表示させている
      $("#slide img").eq(page).css("display","block");
    
    //（５）ページ切換用、自作関数作成
    // すべての画像をフェードアウトさせて、page番目のimgをフェードインさせる関数。
      function changePage(){
        $("#slide img").fadeOut(1000);
        $("#slide img").eq(page).fadeIn(1000);
      };
    
    //（６）～秒間隔でイメージ切換の発火設定
    //setIntervalで繰り返しの処理を行っている。
    // 変数pageが5秒ごとに数字が足され、chagePgage関数を実行される、もしpageがlastPageの値2と同じになったら、変数pageの値が0(最初の画像)に戻るよう設計されている。
      var Timer;
      function startTimer(){
        Timer =setInterval(function(){
          if(page === lastPage){
            page = 0;
            changePage();
          }else{
            page ++;
            changePage();
          };
        },5000);
      }
    //（７）～秒間隔でイメージ切換の停止設定
    // setIntervalの結果をTimerで受け取っており、その値をclearIntervalすると繰り返し処理を停止させることができる。
      function stopTimer(){
        clearInterval(Timer);
      }
    
    //（８）タイマースタート
      startTimer();
    
    /*オプションを足す場合はここへ記載*/
    
    //（９）「次へ」をクリック
      $("#nav-r a").click(function() {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
        stopTimer();
        startTimer();
        if(page === lastPage){
          page = 0;
          changePage();
        }else{
          page ++;
          changePage();
        };
     });
    
    //「戻る」をクリック
      $("#nav-l a").click(function() {
        //タイマー停止＆スタート（クリックした時点から～秒とする為）
        stopTimer();
        startTimer();
        if(page === 0){
          page = lastPage;
          changePage();
        }else{
          page --;
          changePage();
        };
      });
    
    });// Jquery END
    
    })();// END