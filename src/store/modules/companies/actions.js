import axios from 'axios'
import {
    URI_BASE_API,
    API_VERSION
} from '@/config/api'
const RESOURCE = 'companies'
export default {
    getCompanies({
        commit
    }) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando Restaurantes...')
        return axios.get(`${API_VERSION}/${RESOURCE}`)
            .then(response =>
                //commit recebe dois parametros, mutations e response
                commit('SET_COMPANIES', response.data))
            .finally(() => commit('SET_PRELOADER', false))

    }
}