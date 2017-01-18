import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../modules/auth/auth.module';

export default {
  name    : 'main-nav',
  created() {
    
  },
  methods : {
    signout() {
      // ask yaron about session reset and logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$store.dispatch('signout')
      // this.$store.commit(SIGN_OUT);
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters([
        'isLoggedIn',
        'user',
        'siteId'
     ]),
  }

}
