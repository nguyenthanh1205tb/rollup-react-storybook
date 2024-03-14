const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1lZmkudm4iLCJmdWxsTmFtZSI6IkFkbWluaXN0cmF0b3IgIiwiX2lkIjoiNjVhZTMxOTg1MzJhOTI1MDBkZDMwYjZhIiwiaWF0IjoxNzEwMzE4MzY0LCJleHAiOjE3MTA0MDQ3NjR9.ipB89OOPpb0JUi31HSwoYmIgwHyrUgx1Oq0IZggi0bY';
const UPLOAD_ENDPOINT = 'https://uat.upload.plcplatform.net/files/';
const MEDIA_BASE_ENDPOINT = 'https://uat.upload.plcplatform.net/media';
const ORG_ID = '65bc649a1f2422e6c787898c';
const TEMPLATE_ID = '65bc649a1f2422e6c787898d';
const APP_API_URL = 'https://uat.api.plcplatform.net';

const LS_SELECTED_ORGANIZATION_KEY = 'mf-id';
const LS_SELECTED_TOKEN_KEY = 'mf-token';
const LS_SELECTED_TOKEN_REFRESH_KEY = 'mf-rfstoken';
const LS_SELECTED_TEMPLATE_KEY = 'mf-template';

const SERVER_ERROR = {
  USER_NOT_ACTIVE: 'USER_NOT_ACTIVE',
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  TWO_FACTOR_AUTHENTICATION: 'TWO_FACTOR_AUTHENTICATION',
};

export {
  APP_API_URL,
  AUTH_TOKEN,
  LS_SELECTED_ORGANIZATION_KEY,
  LS_SELECTED_TEMPLATE_KEY,
  LS_SELECTED_TOKEN_KEY,
  LS_SELECTED_TOKEN_REFRESH_KEY,
  MEDIA_BASE_ENDPOINT,
  ORG_ID,
  SERVER_ERROR,
  TEMPLATE_ID,
  UPLOAD_ENDPOINT,
};
