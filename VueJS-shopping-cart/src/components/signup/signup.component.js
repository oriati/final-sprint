import authService from '../../services/auth.service';
import {SIGN_IN} from '../../modules/auth/auth.module';

import mainNav from '../main-nav';

export default  {
  data   : () => {
    return {
      user : { email: '', password: '' },
      error: ""
    }
  },
  methods: {
    signup( user ) {
      this.$validator.validateAll();
      if( this.errors.any() ) return;
      authService.signup(user).then(res => {
        console.log('done');
        // this.$store.commit(SIGN_IN);
        this.$store.dispatch('signup', user);
        this.$router.push({ name: 'main' });
      });
    }
  },
  components: {
    mainNav
  }
}
