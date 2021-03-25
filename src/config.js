const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "wy-notes-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://mvqjynih4l.execute-api.us-east-1.amazonaws.com/prod",
    },

    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_4akf1PkCa",
        APP_CLIENT_ID: "3smso3b3jjfditml69sd05ocqk",
        IDENTITY_POOL_ID: "us-east-1:6e426c87-1ecc-4424-8b74-2f512226551f",
    },
};

export default config;