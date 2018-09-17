'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    pdf: {

    },
    main: {
      spools: [
        require('../../dist').PdfSpool
      ]
    }
  }
}


