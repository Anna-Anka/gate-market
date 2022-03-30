module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
   plugins: ["stylelint-order", "stylelint-scss"],
   rules: {
       'block-no-empty': true,
       'at-rule-no-unknown': null,
   },
}
