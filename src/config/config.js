import dotenv from 'dotenv';
dotenv.config();

const config = {
    port: process.env.PORT || 8080,
    mongodbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubSecretId: process.env.GITHUB_SECRET_ID,
    githubCallbackUrl: process.env.GITHUB_CALLBACK_URL,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD,
    sessionSecret: process.env.SESSION_SECRET,
};

export default config;
