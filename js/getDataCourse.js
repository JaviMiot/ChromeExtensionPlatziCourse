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

  return data;
}

const updateDataPopUp = (data) => {
  dataCourse = data;
  let subtitleArray = [];
  imgForm.src = data.image;
  title.value = data.title;
  urlImage.value = data.image;
  teacherName.value = data.teacherName;
  urlCourse.value = data.url;

  resultsOfInjection.subTitles.forEach((element) => {
    let subtitle = document.createElement('li');
    subtitle.innerText = element;
    subtitleArray.push(subtitle);
  });

  subtitlesContainer.append(...subtitleArray);
};

btnGetData.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: getDataCourse,
    },
    (injectionResults) => {
      resultsOfInjection = injectionResults[0].result;
      updateDataPopUp(resultsOfInjection);
    }
  );
});

const btnsCopyArray = Array.from(btnsCopy);

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
