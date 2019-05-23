<template>
    <div style="margin-top: 10px">
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <div class="weui-panel panel">
                    <div class="weui-panel__bd">
                        <ul>
                            <li class="timingLi" v-for="(item,index) in timingData" v-if="changeKey==1">
                                <div class="timeClock"  @click="setTimeFun(item,index)">
                                    <p class="colorGaryClock">{{item.timerHour}} : {{item.timerMinute}}</p>
                                    <p class="colorGaryClockTxt">{{getDateFun(item.repeatOptions)}}</p>
                                </div>
                                <div class="weui-cell__ft"  @click="timingOpen(item)">
                                    <input class="weui-switch timeSwitch" type="checkbox" v-model="item.timerEn==0?false:true" value="0">
                                </div>
                            </li>
                            <li class="timingLi" v-for="item in timingData2" v-if="changeKey==2">
                                <div class="timeClock"  @click="setTimeFun(item)">
                                    <p class="colorGaryClock">{{item.timerHour}} : {{item.timerMinute}} </p>
                                    <p class="colorGaryClockTxt">{{item.repeatOptions}}</p>
                                </div>
                                <div class="weui-cell__ft"  @click="timingOpen(item)">
                                    <input class="weui-switch timeSwitch" type="checkbox" v-model="item.timerEn==0?false:true" value="0">
                                </div>
                            </li>
                            <li class="timingLi" v-for="item in timingData3" v-if="changeKey==4">
                                <!--<div>{{keyCount}}</div>-->
                                <div class="timeClock"  @click="setTimeFun(item)">
                                    <p class="colorGaryClock">{{item.timerHour}} : {{item.timerMinute}}</p>
                                    <p class="colorGaryClockTxt">{{getDateFun(item.repeatOptions)}}</p>
                                </div>
                                <div class="weui-cell__ft" @click="timingOpen(item)">
                                    <!--<span>{{item.timerEn}}</span>-->
                                    <input class="weui-switch timeSwitch" type="checkbox" v-model="item.timerEn==0?false:true" value="0">
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="pickerBottomShow " >
            <div id="pickerBttom"  ref="pickerSetBox">
                <div class="weui-flex">
                    <div class="weui-flex__item">
                        <div style="width: 90%;display: flex; justify-content: flex-start; margin-left: 5%;">
                            <span>设备状态：</span>
                            <div class="mh-switch" >
                                <!--&& switchData.timerEn == 1-->
                                <div v-if="isOpen1 == 1" @click="onOff1(1,switchData)"
                                     class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                </div>
                                <div v-if="isOpen1 == 0" @click="onOff1(1,switchData)"
                                     class="mh-switch-box mh-switch-right">开启
                                </div>
                                <div v-if="isOpen1 == 1" @click="onOff1(0,switchData)"
                                     class="mh-switch-box mh-switch-right">关闭
                                </div>
                                <div v-if="isOpen1 == 0" @click="onOff1(0,switchData)"
                                     class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                </div>
                            </div>
                        </div>

                        <div style="width: 90%; margin:20px 0 0 5%;">
                            <span>重复 </span>
                            <div style="width: 100%; display: flex; margin-top: 10px;">
                                <div v-if="weekData[0].dayStatus == 1" class="weekImg" @click="chooseDate(0)"><img src="../assets/image/jz_timing_sunday1.png" alt=""></div>
                                <div v-if="weekData[0].dayStatus == 0" class="weekImg" @click="chooseDate(0)"><img src="../assets/image/jz_timing_sunday2.png" alt=""></div>
                                <div v-if="weekData[6].dayStatus == 1" class="weekImg" @click="chooseDate(6)"><img src="../assets/image/jz_timing_monday1.png" alt=""></div>
                                <div v-if="weekData[6].dayStatus == 0" class="weekImg" @click="chooseDate(6)"><img src="../assets/image/jz_timing_monday2.png" alt=""></div>
                                <div v-if="weekData[5].dayStatus == 1" class="weekImg" @click="chooseDate(5)"><img src="../assets/image/jz_timing_tuesday1.png" alt=""></div>
                                <div v-if="weekData[5].dayStatus == 0" class="weekImg" @click="chooseDate(5)"><img src="../assets/image/jz_timing_tuesday2.png" alt=""></div>
                                <div v-if="weekData[4].dayStatus == 1" class="weekImg" @click="chooseDate(4)"><img src="../assets/image/jz_timing_wednesday1.png" alt=""></div>
                                <div v-if="weekData[4].dayStatus == 0" class="weekImg" @click="chooseDate(4)"><img src="../assets/image/jz_timing_wednesday2.png" alt=""></div>
                                <div v-if="weekData[3].dayStatus == 1" class="weekImg" @click="chooseDate(3)"><img src="../assets/image/jz_timing_thursday1.png" alt=""></div>
                                <div v-if="weekData[3].dayStatus == 0" class="weekImg" @click="chooseDate(3)"><img src="../assets/image/jz_timing_thursday2.png" alt=""></div>
                                <div v-if="weekData[2].dayStatus == 1" class="weekImg" @click="chooseDate(2)"><img src="../assets/image/jz_timing_friday1.png" alt=""></div>
                                <div v-if="weekData[2].dayStatus == 0" class="weekImg" @click="chooseDate(2)"><img src="../assets/image/jz_timing_friday2.png" alt=""></div>
                                <div v-if="weekData[1].dayStatus == 1" class="weekImg" @click="chooseDate(1)"><img src="../assets/image/jz_timing_saturday1.png" alt=""></div>
                                <div v-if="weekData[1].dayStatus == 0" class="weekImg" @click="chooseDate(1)"><img src="../assets/image/jz_timing_saturday2.png" alt=""></div>
                            </div>
                        </div>
                        <!--<div style="width: 90%; display: flex; height: 60px; align-items: center; justify-content: center;">-->
                            <!--<div class="finishedBtn" id="weui-picker-confirm">-->
                                <!--完成-->
                            <!--</div>-->
                        <!--</div>-->

                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import "../assets/css/homi.css"
    import global from "assets/js/global"
    export default {
        name: "timingPage",
        data(){
          return{
              repeatStr:0,
              timingData:[],
              timingData2:[],
              timingData3:[],
              changeKey:0,
              token: "",
              pid: "",
              mid: "",
              devId: "",
              keyCount:0,
              dafaultM:0,
              dafaultS:0,
              isOpen1:0,
              global:global,
              pickerBottomShow:false,
              weekDay:{
                  "day1":require('../assets/image/jz_timing_sunday1.png'),
                  "day2":require('../assets/image/jz_timing_monday1.png'),
                  "day3":require('../assets/image/jz_timing_tuesday1.png'),
                  "day4":require('../assets/image/jz_timing_wednesday1.png'),
                  "day5":require('../assets/image/jz_timing_thursday1.png'),
                  "day6":require('../assets/image/jz_timing_friday1.png'),
                  "day7":require('../assets/image/jz_timing_saturday1.png'),
              },
              // timingData:{},
              weekData:[
                    {key:0,isSun:1,dayStatus:1},
                    {key:1,isSat:1,dayStatus:1},
                    {key:2,isFri:1,dayStatus:1},
                    {key:3,isThu:1,dayStatus:1},
                    {key:4,isWen:1,dayStatus:1},
                    {key:5,isTue:1,dayStatus:1},
                    {key:6,isMon:1,dayStatus:1},
                ],
              getWeekData:[],
              weekStr:"0",
              switchData:"0",
              selectId:0,
              selItemId:0
          }
        },
        created(){
            let that = this;
            let data1 = this.$route.query.data;
            that.changeKey = data1.key;
            that.keyCount = data1.keyCount;
            if(that.changeKey == 1 && that.keyCount == 1){
                that.global.headTitle = "定时开关";
            }
            if(that.changeKey == 1 && that.keyCount == 2 ||that.changeKey == 1 && that.keyCount == 3){
                that.global.headTitle = "定时开关(左键)";
            }
            if(that.changeKey == 2  && that.keyCount == 2 ){
                that.global.headTitle = "定时开关（中键）";
            }

            if(that.changeKey == 4  && that.keyCount == 4 ){
                that.global.headTitle = "定时开关（右键）";
            }


            // this.timingData = data.value;
            // this.timingData = JSON.parse(data1.value.timerList);
            // for(let i in this.timingData){
            //     let item = this.timingData[i];
            //     item.repeatOptions = that.$utils.getRepeatDesc(parseInt(item.repeatOptions,16));
            // }
            // console.log(data1);
            sessionStorage.setItem("changeKey", that.changeKey)
            // console.log("aaaaaaaaaaaa")
            // if(that.changeKey !="0"){
                that.initFun();
            // }

        },
        computed:{
            getDateFun: function(str) {
               return function(str){
                   var that = this;
                   that.repeatStr = that.$utils.getRepeatDesc(parseInt(str));
                    return that.$utils.getRepeatDesc(parseInt(str));
               };
            }
        },
        methods:{
            initFun(){
                let that = this;
                let href = location.href;
                console.log(href)
                that.token = that.$utils.getQueryString("token")
                console.log(that.token)
                that.devId = that.$utils.getQueryString("deviceSn")
                console.log(that.devId)
                that.pid = that.$utils.getQueryString("pid")
                console.log(that.pid)
                that.mid = that.$utils.getQueryString("mid")
                console.log(that.mid)
                that.timestamp = Date.parse(new Date());//当前时间戳
                console.log(that.timestamp)

                var data1= {
                    "action":"get-device",
                    "devId":that.devId
                }

                // console.log(data1);

                $.ajax({
                    type: "post",
                    data: JSON.stringify(data1),
                    url: global.baseUrl,
                    dataType: "json",
                    contentType: "application/json",
                    success: function (response) {
                        console.log("返回值:  ",response);
                        console.log("时间列表： ",JSON.parse(response.data[0].out.statusList));
                        var timeList = JSON.parse(response.data[0].out.statusList);
                        console.log(JSON.parse(response.data[0].out.statusList))
                        // for(let k in  timeList) {
                        //     if(timeList[k].key = that.changeKey){
                        if(that.changeKey == 1){
                            that.timingData = JSON.parse(timeList[1].timerList);
                        }
                        if(that.changeKey == 2){
                            that.timingData2 = JSON.parse(timeList[2].timerList);
                        }
                        if(that.changeKey == 4){
                            that.timingData3 = JSON.parse(timeList[4].timerList);
                        }
                        console.log( that.timingData);

                        // repeatOptions
                        // console.log("dingshi")
                    },
                    error: function (res) {
                        console.log("res")
                    }
                })

            },
            setTimeFun(data,num){
                let that = this;
                that.selItemId = num;
                that.toShowPicker(data);
            },
            toShowPicker(item){
                let kid = 0;
                let that = this;
                that.selectId = item.id;
                that.pickerBottomShow = true;
                let obj = {};
                that.switchData = item;
                that.defaultM = that.switchData.timerHour;
                that.defaultS = that.switchData.timerMinute;
               var str =  item.repeatOptions.toString(2);
               console.log(str);
               for(var i in str){
                   for(var j in that.weekData){
                       if(i == that.weekData[j].key){
                           // that.weekData
                           if(str[i] == 1){
                               that.weekData[j].dayStatus = 1;
                           }else{
                               that.weekData[j].dayStatus = 0;
                           }
                       }
                   }
               }

                if(that.pickerBottomShow == true){
                    console.log(that.$refs.pickerSetBox);
                    obj = that.$refs.pickerSetBox;
                    console.log("ref")
                }

                var data = this.$utils.getMutiData(24, 60, false);

                // that.dafaultM =
                // that.dafaultS
                // id:"aa"+kid++,
                that.$weui.picker(data.first, data.second,
                    {
                    container: 'body',
                    defaultValue:[0,0],
                     id:kid++,
                    onChange: function (result) {
                        var element = document.getElementById("weui-picker-confirm");
                        var cancle = document.getElementById("homi-picker-cancle");
                        element.innerHTML = "完成";
                        var pickerBox = document.getElementById("weui-picker-confirm").parentNode.parentNode;
                        pickerBox.style.bottom = "5%";
                        var itemArray = $(".weui-picker__item");
                        for (var i = 0; i < itemArray.length; i++) {
                            var id = "ele" + i;
                            $("#" + id).remove();
                            var id1 = "elem" + i;
                            $("#" + id1).remove();
                            $(itemArray[i]).removeClass("homi-picker__item")
                            if ($(itemArray[i]).html() === result[0].value.toString() && i<24) {
                                var hourElementStr = "<span id='ele" + i + "' style='font-weight: normal;color: #fff'> 时</span>"
                                $(itemArray[i]).append(hourElementStr);
                                $(itemArray[i]).addClass("homi-picker__item")
                            }

                            if ($(itemArray[i]).html() === result[1].value.toString() && i>=23) {
                                var str = i-12;
                                var secondElementStr = "<span id='elem" + str + "' style='font-weight: normal;color: #fff'>分</span>"
                                $(itemArray[i]).append(secondElementStr);
                                $(itemArray[i]).addClass("homi-picker__item")
                                console.log(secondElementStr)
                            }
                        }
                    },
                    onConfirm: function (result) {
                        // alert(that.defaultM)
                        var str = "1111111";
                        var newStr = "";
                        var arr = [];
                        var tmp ="";
                        let inData = {};
                        inData.changeKey = that.changeKey;
                        inData.number = item.number;
                        inData.timerEn = that.switchData.timerEn;
                        // alert(that.switchData.timerEn);
                        inData.timerHour = +result[0].value;
                        inData.timerMinute =  +result[1].value;
                        inData.timerSecond = item.timerSecond;
                        // if(that.switchData.onOff!= undefined )
                        inData.onOff = 0;
                        // inData.repeatOptions = that.switchData.repeatOptions;

                        for(var i in that.getWeekData){
                            let item1 = that.getWeekData[i];
                            arr.push(item1.key);
                            that.insert_flg(str,arr,0)
                        }
                        if(that.weekStr!="0"){
                            inData.repeatOptions = that.weekStr;
                        }else{
                            inData.repeatOptions = that.switchData.repeatOptions;
                        }
                        // console.log(inData)
                        that.postData(inData,8)
                        that.getWeekData=[];

                    },
                });

                setTimeout(function () {
                    var homiTitle = document.getElementById("homiTitle");
                    var homiTiming = document.getElementById("homi-timing");
                    homiTiming.appendChild(obj);
                    homiTitle.innerHTML = that.global.headTitle;
                    that.dafaultM = 6;
                    that.dafaultS = 6;
                    var pickerBody = document.getElementById("homi-picker-body");


                }, 50)
            },
            insert_flg(str,flg,sn){
                var that = this;
                var arr = [];
                var str2 = "";
                for(var i in str){
                    arr.push(str[i]);
                }
                for(var i in arr){
                    for(var j in flg){
                        if(flg[j] == i){
                            arr[i] = sn;
                        }
                    }
                    str2 += arr[i]
                }
                str2 = str2+"1";
                that.weekStr = parseInt(str2,2);
                // alert(that.weekStr)
            },

            onOff1(num){
                var that = this;
                // if(this.onLine == true) {
                    if (num == 0) {
                        this.isOpen1 = 0;
                        that.switchData.timerEn = 0;
                    } else {
                        this.isOpen1 = 1;
                        that.switchData.timerEn = 1;
                        // this.control(1, {'onOff': 1});
                    }
                // }
            },

            // onOff1(num,data){
            //     let that = this;
            //     //设备状态开关
            //     // that.selItemId = that.switchData.id;
            //     console.log("picker返回数据",that.switchData);
            //     console.log("点击",that.switchData.timerEn);
            //     // if(that.switchData.number == data.number){
            //         if (num == 0) {
            //             // that.switchData.timerEn = 0;
            //             that.isOpen1 = 0;
            //         } else {
            //             // that.switchData.timerEn = 1;
            //             that.isOpen1 = 0;
            //         }
            //     // }
            //
            // },
            chooseDate(num){
                var that = this;
                var newArr = [];
                that.weekData.map(function (item,index) {
                    if(item.key == num && item.dayStatus == 1){
                        item.dayStatus = 1;
                        that.getWeekData.push(item);
                        item.dayStatus = 0;
                        return
                    }
                    if(item.key == num && item.dayStatus == 0){
                        item.dayStatus = 1;
                        return
                    }
                })

            },
            postData(data,cmdId){
                let that = this;
                var data1 = {
                    // "mid": that.mid,
                    "devId": that.devId,
                    "cmdId": cmdId,
                    "in": data,
                    "action":"control"
                }
                console.log("post",data1);
                $.ajax({
                    type:"post",
                    data:JSON.stringify(data1),
                    url:global.baseUrl,
                    dataType:"json",
                    contentType:"application/json",
                    success:function (res) {
                        console.log(res)
                        console.log(data1);
                        that.initFun();
                    },
                    error:function(res){
                        console.log("error",res)
                    }
                })



                // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/'+that.pid, [{
                //     "mid": that.mid,
                //     "devId": that.devId,
                //     "cmdId": cmdId,
                //     "in": data
                // }], {
                //     headers: {
                //         'Authorization': 'Bearer '+that.token,
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     }
                // }).then(response => {
                //     console.log(response);
                //     that.initFun();
                //
                // }).catch(response => {
                //     console.log("error:  ",response)
                // })
                //     //             // console.log(result)
            },
            timingOpen(data){
                // console.log(data);
                let that = this;
                let inData = {};
                if(data.timerEn == 0){
                    data.timerEn = 1;
                }else{
                    data.timerEn = 0;
                }
                inData.changeKey = that.changeKey;
                inData.number = data.number;
                inData.timerEn = data.timerEn;
                inData.timerHour = data.timerHour;
                inData.timerMinute = data.timerMinute;
                inData.timerSecond = data.timerSecond;
                inData.onOff = 0;
                inData.repeatOptions = data.repeatOptions;
                // console.log(inData)
                that.postData(inData,8)
                // that.initFun()
            }
        },
        watch:{
            // timingData:{
            //     handler(newVal,oldVal){
            //         var that = this;
            //         console.log("新:  ",newVal)
            //         console.log("旧:  ",oldVal)
            //         // var len = newVal.length;
            //         // for(var i = 0; i < len;i++){
            //         //     if(newVal[i].enable != oldVal[i].enable){
            //         //         var obj = newVal[i];
            //         //         var timeStr = obj.hour+obj.minute+obj.second;
            //         //         var command = this.utils.joinTimeCommand(obj.num, obj.enable, obj.onOff, timeStr, this.utils.hexPlus(parseInt(this.repeat).toString(16),2), obj.key);
            //         //         this.utils.writeValue(command) //使能
            //         //     }
            //         // }
            //         if(oldVal.length != 0){
            //            that.timingData = newVal;
            //         }
            //         // for(var i in newVal){
            //         //
            //         //
            //         // }
            //     },
            //     deep:true
            // }
        }
    }
</script>

<style scoped>
    .packerStyle{
        width: 95%;
        margin: 0 auto;
        bottom: 50%;
        border-radius: 10px;
    }
    .isBlue{background:#2BB6FC!important;}
    .isYellow{background:#F1AC2E!important;}
    .isBlueTxt{color:#2BB6FC!important;}
    .isOrangeTxt{color: #F1AC2E;}
    .isGrayTxt{color: #333;}
    .weui-icon-success{line-height: 50px;}
    .panel {
        margin-top: 15px;
        background: #FFFFFF;
        box-shadow: 0 0px 6px 0 rgba(163, 163, 163, 0.50);
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 5px 0 5px 0;
        width: 80vw;
    }

    .panel_header {
        height: 40px;
    }

    /*.panel_header {
      /*height: 179px;*/
    /*}*/

    .weui-cells:before {
        /*padding: 0 10px!important;*/
        border-top: none !important;
    }

    .weui-cells:after {
        border-bottom: none !important;
    }

    .weui-panel__hd:after{border:none;}

    .weui-cell__bd{font-size: 16px!important;}

    .weui-panel:before{
        border-top: 0!important;
    }

    .weui-panel:after{
        border-bottom: 0!important;
    }

    .weui-slider__track{background: #F1AC2E;}


    .weui-panel{width: 90%;}

    .dialog-img{width: 100%}
    .dialog-img img{width: 100%;}
    /*.weui-dialog__title{text-align: left!important; background: red;  width: 100%; align-items: flex-start;}*/


    .weui-dialog{border-radius: 11.2px!important; width: 80%;}
    .weui-dialog__hd {
        padding: 1.3em 1.0em 0.5em;
        text-align: left;
    }
    .weui-dialog__title{font-size: 18px;
        color: #383838; font-weight: bold;}

    a{color: #383838;}

    .weui-cell__ft1:after {
        content: " ";
        display: inline-block;
        height: 0.34286rem;
        width: 0.34286rem;
        /*border-width: 0.11429rem 0.11429rem 0 0;*/
        border-width: 0 0.11429rem 0.11429rem 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -0.11429rem;
        position: absolute;
        top: 50%;
        margin-top: -0.22857rem;
        right: 1.1429rem;
    }
    .weekImg {margin-right: 5%;}
    .weekImg img{width: 100%;}

    .hideBox{visibility: hidden;}
    .finishedBtn{
        background: #2BB6FC;
        box-shadow: 4px 4px 14px 0 #C5EBFF;
        border-radius: 176.4px;
        width: 50%;
        height:40px;
        text-align: center;
        color: #fff;
        line-height: 40px;
    }

    /*.homi-picker{bottom:10%!important;}*/
    /*#weui-picker-confirm{width:177px!important;}*/
    /*.weui-picker__action{flex: none!important;}*/
    /*.weekImg{background: blue!important;  width: 50px; height: 50px;}*/
    .homi-picker-confirm{width: 50%!important;}
</style>