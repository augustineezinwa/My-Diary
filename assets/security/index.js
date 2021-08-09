const validateToken = async () => {

    const tokenInBrowser = localStorage.getItem('token');

      /**
     * call our validate token API
     */

  const response = await fetch(`${window.location.origin}/api/v1/tokenvalidate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': tokenInBrowser
    }
  });

  const result = await response.json();

  /***
   * redirect to login, if token is not valid
   */
  if(response.status !== 200) {
      window.location.href = '/login';
  }
}
