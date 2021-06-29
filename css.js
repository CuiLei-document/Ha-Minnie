let str = `
<style>
*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
body,html{
    width:100%;
    height: 100%;
    background-color: #fee2d2;
}

.wrapper .dog{
    width:180px;
    height:186px;
    position: relative;
}
@keyframes head{
    0%{
        transform: rotate(0deg)
    }
    30%{
        transform: rotate(0deg)
    }
    40%{
        transform: rotate(-20deg)
    }
    80%{
        transform: rotate(-20deg);
    }
    90%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(0deg)
    }
}

.dog .dog-head{
    /* border: 1px solid red; */
    width:100px;
    height:90px;
    position: absolute;
    top: 30px;
    z-index:5;
    left: calc(50% - 50px);
    background-color: #efc092;
    border-radius:50%;
    animation: head 6s linear infinite;
} 
.dog-head::before,
.dog-head::after{
    content:'';
    width:79px;
    height:50px;
    position:absolute;
    top:44px;
    z-index:5;
    background-color: red;
    border-radius: 50%;
}
.dog-head::before{
    left: -7px;
    transform: rotate(50deg);
}
.dog-head::after{
    right: -7px;
    transform: rotate(-46deg);
}
.dog-ears{
    width: 80px;
    height: 50px;
    position: absolute;
    z-index:0;
    top: -2px;
    border-radius: 150px 0 150px 0;
    background-color: #efc092;
}
.dog-ears::after{
    content: '';
    width: 50px;
    height: 30px;
    position: absolute;
    z-index:0;
    top: 8px;
    left: 20px;
    border-radius: 150px 0 150px 0;
    transform: rotate(-176deg);
    background-color: #fee2d2;
}
 .ears-left{
    left: -22px;
    transform: rotate(-105deg);
}
.ears-right{
    left: 44px;
    transform: rotate( -22deg);
}


.dog-mouth{
    width:60px;
    height:35px;
    background-color: #fee2d2;
    position:absolute;
    bottom:-15px;
    left: 20px;
    z-index:10;
    border-radius:50%;
}
.dog-mouth::after{
    content:'';
    width:10px;
    height: 40px;
    background-color:#fee2d2;
    position:absolute;
    bottom:30px;
    left: 24px;
    z-index:10;
    border-radius: 20px;
}
.dog-mouth .dog-nose{
    width:16px;
    height:10px;
    position: absolute;
    top:8px;
    left:calc(50% - 8px);
    background-color: #000;
    border-radius: 50%;
}
@keyframes tongue{
    0%{
        height:10px;
    }
    30%{
        height: 10px;
    }
    40%{
        height:20px;
    }
    60%{
        height:10px;
    }
    80%{
        height: 20px;
    }
    90%{
        height: 10px;
    }
    100%{
        height: 10px;
    }
}
.dog-mouth .dog-tongue{
    width:20px;
    height: 10px;
    position:absolute;
    top:24px;
    left: calc(50% - 10px);
    background-color:#f4a4ad;
    border-radius: 0 0 10px 10px;
    animation: tongue 4s linear infinite;
}
.dog-eyes{
    /* border: 1px solid red; */
    width: 10px;
    height: 16px;
    background-color: #000;
    position: absolute;
    top: 52px;
    left: 28px;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 33px 0 0 #000;
}
.dog-eyes::after{
    content:'';
    width: 92px;
    height: 50px;
    position: absolute;
    top: -50px;
    left: -24px;
    background-color: #efc092;
    border-radius: 50%;

}
.dog-eyes::before{
    content:'';
    width: 4px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    top:2px;
    left:2px;
    background-color: #fffeff;
    box-shadow: 34px 0 0 #fffeff;
}

.dog-body{
    width:  54px;
    height: 60px;
    position: absolute;
    top:120px;
    left: calc(50% - 35px);
    background-color: #ef8d4e;
    border-radius: 49px 0 0 20px;
}
.dog-body::before{
    content:'';
    width: 50px;
    height: 60px;
    position: absolute;
    top: 3px ;
    left: calc(50% - 17px);
    background-color: #efbf8e;
    border-radius: 100px 100px 0 0;
}
.dog-body::after{
    content:'';
    width: 15px;
    height: 30px;
    position: absolute;
    top: 32px;
    left: 28px;
    background-color: #d58b4e;
    border-radius: 100px 100px 0 0;
}
.dog-foot{
    width: 20px;
    height: 13px;
    position: absolute;
    z-index:5;
    bottom: -3px;
    left: 8px;
    background-color: #fce2d3;
    border-radius: 10px 10px 0 0;
    box-shadow: 34px 0  0 #fce2d3;
}
@keyframes tail {
    0%{
        transform: rotate(-47deg)
    }
    100%{
        transform: rotate(-57deg)
    }
}
.dog-tail{
    width: 10px;
    height: 50px;
    position: absolute;
    top: 120px;
    left:calc(50% - 45px);
    transform:rotate(-47deg);
    background-color: #ecc093;
    border-radius: 10px 0 0px / 50px 0 0 0px;
    animation: tail .08s infinite alternate;
}
@keyframes balls {
    0%{
        transform: rotate(0);
        transform: translateX(0)
    }
    40%{
        transform: rotate(30px);
        transform: translateX(30px)
    }
    50%{
        transform: rotate(60px);
        transform: translateX(40px)
    }

    70%{
        transform: rotate(60px);
        transform: translate(30px);
    }
    80%{
        transform: rotate(10px);
        transform: translate(10px);
    }
    100%{
        transform: rotate(0);
        transform: translate(0)
    }
}
.ball{
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    background-color: red;
    animation: balls 650ms linear infinite; 
    border: 1px solid #000;
}
</style>
`

export default str