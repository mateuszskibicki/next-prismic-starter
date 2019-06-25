import { SEOhelper } from "../../helpers/SEOhelper";

describe("SEOhelper", () => {
  test("SEOhelper - should be a function and defined", () => {
    expect(SEOhelper).toBeDefined();
    expect(SEOhelper).toBeInstanceOf(Object);
  });

  test("should return null when there is wrong arg", () => {
    expect(SEOhelper([])).toBeNull();
    expect(SEOhelper("string")).toBeNull();
    expect(SEOhelper(1234)).toBeNull();
  });

  test("should return SEO object with nulls when there is empty object", () => {
    expect(SEOhelper({})).toHaveProperty("title");
    expect(SEOhelper({})).toHaveProperty("description");
    expect(SEOhelper({})).toHaveProperty("keywords");
    expect(SEOhelper({}).twitter_card).toBeNull();
  });
});
