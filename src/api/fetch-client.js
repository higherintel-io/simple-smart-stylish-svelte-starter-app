// @ts-nocheck
function assertPath(path) {
  const type = typeof path;
  if (type !== 'string') {
    throw new TypeError(`The path should be a string, instead received a ${type}`);
  }
}

async function parseResponse(res) {
  // If a body response exists, parse anx extract the possible properties

  if (!res.ok) {
    const errorBody = await res.json();
    if (errorBody.message) {
      throw new Error(JSON.stringify(errorBody.message));
    } else {
      throw new Error(errorBody.message);
    }
  }
  return res.json();
}

export function request(path, options = {}) {
  const { headers, query = null, method = 'GET', body, host = import.meta.env.VITE_API_URL || 'http://localhost:3000', ...extraOpts } = options;
  assertPath(path);

  // Compose the request configuration object
  const reqOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    ...extraOpts
  };

  // If a body object is passed, automatically stringify it.
  if (body) {
    reqOptions.body = typeof body === 'object' ? JSON.stringify(body) : body;
  }

  let queryString = '';

  if (query) {
    // Convert to encoded string and prepend with ?
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${host}${path}${queryString}`, reqOptions).then(parseResponse);
}
