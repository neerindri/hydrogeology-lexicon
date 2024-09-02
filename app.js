let Lexikon;
function getLexikon() {
  return fetch("./lexikon.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Returns a promise that resolves with JSON data
    })
    .then((data) => {
      Lexikon = Object.values(data);
    });
}
// const Lexikon = fetch('lexikon.json').then(response => response.json).then(data => console.log(data))
// const Lexikon = getLexikon()
getLexikon();

const searchTerm = (row, lang, term) => {
  return row[lang].includes(term);
};
const search = () => {
  const searchField = document.getElementById("search-term");
  const lang = document.getElementById("language").value;
  const term = searchField.value.toLowerCase();
  var resultTableBody = document.getElementById("results");
  resultTableBody.innerHTML = "";

  console.log("Got search values", term, lang);

  results = Lexikon.filter((row) => searchTerm(row, lang, term));
  console.log("Search result", results);
  if (results.length > 0) {
    results.forEach((result) => {
      const row = document.createElement("tr");
      for (const key in result) {
        const cell = document.createElement("td");
        cell.textContent = result[key];
        row.appendChild(cell);
      }
      resultTableBody.appendChild(row);
    });
    resultTableBody.innerHTML += "</tbody></table>";
  } else {
    resultTableBody.innerHTML = "<p>No results found for search term</p>";
  }
};
const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-term");

searchButton.addEventListener("click", search);
searchField.addEventListener("submit", search);
