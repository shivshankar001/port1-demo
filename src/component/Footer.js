import React from "react";

function Footer() {
    return (
        <form className="row g-3" style={{ width: '50%', marginLeft: '70px' }}>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Email</label>
                <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div class="col-20">
                <label htmlFor="inputAddress2" className="form-label">Write Us</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    );
}

export default Footer;