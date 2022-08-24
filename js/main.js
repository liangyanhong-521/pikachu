import code from './code.js'
$(
    function (){
        let delayTime = 50
        let n = 0
        let id = 0
        // 点击之后获取到该按钮的class属性
        console.log("请点击按钮吧")
        $("button").click(function(){
            const kind = $(this).attr("data-speed")
            $(this).addClass("active").siblings(".active").removeClass("active")
            // 将 class=active 转移到目前点击的这个按钮上。
            console.log(kind)
            switch(kind){
                case 'pause':
                    clearTimeout(id)
                    break
                case 'play':
                    writeCode(code)
                    break
                case 'slow':
                    delayTime = 100
                    break
                case 'normal':
                    delayTime = 50
                    break
                case 'fast':
                    delayTime = 10
                    break
                case 'change':
                    $(location).attr('href', 'https://liangyanhong-521.github.io/doraemon/');
                    break  
            }
        })

        const lower = document.querySelector(".lowerLip")
        lower.addEventListener("click", function(){
            const audio = document.querySelector("audio")
            audio.play()
        })
        
        // 开始播放的函数设置
        function  writeCode(code) {
            // 获取id为code的元素节点
            let container = document.querySelector('#code')
            let styleTag = document.querySelector('#styleTag')
            id = setTimeout(function run() {
                n+=1
                container.innerHTML = code.substring(0, n)
                styleTag.innerHTML = code.substring(0,n)
                container.scrollTop = container.scrollHeight
                if(n<code.length){
                    id = setTimeout(run,delayTime)
                }
              }, delayTime)
        }
        writeCode(code)

    }
)