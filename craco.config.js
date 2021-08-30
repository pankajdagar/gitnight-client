const CracoAlias = require('craco-alias')

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
		plugins: ['@babel/plugin-proposal-optional-chaining'],
	},
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        aliases: {
          views: 'src/views',
          components: 'src/views/components',
          icons: 'src/icons',
          services: 'src/services',
          state: 'src/state',
          utils: 'src/utils'
        },
      },
    },
  ],
}
