import { FabrixApp } from '@fabrix/fabrix'
import { path as phantomPath } from 'phantomjs-prebuilt'
import * as phantomHtmlToPdf from 'phantom-html-to-pdf'
const toPdf = phantomHtmlToPdf({
  phantomPath
})



export const Pdf = {
  /**
   * Create the Stores
   */

  init: (app: FabrixApp) => {
    // init pdf server
    return Promise.resolve()
  },

  /**
   * Unload the Stores
   */
  unload: (app: FabrixApp) => {
    return Promise.resolve()
  },

  htmlToPDF: (app: FabrixApp, html) => {
    return new Promise((resolve, reject) => {
      toPdf({
        html: html,
        allowLocalFilesAccess: app.config.get('pdf.allowLocalFilesAccess'),
        printDelay: app.config.get('pdf.printDelay'),
        paperSize: {
          format: app.config.get('pdf.paperSize.format'),
          height: app.config.get('pdf.paperSize.height'),
          width: app.config.get('pdf.paperSize.width')
        },
        format: {
          quality: app.config.get('pdf.format.quality')
        }
      }, (err, pdf) => {
        if (err) {
          return reject(err)
        }
        resolve(pdf.stream)
      })
    })
  }
}
