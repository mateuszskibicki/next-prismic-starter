import { validateEmail } from "../../helpers/FormValidateHelpers";

describe("FormValidateHelpers", () => {
  describe("validateEmail", () => {
    test("validateEmail - should be a function and defined", () => {
      expect(validateEmail).toBeDefined();
      expect(validateEmail).toBeInstanceOf(Object);
    });

    test("validateEmail - should return false when email is wrong", () => {
      expect(validateEmail("email-fake")).toBeFalsy();
      expect(validateEmail("email........@email.co.co.co")).toBeFalsy();
      expect(validateEmail("email       @gmail.com")).toBeFalsy();
    });
    test("validateEmail - should return true when email is ok", () => {
      expect(validateEmail("email-fake@wp.pl")).toBeTruthy();
      expect(validateEmail("ok@gmail.com")).toBeTruthy();
      expect(validateEmail("co@co.uk")).toBeTruthy();
    });
  });
});
