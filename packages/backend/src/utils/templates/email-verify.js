const template = `
<!DOCTYPE html>
<html>
  <head>
    <title>Verify Your Email</title>
  </head>
  <body>
    <h1>Verify Your Email</h1>
    <p>Please click the button below to verify your email address:</p>
    <a href="<%= verifyLink %>"><button>Verify Email</button></a>
  </body>
</html>
`;

module.exports = template;
