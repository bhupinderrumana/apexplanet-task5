document.addEventListener("DOMContentLoaded", () => {
  const subjectFilter = document.getElementById("subjectFilter");
  const sortOption = document.getElementById("sortOption");
  const resourceList = document.getElementById("resourceList");

  if (!subjectFilter || !sortOption || !resourceList) return;

  const resources = [
    {
      title: "Algebra Basics",
      subject: "Math",
      difficulty: 2,
      link: "https://www.khanacademy.org/math/algebra",
    },
    {
      title: "Organic Chemistry Intro",
      subject: "Science",
      difficulty: 3,
      link: "https://www.youtube.com/watch?v=Cl6H8CkO624",
    },
    {
      title: "JavaScript Crash Course",
      subject: "Programming",
      difficulty: 1,
      link: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    },
    {
      title: "Data Structures in C++",
      subject: "Programming",
      difficulty: 3,
      link: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      title: "Physics: Motion",
      subject: "Science",
      difficulty: 2,
      link: "https://www.khanacademy.org/science/physics",
    },
  ];

  function renderResources() {
    const subject = subjectFilter.value;
    const sortBy = sortOption.value;

    let filtered = resources.filter(
      (r) => subject === "all" || r.subject === subject
    );

    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "difficulty") {
      filtered.sort((a, b) => a.difficulty - b.difficulty);
    }

    resourceList.innerHTML = filtered
      .map(
        (resource) => `
        <div class="resource-card">
          <h3>${resource.title}</h3>
          <p><strong>Subject:</strong> ${resource.subject}</p>
          <p><strong>Difficulty:</strong> ${resource.difficulty}</p>
          <a href="${resource.link}" target="_blank">Access Resource</a>
        </div>
      `
      )
      .join("");
  }

  subjectFilter.addEventListener("change", renderResources);
  sortOption.addEventListener("change", renderResources);

  renderResources(); // Initial render
});

