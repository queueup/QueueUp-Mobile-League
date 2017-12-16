const axios = require('axios')
const fs = require('fs')

let version = ''

function getChampionSplash(champion_id) {
  axios
    .get('http://ddragon.leagueoflegends.com/cdn/' + version + '/img/champion/'+ champion_id +'.png', { responseType: 'arraybuffer' })
    .then(function(response) {
      let name = response.request.path
      name = name.split('/')
      name = name[name.length - 1].toLowerCase()
      fs.writeFile('app/images/champions/' + name, response.data, 'binary', function() { return true })
    })
}

function writeIndex(champions) {
  let buffer = 'const champions = {\n'
  Object.keys(champions).forEach(function(key) {
    const c = champions[key]
    buffer += '  ' + c.key + ': {\n'
    buffer += '    id: '+ c.key+',\n'
    buffer += '    key: \''+ c.id.toLowerCase()+'\',\n'
    buffer += '    name: \''+ c.name.replace('\'', '\\\'')+'\',\n'
    buffer += '    title: \''+ c.title.replace('\'', '\\\'')+'\',\n'
    buffer += '    image: require(\'../images/champions/'+ c.id.toLowerCase()+'.png\'),\n'
    buffer += '  },\n'
  })
  buffer += '}\n\nexport default champions'
  fs.writeFile('app/constants/champions.js', buffer)
}


axios
  .get('https://ddragon.leagueoflegends.com/api/versions.json')
  .then(vr => {
    version = vr.data[0]
    console.log('Ddragon version:', version)
    axios
      .get('http://ddragon.leagueoflegends.com/cdn/'+ version +'/data/en_US/champion.json')
      .then(function(r) {
        const champs = r.data.data
        Object.keys(champs).forEach(function(c) {
          getChampionSplash(champs[c].id)
        })
        writeIndex(champs)
      })
  })

