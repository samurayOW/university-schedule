/* Дані розкладу: week: odd — н/п, even — п, all — щотижня. Для відсутнього URL залишайте conference: null. */
const scheduleData = {
  groupName: "Розклад АС-222",
  days: [
    {
      lessons: [
        { number: 1, time: "08:00–09:35", options: [] },
        {
          number: 2,
          time: "09:50–11:25",
          options: [
            {
              week: "numerator",
              format: "1–15 · практика",
              subject: "Системна інженерія ПЗ",
              teacher: "д. Тройніна А.С.",
              conference: {
                label: "Zoom",
                url: "https://us04web.zoom.us/j/3092296224?pwd=bVluWDQ1YWlEWGZ5WGUxUnNQdzIvdz09",
              },
            },
            {
              week: "denominator",
              format: "2–14 · лабораторна",
              subject: "Системна інженерія ПЗ",
              teacher: "д. Тройніна А.С.",
              conference: {
                label: "Zoom",
                url: "https://us04web.zoom.us/j/3092296224?pwd=bVluWDQ1YWlEWGZ5WGUxUnNQdzIvdz09",
              },
            },
          ],
        },
        {
          number: 3,
          time: "11:40–13:15",
          options: [],
        },
        { number: 4, time: "13:30–15:05", options: [] },
      ],
    },
    {
      lessons: [
        {
          number: 1,
          time: "08:00–09:35",
          options: [
            {
              week: "all",
              format: "1–15 · практика",
              subject: "Іноземна мова за професійним спрямуванням",
              teacher: "д. Андрейкова І. Б.",
              conference: {
                label: "Meet",
                url: "https://meet.google.com/aao-ecku-zsv",
              },
            },
          ],
        },
        {
          number: 2,
          time: "09:50–11:25",
          options: [
            {
              week: "all",
              format: "1–15 · лекція",
              subject: "Розробка та забезпечення якості ПЗ",
              teacher: "д. Прігожев О.С.",
              conference: {
                label: "Zoom",
                url: "https://us05web.zoom.us/j/84961383407?pwd=ArYlqXT8KmxeVPgRuw4grbrDpo4D4L.1",
              },
            },
          ],
        },
        {
          number: 3,
          time: "11:40–13:15",
          options: [
            {
              week: "all",
              format: "1–15 · лекція",
              subject:
                "Методи та технології розподілених та паралельних обчислень",
              teacher: "проф. Приходько С.Б.",
              conference: {
                label: "Meet",
                url: "https://meet.google.com/cqm-hiuq-gft",
              },
            },
          ],
        },
        { number: 4, time: "13:30–15:05", options: [] },
      ],
    },
    {
      lessons: [
        {
          number: 1,
          time: "08:00–09:35",
          options: [
            {
              week: "all",
              format: "1–15 · лекція",
              subject: "Системна інженерія ПЗ",
              teacher: "д. Тройніна А.С.",
              conference: {
                label: "Zoom",
                url: "https://us04web.zoom.us/j/3092296224?pwd=bVluWDQ1YWlEWGZ5WGUxUnNQdzIvdz09",
              },
            },
          ],
        },
        {
          number: 2,
          time: "09:50–11:25",
          options: [
            {
              week: "all",
              format: "1–15 · лекція",
              subject: "Інженерія ПЗ систем штучного інтелекту",
              teacher: "пр. Любченко В.В.",
              conference: {
                label: "Meet",
                url: "http://meet.google.com/usa-umrz-zur",
              },
            },
          ],
        },
        {
          number: 3,
          time: "11:40–13:15",
          options: [
            {
              week: "denominator",
              format: "2–14 · лабораторна",
              subject: "Інженерія ПЗ систем ШІ",
              teacher: "пр. Любченко В.В.",
              conference: {
                label: "Meet",
                url: "http://meet.google.com/usa-umrz-zur",
              },
            },
          ],
        },
        { number: 4, time: "13:30–15:05", options: [] },
      ],
    },
    {
      lessons: [
        { number: 1, time: "08:00–09:35", options: [] },
        { number: 2, time: "09:50–11:25", options: [] },
        {
          number: 3,
          time: "11:40–13:15",
          options: [
            {
              week: "all",
              format: "1–15 · лаб. / 2–14 · практ.",
              subject:
                "Методи та технології розподілених та паралельних обчислень",
              teacher: "ст. в. Ілуца Андрій Сергійович",
              conference: {
                label: "Zoom",
                url: "https://us02web.zoom.us/j/8271162153?pwd=NEliSGlXWlRKUFFSTU5TMTVrQU05dz09",
              },
            },
          ],
        },
        {
          number: 4,
          time: "13:30–15:05",
          options: [
            {
              week: "numerator",
              format: "3–15 · практика",
              subject: "Іноземна мова",
              teacher: "д. Гродська Е.Б.",
              conference: {
                label: "Meet",
                url: "https://meet.google.com/zmx-zdak-xdn",
              },
            },
          ],
        },
      ],
    },
    {
      lessons: [
        { number: 1, time: "08:00–09:35", options: [] },
        {
          number: 2,
          time: "09:50–11:25",
          options: [
            {
              week: "numerator",
              format: "1–15 · лекція",
              subject: "Методи та засоби наукових досліджень в інженерії ПЗ",
              teacher: "пр. Маслов О.В.",
              conference: {
                label: "Zoom",
                url: "https://us02web.zoom.us/j/87544031069?pwd=U2pVQnE2Tk52UHhjK0lOaHl5OHQzUT09",
              },
            },
            {
              week: "denominator",
              format: "2–14 · практика",
              subject: "Методи та засоби наукових досліджень в інженерії ПЗ",
              teacher: "пр. Маслов О.В.",
              conference: {
                label: "Zoom",
                url: "https://us02web.zoom.us/j/87544031069?pwd=U2pVQnE2Tk52UHhjK0lOaHl5OHQzUT09",
              },
            },
          ],
        },
        {
          number: 3,
          time: "11:40–13:15",
          options: [
            {
              week: "denominator",
              format: "2–14 · лабораторна",
              subject: "Розробка та забезпечення якості ПЗ",
              teacher: "д. Прігожев О.С.",
              conference: {
                label: "Zoom",
                url: "https://us05web.zoom.us/j/84961383407?pwd=ArYlqXT8KmxeVPgRuw4grbrDpo4D4L.1",
              },
            },
          ],
        },
        {
          number: 4,
          time: "13:30–15:05",
          options: [
            {
              week: "all",
              format: "консультація",
              subject: "Курсовий проєкт",
              teacher: "Сичков В. С.",
              conference: {
                label: "Zoom",
                url: "https://us05web.zoom.us/j/6283003618?pwd=d09ONG92aUxVRC81WEQ5RFhGTm1Rdz09",
              },
            },
          ],
        },
      ],
    },
  ],
  notes: [
    {
      title: "Управління комунікаціями",
      text: "Ідентифікатор конференції: 627 601 6149 · Код доступу: 44RZut",
    },
    { title: "ПД-332/331-02", text: "ВД04-01" },
    {
      title: "Людино-машинна взаємодія",
      text: "Zoom — ID: 895 2306 6836 · Код: z3VA64",
    },
    { title: "Вебпрограмування", text: "Zoom — ID: 6975743082 · Код: 1" },
    {
      title: "Креативний менеджмент",
      text: "Відкрити Google Classroom",
      url: "https://classroom.google.com/c/ODQ1NTEzNjQ5NTU2?cjc=fuq5kvq5",
    },
    {
      title: "Онлайн-зустріч",
      text: "Відкрити Google Meet",
      url: "https://meet.google.com/xto-pcwm-gsk",
    },
  ],
};

// Сумісність із записами, які були створені до перейменування типів тижня.
scheduleData.days.forEach((day) =>
  day.lessons.forEach((lesson) =>
    lesson.options.forEach((option) => {
      if (option.week === "numerator") option.week = "odd";
      if (option.week === "denominator") option.week = "even";
    }),
  ),
);
