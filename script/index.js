var domain = "http://new.aishenglian.com/";

function renderLunbo() {
    layui.use("laytpl", function() {
        var laytpl = layui.laytpl;
        var getTpl = lunbo.innerHTML;
        var view = document.getElementById("lunboId");
        $.ajax({
            type: "GET",
            url: domain + 'api/lunbo',
            error: function(XMLHttpRequest, textStatus, errorThrown) {},
            success: function(data) {
                var noticData = data.lunbotu;
                laytpl(getTpl).render(noticData, function(html) {
                    view.innerHTML = html;

                    var mySwiper = new Swiper('.swiper-container', {
                        direction: 'horizontal', // 垂直切换选项
                        loop: true, // 循环模式选项
                        autoplay: true,

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            bulletActiveClass: 'my-bullet-active',
                        },



                    })
                });
            }
        });
    });
}


function getNews() {
    layui.use("laytpl", function() {
        var laytpl = layui.laytpl;
        var getTpl = newsList.innerHTML;
        var view = document.getElementById("news-wrap");
        $.ajax({
            type: "GET",
            data: {
                typeid: localStorage.getItem('typeid'),
                page: 1
            },
            url: domain + 'api/newslist',
            error: function(XMLHttpRequest, textStatus, errorThrown) {},
            success: function(data) {
                var noticData = data.data.news

                laytpl(getTpl).render(noticData, function(html) {
                    view.innerHTML = html;
                    clickNewsEvent()

                });
            }
        });
    });
}



function clickEvent() {
    $(".typeid1").on("click", function() {

        localStorage.setItem('typeid', 1)

        window.location.href = "../html/news/index.html";

        // getNews()




    });

    $(".typeid2").on("click", function() {

        localStorage.setItem('typeid', 2)

        window.location.href = "../html/news/index.html";

        // getNews()




    });

    $(".typeid3").on("click", function() {

        localStorage.setItem('typeid', 3)

        window.location.href = "../html/news/index.html";

        // getNews()




    });

}


function clickNewsEvent() {

    $(".news-panel").on("click", function(e) {
        // console.log(e, 55566)
        // console.log(, '狗')

        var id = $(this).attr('data-id')
        localStorage.setItem('id', id)

        window.location.href = "../news-details/index.html"


        // getNews()




    });






}


function newsContent() {
    layui.use("laytpl", function() {
        var laytpl = layui.laytpl;
        var getTpl = newsDetails.innerHTML;
        var view = document.getElementById("body");
        $.ajax({
            type: "GET",
            // data: {
            //     id: localStorage.getItem('id'),

            // },
            url: domain + 'api/newsdetail/' + localStorage.getItem('id'),
            error: function(XMLHttpRequest, textStatus, errorThrown) {},
            success: function(data) {
                var noticData = data.news

                laytpl(getTpl).render(noticData, function(html) {
                    view.innerHTML = html;
                    clickNewsEvent()

                });
            }
        });
    });

}

var flag = true


function watchNode() {


    $(document).scroll(function() {
        var scroH = $(document).scrollTop(); //滚动高度



        var X = $('.introduce-wrap').offset().top; //元素在当前视窗距离顶部的位置

        if (scroH > X && flag) {


            $(".panel").each(function() {
                $(this).addClass('wow bounce')

                new WOW().init()
                flag = false


            });


            $(".spec-slide").each(function() {
                $(this).removeClass('wow slideInDown')

                // new WOW().init()
                // flag = false


            })

            $('.nav-right').removeClass('wow bounce')


        }





    })

}