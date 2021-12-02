const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://andrewgrosser.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    //logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    //logoLink: 'https://hasura.io/learn/',
    title: "<a href='/'><h1>Andrew <strong>Grosser</strong></h1></a>",
    //githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/andrewgrosser" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/poems', // add trailing slash if enabled above
      '/learn-code-basic',
    ],
    collapsedNav: [
      '/learn-code-basic', // add trailing slash if enabled above
    ],
    links: [
      { text: 'neuromore', link: 'https://neuromore.com' }, 
      { text: 'Sourcetable', link: 'https://sourcetable.com' },
      { text: 'Homodea', link: 'https://homodea.com/' },
      { text: 'ActGreen', link: 'https://actgreen.org' },
      { text: 'Painkillr', link: 'https://painkillr.com/' },
      { text: 'Jelass', link: 'https://github.com/sfproductlabs/jelass' },
      { text: 'Roo', link: 'https://github.com/sfproductlabs/roo' },      
      { text: 'WAVR', link: 'https://wideawakevr.com/' },
      { text: 'Valid9', link: 'https://valid9.com/' },
      { text: 'Voshpit', link: 'https://voshpit.com/' },
      { text: 'ADuCM350 Compiler', link: 'https://github.com/sfproductlabs/ADuCM350' }, 
      { text: '2020 Insights', link: 'https://www.2020insights.net/' },           
      { text: 'SFPL', link: 'https://sfpl.io' }, 
      { text: 'MediPen', link: 'https://github.com/sfproductlabs/tweezers' },       
      { text: 'Protogen', link: 'http://www.protogen.com.au/' },  
      { text: 'Tracker', link: 'https://github.com/sfproductlabs/tracker' },           
      { text: 'Lie Machines', link: 'https://liemachines.com' }, 
      { text: 'LinkedIn', link: 'https://linkedin.com/in/agrosser' }
    ],
    frontline: false,
    ignoreIndex: true,
    //title: "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    //docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
