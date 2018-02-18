import Module from '@allmywallets/specification/src/module'
import Statistics from './components/StatisticsModule.vue'

class StatisticsModule extends Module {
  name () {
    return 'statistics'
  }

  routes () {
    return [
      {
        title: 'Statistics',
        icon: 'chart-pie',
        menu: true,
        router: {
          name: 'statistics',
          path: '/',
          component: Statistics
        }
      }
    ]
  }

  configSchema () {
    return {
      id: '/Statistics',
      type: 'object'
    }
  }

  defaultConfig () {
    return {}
  }

  version () {
    return '0.0.1'
  }

  compatibility () {
    return '>= 0.0.1'
  }
}

export const instance = new StatisticsModule()
