/**
 * get name from name field
 */
 const getName = () => document.getElementById('name').value;

/**
 * get email from email field
 */
 const getEmail = () => document.getElementById('email').value;

 /** *
  * get password from password field
  */
 const getPassword = () => document.getElementById('password').value;
 
 /**
  * Fetch signup button
  */
 const signupButton = document.getElementById('signupButton');
 
 const signupUser = async (event) => {
   event.preventDefault();

   const name = getName();
 
   /**
   * get email
   */
   const email = getEmail();
 
   /** *
    * get password
    */
   const password = getPassword();
 
   /**
      * call our signup API
      */
 
   const response = await fetch(`${window.location.origin}/api/v1/signup`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json;charset=utf-8',
     },
     body: JSON.stringify({
       email,
       password,
       name,
     })
   });
 
   const result = await response.json();
 
   if (response.status === 422) {

    const error = result.errors.email || result.errors.name || result.errors.password;
     /**
        * User has made mistake in input & we will bounce him back
        */
     cuteAlert({
       type: 'error',
       title: 'Error!',
       message: error[0].message,
       buttonText: 'Okay'
     });
   }
 
   if (response.status === 201) {
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
 signupButton.addEventListener('click', signupUser);
 