// import authService from '../../services/auth.service';
import { SIGN_IN, SIGN_OUT } from '../../modules/auth/auth.module';

import mainNav from '../main-nav';

export default {
  mounted() {
    // console.log(this.$router);
    // console.log(this.$route);
  },
  data: () => {
    return {
      user: { username: 'ogen@derp.com', password: '123456' },
      error: ""
    }
  },
  methods: {
    signin(user) {
      console.log('component', user);
      this.$validator.validateAll();
      if (this.errors.any()) return;

      this.$store.dispatch('signin', user)
        .then(() => {
          this.$router.push('dashboard')
        })
    }
  },
  components: {
    mainNav
  }
}