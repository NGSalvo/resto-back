import {
  FB_TYPE,
  FB_PROJECT_ID,
  FB_PRIVATE_KEY_ID,
  FB_PRIVATE_KEY,
  FB_CLIENT_EMAIL,
  FB_CLIENT_ID,
  FB_AUTH_URI,
  FB_TOKEN_URI,
  FB_AUTH_PROVIDER,
  FB_CLIENT,
  FB_UNIVERSE_DOMAIN,
} from './config';

export const credentials = {
  type: FB_TYPE,
  project_id: FB_PROJECT_ID,
  private_key_id: FB_PRIVATE_KEY_ID,
  private_key: FB_PRIVATE_KEY,
  client_email: FB_CLIENT_EMAIL,
  client_id: FB_CLIENT_ID,
  auth_uri: FB_AUTH_URI,
  token_uri: FB_TOKEN_URI,
  auth_provider_x509_cert_url: FB_AUTH_PROVIDER,
  client_x509_cert_url: FB_CLIENT,
  universe_domain: FB_UNIVERSE_DOMAIN,
};
