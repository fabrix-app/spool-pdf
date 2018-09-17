/**
 * Pdf Config
 * see link {http://phantomjs.org/api/webpage/property/viewport-size.html}
 */
export const pdf = {
  allowLocalFilesAccess: true,
  header: null,
  footer: null,
  // set direct url instead of html
  url: null,
  // time in ms to wait before printing into pdf
  printDelay: 0,
  // set to true to enable programmatically specify (via Javascript of the page)
  // when the pdf printing starts (see Programmatic pdf printing section for an example)
  waitForJS: false,
  // name of the variable that will be used as a printing trigger,
  // defaults to "PHANTOM_HTML_TO_PDF_READY" (see Programmatic pdf printing section for an example)
  waitForJSVarName: 'PHANTOM_HTML_TO_PDF_READY',
  paperSize: {
    format: 'Letter',
    height: '11in',
    width: '8.5in'
  },
  // whether to set zoom if contents don't fit on the page
  fitToPage: false,
  customHeaders: [],
  cookies: [
    // {
    //   name: 'cookie-name',
    //   value: 'cookie-value',
    //   path: '/',
    //   domain: 'domain.com' // Leave blank when working on localhost - "." will get prepended to domain
    // }
  ],
  injectJs: [], // injects javascript files in the page
  settings: {
    // javascriptEnabled : true,
    // resourceTimeout: 1000
  },
  // see phantomjs docs - http://phantomjs.org/api/webpage/property/viewport-size.html
  viewportSize: {
    // width: 600,
    // height: 600
  },
  format: {
    quality: 100
  }
}
