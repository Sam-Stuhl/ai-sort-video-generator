/** type {import("drizzle-kit").Config} */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://neondb_owner:npg_yalon3qiVr5E@ep-spring-glade-a48idwja-pooler.us-east-1.aws.neon.tech/ai-short-video-generator?sslmode=require"
    }
};