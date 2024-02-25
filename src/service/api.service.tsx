export const APIService = {
  async post(method: any, path: string, body?: any) {
    // const runtimeConfig = useRuntimeConfig();
    const apiBase = 'https://proptizen-api-staging-cj7z67z5ra-as.a.run.app';
    const url = `${apiBase}${path}`;
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsImlhdCI6MTcwODU4NjQ3MiwiZXhwIjoxNzExMTc4NDcyfQ.QdUjkx8leaMjdRoAds6pnxYdd08SeF6Yk9MU0796kJM';
    const headers = {
      Authorization: authorization,
    };
    // Fetch options
    const options = {
      method: typeof method === "string" ? method.toUpperCase() : method, // Specify the HTTP method (GET, POST, PUT, DELETE, etc.)
      headers: headers,
      body: body
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  },
};