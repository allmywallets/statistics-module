<template>
  <div>
    <h2 v-translate>Statistics</h2>
    <p v-translate>
      You can use this page to get some statistics about your current holdings.
    </p>
    <div class="card stats-card">
      <h3 v-translate>Holdings distribution</h3>
      <p v-translate="{ currency: currencies.primary }">
        These are your current holdings, based on their current values in %{currency}.
      </p>
      <pie-chart :options="holdingsPieOptions" :chart-data="holdingsPieData" />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PieChart from './PieChart.vue'

  export default {
    name: 'statistics-module',
    components: {
      PieChart
    },
    computed: {
      ...mapGetters([
        'balances',
        'holdingsHistories',
        'currencies'
      ]),
      holdingsPieData () {
        const holdingsKeys = Object.keys(this.holdingsHistories).sort((key1, key2) => {
          const key1Value = this.holdingsHistories[key1].primary[this.holdingsHistories[key1].primary.length - 1]
          const key2Value = this.holdingsHistories[key2].primary[this.holdingsHistories[key2].primary.length - 1]

          return key1Value < key2Value
        })

        return {
          labels: holdingsKeys,
          datasets: [{
            data: holdingsKeys.map(key => this.holdingsHistories[key].primary[this.holdingsHistories[key].primary.length - 1]),
            backgroundColor: [
              '#1f77b4',
              '#ff7f0e',
              '#2ca02c',
              '#d62728',
              '#9467bd',
              '#8c564b',
              '#e377c2',
              '#7f7f7f',
              '#bcbd22',
              '#17becf'
            ]
          }]
        }
      },
      holdingsPieOptions () {
        const precisionRound = (number, precision) => {
          const factor = Math.pow(10, precision)

          return Math.round(number * factor) / factor
        }

        return {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                return data['labels'][tooltipItem['index']] + ':' +
                  precisionRound(data['datasets'][0]['data'][tooltipItem['index']], 4) + this.currencies.primary
              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .stats-card {
    padding: 10px 20px;
    max-width: 400px;
  }
</style>
