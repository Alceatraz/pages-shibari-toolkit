// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({

  integrations: [starlight({

    title: {
      en: 'Shibari Toolkit',
      'zh-cn': '绳缚百科',
    },

    //= ========================================================================

    lastUpdated: true,

    customCss: [
      './src/styles/custom.css'
    ],

    tableOfContents: false,

    //= ========================================================================

    defaultLocale: 'en',

    locales: {

      'en': {
        lang: 'en',
        label: 'English'
      },

      'zh-cn': {
        lang: 'zh-CN',
        label: '简体中文'
      }

    },

    //= ========================================================================

    sidebar: [

      {
        label: 'Guides',
        items: [
          {
            label: 'Example Guide',
            slug: 'guides/example'
          },
          {
            label: 'About us',
            slug: 'misc/about'
          }
        ],
      },

    ],


    /*
      sidebar: [
  

      {
        label: '工具',
        translations: {
          en: 'Tools'
        },
        items: [
          {
            label: '计时大屏',
            translations: {
              en: 'Timer Clock'
            },
            link: '/tools/timer.html',
            attrs: {
              target: '_blank'
            }
          }
        ]
      },

      {
        label: 'Reference',
        items: [
          { autogenerate: { directory: 'reference' } }
        ],
      },


        {
          label: '测试',
          items: [
            {
              autogenerate: {
                directory: 'reference'
              }
            }
          ],
        },
  
        {
          label: 'Guides',
          items: [
            {
              label: 'Example Guide',
              slug: 'guides/example'
            }
          ],
        },
  
        {
          label: '工具',
          translations: {
            en: 'Tools'
          },
          items: [
            {
              label: '计时大屏',
              translations: {
                en: 'Timer Clock'
              },
              link: '/tools/timer.html',
              attrs: {
                target: '_blank'
              }
            }
          ]
        },
  
        // {
        //   label: '关于',
        //   translations: {
        //     en: 'About',
        //   },
        //   items: [
        //     {
        //       label: '关于我们',
        //       translations: {
        //         en: 'About us'
        //       },
        //       slug: 'about'
        //     }
        //   ]
        // }
  
      ],
      
  */

    //= ========================================================================

    social: [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/Alceatraz/pages-shibari-toolkit',
      },
    ],

    editLink: {
      baseUrl: 'https://github.com/Alceatraz/pages-shibari-toolkit/edit/master/src/content/docs',
    }

    //= ========================================================================

  })]
});