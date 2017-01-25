import Vuex from 'vuex';
import authModule from './modules/auth/auth.module';
import siteModule from './modules/site/site.module';

const isProduction = process.env.NODE_ENV === 'production';

export default new Vuex.Store({
  modules: {
    auth : authModule,
    site : siteModule
  },
  strict : !isProduction
})
