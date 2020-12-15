import secrets from './secret';
declare const FB: any;

(window as any).fbAsyncInit = () => {
  FB.init({
    appId: secrets.facebookAppId,
    // autoLogAppEvents : true,
    xfbml: false,
    version: 'v2.9'
  });
  FB.AppEvents.logPageView();
};

const bootstrapFBSDK = (d, s, id) => {
  let js: any;
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
};

bootstrapFBSDK(document, 'script', 'facebook-jssdk');
