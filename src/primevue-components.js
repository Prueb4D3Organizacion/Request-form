import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import Menubar from 'primevue/menubar';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';

import './assets/main.css'
import 'primeicons/primeicons.css'

export default (app) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  app.component('pv-menubar', Menubar)
  app.component('pv-badge', Badge)
  app.component('pv-button', Button)
  app.component('pv-datepicker', DatePicker)
}