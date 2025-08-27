

import { GifsList } from './gifs/components/GifsList';
import { PreviousSearches } from './gifs/components/PreviousSearches';

import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } =
    useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        tittle="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar Holder="Busca lo que quieras" ButtonText='Buscar' onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};