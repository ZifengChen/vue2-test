module.exports = {
  projectName: 'zf-vue-test',
  cluster: [],
  dev: {
    name: '开发环境', // 环境名称
    script: 'npm run build', // 打包命令
    host: '43.140.249.26', // 服务器地址
    port: 22, // 服务器端口号
    username: 'web', // 服务器登录用户名
    password: 'aabbcc##!!', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/opt/zifeng/www/vue/dist/', // 前端部署路径
    bakDir: '/opt/zifeng/www/backup', // 前端部署路径
    isRemoveRemoteFile: false, // 是否删除远程文件(默认true)
    isRemoveLocalFile: false,
  },
};
