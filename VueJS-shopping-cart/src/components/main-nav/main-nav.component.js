import {mapMutations, mapGetters} from 'vuex';
import authService from '../../services/auth.service';
import {SIGN_OUT} from '../../modules/auth/auth.module';

export default {
  name    : 'main-nav',
  methods : {
    signout() {
      // ask yaron about session reset and logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$store.commit(SIGN_OUT);
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters({
        isLoggedIn: 'isLoggedIn',
        user: 'user'
      }
    ),
  }

}
