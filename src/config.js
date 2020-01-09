const dev = {
  STRIPE_KEY: "pk_test_YMjHmTnEbqkiL2PmZmnSVuCD00BKUHE4BI",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-1f7zruo88xsid"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://z474q2hdni.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_glPdy255o",
    APP_CLIENT_ID: "2il07f05usmu9kq0meai5is7aa",
    IDENTITY_POOL_ID: "us-east-2:0a902823-9749-4e61-baeb-345a069866c2"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_YMjHmTnEbqkiL2PmZmnSVuCD00BKUHE4BI",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-15at1kt04m3py"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9ysnewh72g.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_GYHnd2M0i",
    APP_CLIENT_ID: "4lt8f96hkkh39bnrfkjn3k9u5h",
    IDENTITY_POOL_ID: "us-east-2:11b39e49-990f-4215-9f9e-a7a24c608b8e"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
