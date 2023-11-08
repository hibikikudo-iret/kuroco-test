import axios from 'axios'

export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.headers['x-rcms-api-access-token'] = '6833fff6a5a5a01917ec045c68a04978e2007f336b23d95cecc3753f00353297'
    return config
  })
}