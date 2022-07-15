const Genres = [
  { title: "Action", value: "action" },
  { title: "Comedy", value: "comedy" },
  { title: "Family", value: "family" },
  { title: "History", value: "history" },
  { title: "Mystery", value: "mystery" },
  { title: "Sci-fi", value: "sci-fi" },
  { title: "War", value: "war" },
  { title: "Adventure", value: "adventure" },
  { title: "Fantasy", value: "fantasy" },
  { title: "Crime", value: "crime" },
  { title: "Horror", value: "horror" },
  { title: "News", value: "news" },
  { title: "Sport", value: "sport" },
  { title: "Western", value: "western" },
];

const TitleGroups = [
  { title: "Oscar-Winning", value: "oscar_Winners" },
  { title: "Oscar-Nominated", value: "oscar_nominees" },
  { title: "Best Picture-Winning", value: "oscar_best_picture_winners" },
  { title: "Best Director-Winning", value: "oscar_best_director_winners" },
  { title: "Razzie-Winning", value: "razzie_winners" },
  { title: "Razzie-Nominated", value: "razzie_nominees" },
  { title: "Emmy Award-Winning", value: "emmy_winners" },
  { title: "Golden Globe-Winning", value: "golden_globe_winners" },
];

const Companies = [
  { title: "20th Century Fox", value: "fox" },
  { title: "Paramount", value: "paramount" },
  { title: "Sony", value: "sony" },
  { title: "Universal", value: "universal" },
  { title: "Dreamworks", value: "dreamworks" },
  { title: "Walt Disney", value: "disney" },
  { title: "Walt Disney", value: "disney" },
  { title: "MGM", value: "mgm" },
  { title: "Warners Bros.", value: "warner" },
];

const SoundMix = [
  { title: "Mono", value: "mono" },
  { title: "Dolby Digital", value: "dolby_digital" },
  { title: "DTS", value: "dts" },
  { title: "4-Track Stereo", value: "4_track_stereo" },
  { title: "Sonix", value: "sonix" },
  { title: "Silent", value: "silent" },
  { title: "Stereo", value: "stereo" },
  { title: "Vitaphone", value: "vitaphone" },
  { title: "Cinesound", value: "cinesound" },
  { title: "CDS", value: "cds" },
];

export default [
  { title: "Genres", params: "genres", items: Genres },
  { title: "Title Groups", params: "title_groups", items: TitleGroups },
  { title: "Companies", params: "companies", items: Companies },
  { title: "Sound Mix", params: "sound_mix", items: SoundMix },
];
