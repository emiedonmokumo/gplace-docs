const Outlook = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">API Documentation - Outlook</h1>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Flow Overview</h2>
                <ul className="list-disc pl-8">
                    <li><a href="#authorization"><strong>Step 1: Authorization</strong> — The user accesses /api/auth/outlook, which generates a URL for Microsoft OAuth authorization.</a></li>
                <li><a href="#token-exchange"><strong>Step 2: Token Exchange</strong> — After user consent, Microsoft redirects back to /api/auth/outlook/callback, exchanging the authorization code for an access token.</a></li>
            <li><a href={"#access-email"}><strong>Step 3: Accessing Emails</strong> — The user can use /api/outlook to fetch their emails by providing the email address.</a></li>
                </ul >
            </section >

            <section className="mb-8" id="authorization">
                <h2 className="text-3xl font-semibold mb-4">1. /api/auth/outlook</h2>
                <p className="mb-4">Generates an authentication URL for the user to authorize your app to access their Outlook email data.</p>

                <h3 className="text-2xl font-semibold">Method: GET</h3>

                <p className="mt-2"><strong>Response (200):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "url": "https://login.microsoftonline.com/..."
}`}
                </pre>

                <p className="mt-2"><strong>Error (500):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "error": "Environment variables are missing"
}`}
                </pre>

                <p className="mt-4"><strong>How it works:</strong></p>
                <ul className="list-disc pl-8">
                    <li>Checks if required environment variables are set.</li>
                    <li>Uses MSAL to generate the authentication URL.</li>
                    <li>User is redirected to Microsoft’s authentication page.</li>
                </ul>
            </section>

            <section className="mb-8" id="token-exchange">
                <h2 className="text-3xl font-semibold mb-4">2. /api/auth/outlook/callback</h2>
                <p className="mb-4">Handles the callback from Microsoft and exchanges the authorization code for an access token, storing the account info in the database.</p>

                <h3 className="text-2xl font-semibold">Method: POST</h3>

                <p className="mt-2"><strong>Request Body:</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "code": "authorization_code_received_from_microsoft"
}`}
                </pre>

                <p className="mt-2"><strong>Response (200):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "message": "Account connected and saved to database!"
}`}
                </pre>

                <p className="mt-2"><strong>Error (400):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "error": "Authorization code is missing"
}`}
                </pre>

                <p className="mt-2"><strong>Error (401):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "message": "Unauthorized"
}`}
                </pre>

                <p className="mt-2"><strong>Error (500):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "error": "Failed to exchange authorization code for tokens",
  "details": "error_details"
}`}
                </pre>

                <p className="mt-4"><strong>How it works:</strong></p>
                <ul className="list-disc pl-8">
                    <li>Exchanges the authorization code for an access token using MSAL.</li>
                    <li>Saves the user’s account data in the database for future access.</li>
                    <li>If token exchange fails, it returns an error message.</li>
                </ul>
            </section>

            <section className="mb-8" id="access-email">
                <h2 className="text-3xl font-semibold mb-4">3. /api/outlook</h2>
                <p className="mb-4">Fetches the user's Outlook emails from the Microsoft Graph API using the saved access token.</p>

                <h3 className="text-2xl font-semibold">Method: GET</h3>

                <p className="mt-2"><strong>Request Body:</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "emailAddress": "user@example.com"
}`}
                </pre>

                <p className="mt-2"><strong>Response (200):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`[
  {
    "subject": "Email Subject",
    "from": {
      "emailAddress": {
        "address": "sender@example.com"
      }
    },
    "receivedDateTime": "2025-01-01T12:00:00Z",
    "body": {
      "content": "Email body content"
    }
  },
  ...
]`}
                </pre>

                <p className="mt-2"><strong>Error (401):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "message": "Unauthorized"
}`}
                </pre>

                <p className="mt-2"><strong>Error (404):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "message": "Outlook Account not found"
}`}
                </pre>

                <p className="mt-2"><strong>Error (500):</strong></p>
                <pre className="bg-gray-100 p-4 rounded-lg">
                    {`{
  "message": "error_details"
}`}
                </pre>

                <p className="mt-4"><strong>How it works:</strong></p>
                <ul className="list-disc pl-8">
                    <li>Validates the user's Outlook account and checks if the token has expired.</li>
                    <li>If valid, fetches the user’s emails from the Microsoft Graph API.</li>
                    <li>If any error occurs (expired session, missing account), it returns an appropriate error message.</li>
                </ul>
            </section>
        </div>
    );
};

export default Outlook;
