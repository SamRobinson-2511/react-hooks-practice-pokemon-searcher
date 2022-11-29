import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, image, spriteFront, spriteBack, hp }) {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">name={name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            POKEMON HP HERE hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
