import App from './components/pages/App'
import Landing from './components/pages/Landing'

export default function () {
  return {
    component: App,
    childRoutes: [
      {path: '/', component: Landing}
    ]
  }
}
