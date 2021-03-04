(function () {
  var themes = [
    'cyber-yellow',
    'wisteria',
    'yale-blue',
    'cadet-blue-crayola',
    'blaze-orange',
    'light-salmon',
    'viridian-green',
  ];

  var randomTheme = themes[Math.floor(Math.random() * themes.length)];

  document.documentElement.dataset.theme = randomTheme;
})();
