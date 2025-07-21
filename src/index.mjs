

let myLeads = [];
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""

});

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    let url = myLeads[i]
    if (!url.startsWith("http")) {
      url = "https://" + url
    }
    listItems += `
            <li>
              <a target='_blank' href='${url}'>
                ${myLeads[i]}
              </a>
            </li>
    `
  }
  ulEl.innerHTML = listItems
}

