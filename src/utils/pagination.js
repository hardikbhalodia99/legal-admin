import axios from 'axios';
import { useReducer } from 'react';

export const getPaginatedData = async ({ backwards, perPage, uri, pageNumber, cursor, token }) => {
  let url = uri;

  if (!uri.includes('perPage')) {
    url += `&perPage=${backwards ? -perPage : perPage}`;

    if (pageNumber >= 1 && cursor) {
      url += `&cursor=${cursor}`;
    }
  }
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
  console.log(res.data, 'yoloo');

  return res.data;
};





function reducer(state, action) {
  switch (action.type) {
    case 'PER_PAGE_COUNT':
      return {
        ...state,
        perPage: action.payload ? action.payload : state.perPage,
        pageNumber: 1,
        backwards: false,
        cursor: null,
      };

    case 'NEXT_PAGE':
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        cursor: action.payload,
        backwards: false,
      };

    case 'PREVIOUS_PAGE':
      return {
        ...state,
        backwards: true,
        pageNumber: state.pageNumber > 1 ? state.pageNumber - 1 : state.pageNumber,
        cursor: state.pageNumber > 1 ? action.payload : null,
      };

    case 'CUSTOM_PAGE':
      console.log({ action });
      return {
        ...state,
        backwards: false,
        pageNumber: action.payload?.pageNumber || 1,
        cursor: action.payload?.cursor || null,
        perPage: action.payload?.perPage || 10,
      };

    default:
      return state;
  }
}
export const usePagination = (initialState) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState ? initialState : { perPage: 10, pageNumber: 1, backwards: false, cursor: null },
  );

  return { state, dispatch };
};
