// https://online-movie-database.p.rapidapi.com/title/find?q=tt0110475
export const movieFindMock = {
  "@meta": {
    operation: "Search",
    requestId: "0922ff87-63f9-4409-af1b-892c81a9f913",
    serviceTimeMs: 213.686461,
  },
  "@type": "imdb.api.find.response",
  query: "tt0110475",
  results: [
    {
      id: "/title/tt0110475/",
      image: {
        height: 1500,
        id: "/title/tt0110475/images/rm2145792000",
        url: "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        width: 1009,
      },
      runningTimeInMinutes: 101,
      title: "The Mask",
      titleType: "movie",
      year: 1994,
      principals: [
        {
          disambiguation: "I",
          id: "/name/nm0000120/",
          legacyNameText: "Carrey, Jim (I)",
          name: "Jim Carrey",
          billing: 1,
          category: "actor",
          characters: ["Stanley Ipkiss", "The Mask"],
          roles: [
            {
              character: "Stanley Ipkiss",
              characterId: "/character/ch0006333/",
            },
            {
              character: "The Mask",
              characterId: "/character/ch0337256/",
            },
          ],
        },
        {
          id: "/name/nm0000139/",
          legacyNameText: "Diaz, Cameron",
          name: "Cameron Diaz",
          billing: 13,
          category: "actress",
          characters: ["Tina Carlyle"],
          roles: [
            {
              character: "Tina Carlyle",
              characterId: "/character/ch0006334/",
            },
          ],
        },
        {
          disambiguation: "I",
          id: "/name/nm0726200/",
          legacyNameText: "Riegert, Peter (I)",
          name: "Peter Riegert",
          billing: 2,
          category: "actor",
          characters: ["Lt. Mitch Kellaway"],
          roles: [
            {
              character: "Lt. Mitch Kellaway",
              characterId: "/character/ch0006345/",
            },
          ],
        },
      ],
    },
  ],
  types: ["title", "name"],
};

// https://online-movie-database.p.rapidapi.com/title/get-charname-list?tconst=tt0110475&id=nm0000120%26id%3Dnm0000139%26id%3Dnm0726200
export const movieCharnameListMock = {
  nm0000120: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["James Carrey", "Tony Clifton"],
      disambiguation: "I",
      id: "/name/nm0000120/",
      image: {
        height: 2048,
        id: "/name/nm0000120/images/rm2776866816",
        url: "https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_.jpg",
        width: 1665,
      },
      legacyNameText: "Carrey, Jim (I)",
      name: "Jim Carrey",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["James Carrey", "Tony Clifton"],
        disambiguation: "I",
        id: "/name/nm0000120/",
        image: {
          height: 2048,
          id: "/name/nm0000120/images/rm2776866816",
          url: "https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_.jpg",
          width: 1665,
        },
        legacyNameText: "Carrey, Jim (I)",
        name: "Jim Carrey",
        billing: 1,
        category: "actor",
        characters: ["Stanley Ipkiss", "The Mask"],
        roles: [
          {
            character: "Stanley Ipkiss",
            characterId: "/character/ch0006333/",
          },
          {
            character: "The Mask",
            characterId: "/character/ch0337256/",
          },
        ],
      },
    ],
  },
  nm0000139: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Cameron Díaz"],
      id: "/name/nm0000139/",
      image: {
        height: 400,
        id: "/name/nm0000139/images/rm79857920",
        url: "https://m.media-amazon.com/images/M/MV5BMTkxNTI5NzM4MV5BMl5BanBnXkFtZTcwMTI3ODY3Mg@@._V1_.jpg",
        width: 271,
      },
      legacyNameText: "Diaz, Cameron",
      name: "Cameron Diaz",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Cameron Díaz"],
        id: "/name/nm0000139/",
        image: {
          height: 400,
          id: "/name/nm0000139/images/rm79857920",
          url: "https://m.media-amazon.com/images/M/MV5BMTkxNTI5NzM4MV5BMl5BanBnXkFtZTcwMTI3ODY3Mg@@._V1_.jpg",
          width: 271,
        },
        legacyNameText: "Diaz, Cameron",
        name: "Cameron Diaz",
        billing: 13,
        category: "actress",
        characters: ["Tina Carlyle"],
        roles: [
          {
            character: "Tina Carlyle",
            characterId: "/character/ch0006334/",
          },
        ],
      },
    ],
  },
  nm0726200: {
    name: {
      "@type": "imdb.api.name.base",
      akas: ["Peter Riegart"],
      disambiguation: "I",
      id: "/name/nm0726200/",
      image: {
        height: 2048,
        id: "/name/nm0726200/images/rm3133122560",
        url: "https://m.media-amazon.com/images/M/MV5BMTc2Nzc4NzkyNF5BMl5BanBnXkFtZTcwMjE0ODQyOA@@._V1_.jpg",
        width: 1454,
      },
      legacyNameText: "Riegert, Peter (I)",
      name: "Peter Riegert",
    },
    knownfor: null,
    jobs: null,
    starmeter: null,
    bornon: null,
    charname: [
      {
        akas: ["Peter Riegart"],
        disambiguation: "I",
        id: "/name/nm0726200/",
        image: {
          height: 2048,
          id: "/name/nm0726200/images/rm3133122560",
          url: "https://m.media-amazon.com/images/M/MV5BMTc2Nzc4NzkyNF5BMl5BanBnXkFtZTcwMjE0ODQyOA@@._V1_.jpg",
          width: 1454,
        },
        legacyNameText: "Riegert, Peter (I)",
        name: "Peter Riegert",
        billing: 2,
        category: "actor",
        characters: ["Lt. Mitch Kellaway"],
        roles: [
          {
            character: "Lt. Mitch Kellaway",
            characterId: "/character/ch0006345/",
          },
        ],
      },
    ],
  },
};
