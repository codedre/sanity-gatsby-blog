export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea0614b0fc95d4fb3b953aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2p7u1ptr',
                  apiId: '3a421138-40a1-4bc8-8a64-6b44ea6be018'
                },
                {
                  buildHookId: '5ea0614c67f0c74c0c26de89',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qfatjsrm',
                  apiId: '226d5aa7-b129-47a9-8ef3-3d1c8dbb0f72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/codedre/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qfatjsrm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
