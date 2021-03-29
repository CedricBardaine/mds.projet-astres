import { mount, shallowMount } from '@vue/test-utils'
import FavoriteIconBtn from '@/components/FavoriteIconBtn'


describe("Tests for FavoriteIconBtn component.", () => {
    test('Is a Vue instance', () => {

        const wrapper = mount(FavoriteIconBtn, {
            stubs: {
                VRow: true, VIcon: true, VSnackbar: true,
            },
            mocks: {
                $store: {
                    state: { favorites: [] },
                },
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })
});
