import { createStore } from 'vuex'
import companies from './modules/companies'
import { state, mutations} from './default'

const store = createStore({
    modules: {
        companies
    },
    //default
    state,
    mutations
})

export default store




