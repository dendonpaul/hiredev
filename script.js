// const axios = require("axios");
document.getElementById("register-dev").addEventListener("submit", (e) => {
  e.preventDefault();

  let form = e.currentTarget;
  let url = form.action;
  let formData = new FormData(form);
  let technologies = formData.getAll("technologies");
  formData.delete("technologies");
  console.log(formData);
  let formDataJson = Object.fromEntries(formData.entries());
  //   let formDataJson = Object.fromEntries(formData.entries());
  formDataJson.technologies = technologies;

  axios
    .post(url, formDataJson)
    .then(function (response) {
      console.log(response.data.message);
      //   e.target.innerHTML = response.data.message;
      window.location.href = "thankyou.html";
    })
    .catch(function (error) {
      console.log(error);
    });
});
