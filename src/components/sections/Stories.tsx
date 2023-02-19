import { ReactElement, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { NameModule } from "@faker-js/faker";
import Image from "next/image";

interface SuggestionsType {
  user_avatar: string;
  name: NameModule;
}

export default function Stories(): ReactElement {
  const [suggestions, setSuggestions] = useState<SuggestionsType[]>([]);
  useEffect(() => {
    const tempSuggestions: SuggestionsType[] = [...Array(10)].map((_, idx) => ({
      user_avatar: faker.image.people(640, 480, true),
      name: faker.name,
    }));
    setSuggestions(tempSuggestions);
  }, []);
  return (
    <div className="border-red-500 border flex space-x-2 ">
      {suggestions.map((suggestion, idx) => (
        <Story
          key={idx}
          user_avatar={suggestion.user_avatar}
          name={suggestion.name}
        />
      ))}
    </div>
  );
}

function Story({ user_avatar, name }: SuggestionsType): ReactElement {
  return (
    <div className="relative w-12 aspect-square rounded-full overflow-hidden   border-red-500 border">
      <Image src={user_avatar} alt={name.firstName.toString()} fill />
    </div>
  );
}
