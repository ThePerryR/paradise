import App from './components/wrappers/App'
import Landing from './components/pages/Landing'
import Upload from './components/pages/Upload'

export default function () {
  return {
    component: App,
    childRoutes: [
      {path: '/', component: Landing},
      {path: '/upload', component: Upload}
    ]
  }
}
