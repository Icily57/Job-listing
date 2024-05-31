document.addEventListener("DOMContentLoaded", () => {
    const jobsContainer = document.querySelector('.job-listings');
    const filterButtons = document.querySelectorAll('.filter-button');
    const clearFiltersButton = document.getElementById('clear-filters');
  
    const jobsData = [
      {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
      },
      {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      },
      {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
      },
      {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Ruby"],
        "tools": ["Sass"]
      },
      {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
      },
      {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
      },
      {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
      },
      {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
      },
      {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
      }
    ];
  
    function createJobListing(job) {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job');
  
      jobElement.innerHTML = `
        <div class="job-header">
          <img src="${job.logo}" alt="${job.company}" class="company-logo">
          <span class="company">${job.company}</span>
          ${job.new ? '<span class="new">NEW!</span>' : ''}
          ${job.featured ? '<span class="featured">FEATURED</span>' : ''}
        </div>
        <h2 class="position">${job.position}</h2>
        <div class="job-details">
          <span>${job.postedAt}</span>
          <span>•</span>
          <span>${job.contract}</span>
          <span>•</span>
          <span>${job.location}</span>
        </div>
        <div class="job-tags">
          ${[...job.languages, ...job.tools].map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      `;
  
      return jobElement;
    }
  
    function renderJobListings(filterRole = null) {
      jobsContainer.innerHTML = '';
      const filteredJobs = filterRole ? jobsData.filter(job => job.role === filterRole) : jobsData;
      filteredJobs.forEach(job => {
        const jobListing = createJobListing(job);
        jobsContainer.appendChild(jobListing);
      });
    }
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const role = button.getAttribute('data-role');
        renderJobListings(role);
      });
    });
  
    clearFiltersButton.addEventListener('click', () => {
      renderJobListings();
    });
  
    // Initial render
    renderJobListings();
  });
  