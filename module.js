import { Module } from '@allmywallets/specification'
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
          name: 'page',
          path: '',
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

  translations () {
    return require('./translations/translations.json')
  }
}

export const instance = new StatisticsModule()
