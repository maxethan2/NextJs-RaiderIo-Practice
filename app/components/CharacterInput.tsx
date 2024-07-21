'use client'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import { ChangeEvent, useState, useEffect } from "react";
import CharacterDisplay from "./CharacterDisplay";

export default function CharacterInput() {
  const [characterName, setCharacterName] = useState('')
  const [characterRealm, setCharacterRealm] = useState('')
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true)
  const [charachterData, setcharacterData] = useState<Character>({
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
  })

  const handleInputChange = (type: string, event:ChangeEvent<HTMLInputElement>) => {
    if (type === 'name') {
      setCharacterName(event.target.value)
    }
    else if (type === 'realm') {
      setCharacterRealm(event.target.value)
    }
  }

  useEffect(() => {
    // Check if both characterName and characterRealm are non-empty strings
    if (characterName.trim() !== '' && characterRealm.trim() !== '') {
      setSubmitButtonDisable(false);
    } else {
      setSubmitButtonDisable(true);
    }
  }, [characterName, characterRealm]);

  const handleSubmit = async () => {
    const response: Response = await fetch(`/api/characterData?name=${characterName}&realm=${characterRealm}`)
    const charachterData: Character = await response.json()
    setcharacterData(charachterData)
  }

  return (
    <Card className="flex flex-row">
      <div>
        <CardHeader className="flex gap-3">
        <div className="flex flex-col">
            <p className="text-md">RaiderIo Thingy</p>
            <p className="text-small text-default-500">Uses RaiderIo api</p>
          </div>
        </CardHeader>
        <CardBody >
          <Input type='email' label='Character Realm' onChange={(event) => handleInputChange('realm', event)}/>

          <Divider className="my-3"/>

          <Input type='email' label='Character Name' onChange={(event) => handleInputChange('name', event)}/>
        </CardBody>
        <Button className="m-3 w-full" variant="ghost" color="primary" isDisabled={submitButtonDisable} onClick={handleSubmit}>Submit</Button>  
      </div>

      <div className="ml-12">
        {/* <Divider orientation="vertical" className="ml-6"/> */}
        <CharacterDisplay characterData={charachterData}/>
      </div>


    </Card>
    
  )
}