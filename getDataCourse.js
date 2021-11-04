const btnGetData = document.querySelector('#btn-getData');
const btnsCopy = document.querySelectorAll('#btn-copy');
const btnsCopySubtitle = document.querySelector('#btn-copy-subtitle');

const imgForm = document.querySelector('#imageCourse');
const title = document.querySelector('#title');
const urlImage = document.querySelector('#urlImage');
const teacherName = document.querySelector('#teacherName');
const urlCourse = document.querySelector('#urlCourse');

const subtitlesContainer = document.querySelector('#suttitles-container');
let dataCourse = {};

function getDataCourse() {
  let courseImg = document.querySelector('.CourseDetail-left-figure')
    .firstElementChild.src;

  let courseTitle = document
    .querySelector('.CourseDetail-left-title')
    .innerText.substring(11);

  let courseUrl = document.location.href;

  let courseTeacherName = document.querySelector(
    '.TeacherList-full-name'
  ).innerText;

  let courseSubtitles = document.querySelectorAll('.Material-title');

  let courseSubtitlesArray = Array.from(courseSubtitles).map(
    (title) => title.innerText
  );

  const data = {
    image: courseImg,
    title: courseTitle,
    teacherName: courseTeacherName,
    url: courseUrl,
    subTitles: courseSubtitlesArray,
  };
  //console.log(data);

  return data;
}

btnGetData.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: getDataCourse,
    },
    (injectionResults) => {
      dataCourse = injectionResults[0].result;
      let subtitleArray = [];
      imgForm.src = injectionResults[0].result.image;
      title.value = injectionResults[0].result.title;
      urlImage.value = injectionResults[0].result.image;
      teacherName.value = injectionResults[0].result.teacherName;
      urlCourse.value = injectionResults[0].result.url;

      injectionResults[0].result.subTitles.forEach((element) => {
        let subtitle = document.createElement('li');
        subtitle.innerText = element;
        subtitleArray.push(subtitle);
      });

      subtitlesContainer.append(...subtitleArray);
    }
  );
});

const btnsCopyArray = Array.from(btnsCopy);

console.log(btnsCopyArray);

btnsCopyArray.map((btnCopy) => {
  btnCopy.addEventListener('click', (event) => {
    const input = event.target.parentNode.firstElementChild;
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
  });
});

btnsCopySubtitle.addEventListener('click', (event) => {
  navigator.clipboard.writeText(dataCourse.subTitles);
});
