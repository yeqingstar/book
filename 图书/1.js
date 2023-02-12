 window.onload = function () {
        function data(){
            
            let date=new Date()
            let year=date.getFullYear();
            let mou=date.getMonth();
            let da=date.getDate();
            return  res= year+'年'+mou+'月'+da+'日'
        }
        let tiner=document.getElementById('date')
        tiner.innerHTML=data()
        
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
                            // number[i].style.color='green'
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
    }
