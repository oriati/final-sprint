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
      user: { email: 'ogen@derp.com', password: '123456' },
      error: ""
    }
  },
  methods: {
    signin(user) {
      console.log('component', user);
      this.$validator.validateAll();
      if (this.errors.any()) return;

      this.$store.dispatch('signin', user)
        .then(({ token, user}) => {
          console.log('component', user);
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          // needs to push router to where ever we let user pick between his sites
          this.$router.push('dashboard')
        })
    }
  },
  components: {
    mainNav
  }
}