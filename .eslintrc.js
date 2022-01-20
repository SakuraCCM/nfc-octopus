module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // vue官方的eslint插件
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 代码风格校验代码，修改配置文件需要重启服务器
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
