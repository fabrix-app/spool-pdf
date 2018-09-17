/* eslint no-console: [0] */
'use strict'

const joi = require('joi')
import { pdfConfig } from './schemas'

export const Validator = {

  // Validate Pdf Config
  validatePdfConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, pdfConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.pdf: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
