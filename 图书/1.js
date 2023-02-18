 window.onload = function () {
     // 判断是否有登录
     console.log(login);
     let timers = setInterval(function () {
         if (window.name='') {
             console.log(1);
             window.name = 'isReload'
             // 刷新的为2
         } else if (window.name = 'isReload') {
            srollFn()
            // clearInterval(timers)
             console.log(2);
         }
     }, 2500)
     // 时间
     function data() {
         let date = new Date()
         let year = date.getFullYear();
         let mou = date.getMonth();
         let da = date.getDate();
         return res = year + '-' + mou + '-' + da
     }
     let tiner = document.getElementById('date')
     tiner.innerHTML = data()
     // 关键字的循环
     function count() {
         let str = []
         let arr = ['book', 'book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8', 'book9',
             'book10', 'book2', 'book2', 'book2', 'book2', 'book2', 'book2', 'book2', 'book2'
         ]
         for (let i = 0; i < arr.length; i++) {
             str.push(arr[i])
             mester = setTimeout(() => {
                 document.getElementById('search').placeholder = str[i]
             }, i * 2000);
         }
     }
     count()
     //  图片的懒加载
     let str = document.getElementsByTagName('img')
     srollFn()
     window.onscroll = srollFn

     function srollFn() {
         let h = window.innerHeight || document.documentElement.clientHeight
         Array.from(str).forEach((item) => {
             const ele = item.getBoundingClientRect()
             if (ele.top > 0 && ele.top < h) {
                 item.setAttribute('src', item.getAttribute('data-url'))
             }
         })
     }
     //  评价星级
     function star() {
         // 获取标签为dark的
         let war = document.querySelector('.dark')
         // 获取所有标签为span的
         let number = document.querySelectorAll('span')

         war.onclick = function (event) {
             const target = event.srcElement || event.target
             console.log(target.nodeName);
             if (target.nodeName == "SPAN") {
                 let index = Array.from(number).findIndex(function (t) {
                     return t == target
                 })
                 for (var i = 0; i < number.length; i++) {
                     if (i <= index) {
                         number[i].className = "active"
                     } else {
                         number[i].className = ""
                     }
                 }
             }
         }
     }
     star()

     function a() {
         let input = document.getElementById('search')
         input.addEventListener('blur', function () {
             alert('1')
         })
     }
     a()
     // 置顶
     var div = document.querySelector('.backtop')
     var divtop = 500
     var times
     //  定义窗口的滚动事件
     window.onscroll = function () {
         var t = document.documentElement.scrollTop
         div.style.top = divtop + t + 'px'
     }
     div.onclick = function () {
         clearInterval(times)
         times = setInterval(function () {
             var top = document.documentElement.scrollTop
             if (top <= 0) {
                 clearInterval(times)
             } else {
                 document.documentElement.scrollTop = top - 550;

             }
         }, 100)
     }
     $(function () {
         //  右边选项卡上的文字
         $('#boxname div[id!=boxname1]').hide()
         $('#myTab li').click(function () {
             $('#boxname div').hide()
             var currentIndex = $(this).index();
             $('#boxname div').eq(currentIndex - 1).show()
         })
         // 右边选项卡
         $('#xuan div[id!=xuan1]').hide()
         $('#myTab li').click(function () {
             $('#xuan div').hide()
             var currentIndex = $(this).index();
             $('#xuan div').eq(currentIndex - 1).show()
         })
         // 畅销榜
         $('#hot li>div[id!=none1]').hide()
         $('#hot li').mouseenter(function () {
             $('#hot li>div').hide()
             $('#hot li>a>i').css('color', 'black')
             var cur = $(this).index()
             $('#hot li>div').eq(cur).show()
             $('#hot li>a>i').eq(cur).show().css('color', 'red')
         })
         // 监听置顶的位置
         function timers() {
             $('#floot ul li:last-child').hide()
             $(window).scroll(function () {
                 const h = $(window).scrollTop()
                 if (h > 240) {
                     $('#floot ul li:last-child').show()

                 } else {
                     $('#floot ul li:last-child').hide()
                 }
             })
         }
         timers()
     });

 }