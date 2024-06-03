// gitprofile.config.ts

const CONFIG = {
    github: {
      username: 'marianneray',
    },
    /**
     * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
     * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
     * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
     */
    base: '/profile/',
    projects: {
      github: {
        display: false, // Display GitHub projects?
        header: 'Github Projects',
        mode: 'automatic', // Mode can be: 'automatic' or 'manual'
        automatic: {
          sortBy: 'stars', // Sort projects by 'stars' or 'updated'
          limit: 8, // How many projects to display.
          exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
          },
        },
        manual: {
          // Properties for manually specifying projects
          projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      external: {
        header: 'Various Adventures',
        // To hide the `External Projects` section, keep it empty.
        projects: [
          {
            title: 'Tufts Energy Conference 2018',
            description:
              'As Director of Content, I co-led a team of 20 to put together content addressing what policy, technology, and financial disruptions must occur to transform the global energy paradigm to meet national and international goals in 2030, 2050, and beyond. The Tufts Energy Conference is one of the largest entirely student-run energy conferences in New England, attracting nearly 400 attendees each year.',
            imageUrl:
              'https://higherlogicdownload.s3.amazonaws.com/DISTRICTENERGY/UploadedImages/2vqS8MHSSMKH5WmPbKMg_tec-2018-full-banner-logo-2.png',
            link: 'https://environment.tufts.edu/tec/files/TEC2018_Program.pdf',
          },
          {
              title: 'Tufts Energy Conference 2017',
              description:
                'As a member of the content team, I organized a panel examining the advantages and drawbacks of, and decision-making process for, deploying existing renewable technologies versus pursuing the innovation of newer, more cost-effective technologies. The 2017 conference explored the avenues through which innovation can be deployed to expand global energy access, including technology, policy, funding, and partnerships.',
              imageUrl:
                'https://environment.tufts.edu/wp-content/uploads/TEC-e1507661460114.png',
              link: 'https://tufts.qualtrics.com/ControlPanel/File.php?F=F_a3RtPklqK2NLbqR',

          },
        ],
      },
    },
    seo: {
      title: 'Portfolio of Ariful Alam',
      description: '',
      imageURL: '',
    },
    social: {
      linkedin: 'marianne-ray',
      //twitter: '',
      //mastodon: '',
      //researchGate: '',
      //facebook: '',
      //instagram: '',
      //reddit: '',
      //threads: '',
      //youtube: '',
      //udemy: '',
      //dribbble: '',
      //behance: '',
      //medium: '',
      //dev: '',
      //stackoverflow: '',
      //skype: '',
      //telegram: '',
      //website: '',
      //phone: '',
      //email: '',
    },
    resume: {
      fileUrl:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
    ],
    experiences: [
      {
          company: 'Ginkgo Bioworks',
          position: 'Senior Software Engineer',
          from: 'February 2023',
          to: 'present',
          companyLink: 'https://www.ginkgobiosecurity.com/',
        },
      {
        company: 'Broad Institute of MIT & Harvard',
        position: 'Senior Software Engineer',
        from: 'August 2020',
        to: 'January 2023',
        companyLink: 'https://www.broadinstitute.org/',
      },
      {
        company: 'One Brave Idea',
        position: 'Software Engineer',
        from: 'March 2019',
        to: 'August 2020',
        companyLink: 'https://www.onebraveidea.org/',
      },
      {
          company: 'Raytheon',
          position: 'Software Engineer I',
          from: 'September 2018',
          to: 'February 2019',
          companyLink: 'https://www.rtx.com/',
      },
    ],
    certifications: [
      //{
      //  name: 'Lorem ipsum',
      //  body: 'Lorem ipsum dolor sit amet',
      //  year: 'March 2022',
      //  link: 'https://example.com',
      //},
    ],
    educations: [
      {
        institution: 'MIT Sloan',
        degree: 'Certificate in Management & Leadership (Exec. Ed.)',
        from: '2021',
        to: '2022',
      },
      {
        institution: 'Tufts University',
        degree: 'BS Geology, minor in Computer Science',
        from: '2014',
        to: '2018',
      },
    ],
    publications: [
      {
        title: 'Transmission from vaccinated individuals in a large SARS-CoV-2 Delta variant outbreak',
        conferenceName: '',
        journalName: 'Cell. 2022 Feb 3',
        authors: 'Siddle KJ et al.',
        link: 'https://www.cell.com/cell/fulltext/S0092-8674(21)01490-2',
        description:
          'An outbreak of over 1,000 COVID-19 cases in Provincetown, Massachusetts (MA), in July 2021-the first large outbreak mostly in vaccinated individuals in the US-prompted a comprehensive public health response, motivating changes to national masking recommendations and raising questions about infection and transmission among vaccinated individuals. To address these questions, we combined viral genomic and epidemiological data from 467 individuals, including 40% of outbreak-associated cases. The Delta variant accounted for 99% of cases in this dataset; it was introduced from at least 40 sources, but 83% of cases derived from a single source, likely through transmission across multiple settings over a short time rather than a single event. Genomic and epidemiological data supported multiple transmissions of Delta from and between fully vaccinated individuals. However, despite its magnitude, the outbreak had limited onward impact in MA and the US overall, likely due to high vaccination rates and a robust public health response.',
      },
      {
          title: 'Behind the COVID-19 Testing Pipeline',
          conferenceName: 'Women in Data Science Conference',
          journalName: '',
          authors: 'Marianne Ray',
          link: '',
          description:
            '',
        },
    ],
    themeConfig: {
      defaultTheme: 'lofi',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultTheme
      respectPrefersColorScheme: false,

      // Display the ring in Profile picture
      displayAvatarRing: true,

      // Available themes. To remove any theme, exclude from here.
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
        'dim',
        'nord',
        'sunset',
        'procyon',
      ],

      // Custom theme, applied to `procyon` theme
      customTheme: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
        '--rounded-btn': '3rem',
      },
    },

    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a
        class="text-primary" href="https://github.com/arifszn/gitprofile"
        target="_blank"
        rel="noreferrer"
      >GitProfile</a> and ❤️`,

    enablePWA: true,
  };

  export default CONFIG;
