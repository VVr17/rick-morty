export const getCharacterInfo = ({ gender, status, species, origin, type }) => {
  const noInfoFallBack = 'Unknown';

  return [
    { key: 'Gender', value: gender || noInfoFallBack },
    { key: 'Status', value: status || noInfoFallBack },
    { key: 'Specie', value: species || noInfoFallBack },
    { key: 'Origin', value: origin || noInfoFallBack },
    { key: 'Type', value: type || noInfoFallBack },
  ];
};
