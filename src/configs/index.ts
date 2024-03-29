const UPLOAD_ENDPOINT = 'https://uat.upload.plcplatform.net/files/'
const MEDIA_BASE_ENDPOINT = 'https://uat.upload.plcplatform.net/media'
const ORG_ID = '65ae3593905f66bff177f068'
const TEMPLATE_ID = '65bc649a1f2422e6c787898d'
const APP_API_URL = 'https://uat.api.plcplatform.net'

const LS_SELECTED_ORGANIZATION_KEY = 'mf-id'
const LS_SELECTED_TOKEN_KEY = 'mf-token'
const LS_SELECTED_TOKEN_REFRESH_KEY = 'mf-rfstoken'
const LS_SELECTED_TEMPLATE_KEY = 'mf-template'

const SERVER_ERROR = {
  USER_NOT_ACTIVE: 'USER_NOT_ACTIVE',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  TWO_FACTOR_AUTHENTICATION: 'TWO_FACTOR_AUTHENTICATION',
}

export const PAGINATE_LIMIT = 50
export const MAX_PAGINATE_BUTTON_SHOWED = 7

export {
  APP_API_URL,
  LS_SELECTED_ORGANIZATION_KEY,
  LS_SELECTED_TEMPLATE_KEY,
  LS_SELECTED_TOKEN_KEY,
  LS_SELECTED_TOKEN_REFRESH_KEY,
  MEDIA_BASE_ENDPOINT,
  ORG_ID,
  SERVER_ERROR,
  TEMPLATE_ID,
  UPLOAD_ENDPOINT,
}
