// import {
//   TextHelper,
//   SmallTextHelper,
//   UrlHelper,
//   ArrayHelper,
//   NumberHelper
// } from './PrismicHelpers';

// import {
//   SEOhelper
// } from './SEOhelper'

// export const homepageHelper = response => {
//   let homepageData = response.results[0].data;
//   // ##################
//   // HERO COMPONENT DATA
//   // ##################
//   let objectHeader = {
//     header_bg: UrlHelper(homepageData.header_bg),
//     header_title: TextHelper(homepageData.header_title),
//     header_description: ArrayHelper(homepageData.header_description),
//     header_carousel: homepageData.header_carousel.map(photo => {
//       return {
//         url: UrlHelper(photo.header_photo),
//         alternative: TextHelper(photo.alternative_text_image),
//       }
//     }),
//     header_logos: homepageData.header_logos.map(logo => {
//       return {
//         url: UrlHelper(logo.header_logo_photo),
//         alternative: TextHelper(logo.alternative_text_image)
//       }
//     }),
//     button_primary_title:  TextHelper(homepageData.header_button_primary_title),
//     button_primary_url:  UrlHelper(homepageData.header_button_primary_url),
//     button_secondary_title:  TextHelper(homepageData.header_button_secondary_title),
//     button_secondary_url:  UrlHelper(homepageData.header_button_secondary_url)
//   };

//   // ##################
//   // TRANSFORMING COMPONENT DATA
//   // ##################
//   let objectTransforming = {
//     title: TextHelper(homepageData.transforming_title),
//     //title_secondary: TextHelper(homepageData.transforming_secondary_title),
//     //title_secondary_description: TextHelper(homepageData.transforming_secondary_description),
//     photos: homepageData.transforming_photos.map(photo => {
//       return {
//         url: UrlHelper(photo.background),
//         order: NumberHelper(photo.order),
//         title: TextHelper(photo.title),
//         alternative: TextHelper(photo.alternative_text_image),
//         link_url: UrlHelper(photo.url),
//         endpoint_url: TextHelper(photo.url_endpoint)
//       };
//     }),
//     // carousel: homepageData.transforming_carousel.map(element => {
//     //   return {
//     //     url: UrlHelper(element.image),
//     //     title: TextHelper(element.title),
//     //     alternative: TextHelper(element.alternative_text_image)
//     //   };
//     // }),
//     big_carousel: homepageData.transforming_big_carousel.map(element => {
//       return {
//         order: NumberHelper(element.order),
//         url: UrlHelper(element.image),
//         title: TextHelper(element.title),
//         alternative: TextHelper(element.alternative_text_image),
//         description: ArrayHelper(element.description),
//         button_title: TextHelper(element.button_title),
//         button_url: UrlHelper(element.button_url),
//       };
//     }),
//     // transforming_second_part_button_title: TextHelper(homepageData.transforming_second_part_button_title),
//     // transforming_second_part_button_url: UrlHelper(homepageData.transforming_second_part_button_url)
//   };

//   objectTransforming.big_carousel = objectTransforming.big_carousel.sort(function (a, b) { return a.order - b.order });


//   // ##################
//   // MAGAZINE COMPONENT DATA
//   // ##################
//   let objectMagazine = {
//     bg_color: SmallTextHelper(homepageData.magazine_bg_color),
//     title: TextHelper(homepageData.magazine_title),
//     title_color: SmallTextHelper(homepageData.magazine_title_color),
//     btn_color: SmallTextHelper(homepageData.magazine_btn_color),
//     btn_text_color: SmallTextHelper(homepageData.magazine_btn_text_color)
//   };





//   return {
//     header: objectHeader,
//     transofrming: objectTransforming,
//     magazine: objectMagazine,
//     testimonials_tag: TextHelper(homepageData.testimonials_tag),
//     SEO: SEOhelper(homepageData)
//   }
// }