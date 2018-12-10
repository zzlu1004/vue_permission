# vue-permission
此demo结合vuex实现动态路由表设置，核心方法为router.addRoutes。
可通过修改src/store文件中的permission属性来实现区分管理员权限和普通用户权限（1 为管理员权限，2 为角色权限），正常需要接口来返回相关数据，这里通过静态数据来实现。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
