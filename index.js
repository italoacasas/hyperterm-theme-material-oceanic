exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#1B2B34',
    borderColor: '#1B2B34',
    cursorColor: 'rgba(0, 150, 136, .5)',
    colors: [
      '#1B2B34',
      '#EC5f67',
      '#4F5B66',
      '#65737E',
      '#A7ADBA',
      '#C0C5CE',
      '#CDD3DE',
      '#D8DEE9',
      '#17232d',
      '#F99157',
      '#FAC863',
      '#99C794',
      '#5FB3B3',
      '#6699CC',
      '#5FB3B3',
      '#AB7967'
    ],
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .header_header {
        background: #17232d !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_active::before {
        border-bottom: 2px solid #5FB3B3;
      }
    `
  })
}
