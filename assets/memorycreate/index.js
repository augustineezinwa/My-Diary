let pictureUrl;
let fileName;
const pictureInput = document.getElementById('myfile');
console.log(pictureInput, 'pictureInput');

const uploadFile = (event) => {
  const reader = new FileReader();

  reader.onload = () => {
    pictureUrl = reader.result;
    console.log(pictureUrl, 'pictureUrl');
  };
  reader.readAsDataURL(event.target.files[0]);
  console.log(event.target.files[0], 'event.target.files[0]');
  fileName = event.target.files[0].name;
};


const createMemory = async (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const mood = document.getElementById('mood').value;
  const story = document.getElementById('story').value;
 
  /**
   * upload picture
   *
   */
  let uploadResponse;
  let photoUrl;
  if (pictureUrl) {
    uploadResponse = await fetch(`${window.location.origin}/api/v1/image/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ picture: pictureUrl, fileName  })
    });

    if (!uploadResponse.ok) {
      await cuteToast({
        type: 'error', // or 'info', 'error', 'warning'
        message: 'Image upload failed!',
        timer: 2500
      });
      return null;
    }
    await cuteToast({
      type: 'info', // or 'info', 'error', 'warning'
      message: 'Image uploaded!',
      timer: 2500
    });

    const imageUploadresult = await uploadResponse.json();
    photoUrl = imageUploadresult.url;
  }

  /**
     * call create memory API
  */

  const response = await fetch(`${window.location.origin}/api/v1/memories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      title,
      story,
      mood,
      picture: photoUrl || ''
    })
  });

  const result = await response.json();

  if (response.status === 422) {
    const errors = result.errors.title || result.errors.mood || result.errors.story;

    /**
       * User has made mistake in input & we will bounce him back
       */
    cuteAlert({
      type: 'error',
      title: 'Error!',
      message: errors[0].message,
      buttonText: 'Okay'
    });
  }

  if (response.status === 401) {
    /**
     * display a message to user when their session expires
     */
    await cuteToast({
      type: 'error', // or 'info', 'error', 'warning'
      message: 'Session expired!',
      timer: 2500
    });

    /**
       * redirect user to login page
       */
    window.location.href = '/login';
  }

  if (response.ok) {
    await cuteToast({
      type: 'success', // or 'info', 'error', 'warning'
      message: result.message,
      timer: 2500
    });

    window.location.href = `/memories/${result.memory.id}`;
  }
};


pictureInput.addEventListener('change', uploadFile);

const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', createMemory);
