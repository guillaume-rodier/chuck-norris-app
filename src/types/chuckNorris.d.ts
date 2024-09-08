type TChuckNorrisJoke = {
  icon_url: string,
  id: string,
  url: string,
  value: string,
}

type TChuckNorrisParams = {
  query?: string | null,
  category?: string | null,
}

export {
  TChuckNorrisJoke,
  TChuckNorrisParams,
}
