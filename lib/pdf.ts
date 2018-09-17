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
    toPdf.kill()
    return Promise.resolve()
  },

  htmlToPDF: (app: FabrixApp, html) => {
    return new Promise((resolve, reject) => {
      toPdf({
        html: html,
        header: app.config.get('pdf.header'),
        footer: app.config.get('pdf.footer'),
        waitForJS: app.config.get('pdf.waitForJS'),
        waitForJSVarName: app.config.get('pdf.waitForJSVarName'),
        allowLocalFilesAccess: app.config.get('pdf.allowLocalFilesAccess'),
        printDelay: app.config.get('pdf.printDelay'),
        paperSize: app.config.get('pdf.paperSize'),
        customerHeaders: app.config.get('pdf.customHeaders'),
        fitToPage: app.config.get('pdf.fitToPage'),
        injectJs: app.config.get('pdf.injectJs'),
        cookies: app.config.get('pdf.cookies'),
        settings: app.config.get('pdf.settings'),
        viewportSize: app.config.get('pdfviewportSize'),
        format: app.config.get('pdf.format')
      }, (err, pdf) => {
        if (err) {
          return reject(err)
        }
        resolve(pdf.stream)
      })
    })
  }
}
