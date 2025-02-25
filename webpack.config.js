export const devServer = {
    setupMiddlewares: (middlewares, devServer) => {
        console.log("Middleware setup");
        return middlewares;
    }
};
  