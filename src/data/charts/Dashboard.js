import store from 'vuex-store'
import { dataMonthly } from '../../services/api/info'
import {default_colors} from './colors.js'

// var default_colors = [
//   '#3366CC','#DC3912','#FF9900','#109618','#990099',
//   '#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E',
//   '#316395','#994499','#22AA99','#AAAA11','#6633CC',
//   '#E67300','#8B0707','#329262','#5574A6','#3B3EAC'
// ]

export function monthlyChart () {
  var data = {}
  dataMonthly()
    .then(rsp => {
      return data = genData(rsp.data)
    })
  return data
}

export function genData (apiResponse) {
  var dataSchema = {
    labels: [], datasets: [{backgroundColor: [], data: []}]
  }
  var labels = Object.keys(apiResponse)
  var datasets = []

  var i = 0
  for (var value in apiResponse) {
    datasets.push(apiResponse[value])
    dataSchema.datasets[0].backgroundColor.push(default_colors[i])
    i += 1
  }

  dataSchema.labels = labels
  dataSchema.datasets[0].data = datasets
  return dataSchema
}