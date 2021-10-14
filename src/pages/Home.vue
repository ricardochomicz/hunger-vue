<template>
    <div class="row">
        
        <div class="col-lg-12">
            <h1 class="my-4 title-tenant">Restaurantes</h1>

            <div class="row my-4">
                <div
                    class="col-lg-4 col-md-4 col-6 mb-4"
                    v-for="(company, index) in companies.data"
                    :key="index"
                >
                    <div class="restaurant-card">
                        <!-- <router-link :to="{name: 'products', params:{company: company.url}}" class="logo"> -->
                            <a href="#" @click.prevent="goStoreCompany(company)">
                            <img
                            v-if="company.logo"
                                class="card-img-top"
                                :src="company.logo"
                                :alt="company.name"
                            />
                            <img
                            v-else
                                class="card-img-top"
                                src="@/assets/imgs/restaurant.png"
                                :alt="company.name"
                            />
                            <div class="restaurant-card-body">
                                <h3>
                                    <span>{{company.name}}</span>
                                </h3>
                            </div>
                            </a>
                        <!-- </router-link> -->
                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.col-lg-9 -->
    </div>
    <!-- /.row -->
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
    mounted() {
        this.getCompanies()
        .catch(response => {
            this.$toast.error(`Ops! Erro ao carrregar os restaurantes`);
        })
    },
    computed: {
        // companies() {
        //     return this.$store.state.companies.items;
        // }
        ...mapState({
            //mapeamento pelo state
            companies: state => state.companies.items
        })
    },
    methods: {
        ...mapActions(["getCompanies"]),
        ...mapMutations({
            setCompany: 'SET_COMPANY_SELECTED'
        }),
        goStoreCompany(company){
            this.setCompany(company)
            this.$router.push({name: 'products', params:{companyUrl: company.url}})
        }
    }
};
</script>