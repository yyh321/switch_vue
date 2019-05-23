<template>
    <div style="margin-top: -0px!important; padding: 5px!important;">
        <div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <span class="weui-text calibrate_desc" id="panel_desc">从下方选择按键</span>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
        <span class="weui-text calibrate_txt" id="panel_txt">按键校准过程共分三步，大约需要30秒。<br/>
            请按屏幕提示进行操作。</span>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <div class="start_background_img">
                    <div class="weui-flex">
                        <div class="weui-flex__item start_key_area level-center">
                            <div class="weui-flex__item level-center start_key_txt vertical-top" v-if="leftShow">
                    <span class="start_key" @click="nextPage('1')" :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}">
                        <img  v-if="global.themeType == 'nochange'" class="start_img" v-bind:src="leftIsOk?okImg:selectImg"/>
                        <img  v-if="global.themeType != 'nochange'" class="start_img" v-bind:src="leftIsOk?okImg1:selectImg"/>
                        <br/>{{leftIsOk?'完成':'校准'}}<br/>左键</span>
                            </div>
                            <div class="line_area start_key_txt" v-if="leftShow && rightShow">
                                <img class="line" src="../assets/image/swith_icon_line@3x.png">
                            </div>
                            <div class="weui-flex__item level-center start_key_txt vertical-top" v-if="middleShow">
                    <span class="start_key" @click="nextPage('2')" :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}">
                        <img  v-if="global.themeType == 'nochange'" class="start_img"
                             v-bind:src="middleIsOk?okImg:selectImg"/>
                        <img  v-if="global.themeType != 'nochange'" class="start_img"
                              v-bind:src="middleIsOk?okImg1:selectImg"/>
                        <br/>{{middleIsOk?'完成':'校准'}}<br/>{{keyCount == 1?'按键':'中键'}}</span>
                            </div>
                            <div class="line_area start_key_txt" v-if="middleShow && rightShow">
                                <img class="line" src="../assets/image/swith_icon_line@3x.png">
                            </div>
                            <div class="weui-flex__item level-center start_key_txt vertical-top" v-if="rightShow">
                    <span class="start_key" @click="nextPage('4')" :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}">
                                 <img v-if="global.themeType != 'nochange'" class="start_img" v-bind:src="rightIsOk?okImg1:selectImg"/>
                                 <img v-if="global.themeType == 'nochange'" class="start_img" v-bind:src="rightIsOk?okImg:selectImg"/>
                                <br/>{{rightIsOk?'完成':'校准'}}<br/>右键</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="weui-flex">
            <div class="weui-flex__item level-center">
                <span class="note" v-if="!btnShow">注意：从上方选择，请勿点击实体按键！</span>
            </div>
        </div>-->
        <!--<div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <span class="note" v-if="!btnShow">当前开关为{{keyType}},<span @click="setType()"
                                                                          style="color: #0082ff">修改</span></span>
            </div>
        </div>-->

        <div class="weui-flex" v-if="chkShow">
            <div class="weui-flex__item level-center">
                <div class="status_weui-cells weui-cells weui-cells_checkbox calibrate_checkbox weui-cells_chkbox">
                    <label class="weui-cell weui-check__label" for="syncchk">
                        <div class="weui-cell__hd" style="display: flex">
                            <input type="checkbox" class="weui-check" v-model="syncChk" name="syncchk" id="syncchk"/>
                            <i class="weui-icon-checked"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <p class="calibrate_chktxt">将校准高度同步到其他按键</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="weui-flex" id="finish_ara" v-if="btnShow">
            <div class="weui-flex__item level-center">
                <button class="weui-btn_custom" type="button" @click="finish()">完成</button>
            </div>
        </div>
    </div>
</template>

<script>

    import global from  "../assets/js/global"


    export default {
        data() {
            return {
                currentKey: 0,
                keyCount: 0,
                leftShow: false,
                middleShow: false,
                rightShow: false,
                chkShow: false,
                btnShow: false,
                leftIsOk: false,
                middleIsOk: false,
                rightIsOk: false,
                selectImg: require('../assets/image/switch_calibration_button_middle_n.png'),
                okImg: require('../assets/image/switch_calibration_button_middle_p.png'),
                okImg1: require('../assets/image/switch_calibration_button_middle_p2.png'),
                keyType: '',
                syncChk: 0,
                command: "",
                upValue: 0,
                downValue: 0,
                param: null,
                global:global
            }
        },
        created() {
            var that = this;
            that.global.headTitle = "按键校准向导";
            that.token = that.$utils.getQueryString("token")
            console.log(that.token)
            that.devId = that.$utils.getQueryString("deviceSn")
            console.log(that.devId)
            that.pid = that.$utils.getQueryString("pid")
            console.log(that.pid)
            that.mid = that.$utils.getQueryString("mid")
            that.keyCount = parseInt(sessionStorage.getItem("keyCount"));
            this.upValue = parseInt(this.$route.query.upValue);
            this.downValue = parseInt(this.$route.query.downValue);
            console.log("按键数量: "+that.keyCount);
            if (that.keyCount == 1) {
                that.middleShow = true;
            } else if (that.keyCount == 2) {
                that.leftShow = true;
                that.rightShow = true;
            } else if(that.keyCount == 3){
                that.leftShow = true;
                that.middleShow = true;
                that.rightShow = true;
            }

            var data1 = {
                "action":"get-device",
                "devId":that.devId
            }

            $.ajax({
                type:"post",
                data:JSON.stringify(data1),
                url:global.baseUrl,
                dataType:"json",
                contentType:"application/json",
                success:function (response) {
                    console.log(response)
                    let data = response.data[0].out;
                    that.key_one_upvalue = data.oneLevelOn;
                    that.key_one_dwvalue = data.oneLevelOff;
                    that.key_two_upvalue = data.twoLevelOn;
                    that.key_two_dwvalue = data.twoLevelOff;
                    that.key_three_upvalue = data.threeLevelOn;
                    that.key_three_dwvalue = data.threeLevelOff;
                    if (that.key_one_upvalue < that.key_one_dwvalue) {
                        var temp = that.key_one_upvalue;
                        that.key_one_upvalue = that.key_one_dwvalue;
                        that.key_one_dwvalue = temp;
                    }
                    if (that.key_two_upvalue < that.key_two_dwvalue) {
                        var temp = that.key_two_upvalue;
                        that.key_two_upvalue = that.key_two_dwvalue;
                        that.key_two_dwvalue = temp;
                    }
                    if (that.key_three_upvalue < that.key_three_dwvalue) {
                        var temp = that.key_three_upvalue;
                        that.key_three_upvalue = that.key_three_dwvalue;
                        that.key_three_dwvalue = temp;
                    }
                    // alert(that.key_one_upvalue + " " + that.key_one_dwvalue + " " + that.key_two_upvalue + " " + that.key_two_dwvalue + " " + that.key_three_upvalue + " " + that.key_three_dwvalue +" 当前:");
                    var leftKeyed = window.lefted;
                    var middleKeyed = window.middled;
                    var rightKeyed = window.righted;
                    if (leftKeyed) {
                        that.upValue = that.key_one_upvalue;
                        that.downValue = that.key_one_dwvalue;
                        that.leftIsOk = true;
                    }
                    if (rightKeyed) {
                        that.upValue = that.key_three_upvalue;
                        that.downValue = that.key_three_dwvalue;
                        that.rightIsOk = true;
                    }
                    if (middleKeyed) {
                        that.upValue = that.key_two_upvalue;
                        that.downValue = that.key_two_dwvalue;
                        that.middleIsOk = true;
                    }
                    if ((leftKeyed && !middleKeyed && !rightKeyed) ||
                        (!leftKeyed && middleKeyed && !rightKeyed) ||
                        (!leftKeyed && !middleKeyed && rightKeyed)) {//只有一个按键被校准时
                        that.chkShow = true;
                    } else if ((leftKeyed && middleKeyed && !rightKeyed)) {//1.2校准成功
                        if (key_one_upvalue == key_two_upvalue && key_one_dwvalue == key_two_dwvalue) {
                            that.chkShow = true;
                        }
                    } else if ((leftKeyed && !middleKeyed && rightKeyed)) {//1.3校准成功
                        if (key_one_upvalue == key_three_upvalue && key_one_dwvalue == key_three_dwvalue) {
                            that.chkShow = true;
                        }
                    } else if ((!leftKeyed && middleKeyed && rightKeyed)) {//2.3校准成功
                        if (key_two_upvalue == key_three_upvalue && key_two_dwvalue == key_three_dwvalue) {
                            that.chkShow = true;
                        }
                    } else if (leftKeyed && middleKeyed && rightKeyed) {
                        $('#panel_desc').html('全部校准完成');
                        $('#panel_txt').html('点击完成保存校准结果，然后尝试使用天猫精灵<br/>控制开关精灵吧。');
                    }
                },
                error:function(res){
                    console.log("error",res)
                }
            })




            //查询旧的度数

            // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/info/' + that.pid, [{
            //     "mid": that.mid,
            //     "devId": that.devId,
            // }], {
            //     headers: {
            //         'Authorization': 'Bearer ' + that.token,
            //         'Content-Type': 'application/json;charset=UTF-8'
            //     }
            // }).then(response => {
            //     console.log(response)
            //     let data = response.data[0].out;
            //     that.key_one_upvalue = data.oneLevelOn;
            //     that.key_one_dwvalue = data.oneLevelOff;
            //     that.key_two_upvalue = data.twoLevelOn;
            //     that.key_two_dwvalue = data.twoLevelOff;
            //     that.key_three_upvalue = data.threeLevelOn;
            //     that.key_three_dwvalue = data.threeLevelOff;
            //     if (that.key_one_upvalue < that.key_one_dwvalue) {
            //         var temp = that.key_one_upvalue;
            //         that.key_one_upvalue = that.key_one_dwvalue;
            //         that.key_one_dwvalue = temp;
            //     }
            //     if (that.key_two_upvalue < that.key_two_dwvalue) {
            //         var temp = that.key_two_upvalue;
            //         that.key_two_upvalue = that.key_two_dwvalue;
            //         that.key_two_dwvalue = temp;
            //     }
            //     if (that.key_three_upvalue < that.key_three_dwvalue) {
            //         var temp = that.key_three_upvalue;
            //         that.key_three_upvalue = that.key_three_dwvalue;
            //         that.key_three_dwvalue = temp;
            //     }
            //     // alert(that.key_one_upvalue + " " + that.key_one_dwvalue + " " + that.key_two_upvalue + " " + that.key_two_dwvalue + " " + that.key_three_upvalue + " " + that.key_three_dwvalue +" 当前:");
            //     var leftKeyed = window.lefted;
            //     var middleKeyed = window.middled;
            //     var rightKeyed = window.righted;
            //     if (leftKeyed) {
            //         that.upValue = that.key_one_upvalue;
            //         that.downValue = that.key_one_dwvalue;
            //         that.leftIsOk = true;
            //     }
            //     if (rightKeyed) {
            //         that.upValue = that.key_three_upvalue;
            //         that.downValue = that.key_three_dwvalue;
            //         that.rightIsOk = true;
            //     }
            //     if (middleKeyed) {
            //         that.upValue = that.key_two_upvalue;
            //         that.downValue = that.key_two_dwvalue;
            //         that.middleIsOk = true;
            //     }
            //     if ((leftKeyed && !middleKeyed && !rightKeyed) ||
            //         (!leftKeyed && middleKeyed && !rightKeyed) ||
            //         (!leftKeyed && !middleKeyed && rightKeyed)) {//只有一个按键被校准时
            //         that.chkShow = true;
            //     } else if ((leftKeyed && middleKeyed && !rightKeyed)) {//1.2校准成功
            //         if (key_one_upvalue == key_two_upvalue && key_one_dwvalue == key_two_dwvalue) {
            //             that.chkShow = true;
            //         }
            //     } else if ((leftKeyed && !middleKeyed && rightKeyed)) {//1.3校准成功
            //         if (key_one_upvalue == key_three_upvalue && key_one_dwvalue == key_three_dwvalue) {
            //             that.chkShow = true;
            //         }
            //     } else if ((!leftKeyed && middleKeyed && rightKeyed)) {//2.3校准成功
            //         if (key_two_upvalue == key_three_upvalue && key_two_dwvalue == key_three_dwvalue) {
            //             that.chkShow = true;
            //         }
            //     } else if (leftKeyed && middleKeyed && rightKeyed) {
            //         $('#panel_desc').html('全部校准完成');
            //         $('#panel_txt').html('点击完成保存校准结果，然后尝试使用天猫精灵<br/>控制开关精灵吧。');
            //     }
            //
            // }).catch(response => {
            //     console.log("error  ",response)
            // })

            this.btnShow = this.$route.query.isSync;
            if (this.btnShow) {
                this.currentKey = this.$route.query.currentKey;
            }

            //处理旧的度数

        },
        methods: {
            nextPage: function (key) {
                this.$router.push({
                    path: '/calibrate',
                    query: {key: key}
                })
                /*if (sessionStorage.getItem('way') == '1') {

                } else {
                    this.$router.push({
                        path: '/handcalibrate',
                        query: {key: key}
                    })
                }*/
            },
            setType: function () {
                this.$router.push({
                    path: '/keytype',
                })
            },
            finish: function () {
                let that = this;
                console.log("同步命令:  " + this.command);
                if (this.param != null) {
                    switch (this.keyCount) {
                        case 1:
                            this.param.changeKey = 1;
                            break;
                        case 2:
                            this.param.changeKey = 3;
                            break;
                        case 3:
                            this.param.changeKey = 7;
                            break;
                    }

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
                            if(response.data[0].status == 0){
                                that.$router.push({
                                    path: '/index'
                                })
                            }
                        },
                        error:function(res){
                            console.log("error",res)
                        }
                    })



                    // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/' + that.pid, [{
                    //     "mid": that.mid,
                    //     "devId": that.devId,
                    //     "cmdId": 4,
                    //     "in": that.param
                    // }], {
                    //     headers: {
                    //         'Authorization': 'Bearer  ' + that.token,
                    //         'Content-Type': 'application/json;charset=UTF-8'
                    //     }
                    // }).then(response => {
                    //     //退出校准
                    //     that.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/' + that.pid, [{
                    //         "mid": that.mid,
                    //         "devId": that.devId,
                    //         "cmdId": 4,
                    //         "in": {adjustSteerType: 4}
                    //     }], {
                    //         headers: {
                    //             'Authorization': 'Bearer  ' + that.token,
                    //             'Content-Type': 'application/json;charset=UTF-8'
                    //         }
                    //     }).then(response => {
                    //         console.log("返回值:  ",response)
                    //         if(response.data[0].status == 0){
                    //             that.$router.push({
                    //                 path: '/index'
                    //             })
                    //         }
                    //     }).catch(response => {
                    //         console.log('error:  ',response)
                    //     })
                    //
                    // }).catch(response => {
                    //     console.log('error:  ',response)
                    // })
                }else{

                    var data2 = {
                        // "mid": that.mid,
                        "devId": that.devId,
                        "cmdId": 4,
                        "in": param,
                        "action":"control"
                    };

                    $.ajax({
                        type:"post",
                        data:JSON.stringify(data2),
                        url:global.baseUrl,
                        dataType:"json",
                        contentType:"application/json",
                        success:function (response) {
                            console.log("返回值",response);
                            if(response.data[0].status == 0){
                                that.$router.push({
                                    path: '/index'
                                })
                            }
                        },
                        error:function(res){
                            console.log("error",res)
                        }
                    })

                    // that.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/' + that.pid, [{
                    //     "mid": that.mid,
                    //     "devId": that.devId,
                    //     "cmdId": 4,
                    //     "in": {adjustSteerType: 4}
                    // }], {
                    //     headers: {
                    //         'Authorization': 'Bearer  ' + that.token,
                    //         'Content-Type': 'application/json;charset=UTF-8'
                    //     }
                    // }).then(response => {
                    //     console.log("返回值:  ",response)
                    //     if(response.data[0].status == 0){
                    //         that.$router.push({
                    //             path: '/index'
                    //         })
                    //     }
                    // }).catch(response => {
                    //     console.log('error:  ',response)
                    // })
                }

                window.lefted = false;
                window.middled = false;
                window.righted = false;
                var command = "015504"
                //先保存
                // console.log(param)

            },
            setChk: function (t) {
                if (t) {
                    if (window.lefted) {
                        this.rightIsOk = true;
                        this.middleIsOk = true;
                    } else if (window.righted) {
                        this.leftIsOk = true;
                        this.middleIsOk = true;
                    } else if (window.middled) {
                        this.leftIsOk = true;
                        this.rightIsOk = true;
                    }
                } else {
                    if (window.lefted) {
                        this.rightIsOk = false;
                        this.middleIsOk = false;
                    } else if (window.righted) {
                        this.leftIsOk = false;
                        this.middleIsOk = false;
                    } else if (window.middled) {
                        this.leftIsOk = false;
                        this.rightIsOk = false;
                    }
                }
            }
        },
        watch: {
            syncChk: function (newVal, oldVal) {
                console.log("newVal:  " + newVal);
                this.setChk(newVal);
                if (newVal) {
                    this.param = {
                        adjustSteerType: 3,
                        oneLevelOn: this.upValue,
                        oneLevelOff: this.downValue,
                        twoLevelOn: this.upValue,
                        twoLevelOff: this.downValue,
                        threeLevelOn: this.upValue,
                        threeLevelOff: this.downValue
                    }
                } else {
                    this.param = null;
                }
                console.log("up"+this.upValue);
                console.log("down"+this.downValue);
            }
        }
    }
</script>

<style scoped>

</style>