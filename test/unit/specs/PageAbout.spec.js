import Vue from 'vue'
import PageAbout from '@/components/pages/PageAbout'

describe('PageAbout.vue', () => {
  it('sould render correctly', () => {
    const Constructor = Vue.extend(PageAbout)

    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about').textContent)
      .toEqual(' Страница о проекте ')
  })
})
