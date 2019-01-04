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
