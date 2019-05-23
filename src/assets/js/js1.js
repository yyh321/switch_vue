var str ={
    "requestId": "c629e94a4e45bcb27026ade6f701",
    "action": "get-device",
    "data": [
        {
            "devId": "064000013058",
            "mid": "9lXyMiiF2MOd",
            "cmdId": 0,
            "devName": "开关精灵（ZigBee）单键",
            "online": true,
            "out": {
                "keyCount": 1,
                "changeKey": 1,
                "statusList": "{\"1\":{\"lazyCloseStatus\":0,\"overTimeOffEnable\":0,\"timerList\":\"[{\\\"id\\\":472,\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":0,\\\"number\\\":0,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Dec 24, 2018 2:22:25 PM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 10:21:59 AM\\\",\\\"version\\\":260,\\\"options\\\":0},{\\\"id\\\":473,\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":0,\\\"number\\\":1,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Dec 27, 2018 3:07:25 PM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 10:21:59 AM\\\",\\\"version\\\":242,\\\"options\\\":0},{\\\"id\\\":474,\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":0,\\\"number\\\":2,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Dec 27, 2018 3:31:22 PM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 10:21:59 AM\\\",\\\"version\\\":242,\\\"options\\\":0},{\\\"id\\\":475,\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":0,\\\"number\\\":3,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Jan 3, 2019 7:33:31 PM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 10:21:59 AM\\\",\\\"version\\\":234,\\\"options\\\":0},{\\\"id\\\":476,\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":0,\\\"number\\\":4,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Jan 4, 2019 2:29:51 PM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 10:21:59 AM\\\",\\\"version\\\":231,\\\"options\\\":0},{\\\"id\\\":497,\\\"timerEn\\\":1,\\\"timerHour\\\":11,\\\"timerMinute\\\":5,\\\"timerSecond\\\":30,\\\"repeatOptions\\\":254,\\\"number\\\":7,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"gmtCreate\\\":\\\"Mar 26, 2019 10:58:51 AM\\\",\\\"gmtModified\\\":\\\"Mar 26, 2019 11:08:05 AM\\\",\\\"version\\\":201},{\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":0,\\\"onOff\\\":0,\\\"repeatOptions\\\":254,\\\"number\\\":5,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"version\\\":200},{\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":0,\\\"onOff\\\":0,\\\"repeatOptions\\\":254,\\\"number\\\":6,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"version\\\":200},{\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":0,\\\"onOff\\\":0,\\\"repeatOptions\\\":254,\\\"number\\\":8,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"version\\\":200},{\\\"timerEn\\\":0,\\\"timerHour\\\":8,\\\"timerMinute\\\":30,\\\"timerSecond\\\":0,\\\"onOff\\\":0,\\\"repeatOptions\\\":254,\\\"number\\\":9,\\\"deviceCode\\\":\\\"064000013058\\\",\\\"keyOption\\\":1,\\\"version\\\":200}]\",\"lazyCloseTime\":1553568724000,\"overtimeOffTime\":300}}",
                "keyStatus": 0,
                "oneLevelOff": 44,
                "oneKeyStatus": 1,
                "oriKeyType": 0,
                "envlightCloseLampEnable": 1,
                "oneLevelOn": 50,
                "powerDegree": 0,
                "lazyPower": 0,
                "envlightOpenLampEnable": 1
            }
        }
    ]
}

var str2 = JSON.stringify(str)
// var str3 = JSON.parse(str2)

// console.log(str)
console.log(JSON.parse(str.data[0].out.statusList))

export default {
    str:str
}