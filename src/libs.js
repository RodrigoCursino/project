import Vue     from 'vue'
import moment  from 'moment'
import lodash  from 'lodash'
import numeral from 'numeral'

Vue.prototype.$_       = lodash
Vue.prototype.$moment  = moment
Vue.prototype.$numeral = numeral