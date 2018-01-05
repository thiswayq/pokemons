export const TypeColor = (type) => {
  switch (type) {
  case 'fire':
    return '#f08030';
  case 'normal':
    return '#8a8a59';
  case 'water':
    return '#6890f0';
  case 'eletric':
    return '#f8d030';
  case 'grass':
    return '#78c850';
  case 'ice':
    return '#98d8d8';
  case 'fighting':
    return '#c03028';
  case 'poison':
    return '#a040a0';
  case 'ground':
    return '#e0c068';
  case 'flying':
    return '#a890f0';
  case 'psychic':
    return '#f85888';
  case 'bug':
    return '#a8b820';
  case 'rock':
    return '#b8a038';
  case 'ghost':
    return '#705898';
  case 'dragon':
    return '#7038f8';
  case 'dark':
    return '#705848';
  case 'steel':
    return '#b8b8d0';
  case 'fairy':
    return '#e898e8';
  default:
    return '#fff';
  }
};

export const CapitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);
