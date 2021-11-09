const btnSubmit = document.getElementById('btn-submit');

const saveOptions = () => {
  const databaseId = document.getElementById('databaseId');
  const notionKey = document.getElementById('notionKey');

  chrome.storage.sync.set(
    {
      databaseId: databaseId.value,
      notionkey: notionKey.value,
    },
    () => {
      const status = document.getElementById('status');
      status.style.opacity = '1';
      status.innerText = 'Options Saved.';
      setTimeout(() => {
        status.innerText = '';
        status.style.opacity = '0';
        console.log(items);
      }, 500);
    }
  );
};

const getOptions = () => {
  chrome.storage.sync.get(['databaseId', 'notionkey'], (items) => {
    
    console.log(items.notionkey);
    console.log(items.databaseId);
    databaseId.value = items.databaseId;
    notionKey.value = items.notionkey;
  });
};

getOptions();

btnSubmit.addEventListener('click', saveOptions);
