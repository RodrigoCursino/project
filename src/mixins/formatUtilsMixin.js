require('numeral/locales')
import numeral from 'numeral'
numeral.locale('pt-br')

export const FormatUtilsMixin = {
    watch: {
        formatMixinLanguage(val) {
            numeral.locale(val)
        }
    },
    data: () => ({
        formatMixinLanguage: 'pt-br'
    }), 
    methods: {
        convertToMoneyToFloat(val) {
            return numeral(val)
        }
    },
    filters: {
        money(val) { 
            return numeral(val).format('$ 0,0.00')
        }
    }
}