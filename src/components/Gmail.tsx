const Gmail = () => {
    return (
        <div className="flex">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-semibold mb-6">API Routes - Gmail</h2>
                <ul className="space-y-4">
                    <li><a href="#google-auth-initiate" className="hover:text-blue-300">1. Google Authentication - Initiate OAuth Flow</a></li>
                    <li><a href="#google-auth-callback" className="hover:text-blue-300">2. Google Authentication - OAuth Callback</a></li>
                    <li><a href="#list-messages" className="hover:text-blue-300">3. Get User Emails - List Messages</a></li>
                    <li><a href="#send-email" className="hover:text-blue-300">4. Send Email</a></li>
                    <li><a href="#single-email-details" className="hover:text-blue-300">5. Get Single Email Details</a></li>
                    <li><a href="#error-handling" className="hover:text-blue-300">Error Handling</a></li>
                    <li><a href="#authentication" className="hover:text-blue-300">Authentication</a></li>
                </ul>
            </div>

            {/* Main Documentation Content */}
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
                <p className="mb-4">This documentation provides details for the available routes in the API for interacting with Google authentication, Gmail services, and email management. Please follow the instructions carefully for integrating with the frontend.</p>

                <h2 id="google-auth-initiate" className="text-2xl font-semibold mb-4">1. Google Authentication - Initiate OAuth Flow</h2>
                <p><strong>Endpoint:</strong> <code>/api/auth/google</code></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> This route initiates the Google OAuth flow by generating an authentication URL with necessary scopes to access Gmail APIs.</p>
                <p><strong>Response:</strong> Returns a JSON object with a <code>url</code> field containing the authentication URL to direct users for consent.</p>
                <pre>{`{
  "url": "https://accounts.google.com/o/oauth2/auth?...&scope=https://www.googleapis.com/auth/gmail.readonly&...etc"
}`}</pre>

                <h2 id="google-auth-callback" className="text-2xl font-semibold mb-4">2. Google Authentication - OAuth Callback</h2>
                <p><strong>Endpoint:</strong> <code>/api/auth/google/callback</code></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> This route handles the OAuth callback after the user authorizes the app. It saves the authentication tokens and Gmail account information for the authenticated user.</p>
                <p><strong>Request Body:</strong> <code>{`{ "code": "authorization_code_from_google" }`}</code></p>
                <p><strong>Response:</strong> Returns a success message or an error message if the OAuth flow fails.</p>
                <pre>{`{
  "message": "success"
}`}</pre>

                <h2 id="list-messages" className="text-2xl font-semibold mb-4">3. Get User Emails - List Messages</h2>
                <p><strong>Endpoint:</strong> <code>/api/google</code></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> This route retrieves a list of the most recent emails from the authenticated Gmail account.</p>
                <p><strong>Response:</strong> A JSON array of email messages from the Gmail account.</p>
                <pre>{`[
  {
    "id": "message_id",
    "threadId": "thread_id",
    "labelIds": ["INBOX"],
    "snippet": "Message snippet"
  },
  // other emails...
]`}</pre>

                <h2 id="send-email" className="text-2xl font-semibold mb-4">4. Send Email</h2>
                <p><strong>Endpoint:</strong> <code>/api/google</code></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Description:</strong> This route sends an email from the authenticated Gmail account to a specified recipient.</p>
                <p><strong>Request Body:</strong> <code>{`{ "to": "recipient_email@example.com", "subject": "Email Subject", "message": "Email content", "emailAddress": "user_email@example.com" }`}</code></p>
                <p><strong>Response:</strong> Returns a success message with the response data from Gmail API.</p>
                <pre>{`{
  "message": "Email sent successfully",
  "data": {
    "id": "message_id",
    "labelIds": ["SENT"],
    "threadId": "thread_id"
  }
}`}</pre>

                <h2 id="single-email-details" className="text-2xl font-semibold mb-4">5. Get Single Email Details</h2>
                <p><strong>Endpoint:</strong> <code>/api/google/[id]</code></p>
                <p><strong>Method:</strong> GET</p>
                <p><strong>Description:</strong> This route retrieves detailed information for a specific email message by its ID from the authenticated Gmail account.</p>
                <p><strong>Response:</strong> A JSON object containing the full email data.</p>
                <pre>{`{
  "id": "message_id",
  "threadId": "thread_id",
  "labelIds": ["SENT", "IMPORTANT"],
  "snippet": "Full email content",
  "payload": {
    "headers": [
      { "name": "From", "value": "sender@example.com" },
      { "name": "To", "value": "recipient@example.com" },
      // other headers...
    ],
    "body": {
      "data": "encoded_email_body_data"
    }
  }
}`}</pre>

                <h2 id="error-handling" className="text-2xl font-semibold mb-4">Error Handling</h2>
                <p><strong>General Errors:</strong> The API may return a 400, 404, or 500 status code depending on the error type (e.g., missing required fields, unauthorized access, server issues).</p>
                <p><strong>Sample Error Response:</strong></p>
                <pre>{`{
  "message": "error message here"
}`}</pre>

                <h2 id="authentication" className="text-2xl font-semibold mb-4">Authentication</h2>
                <p><strong>Authorization:</strong> Make sure to use the correct authentication tokens when accessing the Gmail API endpoints. The routes require the user to be authenticated and authorized via Google OAuth.</p>
                <p><strong>Notes:</strong> Ensure your environment variables are set properly for <code>CLIENT_ID</code>, <code>CLIENT_SECRET</code>, and <code>REDIRECT_URI</code>.</p>
            </div>
        </div>
    );
};

export default Gmail;
