import { NextResponse } from "next/server"

export async function GET( request: Request ) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const realm = searchParams.get('realm')
  // https://raider.io/api/v1/characters/profile?region=us&realm=dalaran&name=boblaba&fields=talents%2Cguild%2Craid_progression
  const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=gear%2Ctalents%2Cguild%2Craid_progression`)

  const data = await response.json()

  if (!response.ok) {
    const returnData: Character = {
      name: "none",
      race: "none",
      class: "none",
      active_spec_name: "none",
      active_spec_role: "none",
      faction: "none",
      achievement_points: 0,
      thumbnail_url: "none",
      profile_url: "none",
      guild: null,
      itemLevel: 0,
      exists: false,
      raid_progression: {
        aberrus: {name: 'aberrus-the-shadowed-crucible', progress: "none"},
        amidrassil: {name: 'amirdrassil-the-dreams-hope', progress: "none"},
        vault: {name: 'vault-of-the-incarnates', progress: "none"}
      }
    }

    JSON.stringify(returnData)
    return NextResponse.json(returnData)
  }
  
  // add status to deteremine whether heh cahracter exists doesnt exist or there was an error
  const returnData: Character = {
    name: data.name,
    race: data.race,
    class: data.class,
    active_spec_name: data.active_spec_name,
    active_spec_role: data.active_spec_role,
    faction: data.faction,
    achievement_points: data.achievement_points,
    thumbnail_url: data.thumbnail_url,
    profile_url: data.profile_url,
    guild: data.guild,
    itemLevel: data.gear.item_level_equipped,
    exists: true,
    raid_progression: {
      aberrus: {name: 'aberrus-the-shadowed-crucible', progress: data.raid_progression["aberrus-the-shadowed-crucible"].summary},
      amidrassil: {name: 'amirdrassil-the-dreams-hope', progress: data.raid_progression['amirdrassil-the-dreams-hope'].summary},
      vault: {name: 'vault-of-the-incarnates', progress: data.raid_progression['vault-of-the-incarnates'].summary}
    }
  }
  JSON.stringify(returnData)
  
  return NextResponse.json(returnData)
}

// http://localhost:3000/api/characterData?name=boblaba&realm=dalaran