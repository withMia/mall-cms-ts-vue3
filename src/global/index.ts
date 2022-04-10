import registerElement from './registerElement'
import { registerProperties } from './registerProperties'
import { App } from 'vue'

export function globalregister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)
}
