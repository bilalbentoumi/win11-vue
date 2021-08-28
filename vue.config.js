module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/win11-vue' : '',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'Windows 11';
            return args;
        })
    }
}
