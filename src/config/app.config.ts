import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  // nodeEnv: process.env.NODE_ENV,
  // name: process.env.APP_NAME,
  // workingDirectory: process.env.PWD || process.cwd(),
  frontendDomain: process.env.FRONTEND_DOMAIN,
  backendDomain: process.env.BACKEND_DOMAIN,
  port: parseInt(process.env.APP_PORT || process.env.PORT, 10) || 3000,
  apiPrefix: process.env.API_PREFIX || 'api',
  apiVersion: process.env.API_VERSION || '1',
  databaseUrl: process.env.DATABASE_URL,
  enableCors: process.env.ENABLE_CORS === 'true',
  corsOrigin: process.env.CORS_ORIGIN,
  corsMethods: process.env.CORS_METHODS,
  corsHeaders: process.env.CORS_HEADERS,
  corsMaxAge: parseInt(process.env.CORS_MAX_AGE, 10),
  corsCredentials: process.env.CORS_CREDENTIALS === 'true',
  isProduction: process.env.NODE_ENV === 'production',
  // fallbackLanguage: process.env.APP_FALLBACK_LANGUAGE || 'en',
  // headerLanguage: process.env.APP_HEADER_LANGUAGE || 'x-custom-lang',
}));
