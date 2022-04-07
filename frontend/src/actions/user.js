import Swal from 'sweetalert2';
import { fetchManage } from '../helpers/fetch';
import { types } from '../types/types';

const userLoginView = (e) => ({
  type: types.userLogin,
  payload: e
});

export const userLogin = (e) => {
  return async ( dispatch ) => {

      try {
          const resp = await fetchManage( ':3900/login', e, 'POST' );
          const body = await resp.json();

          if(body.status){
              dispatch(userLoginView(body.user));
          }else{
              Swal.fire('Error', 'Se produjo un error al hacer login', 'error');
          }

      } catch (err) {
          Swal.fire('Error', 'Se produjo un error al hacer login', 'error');
      }   

  }
};