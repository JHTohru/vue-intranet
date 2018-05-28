import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
// import light from '@fortawesome/fontawesome-pro-light'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid, regular, brands);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
