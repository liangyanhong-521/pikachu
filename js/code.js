const code = `
/* 首先，画皮卡丘黄色的皮肤 */
.chart-wrapper {
    background-color: #fee433;
}
/* 接下来，画皮卡丘的鼻子 */
.nose {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: #000000 transparent transparent;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px; 
}
/* 在鼻子上面做一些动画 */
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose:hover {
    animation: wave 300ms infinite linear;
}
/* 鼠标移动到鼻子看看有什么小动画呢？ */
/* 接下来，画皮卡丘的眼睛 */
.left-eyes,
.right-eyes {
    width: 49px;
    height: 49px;
    position: absolute;
    background-color: #2e2e2e;
    border: 2px solid #000000;
    border-radius: 50%;
}
/* 画皮卡丘的右眼睛 */
.left-eyes {
    position: absolute;
    left: 50%;
    margin-left: 90px;
}
/* 画皮卡丘右眼睛里面的眼仁 */
.left-eyes::before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid #000000;
    position: absolute;
    top: -1px;
    left: 7px;
}
/* 画皮卡丘的左眼睛 */
.right-eyes {
    position: absolute;
    right: 50%;
    margin-right: 90px;
}
/* 画皮卡丘左眼睛里面的眼仁 */
.right-eyes::after {
    content: '';
    width: 24px;
    height: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid #000000;
    position: absolute;
    top: -1px;
    right: 7px;
}
/* 接下来画皮卡丘的小红脸 */
.left-face,
.right-face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid #000000;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/* 右脸在右边 */
.left-face {
    position: absolute;
    left: 50%;
    margin-left: 116px;
}
/* 左脸在左边 */
.right-face {
    position: absolute;
    right: 50%;
    margin-right: 116px;
}
/* 接下来画皮卡丘的上嘴巴 */
.upperLip-left,
.upperLip-right {
    width: 90px;
    height: 25px;
    border: 2px solid black;
    background: #fee433;
    position: absolute;
    top: 55px;
    border-top: none;
}
/*把皮卡丘上嘴巴的左边摆到正确的位置 */
.upperLip-left {
    position: absolute;
    right: 50%;
    border-right: none;
    border-bottom-left-radius: 45px 25px;
    transform: rotate(-20deg);
}
/*把皮卡丘上嘴巴的右边摆到正确的位置 */
.upperLip-right {
    position: absolute;
    left: 50%;
    border-left: none;
    border-bottom-right-radius: 45px 25px;
    transform: rotate(20deg);
}
/* 接下来，画皮卡丘的下嘴巴 */
.lowerLip-wrapper {
    width: 300px;
    height: 100px;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -150px;
    overflow: hidden;
}
.lowerLip {
    width: 300px;
    height: 3500px;
    background: #990513;
    border: 2px solid #000000;
    border-radius: 200px / 2000px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
/* 接下来，画皮卡丘的小舌头 */
.lowerLip::before {
    content: '';
    width: 100px;
    height: 100px;
    background: #FC4A62;
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-left: -50px; 
    border-radius: 50px; 
}
/* 好啦，一只可爱的皮卡丘画好啦！ */
/* 点击匹拉丘的舌头有惊喜哦！试试看吧！ */
`

 export default code