const toggleMemberListBtn = document.querySelector("#toggleMemberListBtn");

toggleMemberListBtn.addEventListener("click", () => {
  const memberList = document.querySelector("#memberList");

  if (memberList.style.display === "none") {
    memberList.style.display = "block";
    toggleMemberListBtn.classList.add("active");
  } else {
    memberList.style.display = "none";
    toggleMemberListBtn.classList.remove("active");
  }
});

const darkModeCheckbox = document.querySelector("#darkModeCheckbox");
darkModeCheckbox.addEventListener("change", () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add("lightMode");
    document.body.classList.remove("darkMode");
  } else {
    document.body.classList.add("darkMode");
    document.body.classList.remove("lightMode");
  }
});
