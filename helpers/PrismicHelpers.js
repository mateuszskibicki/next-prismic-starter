//just text helpet
import _ from 'lodash';

export const TextHelper = (object) => {
    if (object && object[0] && object[0].text && object[0].text.length > 0) return object[0].text;
    return null
}

//number helper
export const NumberHelper = (object) => {
    if (object) return object;
    return null
}

//short information helper like date/uid/dropdown/color
export const SmallTextHelper = (object) => {
    if (object && object.length > 0) return object;
    return null
}

//url helper
export const UrlHelper = (object) => {
    if (object && object.url && object.url.length > 0) return object.url;
    return null
}

//rich text helper
export const ArrayHelper = (object) => {
    if (object && object[0] && object.length > 0) return object;
    return null
}

//short information helper like date/uid/dropdown/color
export const EmbedHelper = (object) => {
    if (!_.isEmpty(object)) return object;
    return null
}
