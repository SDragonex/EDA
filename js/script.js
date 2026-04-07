const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if(!name || !email || !message){
    msg.textContent = "Vyplňte všechna pole!";
    msg.style.color = "red";
    return;
  }

  if(!email.includes("@")){
    msg.textContent = "Neplatný email!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Zpráva byla odeslána!";
  msg.style.color = "lightgreen";

  form.reset();
});
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".card").forEach(el => {
  observer.observe(el);
});
