import mainNav from '../main-nav';

export default {
  data: () => {
    return {
      user: { username: '', password: '' },
      error: ""
    }
  },
  methods: {
    signup(user) {
      this.$validator.validateAll();
      if (this.errors.any()) return;
      // authService.signup(user).then(res => {
      // console.log('done');
      // this.$store.commit(SIGN_IN);
      this.$store.dispatch('signup', user)
        .then(() => {
          this.signin()
        })
      // });
    },
    signin() {
      this.$store.dispatch('signin', this.user)
        .then(() => {
          this.$router.push('dashboard')
        })
    }
  },
  components: {
    mainNav
  }
}
