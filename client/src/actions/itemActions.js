import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING} from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('http://localhost:4000/item')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data.body
      })
    );
}

export const addItem = item => dispatch => {
  axios
    .post('http://localhost:4000/item', item)
    .then(res =>
       dispatch({
        type: ADD_ITEM,
        payload: res.data.body
       })
       )
 
};

export const deleteItem = id => dispatch  => {
  axios
    .delete(`http://localhost:4000/item/${id}`)
    .then( res => {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    })

  
};

export const setItemsLoading = () => {
  return {
    type: ITEM_LOADING,
  }
};
