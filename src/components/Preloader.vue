<template>
    <div>
        <div id="processando" v-if="preloader">
            <h4>
                <div class="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
                <span class="d-block">{{textPreloader}}</span>
            </h4>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            preloader: state => state.preloader,
            textPreloader: state => state.textPreloader
        })
    }
};
</script>