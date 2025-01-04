import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// must load initial state for reducer to work
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action // these interfaces act as type guards
): RepositoriesState => {
  switch (action.type) {
    // action that immediately happens when user clicks search
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    // action after data is successfuly fetched
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    // action if error response or no data
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
