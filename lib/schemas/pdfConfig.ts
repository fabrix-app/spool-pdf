import * as joi from 'joi'

export const pdfConfig = joi.object().keys({
  allowLocalFilesAccess: joi.boolean(),
  printDelay: joi.number(),
  paperSize: joi.object().keys({
    format: joi.string(),
    height: joi.string(),
    width: joi.string()
  }).unknown(),
  format: joi.object().keys({
    quality: joi.number()
  }).unknown()
}).unknown()
