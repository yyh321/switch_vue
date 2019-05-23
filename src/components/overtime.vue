<template>
    <div>
        <div class="weui-flex ">
            <div class="weui-flex__item level-center bak_img_middle" style="margin-top: 2vw">
            </div>
        </div>
        <div class="weui-flex weui_flex_top" style="margin-top: 16px">
            <div class="weui-flex__item level-center" >
                <span class="errtxt" style="margin-left: -17vw">请尝试以下操作后，再次尝试校准:</span>
            </div>
        </div>
        <div class="weui-flex weui_flex_top" >
            <div class="weui-flex__item level-center" style="margin-top:-1vw">
                <span class="errtxt errarea">1.  如果灯光或按键状态仍未发生变化，请确认设备安装正确，并且同原开关上下左右已居中对齐；</span>
            </div>
        </div>
        <div class="weui-flex weui_flex_top" style="margin-top:4vw">
            <div class="weui-flex__item level-center">
                <span class="errtxt errarea">2. 如为蓝牙设备，手机同开关精灵的距离请勿超过蓝牙的连接距离，无阻挡约15米（中间有墙壁，连接距离会缩短）。</span>
            </div>
        </div>
        <div class="weui-flex weui_flex_top" style="margin-top: 20vw">
            <div class="weui-flex__item level-center">
                <button class="btn_overtime_white" type="button" @click="hide()">稍后尝试</button>
            </div>
            <!--<div class="weui-flex__item level-center">
                <button class="btn_overtime" type="button" @click="again()">再次尝试</button>
            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                height:840,
            }
        },
        created(){

        },
        methods:{
            hide(){
                this.$router.push({
                    path: '/index',
                })
            },
            again(){
                this.$router.push({
                    path: '/index',
                })
            }
        }
    }
</script>

<style scoped>

</style>
