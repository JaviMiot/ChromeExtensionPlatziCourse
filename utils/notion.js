const generatePageNotion = (data, { notionKey, databaseId }) => {
  const page = {
    notionkey: notionKey,
    data: {
      parent: {
        database_id: databaseId,
      },
      icon: {
        type: 'external',
        external: {
          url: data.image,
        },
      },
      properties: {
        Status: {
          select: {
            name: 'En Proceso',
          },
        },
        Profesor: {
          multi_select: [
            {
              name: data.teacherName,
            },
          ],
        },
        link: {
          url: data.url,
        },
        'Nombre del curso': {
          title: [
            {
              type: 'text',
              text: {
                content: data.title,
              },
            },
          ],
        },
      },
    },
  };

  return page;
};

const createNotionPage = async (data, auth = {}) => {
  const jsonPage = generatePageNotion(data, auth);
  const urlBase = 'https://apinotion.herokuapp.com/api/v1/notion/database';

  const settings = {
    method: 'POST',
    body: JSON.stringify(jsonPage),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(
      `${urlBase}/:${auth.databaseId}/createpage/`,
      settings
    );
    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    return error.message;
  }
};
