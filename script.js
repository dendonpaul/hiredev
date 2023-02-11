// const axios = require("axios");
const register_dev = document.getElementById("register-dev");

if (register_dev) {
  register_dev.addEventListener("submit", (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let url = form.action;
    let formData = new FormData(form);

    let technologies = formData.getAll("technologies");
    console.log(technologies);
    formData.delete("technologies");

    let formDataJson = Object.fromEntries(formData.entries());

    formDataJson.technologies = technologies;
    console.log(formDataJson);

    axios
      .post(url, formDataJson)
      .then(function (response) {
        console.log(response.data.message);
        //   e.target.innerHTML = response.data.message;
        window.location.href = "login.html";
      })
      .catch(function (error) {
        console.log(error);
      });
  });
}
//Fetch Developers List
const devList = document.getElementById("devList");
if (devList) {
  console.log(devList);
  axios.get("http://localhost:5001/dev-list").then((response) => {
    console.log(response);
    response.data.forEach((res) => {
      devList.innerHTML += `
      <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${res.name}</h5>
                        <p class="card-text">${res.technologies}</p>
                        <a href="#"><i class="fa-brands fa-github"></i></a><br />
                        <a href="#" class="btn btn-primary">Send Request</a>
                    </div>
                </div>
            </div>
      `;
    });
  });
}
