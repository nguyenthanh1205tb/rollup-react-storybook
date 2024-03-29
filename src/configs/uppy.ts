import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Tus from '@uppy/tus'
import { UPLOAD_ENDPOINT } from '.'
import Vietnamese from './uppy.locale'
import { AuthTokenType, getAuthToken } from '../lib/utils/auth'

export const createUppyInstance = (options?: any) => {
  // TODO: Add English locale
  return new Uppy({
    locale: Vietnamese,
  })
    .use(Dashboard, {
      inline: true,
      target: '#browser-files',
      hideUploadButton: true,
    })
    .use(Tus, {
      removeFingerprintOnSuccess: true,
      resume: true,
      endpoint: UPLOAD_ENDPOINT,
      async onBeforeRequest(req) {
        const token = getAuthToken(AuthTokenType.ACCESS)
        req.setHeader('Authorization', `Bearer ${token}`)
      },
      ...(options || {}),
    })
}
