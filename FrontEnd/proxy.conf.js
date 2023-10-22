var defaultTarget = "http://localhost:3001";
module.exports = [
{
   context: ["/api"],
   target: defaultTarget,
   changeOrigin: false,
   secure:false,
   logLevel: "debug"
}
]