

let myLeads = [];
let inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}
function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
    let url = leads[i]
    if (!url.startsWith("http")) {
      url = "https://" + url
    }
    listItems += `
            <li>
              <a target='_blank' href='${url}'>
                ${leads[i]}
              </a>
            </li>
    `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  render(myLeads)

  localStorage.setItem("myLeads", JSON.stringify(myLeads))


})


