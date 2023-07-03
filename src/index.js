import "./styles.css";

const submitButton = document.getElementById("submit-data")
const showdata = document.getElementsByClassName("show-data")

submitButton.addEventListener("click", getShows)

async function getShows() {
    event.preventDefault()
    const w = document.getElementById("input-show").value
    const response = await fetch("https://api.tvmaze.com/search/shows?q="+w);
    const jsonData = await response.json();
    console.log(jsonData);

    showdata[0].innerHTML = "";

    const x = jsonData;

    x.forEach((r) => {
        const img = document.createElement("img");
        img.src = r.show.image.medium;
        showdata[0].appendChild(img);

        const showinfo = document.createElement("div");
        showdata[0].appendChild(showinfo);

        const title = document.createElement("h1");
        title.innerHTML = r.show.name;
        showinfo.appendChild(title)

        const summary = document.createElement("p")
        summary.innerHTML = r.show.summary;
        showinfo.appendChild(summary);

    });
}