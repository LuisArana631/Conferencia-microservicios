import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
//import { userLogin } from "../../../actions/user";
import './Register.css';

const initForm = {
    user: '',
    password: '',
};

export const RegisterForm = () => {

    //const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(initForm);
    
    const { userRegistro, passwordRegistro } = formValues;

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( userRegistro.trim().length < 1 ) {
            return Swal.fire('Error', 'No puedes dejar el nombre de la mascota vacío', 'error');
        }else if ( passwordRegistro.trim().length < 1 ) {
            return Swal.fire('Error', 'No puedes dejar el nombre del dueño vacío', 'error');
        }

//        dispatch(userLogin(formValues)); 

        setFormValues(initForm);
    }

    return (
        <div className="container">
            <div className="row card card-body bg-green">
                <div className="col bg-green-2 add-form">
                    <h4 className="card-title pb-3">Registrar</h4>
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <div className="form-group row">
                            <i className="col-sm-1 col-form-label fa-solid fa-user"></i>
                            <div className="col-sm-11">                                   
                                <input 
                                    type="text" 
                                    name="userRegistro" 
                                    className="form-control" 
                                    value={userRegistro} 
                                    onChange={ handleChange } 
                                    placeholder="Usuario"
                                />
                            </div>                            
                        </div>
                        
                        <div className="form-group row">
                            <i className="col-sm-1 col-form-label fa-solid fa-key"></i>
                            <div className="col-sm-11"> 
                                <input 
                                    type="password" 
                                    name="passwordRegistro" 
                                    className="form-control" 
                                    value={passwordRegistro} 
                                    onChange={ handleChange } 
                                    placeholder="Password"
                                />
                            </div>                            
                        </div>   
                        
                        <hr/>

                        <div className="form-group row">
                            <div className="col text-center">
                                <button type="submit" className="btn btn-success btnSubmit">
                                    Registrar
                                </button>
                            </div>                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}