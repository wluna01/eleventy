export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f74cceae37cd52d5da6c3d8',
                  title: 'Sanity Studio',
                  name: 'eleventy-studio',
                  apiId: '016c4e46-fd6f-43a1-9063-f7968859f690'
                },
                {
                  buildHookId: '5f74ccea7a7614315ba7e339',
                  title: 'Blog Website',
                  name: 'eleventy-web',
                  apiId: 'dadbccde-e9f2-40fe-8f0b-b3be740e6cc2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eleventy-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
