<template>
  <div>
    <h2>Statistics</h2>
    <p>
      You can use this page to get some statistics about your current holdings.
    </p>
    <div class="stats-card">
      <h3>Holdings distribution</h3>
      <p>
        These are your current holdings, based on their current values in $.
      </p>
      <pie-chart :options="holdingsPieOptions" :chart-data="holdingsPieData" />
    </div>
  </div>
</template>

<script>
  import PieChart from './PieChart.vue'

  export default {
    name: 'page-statistics',
    components: {
      PieChart
    },
    computed: {
      holdingsPieData () {
        return {
          labels: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6'],
          datasets: [{
            data: [100, 200, 300, 10, 20, 30],
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
        return {
          responsive: true,
          maintainAspectRatio: false
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
