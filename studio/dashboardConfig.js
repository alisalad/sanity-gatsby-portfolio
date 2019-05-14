export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cda696ed3e01dd7714e1138',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v1okjrzs',
                  apiId: 'd838e935-e186-4363-bff6-cebe327cb1c8'
                },
                {
                  buildHookId: '5cda696ea1a87c03a38a088e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wcs75mgy',
                  apiId: '285b2204-d6eb-4914-9a7d-491e3b8c0e31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alisalad/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-wcs75mgy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
