import {Skeleton} from "@nextui-org/skeleton";
import {Image} from "@nextui-org/image";
import {Snippet} from "@nextui-org/snippet";

type Props = {
  characterData: Character
}

const classColorMap = new Map<string, string>([
  ["Death Knight", "#C41E3A"],
  ["Demon Hunter", "#A330C9"],
  ["Druid", "#FF7C0A"],
  ["Evoker", "#33937F"],
  ["Hunter", "#AAD372"],
  ["Mage", "#3FC7EB"],
  ["Monk", "#00FF98"],
  ["Paladin", "#F48CBA"],
  ["Priest", "#FFFFFF"],
  ["Rogue", "#FFF468"],
  ["Shaman", "#0070DD"],
  ["Warlock", "#8788EE"],
  ["Warrior", "#C69B6D"]
]);

export default function CharacterDisplay({ characterData }: Props) {
  return (
    <div className="flex flex-row items-center gap-3 mt-6 w-72">
      <div className="flex flex-row items-center top-0">
        {/* pfp skeleton */}
        <Skeleton
          isLoaded={characterData.exists}
          className="flex rounded-full w-12 h-12"
        >
          <Image 
            alt='Character Thumbnail' 
            src={characterData.thumbnail_url} 
            className="rounded-full"
          />
        </Skeleton>

      </div>  
      <div className="flex flex-col justify-center w-full">
        {/* character name */}
        <Skeleton
          isLoaded={characterData.exists}
          className="h-7 w-3/5 rounded-lg"
        >
          <h1 className={`text-3xl ${characterData.faction == 'horde' ? 'text-red-600' : 'text-blue-700'} `}>{characterData.name}</h1>
        </Skeleton>

        <Skeleton
          isLoaded={characterData.exists}
          className="h-3 w-4/5 rounded-lg mt-2"
        >
          <h1 className="text-small -mt-1 w-64" 
            style={{color:`${classColorMap.get(characterData.class)}`}}
          >
            {`${characterData.race} ${characterData.active_spec_name} ${characterData.class}`}
          </h1>
        </Skeleton>

        <Skeleton
          isLoaded={characterData.exists}
          className="h-3 w-4/5 rounded-lg mt-2"
        >
          {characterData.guild != null 
          ? <h1>{`Guild: ${characterData.guild.name} Ilvl:`}</h1>
          : <h1>{`Guild: None Ilvl: ${characterData.itemLevel}`}</h1>
          }
        </Skeleton>

        <Skeleton
          isLoaded={characterData.exists}
          className="h-3 w-4/5 rounded-lg mt-3"
        >
          <h2 className='text-xs text-yellow-200'>{`Achievement Points: ${characterData.achievement_points}`}</h2>
        </Skeleton>

        {/* shadcn carousel for displaying raid progression */}


        {/* {characterData.exists &&
          <Snippet
            symbol=''
            color='danger'
            variant="shadow"
            size="sm"
            className='bottom-0 mt-10'
          >
            {characterData.achievement_points}
          </Snippet>
        } */}
      </div>

    </div>
  )
}