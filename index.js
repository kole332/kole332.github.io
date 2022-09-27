// Copyright (c) 2022 Dayal Moirangthem
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible')
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
    // navToggle.
  } else {
    nav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})
