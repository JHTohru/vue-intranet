import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-pro-solid'
import regular from '@fortawesome/fontawesome-pro-regular'
import light from '@fortawesome/fontawesome-pro-light'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(solid, regular, light, brands);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);
