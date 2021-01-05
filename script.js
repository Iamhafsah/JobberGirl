let main = document.getElementsByTagName('main')[0];
let container = document.querySelector('.job-container')
let html = document.querySelector('.html')
let frontend = document.querySelector('.frontend')
let javascript = document.querySelector('.javascript')
let backend = document.querySelector('.backend')
let search = document.querySelector('.search')


let dataJson = [];

const renderTemplate = (list)=>{

  var renderPageContent =
   `
  <div class="job-container">
  
  <div class="info-wrapper">
    <div class="img">
      <img src='${list.logo}' alt="company-avatar" 
      class="logo">
    </div>

    <div class="middle-info">
      <div class="info">
        <span class="name">${list.company}</span>
        <span class="new">NEW!</span>
        <span class="featured">FEATURED</span>
      </div>

      <p class="job-title">${list.position}</p>

      <div class="specs">
        <span class="duration">${list.postedAt}</span>
        <span>.</span>
        <span class="type">${list.contract}</span>
        <span>.</span>
        <span class="location">${list.location}</span>
      </div>
    </div>
  </div>

    <div class="mid-line"></div>

    <div class="tags">
      <span class="tag-span1">JavaScript</span>
      <span class="tag-span2">HTML</span>
      <span class="tag-span3">CSS</span>
    </div>

  </div>`
  
  let mainDiv = document.createElement('div') 
  mainDiv.innerHTML = renderPageContent
  main.appendChild(mainDiv)
}



  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
      dataJson.push(...data)
      dataJson.map(renderTemplate)    
  })

    
  inputChange = (e) =>{

    const value = e.target.value;
    searchResult = dataJson.filter(data => (
       data.role.toLowerCase().includes(value.toLowerCase()) || data.position.toLowerCase().includes(value.toLowerCase()) || data.contract.toLowerCase().includes(value.toLowerCase()) || data.languages[0].toLowerCase().includes(value.toLowerCase())
    ))

    while (main.hasChildNodes()) {  
      main.removeChild(main.firstChild);
    }
    searchResult.map(renderTemplate)
    
  }


  search.addEventListener('input', inputChange)
