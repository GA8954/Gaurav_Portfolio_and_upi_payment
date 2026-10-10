function toggleMenu(){
    document.getElementById("nav").classList.toggle("open");
}
document.querySelectorAll("#nav a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("nav").classList.remove("open"));
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add("show");
    });
},{threshold:0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


// Static-hosting contact form: opens the visitor's email app instead of posting to a Flask backend.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);
    window.location.href = "mailto:gkyadav834@gmail.com?subject=" + subject + "&body=" + body;
  });
}
