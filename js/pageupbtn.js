/*---------------------------
TOPへ戻るボタン

HTMLファイルに以下を記述
<script type="text/javascript" src="pageupbtn.js"></script>
---------------------------------*/
function page_up () {
    const page_up = document.getElementById('page_up');
    window.addEventListener('scroll', () => {
    const top = window.pageYOffset;
        if ( top > 420 ) {
        setTimeout( function() {
        page_up.style.opacity = 1;
        }, 1);
        page_up.classList.remove('is-hide');
        } else {
        setTimeout( function() {
        page_up.style.opacity = 0;
        }, 1);
           page_up.classList.add('is-hide');
        }
    });

    const up = document.getElementById('page_up');
    up.addEventListener('click', () => {
        window.scroll({
        top: 0,
        behavior: 'smooth'});
    });
    }
    page_up();

    /*------------------------------------------------------------*/