/**
 * get email from email field
 */
const getEmail = () => document.getElementById('email').value;

/** *
 * get password from password field
 */
const getPassword = () => document.getElementById('password').value;

/**
 * Fetch login button
 */
const loginButton = document.getElementById('loginButton');

const loginUser = async (event) => {
  event.preventDefault();

  /**
  * get email
  */
  const email = getEmail();

  /** *
   * get password
   */
  const password = getPassword();

  /**
     * call our login API
     */

  const response = await fetch(`${window.location.origin}/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const result = await response.json();

  if (response.status === 422) {
    /**
       * User has made mistake in input & we will bounce him back
       */
    cuteAlert({
      type: 'error',
      title: 'Error!',
      message: 'Please enter email or password',
      buttonText: 'Okay'
    });
  }

  if (response.status === 401) {
    cuteToast({
      type: 'error', // or 'info', 'error', 'warning'
      message: result.message,
      timer: 5000
    });
  }

  if (response.status === 200) {
    await cuteToast({
      type: 'success', // or 'info', 'error', 'warning'
      message: result.message,
      timer: 2000
    });

    // redirect user to dashboard
    window.location.href = '/dashboard';
  }
};

/**
 * Make login button respond to our needs
 */
loginButton.addEventListener('click', loginUser);
