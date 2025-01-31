const Watchlist = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Watchlist API Documentation</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">POST /api/investors/watchlist</h2>
        <p className="text-gray-700">Adds an investor to the authenticated user's watchlist.</p>
        <h3 className="font-semibold mt-2">Request Body:</h3>
        <pre className="bg-gray-100 p-3 rounded">{JSON.stringify({ investorId: "string" }, null, 2)}</pre>
        <h3 className="font-semibold mt-2">Responses:</h3>
        <ul className="list-disc pl-5">
          <li><strong>201</strong> - Investor added to watchlist</li>
          <li><strong>400</strong> - Invalid request / Investor already in watchlist</li>
          <li><strong>500</strong> - Server error</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">GET /api/investors/watchlist</h2>
        <p className="text-gray-700">Retrieves the authenticated user's watchlist.</p>
        <h3 className="font-semibold mt-2">Responses:</h3>
        <ul className="list-disc pl-5">
          <li><strong>200</strong> - Returns an array of investors</li>
          <li><strong>400</strong> - Unauthorized</li>
          <li><strong>404</strong> - No investors in watchlist</li>
          <li><strong>500</strong> - Server error</li>
        </ul>
      </section>
    </div>
  );
};

export default Watchlist;
