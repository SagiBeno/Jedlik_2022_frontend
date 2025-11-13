import { Link } from 'react-router-dom'
import './openpage.css'

export default function OpenPage(props) {
    
    return (
        <div className='page-wrapper'>
            <div className="container">
                <div className="start w-100">
                    <h1 className="text-center pt-2 pt-lg-4">Á.L.B. Ingatlanügynöség</h1>
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center">
                            <Link className="btn btn-primary" to='/offers'>Nézze meg kínálatunkat!</Link>
                        </div>
                        <div className="col-12 col-sm-6 text-center">
                            <Link  className="btn btn-primary" to='/'>Hirdessen nálunk!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}