import ContactModule from './contact';
import ContactController from './contact.controller';
import ContactComponent from './contact.component';
import ContactTemplate from './contact.html';

describe('Contact', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(ContactModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new ContactController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      const controller = makeController();

      expect(controller.name).toBeDefined();
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ContactTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    const component = ContactComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(ContactTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(ContactController);
    });
  });
});
