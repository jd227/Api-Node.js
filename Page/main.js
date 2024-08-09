async function consulta() {
    const result = await fetch("http://localhost:8000");
    const data = await result.json();
    console.log(data);
    return data;
}

const body = document.body;
const section = document.createElement('section');
(async () => {
    const fetchedData = await consulta(); 
    section.innerHTML = `${Object.keys(fetchedData)} : ${Object.values(fetchedData)}`;
})();

section.classList.add("result");
body.appendChild(section);
