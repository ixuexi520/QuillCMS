import siteConf from '~/config/site'

export default function ({ route, store, req, redirect }) {
  let routerPath = route.path
  if (routerPath.indexOf(siteConf.adminPath) > -1) {
    let { loginState } = store.state
    if (!loginState.hasLogin || !loginState.userInfo.id || (loginState.userInfo.role !== 'admin' && loginState.userInfo.role !== 'super')) {
      delete req.session.userLogined
      delete req.session.userInfo
      return redirect(siteConf.adminPath + '/login')
    }
  } else if (routerPath.indexOf('/post/new') > -1) {
    let { loginState } = store.state
    if (!loginState.hasLogin || !loginState.userInfo.id) {
      delete req.session.userLogined
      delete req.session.userInfo
      return redirect('/signin')
    }
  }
}
