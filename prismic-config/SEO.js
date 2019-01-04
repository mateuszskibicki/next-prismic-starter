// 
// 
// // // THIS IS EXAMPLE HOW FULL SEO LOOKS LIKE
// 
// 

export default function page() {
  return (
    <div>
        <title>Page Title. Maximum length 60-70 characters</title>
        <meta name='description' content='Page description. No longer than 155 characters' />
        <meta name='keywords' content='XX' />
        <meta name='geo.region' content='ISO 3166-2:GB' />
        <meta name='robots' content='noindex' />
        <meta itemProp='name' content='The Name or Title Here' />
        <meta itemProp='description' content='This is the page description' />
        {
          //image
        }
        <meta itemProp='image' content='http://www.example.com/image.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@publisher_handle' />
        <meta name='twitter:title' content='Page Title' />
        <meta name='twitter:description' content='Page description less than 200 characters' />
        <meta name='twitter:creator' content='@author_handle' />
        {
          //image
        }
        <meta name='twitter:image:src' content='http://www.example.com/image.jpg' />
        <meta property='og:title' content='Title Here' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='http://www.example.com/' />
        {
          //image
        }
        <meta property='og:image' content='http://example.com/image.jpg' />
        <meta property='og:description' content='Description Here' />
        <meta property='og:site_name' content='Site Name, i.e. Moz' />

        {
          //time
        }
        <meta property='article:published_time' content='2013-09-17T05:59:00+01:00' />
        <meta property='article:modified_time' content='2013-09-16T19:08:47+01:00' />

        <meta property='article:section' content='Article Section' />
        <meta property='article:tag' content='Article Tag' />
        <meta property='fb:admins' content='Facebook numberic ID' />



        <video width="400" controls>
          <source src="https://prismic-io.s3.amazonaws.com/intouchnetworks-marketing-site%2F1c01b3d7-27b7-46e1-b2a8-5867f3b85588_in+touch.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
    </div>

  )
}

// 
// 
// // // THIS IS HOW IT LOOKS LIKE WHEN WE GET DATA FROM PRISMIC
// 
// 


// {
//   "seo_title": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_title",
//       "placeholder": "<title>Page Title. Maximum length 60-70 characters</title>"
//     }
//   },
//   "seo_description": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_description",
//       "placeholder": "<meta name='description' content='Page description. No longer than 155 characters' />"
//     }
//   },
//   "seo_keywords": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_keywords",
//       "placeholder": "<meta name='keywords' content='XX' />"
//     }
//   },
//   "seo_geo_region": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_geo_region",
//       "placeholder": "<meta name='geo.region' content='ISO 3166-2:GB' />"
//     }
//   },
//   "seo_item_prop_name": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_item_prop_name",
//       "placeholder": "<meta itemProp='name' content='The Name or Title Here' />"
//     }
//   },
//   "seo_item_prop_description": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_item_prop_description",
//       "placeholder": "<meta itemProp='description' content='This is the page description' />"
//     }
//   },
//   "seo_twitter_card": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_twitter_card",
//       "placeholder": "<meta name='twitter:card' content='summary_large_image' />"
//     }
//   },
//   "seo_twitter_site": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_twitter_site",
//       "placeholder": "<meta name='twitter:site' content='@publisher_handle' />"
//     }
//   },
//   "seo_twitter_title": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_twitter_title",
//       "placeholder": "<meta name='twitter:title' content='Page Title' />"
//     }
//   },
//   "seo_twitter_description": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_twitter_description",
//       "placeholder": " <meta name='twitter:description' content='Page description less than 200 characters' />"
//     }
//   },
//   "seo_twitter_creator": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_twitter_creator",
//       "placeholder": "<meta name='twitter:creator' content='@author_handle' />"
//     }
//   },
//   "seo_og_title": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_og_title",
//       "placeholder": "<meta property='og:title' content='Title Here' />"
//     }
//   },
//   "seo_og_type": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_og_type",
//       "placeholder": "<meta property='og:type' content='article' />"
//     }
//   },
//   "seo_og_url": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_og_url",
//       "placeholder": "<meta property='og:url' content='http://www.example.com/' />"
//     }
//   },
//   "seo_og_description": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_og_description",
//       "placeholder": "<meta property='og:description' content='Description Here' />"
//     }
//   },
//   "seo_og_site_name": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_og_site_name",
//       "placeholder": "<meta property='og:site_name' content='Site Name, i.e. Moz' />"
//     }
//   },
//   "seo_article_section": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_article_section",
//       "placeholder": "<meta property='article:section' content='Article Section' />"
//     }
//   },
//   "seo_article_tag": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_article_tag",
//       "placeholder": "<meta property='article:tag' content='Article Tag' />"
//     }
//   },
//   "seo_fb_admins": {
//     "type": "StructuredText",
//     "config": {
//       "single": "paragraph",
//       "label": "seo_fb_admins",
//       "placeholder": "<meta property='fb:admins' content='Facebook numberic ID' />"
//     }
//   },
//   "seo_item_prop_image": {
//     "type": "Link",
//     "config": {
//       "select": "media",
//       "label": "seo_item_prop_image",
//       "placeholder": "<meta itemProp='image' content='http://www.example.com/image.jpg' />"
//     }
//   },
//   "seo_twitter_image": {
//     "type": "Link",
//     "config": {
//       "select": "media",
//       "label": "seo_twitter_image",
//       "placeholder": "<meta name='twitter:image:src' content='http://www.example.com/image.jpg' />"
//     }
//   },
//   "seo_og_image": {
//     "type": "Link",
//     "config": {
//       "select": "media",
//       "label": "seo_og_image",
//       "placeholder": "<meta property='og:image' content='http://example.com/image.jpg' />"
//     }
//   },
//   "seo_article_published_time": {
//     "type": "Timestamp",
//     "config": {
//       "label": "seo_article_published_time",
//       "placeholder": "<meta property='article:published_time' content='2013-09-17T05:59:00+01:00' />"
//     }
//   },
//   "seo_article_modified_time": {
//     "type": "Timestamp",
//     "config": {
//       "label": "seo_article_modified_time",
//       "placeholder": "<meta property='article:modified_time' content='2013-09-16T19:08:47+01:00' />"
//     }
//   }
// }


// 
// 
// // // SEO HELPER
// 
// 

import {
  TextHelper,
  SmallTextHelper,
  UrlHelper,
  //ArrayHelper,
  //NumberHelper
} from './PrismicHelpers';

//SEO HELPER
export const SEOhelper = (response) => {
  const seoData = response;

  let seoObject = {
      title: TextHelper(seoData.seo_title),
      description: TextHelper(seoData.seo_description),
      keywords: TextHelper(seoData.seo_keywords),
      geo_region: TextHelper(seoData.seo_geo_region),
      robots: TextHelper(seoData.seo_robots),
      item_prop_name: TextHelper(seoData.seo_item_prop_name),
      item_prop_description: TextHelper(seoData.seo_item_prop_description),
      twitter_card: TextHelper(seoData.seo_twitter_card),
      twitter_site: TextHelper(seoData.seo_twitter_site),
      twitter_title: TextHelper(seoData.seo_twitter_title),
      twitter_description: TextHelper(seoData.seo_twitter_description),
      twitter_creator: TextHelper(seoData.seo_twitter_creator),
      og_title: TextHelper(seoData.seo_og_title),
      og_type: TextHelper(seoData.seo_og_type),
      og_url: TextHelper(seoData.seo_og_url),
      og_description: TextHelper(seoData.seo_og_description),
      og_site_name: TextHelper(seoData.seo_og_site_name),
      article_section: TextHelper(seoData.seo_article_section),
      article_tag: TextHelper(seoData.seo_article_tag),
      fb_admins: TextHelper(seoData.seo_fb_admins),
      item_prop_image: UrlHelper(seoData.seo_item_prop_image),
      twitter_image: UrlHelper(seoData.seo_twitter_image),
      og_image: UrlHelper(seoData.seo_og_image),
      article_published_time: SmallTextHelper(seoData.seo_article_published_time),
      article_modified_time: SmallTextHelper(seoData.seo_article_modified_time),
  }

  return seoObject
}


// 
// 
// // // VALIDATION WHAT TO DISPLAY
// 
// 

{title && title.length > 0 && <title>{title}</title>}
{description && description.length > 0 &&  <meta name='description' content={description} />}
{keywords && keywords.length > 0 &&  <meta name='keywords' content={keywords} />}
{geo_region && geo_region.length > 0 ? <meta name='geo.region' content={geo_region} /> : <meta name='geo.region' content="ISO:3166-2:GB" />}
{robots && robots.length > 0 &&  <meta name='robots' content={robots} />}

{item_prop_name && item_prop_name.length > 0 &&  <meta itemProp='name' content={item_prop_name} />}
{item_prop_description && item_prop_description.length > 0 &&  <meta itemProp='description' content={item_prop_description} />}

{twitter_card && twitter_card.length > 0 &&  <meta name='twitter:card' content={twitter_card} />}
{twitter_site && twitter_site.length > 0 &&  <meta name='twitter:site' content={twitter_site} />}
{twitter_title && twitter_title.length > 0 &&  <meta name='twitter:title' content={twitter_title} />}
{twitter_description && twitter_description.length > 0 &&  <meta name='twitter:description' content={twitter_description} />}
{twitter_creator && twitter_creator.length > 0 &&  <meta name='twitter:creator' content={twitter_creator} />}

{og_type && og_type.length > 0 &&  <meta property='og:type' content={og_type} />}
{og_title && og_title.length > 0 &&  <meta property='og:title' content={og_title} />}
{og_url && og_url.length > 0 &&  <meta property='og:url' content={og_url} />}
{og_description && og_description.length > 0 &&  <meta property='og:description' content={og_description} />}
{og_site_name && og_site_name.length > 0 &&  <meta property='og:site_name' content={og_site_name} />}

{article_published_time && article_published_time.length > 0 &&  <meta property='article:published_time' content={article_published_time} />}
{article_modified_time && article_modified_time.length > 0 &&  <meta property='article:modified_time' content={article_modified_time} />}
{article_section && article_section.length > 0 &&  <meta property='article:section' content={article_section} />}
{article_tag && article_tag.length > 0 &&  <meta property='article:tag' content={article_tag} />}

{fb_admins && fb_admins.length > 0 &&  <meta property='fb:admins' content={fb_admins} />}

{item_prop_image && item_prop_image.length > 0 &&  <meta itemProp='image' content={item_prop_image} />}
{twitter_image && twitter_image.length > 0 &&  <meta name='twitter:image:src' content={twitter_image} />}
{og_image && og_image.length > 0 &&  <meta property='og:image' content={og_image} />}