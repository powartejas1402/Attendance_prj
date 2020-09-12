import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Signup = () => {
    return (
        <>
            <div className="container-sm pt-4">
                <form>  
                <label for="acc_type" className="col-sm-2 col-form-label">Account Type</label>
                    <div className="col-md-10">
                        <select className="form-select form-select-md mb-3" id="acc_type">
                            <option value="1" name="admin">Admin</option>
                            <option value="2" name="user">User</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;