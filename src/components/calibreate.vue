<template>
    <div id="Content">
        <!--<button @click="start()">点击开始</button>-->
        <div class="weui-flex" style="margin-top: 32px;">
            <div class="weui-flex__item level-center">
                <span class="weui-text calibrate_desc">{{topDesc}}</span>
            </div>
        </div>
        <div class="weui-flex" style="margin: 48px 0;">
            <div class="weui-flex__item level-center">
                <div class="option_panel" :style="{backgroundImage:(global.themeType == 'nochange'?onOff:onOff1)}">
                    <div class="option_key weui-flex">
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <span class="weui-text option_desc" v-if="middleShow" style="color: #333; font-weight: bold; font-size: 1.2rem;">{{middleDesc}}</span>
            </div>
        </div>
        <div class="weui-flex" style="margin-top: 5px;">
            <div class="weui-flex__item level-center">
                <span v-if="global.themeType == 'nochange'" :class="['weui-text', 'option_txt',waveShow?'highLight':'']"
                      :style="{fontSize: waveShow?'5.2vw':'3.9vw',color:waveShow?'#f1ac2e':''}"
                      v-html="btnShow?'当原开关按键状态变化时，松开按钮...':'当原开关按键状态变化时，<br/>请立即松手...'"> </span>

                <span v-if="global.themeType != 'nochange'" :class="['weui-text', 'option_txt',waveShow?'highLight':'']"
                      :style="{fontSize: waveShow?'5.2vw':'3.9vw',color:waveShow?'#2BB6FC':''}"
                      v-html="btnShow?'当原开关按键状态变化时，松开按钮...':'当原开关按键状态变化时，<br/>请立即松手...'"> </span>
            </div>
        </div>
        <div class="weui-flex" style="margin-top: 18px;">
            <div class="weui-flex__item level-center">
                <div class="dw_btn" v-show="waveShow">
                    <lottie v-if="global.themeType == 'nochange'" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
                    <lottie v-if="global.themeType != 'nochange'" :options="defaultOptions1" v-on:animCreated="handleAnimation"/>
                </div>
                <!--<div id="static">-->

                <!--<div :class="['dw_btn', btnShow?'dw_btn_img':'']" v-show="btnShow && global.themeType == 'nochange'" >-->
                <!--<span class="click_txt" v-html="step == 1 ? '按下<br/>开始':'再次<br/>按住'"></span>-->
                <!--<div class="dw_btn_ok" v-show="okShow">-->
                <!--<div class="option_ok_key">-->
                <!--<lottie :options="okOptions" v-on:animCreated="handleOkAnimation"/>-->
                <!--</div>  &lt;!&ndash;对勾&ndash;&gt;-->
                <!--</div>-->
                <!--</div>-->

                <!--<div :class="['dw_btn', btnShow?'dw_btn_img':'']" v-show="btnShow && global.themeType != 'nochange'">-->
                <!--<span class="click_txt" v-html="step == 1 ? '按下<br/>开始':'再次<br/>按住'"></span>-->
                <!--<div class="dw_btn_ok1" v-show="okShow">-->
                <!--<div class="option_ok_key">-->
                <!--<lottie :options="okOptions" v-on:animCreated="handleOkAnimation"/>-->
                <!--</div>  &lt;!&ndash;对勾&ndash;&gt;-->
                <!--</div>-->
                <!--</div>-->

                <!--</div>-->
                <!--&& global.themeType != 'nochange'-->

                <div :class="['dw_btn', btnShow?'dw_btn_img':'']" v-show="btnShow " id="static">
                    <span class="click_txt" v-html="step == 1 ? '按住<br/>开始':'再次<br/>按住'"></span>
                    <div class="dw_btn_ok" v-show="okShow">
                        <div class="option_ok_key">
                            <lottie :options="okOptions" v-on:animCreated="handleOkAnimation"/>
                        </div>  <!--对勾-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as animationData from '../assets/js/button1.json';
    import * as animationData1 from '../assets/js/button.json';
    import * as okData from '../assets/js/ok.json';
    import global from  "../assets/js/global"

    export default {
        data() {
            return {
                currentKey: 0,
                waveShow: false,
                btnShow: true,
                okShow: false,
                middleShow: true,
                topDesc: "第一步: 校准按键一端",
                onOff: 'url(' + require('../assets/image/swith_icon_three_left_off.png') + ')',
                onOff1: 'url(' + require('../assets/image/swith_icon_three_left_off_blue.png') + ')',
                step: 1,
                middleDesc: "按住下方按钮，开始校准",
                defaultOptions: {animationData: animationData.default},
                defaultOptions1: {animationData: animationData1.default},
                okOptions: {animationData: okData.default},
                anim:'',
                okAmin:'',
                global:global
            }
        },
        created() {
            var that = this;
            that.currentKey = parseInt(that.$route.query.key);
            that.token = that.$utils.getQueryString("token")
            console.log(that.token)
            that.devId = that.$utils.getQueryString("deviceSn")
            console.log(that.devId)
            that.pid = that.$utils.getQueryString("pid")
            console.log(that.pid)
            that.mid = that.$utils.getQueryString("mid")


            that.setOptionPanel(true)
            that.start();
            ///发送开始校准
            var startCommand = "0155010"+that.currentKey;


            //that.utils.writeValue(startCommand,that.currentKey);
            setTimeout(function () {
                // 发45 度
                that.calibrate();
                // that.utils.writeValue("0155020"+that.currentKey+that.utils.int2HexStr(45));
                /*if(localStorage.getItem("type") == "1"){
                    that.calibrate();
                }else{
                    that.autoCalibrate();
                }*/
            }, 50)
        },
        methods: {

            start:function(){
                this.sendCommand(4,{"adjustSteerType":1,"changeKey":this.currentKey,"oneLevelOn":45})
            },
            handleAnimation: function (anim) {
                this.anim = anim;
            },
            handleOkAnimation: function (anim) {
                this.okAnim = anim;
                anim.stop();
                anim.setSpeed(0.3);
            },
            nextPage: function () {
                this.$router.push({
                    path: '/selectkey',
                    query: {way: type}
                })
            },

            setOptionPanel:function(status){
                let keyCount = parseInt(sessionStorage.getItem("keyCount"));
                console.log("按键数量:  "+ keyCount)
                console.log("当前按键:  "+ this.currentKey);
                switch (keyCount){
                    case 1:
                        if(global.themeType == 'nochange'){
                            status?this.onOff = 'url(' + require('../assets/image/swith_icon_one_on.png') + ')':this.onOff = 'url(' + require('../assets/image/swith_icon_one_off.png') + ')'
                        }else{
                            status?this.onOff = 'url(' + require('../assets/image/swith_icon_one_on_blue.png') + ')':this.onOff = 'url(' + require('../assets/image/swith_icon_one_off_blue.png') + ')'
                        }
                        break;
                    case 2:
                        if(global.themeType == 'nochange') {
                            if (this.currentKey == 1) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_two_left_on.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_two_left_off.png') + ')'
                            } else if (this.currentKey == 4) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_two_right_on.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_two_right_off.png') + ')'
                            }
                        }else {
                            if (this.currentKey == 1) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_two_left_on_blue.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_two_left_off_blue.png') + ')'
                            } else if (this.currentKey == 4) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_two_right_on_blue.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_two_right_off_blue.png') + ')'
                            }
                        }
                        break;
                    case 3:
                        if(global.themeType == 'nochange') {
                            if (this.currentKey == 1) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_left_on.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_left_off.png') + ')'
                            } else if (this.currentKey == 2) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_middle_on.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_middle_off.png') + ')'
                            } else if (this.currentKey == 4) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_rigth_on.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_rigth_off.png') + ')'
                            }
                        } else{
                            if (this.currentKey == 1) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_left_on_blue.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_left_off_blue.png') + ')'
                            } else if (this.currentKey == 2) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_middle_on_blue.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_middle_off_blue.png') + ')'
                            } else if (this.currentKey == 4) {
                                status ? this.onOff = 'url(' + require('../assets/image/swith_icon_three_rigth_on_blue.png') + ')' : this.onOff = 'url(' + require('../assets/image/swith_icon_three_rigth_off_blue.png') + ')'
                            }
                            break;
                        }
                }
            },

            calibrate: function () {
                var that = this;
                var angles = [40, 50, 34, 56, 28, 62, 20, 70, 10, 80, 0, 90];
                var angles1 = [34, 40, 44, 50, 56, 62, 70, 80, 90];//上端
                var angles2 = [56, 50, 44, 40, 34, 28, 20, 10, 0];//下端
                var angle1 = 0;   //第一次停下
                var angle2 = 0;  //第二次停下
                var j = 0;
                var i = 0
                var flag = true;
                var sId = 0;
                var tId = 0;
                var upValue = 0;
                var downValue = 0;
                document.getElementById('static').ontouchstart = function () {
                    // alert("aa");
                    that.btnShow = false;
                    that.waveShow = true;
                    that.middleShow = false;
                    that.topDesc = "正在校准...";
                    if (flag) {
                        if (that.step == 1) {
                            //播放波浪
                            console.log("anim:   ",that.anim)
                            // that.anim.play();
                            sId = setInterval(function () {//依次发第一个角度数字;
                                if (i >= 12) {
                                    clearInterval(sId);
                                    that.$router.push({
                                        path: '/overtime'
                                    })
                                    return;
                                    //跳转失败页面
                                }
                                that.testAngle(angles[i],that.currentKey);
                                i++;
                                j = 1;

                            }, 4000);
                        } else if (that.step == 2) {
                            //下端波浪
                            sId = setInterval(function () {
                                if (i == 9) {
                                    clearInterval(sId);
                                    that.$router.push({
                                        path: '/overtime'
                                    })
                                    return;
                                    //跳转失败页面
                                }
                                if (angle1 > 45) {//发送angles2中角度
                                    that.testAngle(angles2[i],that.currentKey);
                                } else {//发送angles1中角度
                                    that.testAngle(angles1[i],that.currentKey);
                                }
                                i++;
                                j = 1;
                            }, 4000);
                        }
                    }
                }
                document.getElementById('static').ontouchend = function () {
                    console.log("当前步数")
                    if (flag) {
                        if (j > 0) {
                            j = 0;
                            flag = false;
                            clearInterval(sId);
                            if (that.step == 1) {
                                that.topDesc = "第一步: 完成";
                                that.middleDesc = "即将开始第二步..."
                                angle1 = angles[i - 1];
                                that.setOptionPanel(false);
                                var cId = setTimeout(function () {
                                    that.step = 2;
                                    // ok.stop();
                                    flag = true;
                                    //隐藏对勾
                                    that.okShow = false;
                                    that.waveShow = false; //隐藏波浪
                                    that.btnShow = true;
                                    document.getElementsByClassName('click_txt')[0].style.display = " ";
                                    that.topDesc = "第二步: 校准按键另一端";
                                    that.middleDesc = "再次按住下方按钮"
                                    if (angle1 > 60) {
                                        i = 3;   //从40开始依次发
                                    } else if (angle1 > 45) {
                                        i = angles2.indexOf(angle1) + 1;
                                    } else if (angle1 < 30) {
                                        i = 3;
                                    } else {
                                        i = angles1.indexOf(angle1) + 1;
                                    }
                                }, 2000);
                                // timeoutIds.push(cId);
                            } else if (that.step == 2) {
                                that.topDesc = "第二步: 完成";
                                that.middleDesc = "即将开始测试"
                                if (angle1 > 45) {
                                    angle2 = angles2[i - 1]
                                } else {
                                    angle2 = angles1[i - 1]
                                }
                                that.setOptionPanel(true);
                                var nId = setTimeout(function () {
                                    flag = true;
                                    if (angle1 > angle2) {
                                        upValue = angle1;
                                        downValue = angle2;
                                    } else {
                                        upValue = angle2;
                                        downValue = angle1;
                                    }
                                    // setKeyAngles();
                                    that.$router.push({
                                        path: '/test',
                                        query: {upValue: upValue, downValue: downValue, angle1: angle1, angle2: angle2,key:that.currentKey}
                                    })
                                }, 2000);
                                // timeoutIds.push(nId);
                            }
// up.play();
//                             dw.stop();
                            // $('#up_btn').hide();
                            that.waveShow = false;
                            that.btnShow = true;

                            // $('#dw_btn').hide();
                            // $('#static').show();
                            document.getElementsByClassName('click_txt')[0].style.display = "none";
                            // $('.dw_btn_ok').show();
                            // ok.play();
                            that.okShow = true;
                            that.okAnim.play();
                        } else {

                            if(that.step == 1){
                                that.topDesc = "第一步: 校准按键一端"
                            }else{
                                that.topDesc = "第二步: 校准按键另一端"
                                that.middleDesc = "再次按住下方按钮"
                            }

                            // openToast();
                            // if(stepIndex == 2){
                            //     $("#clickStep").html("第一步: 校准按键一端");
                            //     $('#clickStart').html("按住下方按钮，开始校准");
                            // }else if(stepIndex == 3){
                            //     $("#clickStep").html("第二步: 校准按键另一端");
                            //     $('#clickStart').html("再次按住下方按钮");
                            // }
                            // $("#click_desc").html("当原开关按键状态变化时，松开下方按钮...").css('color', '#2b3852').css("font-weight","").css("font-size","");
                            // // clearInterval(tId);
                            clearInterval(sId);
                            // up.stop();
                            // dw.stop();
                            // $('#up_btn').hide();
                            // $('#dw_btn').hide();
                            that.waveShow = false;
                            that.btnShow = true;
                            setTimeout(function () {
                                that.okAnim.pause();
                            },2000)
                            // $('#static').show().addClass('dw_btn_img');
                        }
                        that.middleShow = true;
                    }
                }
            },
            testAngle:function(angel,currentKey){
                this.sendCommand(4,{"adjustSteerType":2,"changeKey":currentKey,"oneLevelOn":angel})
            },
            sendCommand:function(cmdId,param){
                let that = this;

                var data1 = {
                    // "mid": that.mid,
                    "devId": that.devId,
                    "cmdId": cmdId,
                    "in": param,
                    "action":"control"
                };

                $.ajax({
                    type:"post",
                    data:JSON.stringify(data1),
                    url:global.baseUrl,
                    dataType:"json",
                    contentType:"application/json",
                    success:function (response) {
                        console.log("返回值",response);
                    },
                    error:function(res){
                        console.log("error",res)
                    }
                })



                // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/'+that.pid, [{
                //     "mid": that.mid,
                //     "devId": that.devId,
                //     "cmdId": cmdId,
                //     "in": param
                // }], {
                //     headers: {
                //         'Authorization': 'Bearer '+that.token,
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     }
                // }).then(response => {
                //     console.log("返回值",response);
                // }).catch(response => {
                //     console.log("error",response)
                // })
            },
            autoCalibrate:function () {
                var that = this;
                var angles = [40, 50, 34, 56, 28, 62, 20, 70, 10, 80, 0, 90];
                var angles1 = [34, 40, 44, 50, 56, 62, 70, 80, 90];//上端
                var angles2 = [56, 50, 44, 40, 34, 28, 20, 10, 0];//下端
                var angle1 = 0;   //第一次停下
                var angle2 = 0;  //第二次停下
                var j = 0;
                var i = 0
                var flag = true;
                var sId = 0;
                var tId = 0;
                var upValue = 0;
                var downValue = 0;
                var keyStatus = localStorage.getItem("status");
                console.log(keyStatus);
                if (keyStatus == '1') {
                    that.topDesc = "校准按键上端"
                } else if (keyStatus == '0') {
                    that.topDesc = '校准按键下端';
                }
                var i = 3;
                document.getElementById('static').ontouchstart = function () {
                    if(flag){
                        that.btnShow = false;
                        that.waveShow = true;
                        that.middleShow = false;
                        //波纹
                        that.topDesc = "正在校准..."
                        sId = setInterval(function () {
                            if (i >= 9) {
                                clearInterval(sId);
                                that.$router.push({
                                    path: '/overtime'
                                })
                                flag = false;
                                return;
                                //跳转失败页面
                            }
                            if (keyStatus == '1') {
                                that.testAngle(angles1[i],that.currentKey);
                                var wId = setTimeout(function () {
                                    that.testAngle(40,that.currentKey);
                                }, 200)
                                // timeoutIds.push(wId);
                            } else if (keyStatus == '0') {
                                that.testAngle(angles2[i],that.currentKey);
                                var wId = setTimeout(function () {
                                    that.testAngle(50,that.currentKey);
                                }, 200)
                                // timeoutIds.push(wId);
                            }
                            i++;
                            j = 1;
                            console.log(i);
                        }, 2000);
                    }
                }
                document.getElementById('static').ontouchend = function () {
                    if(j>0){
                        j=0;
                        if(i == 9){
                            i = 8;
                        }
                        that.topDesc = "校准完成"
                        //即将开始测试
                        //停止波浪
                        that.waveShow = false;
                        that.btnShow = true;
                        $('.click_txt').hide();
                        that.okShow  = true;
                        clearInterval(sId);
                        if (keyStatus == '1') {
                            angle1 = angles1[i];
                            angle2 = 40;
                        } else if (keyStatus == '0') {
                            angle1 = angles2[i];
                            angle2 = 50;
                        }
                        if(flag){
                            flag = false;
                            var nId = setTimeout(function () {
                                flag = true;
                                if (angle1 > angle2) {
                                    upValue = angle1;
                                    downValue = angle2;
                                } else {
                                    upValue = angle2;
                                    downValue = angle1;
                                }
                                // setKeyAngles();
                                that.$router.push({
                                    path: '/test',
                                    query: {upValue: downValue, downValue: upValue, angle1: angle1, angle2: angle2,key:that.currentKey}
                                })
                            },3000)
                        }
                        that.okShow = true;
                        that.waveShow = false;
                        that.btnShow = true;
                    }else{
                        clearInterval(sId);
                        that.waveShow = false;
                        that.btnShow = true;
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>