var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}
const playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}
updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi");
