type Character = {
  name: string,
  race: string,
  class: string,
  active_spec_name: string,
  active_spec_role: string,
  faction: string,
  achievement_points: number,
  thumbnail_url: string,
  profile_url: string,
  guild: { name: string, realm: string}| null,
  itemLevel: number,
  exists: boolean,
  raid_progression: {
    aberrus: {name: string, progress: string}
    amidrassil: {name: string, progress: string},
    vault: {name: string, progress: string}
  }
}