// netlify-redirect-plugin.js
module.exports = {
    onPreBuild: ({ netlifyConfig }) => {
      console.log('Adding redirects to Netlify configuration...');
      // Add redirects to the config
      netlifyConfig.redirects.push({
        from: "/image-cdn",
        to: "/edge",
      });
    }
  };