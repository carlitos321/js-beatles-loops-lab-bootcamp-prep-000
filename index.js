const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  const musicianDescribers = [];

  for (let i = 0; i < instruments.length; i++) {
    musicianDescribers.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianDescribers;
}
