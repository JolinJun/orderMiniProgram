Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        width: {
            type: Number,
            value: 0,
            observer(newVal, oldVal) {
            }
        },
        height: {
            type: Number,
            value: 0,
        },
        swiperList: {
            type: Array,
            value: [{
                src: '',
                background: 'pink'
            },
            {
                src: '.',
                background: 'blue'
            },{
                src: '',
                background: 'yellow'
            }]
        }
    },
    pageLifetimes: {
        // 使用音频组件的页面显示在前台的事件
        
    },
    methods: {
        
       
    }
})