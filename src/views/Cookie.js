import { useState } from 'react'

const Cookie = () => {
    const [cookie,setCookie] = useState('');

    const handleEditBtn = (e) => {
        e.preventDefault();

        document.cookie = cookie;
        setCookie('');
    }

    return (
        <div>
            <h1 style={{fontSize:64}}>cookie ,localstorage and session things 🥴</h1>
            <div className="container" style={{marginTop : "4rem"}}>
                <p className="display-4">current cookie</p>
                <p className="lead">🍪 : {document.cookie}</p>
                <div className="mt-3">
                    <div className="form-group">
                        <p className="display-4">edit current cookie</p>
                        <input type="text" className="form-control" onChange={(e) => {
                            setCookie(e.target.value);
                        }} />
                        <button className="btn btn-success mt-3" onClick={handleEditBtn}>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookie;