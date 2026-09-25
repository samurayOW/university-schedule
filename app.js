/* global scheduleData */
const DAYS = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"],
  SEMESTER_START = new Date(2026, 8, 14), // START OF THE SEMESTR
  scheduleElement = document.querySelector("#schedule"),
  currentWeekElement = document.querySelector("#currentWeek");
let activeFilter = "all";
function getWeekType(date = new Date()) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    days = Math.floor((today - SEMESTER_START) / 86400000),
    week = Math.max(1, Math.floor(days / 7) + 1);
  return { week, type: week % 2 ? "odd" : "even" };
}
function labelFor(type) {
  return type === "odd" ? "н/п" : "п";
}
function renderConference(link) {
  return !link || !link.url
    ? '<span class="conference-button" aria-disabled="true">Посилання з’явиться пізніше</span>'
    : `<a class="conference-button" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label || "Відкрити конференцію"} ↗</a>`;
}
function renderAccessCode(code) {
  if (!code) return "";
  return `<div class="access-code"><span>Код: <strong>${code}</strong></span><button class="copy-code" type="button" data-copy-code="${code}" aria-label="Копіювати код ${code}">Копіювати</button></div>`;
}
function renderOption(option) {
  const typeClass =
      option.week === "all" ? "" : ` lesson-option--${option.week}`,
    badge =
      option.week === "all"
        ? ""
        : `<span class="badge badge--${option.week}">${labelFor(option.week)}</span>`;
  return `<article class="lesson-option${typeClass}"><div class="lesson-option__top">${badge}<span class="lesson-option__format">${option.format || ""}</span></div><h3>${option.subject}</h3>${option.teacher ? `<p class="teacher">${option.teacher}</p>` : ""}${renderConference(option.conference)}${renderAccessCode(option.accessCode)}</article>`;
}
function renderSchedule() {
  scheduleElement.innerHTML = scheduleData.days
    .map((day, dayIndex) => {
      const lessons = day.lessons
        .map((lesson) => {
          const visible = lesson.options.filter(
            (option) =>
              activeFilter === "all" ||
              option.week === "all" ||
              option.week === activeFilter,
          );
          return `<section class="lesson"><div class="lesson__meta"><span>${lesson.number} пара</span><time>${lesson.time}</time></div><div class="lesson__content">${visible.length ? visible.map(renderOption).join("") : '<p class="empty-lesson">На цьому тижні занять немає</p>'}</div></section>`;
        })
        .join("");
      return `<article class="day"><header class="day__header"><h2>${DAYS[dayIndex]}</h2></header>${lessons}</article>`;
    })
    .join("");
}
function renderNotes() {
  document.querySelector("#notes").innerHTML = scheduleData.notes
    .map(
      (note) =>
        `<article class="note"><h3>${note.title}</h3>${note.url ? `<a href="${note.url}" target="_blank" rel="noopener noreferrer">${note.text} ↗</a>` : `<p>${note.text}</p>`}</article>`,
    )
    .join("");
}
function init() {
  document.querySelector("#groupName").textContent = scheduleData.groupName;
  const current = getWeekType();
  currentWeekElement.textContent = `${labelFor(current.type)} · ${current.week}-й тиждень навчання`;
  renderSchedule();
  renderNotes();
  scheduleElement.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy-code]");
    if (!button) return;
    const code = button.dataset.copyCode;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const input = document.createElement("textarea");
      input.value = code;
      document.body.append(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    button.textContent = "Скопійовано";
    setTimeout(() => {
      button.textContent = "Копіювати";
    }, 1600);
  });
  document.querySelectorAll("[data-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document
        .querySelectorAll("[data-filter]")
        .forEach((item) => item.classList.toggle("is-active", item === button));
      renderSchedule();
    }),
  );
}
init();
