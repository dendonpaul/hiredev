// const axios = require("axios");
document.getElementById("register-dev").addEventListener("submit", (e) => {
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

//Fetch Developers List
