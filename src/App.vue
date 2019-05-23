<template>
    <div id="app">
        <!--<div>-->
            <!--<van-nav-bar   left-arrow-->
                         <!--@click-left="closePage" :title="global.headTitle" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}"/>-->
        <!--</div>-->
        <!--<div class="weui-navbar" @click="closePage" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">-->
            <!--<div class="weui-navbar__item">{{global.headTitle}}</div>-->
        <!--</div>-->
        <div style="margin-top: 5px" class="back">
            <transition :translate="transitionName">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import global from "assets/js/global"
    export default {
        data() {
            return {
                transitionName:'',
                global:global,
                title1:"ssssss"
            }
        },
        created(){
            let that = this;
            let curUrl = location.href;
            if(that.$utils.getQueryString("theme_type") == "1"){
                that.global.themeType = that.$utils.getQueryString("theme_type");
            }else{
                that.global.themeType = "nochange";
                // that.global.themeType = 1;
            }
            console.log(that.global.themeType+"aaaaaa")
        },
        methods: {
            onClickLeft() {
                console.log('返回');
                window.history.go(-1);
            },
            onClickRight() {
                console.log("确定")
            },
            closePage(){
                // alert("aaa");
                Matrix.close();
                // console.log(Matrix.close)
            }
        },
        watch: {
            '$route'(to, from) {
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'van-slide-right'
                } else {
                    this.transitionName = 'van-slide-left';
                }
                console.log(this.transitionName)
            },

        }
    }
</script>

<style>
    .back {
        background:#F6F6F6;
        /*background-image: url(./assets/image/bg@1x.png);*/
        background-repeat:no-repeat;
        background-size:100%;
        width: 100vw;
        height: 94vh;
        margin-top: -15px;
        -moz-background-size:100% 100%;
    }


    .van-nav-bar{border: 0!important; }
    .van-hairline--bottom:after{border: 0!important;}
    .van-nav-bar__title{color: #fff!important;}

    .weui-navbar:after{border-bottom:none!important;}
    .weui-navbar__item{color:#fff;}
</style>
