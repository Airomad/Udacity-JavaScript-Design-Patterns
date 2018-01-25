const bio = {
  name: 'Ivan Stin',
  role: 'Front-end Developer',
  contacts: {
    mobile: '00000000',
    email: 'myemail@gmail.com',
    github: 'https://github.com/airomad',
    twitter: 'https://twitter.com/airomad',
    location: 'Ukraine, Kharkiv',
  },
  welcomeMessage: 'Hello, guest!',
  skills: ['ReactJS', 'ReactNative', 'HTML', 'CSS', 'Javascript', 'Java', 'Kotlin'],
  biopic: 'https://avatars2.githubusercontent.com/u/25571153?s=460&v=4',

  display: function () {
    $('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', this.name));

    $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
    $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', this.contacts.email));
    $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
    $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
    $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', this.contacts.location));

    $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
    $('#header').append(HTMLskillsStart);

    this.skills.forEach(function (skill) {
      $('#skills').append(HTMLskills.replace('%data%', skill));
    });
  },
};

const education = {
  schools: [
    {
      name: 'School 1',
      location: 'Location 1',
      degree: 'Degree',
      majors: ['Major1', 'Major2', 'Major3'],
      dates: '2012-2015',
      url: 'url1',
    },
    {
      name: 'School 2',
      location: 'Location 2',
      degree: 'Degree',
      majors: ['Major1', 'Major2', 'Major3'],
      dates: '2015-2016',
      url: 'url2',
    },
  ],
  onlineCourses: [
    {
      title: 'Cool online Course',
      school: 'Udacity',
      dates: '2015-2016',
      url: 'url1',
    },
    {
      title: 'Cool online Course',
      school: 'Udacity',
      dates: '2015-2016',
      url: 'url1'
    },
  ],
  display: function () {
    this.schools.forEach(function (school) {
      const schoolEntry = $(HTMLschoolStart);

      const link = $(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));
      schoolEntry.append(link);
      schoolEntry.append(HTMLschoolDates.replace('%data%', school.dates));
      schoolEntry.append(HTMLschoolLocation.replace('%data%', school.location));
      
      school.majors.forEach(function (major) {
        schoolEntry.append(HTMLschoolMajor.replace('%data%', major));
      });

      $('#education').append(schoolEntry);
    });

    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function (onlineClass) {
      const classEntry = $(HTMLschoolStart);

      const link = $(HTMLonlineTitle.replace('%data%', onlineClass.title) + HTMLonlineSchool.replace('%data%', onlineClass.school));
      classEntry.append(link);
      classEntry.append(HTMLonlineDates.replace('%data%', onlineClass.dates));
      classEntry.append(HTMLonlineURL.replace('%data%', onlineClass.url));

      $('#education').append(classEntry);
    });
  },
};

const work = {
  jobs: [
    {
      employer: 'Project Manager',
      title: 'Project Manager',
      location: 'Ukraine, Kharkiv',
      dates: '2016-2017',
      description: 'Some job description',
    },
    {
      employer: 'Project Manager',
      title: 'Project Manager',
      location: 'Ukraine, Kiev',
      dates: '2017-2018',
      description: 'Some job description',
    },
    {
      employer: 'Project Manager',
      title: 'Project Manager',
      location: 'Ukraine, Lviv',
      dates: '2017-2018',
      description: 'Some job description',
    },
  ],
  display: function () {
    this.jobs.forEach(function (job) {
      const workEntry = $(HTMLworkStart);

      const link = $(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
      workEntry.append(link);
      workEntry.append(HTMLworkDates.replace('%data%', job.dates));
      workEntry.append(HTMLworkLocation.replace('%data%', job.location));
      workEntry.append(HTMLworkDescription.replace('%data%', job.description));

      $('#workExperience').append(workEntry);
    });
  },
};

const projects = {
  projects: [
    {
      title: 'Project 1',
      dates: '2015-2015',
      description: 'Project 1 Description',
      images: [
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
      ],
    },
    {
      title: 'Project 2',
      dates: '2016-2016',
      description: 'Project 2 Description',
      images: [
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
      ],
    },
    {
      title: 'Project 3',
      dates: '2017-2017',
      description: 'Project 3 Description',
      images: [
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
        'http://bm.img.com.ua/berlin/storage/orig/3/73/bb825c930723fee665945e1cfdb7f733.jpg',
      ],
    },
  ],
  display: function () {
    this.projects.forEach(function (project) {
      const projectEntry = $(HTMLprojectStart);

      projectEntry.append(HTMLprojectTitle.replace('%data%', project.title));
      projectEntry.append(HTMLprojectDates.replace('%data%', project.dates));
      projectEntry.append(HTMLprojectDescription.replace('%data%', project.description));

      project.images.forEach(function (image) {
        projectEntry.append(HTMLprojectImage.replace('%data%', image));
      });

      $('#projects').append(projectEntry);
    });
  },
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
