Page({
	data: {

	},
	goMenu() {
		wx.navigateTo({
			url: '/pages/menu/menu',
		})
	},
	clickBox(){
		wx.showToast({
			title: '此功能正在开发中，敬请期待哦',
			icon: 'none'
		})
	}
})