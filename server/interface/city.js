import Router from 'koa-router'

const router = new Router({
  prefix: '/api'
})

router.get('/getCity', async (ctx) => {
  ctx.body = {
    result: ['北京', '上海']
  }
})

export default router