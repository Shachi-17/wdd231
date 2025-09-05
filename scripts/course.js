const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Intro to programming basics (variables, loops, arrays, etc.).',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Introduction to the World Wide Web, careers, and basic web design.',
    technology: ['HTML', 'CSS'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Organize, call, and debug functions. Error handling included.',
    technology: ['Python'],
    completed: false
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'Encapsulation, inheritance, and polymorphism with classes.',
    technology: ['C#'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'JavaScript for interactivity and responsive UX.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'User experience, accessibility, optimization, and APIs.',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];


function displayCourses(filter = "all") {
  const courseList = document.getElementById("course-list");
  const creditsEl = document.getElementById("credits");
  courseList.innerHTML = "";

  let filtered = courses;
  if (filter !== "all") {
    filtered = courses.filter(c => c.subject === filter.toUpperCase());
  }

  let totalCredits = 0;

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = `course ${course.completed ? "completed" : ""}`;
    div.innerHTML = `
      <strong>${course.subject} ${course.number}</strong>: ${course.title}
      <br><em>${course.credits} credits</em>
    `;
    courseList.appendChild(div);

    totalCredits += course.credits;
  });

  creditsEl.textContent = `Total Credits: ${totalCredits}`;
}


document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));


displayCourses();
