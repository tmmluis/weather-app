import { LocationData } from './fetchLocations';

type State = {
  locations: LocationData[] | null;
  searchToken: string;
  isSearchValid: boolean;
  contentHeight: number;
  isLoading: boolean;
};

type FetchLocations = {
  type: 'fetch_locations';
  locations: LocationData[] | null;
};
type UpdateSearch = { type: 'update_search'; token: string };
type Reset = { type: 'reset' };
type UpdateHeight = { type: 'update_height'; height?: number };
type Loading = { type: 'loading' };
type Valid = { type: 'valid' };
type Invalid = { type: 'invalid' };

type Action =
  | FetchLocations
  | UpdateSearch
  | Reset
  | UpdateHeight
  | Loading
  | Valid
  | Invalid;

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'fetch_locations': {
      return {
        ...state,
        locations: action.locations,
        isLoading: false,
      };
    }
    case 'update_search': {
      return {
        ...state,
        searchToken: action.token,
      };
    }
    case 'reset': {
      return {
        ...state,
        locations: null,
        searchToken: '',
        isLoading: false,
        isSearchValid: true,
      };
    }
    case 'update_height': {
      return {
        ...state,
        contentHeight: action.height || state.contentHeight,
      };
    }
    case 'loading': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'valid': {
      return {
        ...state,
        isSearchValid: true,
      };
    }
    case 'invalid': {
      return {
        ...state,
        isSearchValid: false,
      };
    }
  }
};
