export default {
    SET_COMPANIES(state, companies) {
        //atribui ao state items valor de companies
        state.items = companies
    },
    SET_COMPANY_SELECTED(state, company) {
        state.companySelected = company
    }
}