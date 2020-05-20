$(document).ready(()=>{
    if ($(document).width()>992){
        $('a.nav-link').mouseenter((e)=>{
            $(e.currentTarget.parentNode).find('.dropdown-menu').addClass('show');
            $('.nav-item.dropdown').mouseleave((e)=>{
                $(e.currentTarget).find('.dropdown-menu').removeClass('show');
            });
        });
    }
});
