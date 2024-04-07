const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    const background = getComputedStyle(form).backgroundImage;

    const percentageRegex = /(\d+)/g;
    const matches = background.match(percentageRegex);

    if (input.value !== "") {
      let percentageValue = parseInt(matches[3]) + 20 + "%";

      form.style.backgroundImage = `linear-gradient(to top, var(--blue) ${percentageValue}, var(--surface) ${percentageValue})`;
    } else {
      let percentageValue = parseInt(matches[3]) - 20 + "%";

      form.style.backgroundImage = `linear-gradient(to top, var(--blue) ${percentageValue}, var(--surface) ${percentageValue})`;
    }
  });
});
