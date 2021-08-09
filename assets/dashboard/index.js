const renderMemoryTemplate = (title, picture, id) => `<div class="memory">
<div class="memoryImage" style="background-image: url(${picture || '/svgs/sunset.svg'})"> </div>
<div class="memoryTitle">${title}</div>
<div class="buttonSection"><a href=/memories/${id}><button class="readButton">Read</button></a></div>

</div>`;


const fetchMemories = async () => {
  const tokenInBrowser = window.localStorage.getItem('token');
/***
 * fetch memories
 */
 const response = await fetch(`${window.location.origin}/api/v1/memories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': tokenInBrowser
    }
  });

  const result = await response.json();

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
    window.localStorage.removeItem('token');
    window.location.href = '/login';

  }

  if(response.ok) {
      const memoryList = document.getElementById('memoryList');
      

    const memoryTemplates = result.map(({ id, picture, title }) => renderMemoryTemplate(title, picture, id)).join('');


      memoryList.insertAdjacentHTML('afterbegin', memoryTemplates);

  }


}

    fetchMemories();
