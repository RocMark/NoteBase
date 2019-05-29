# Vue Router 驗證 [待查]

```js
new VueRouter ({
  routes:[
    {
      path: '/about',
      component: 'require("About")',
      meta: { authorization: true}
    }
  ]
})

router.beforeEach(( to, from, next) => {
  log(`Router: beforeEach to ${to.path} from ${from.path}`)

  if()
})
```