/*

This test throws an error : 

Vue warn]: Error in mounted hook: "TypeError: this.$content is not a function"

*/



import { mount, shallowMount } from '@vue/test-utils'
import index from '@/pages/index'

import VTooltip from 'v-tooltip'



describe("Tests for index page.", () => {
    test.todo("Solve error : 'this.$content not a function'"); 


    // test('Is a Vue instance', () => {

    //     const wrapper = shallowMount(index, {
    //         mocks: {
    //             $store: {
    //                 state: { favorites: [] },
    //             },
    //         },

    //         directives: {
    //             tooltip: VTooltip,
    //         },
    //     })
    //     expect(wrapper.vm).toBeTruthy()
    // })
});
