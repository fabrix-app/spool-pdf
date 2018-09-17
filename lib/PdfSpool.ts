import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Pdf } from './pdf'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class PdfSpool extends ExtensionSpool {
  public pdf: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      pdf: {
        get: () => {
          return this.pdf
        },
        set: (newInstances) => {
          this.pdf = newInstances
          // throw new Error('pdf can not be set through FabrixApp, check spool-pdf instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-pdf requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('pdf')) {
      return Promise.reject(new Error('No configuration found at config.pdf!'))
    }

    return Promise.all([
      Validator.validatePdfConfig(this.app.config.get('pdf'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Check if there some stores, if not set a default one
   */
  configure() {
    this.pdf = {
      htmlToPDF: (html) => {
        return Pdf.htmlToPDF(this.app, html)
      }
    }
  }

  /**
   * create caching stores
   */
  async initialize() {
    return Pdf.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    return Pdf.unload(this.app)
  }
}
