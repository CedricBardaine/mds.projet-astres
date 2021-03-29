import { mount, shallowMount } from '@vue/test-utils'
import FavoriteIconBtn from '@/components/FavoriteIconBtn'

// import Vuetify from 'vuetify';

describe("FavoriteIconBtn.test.js", () => {
  // let FIBComponent ; 

  // beforeEach(() => {
  //    FIBComponent = mount(FavoriteIconBtn, {
  //     // Be aware that props is overridden using `propsData`
  //     propsData: {
  //       astralBodyId: "Terre"
  //     }
  //   });
  // });

  // it('has received "Terre" as the message property', () => {
  //   expect(FIBComponent.vm.messages).toEqual("Terre");
  // });

  // it("has the expected html structure", () => {
  //   expect(FIBComponent.element).toMatchSnapshot();
  // });

  test('is a Vue instance', () => {

    // const localVue = createLocalVue();
    // localVue.use(Vuetify);

    const wrapper = mount(FavoriteIconBtn, {
      // localVue: createLocalVue().use(Vuetify),
      // localVue,
      // Ant design elements
      // stubs: {
      //   ATable: true,
      // },

      stubs: {
        VRow: true, VIcon: true, VSnackbar: true,
      },
      mocks: {
        $store: {
          state: { favorites: [] },
        },
      }
    }
    )
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _");
    console.log(wrapper.text());
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _");
    // Vue.use(Vuetify);
    // wrapper.vm.use(Vuetify); 
    expect(wrapper.vm).toBeTruthy()
  })

  // expect(FIBComponent.vm).toBeTruthy();
});
