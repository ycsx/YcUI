# YcUI

##[https://github.com/ycsx/YcUI](https://github.com/ycsx/YcUI)

## 项目安装
```
npm install YcUI
```

### 在main.js中引入&&注册
```
import YcUI from 'ycui'
import 'ycui/lib/ycui.css'
Vue.use(YcUI);
```

### 在组件中引入
```
<YcExtend :data='data' :pageSize='pageSize />
//data格式如下：
    [
        {
            index:0,
            number:'01',
            title:'title',
            desc:'desc',
        }
    ]
//pageSize默认为3，可自行设置，为每页数量
```



