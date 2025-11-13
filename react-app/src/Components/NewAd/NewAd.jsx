import { useEffect, useState } from 'react'
import '../../bootstrap.min.css'

async function fetchCategories(setCategories) {
    const json = await fetch('http://localhost:3333/api/kategoriak')
    const data = await json.json()
    setCategories(data)
}

export default function NewAd(props) {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetchCategories(setCategories);
    }, [])

    return (
        <div className='page-wrapper'>
            <div className="container">
                <h2 className="mb-4 text-center">Új hirdetés elküldése</h2>
                <div className="row">
                    <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Ingatlan kategóriája</label>
                            <select className="form-select" name="kategoriaId">
                                <option value="0">Kérem válasszon</option>
                                {
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.megnevezes}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Hirdetés dátuma</label>
                            <input type="date" className="form-control" name="hirdetesDatuma"
                                readOnly={true}
                                defaultValue={new Date().toISOString().slice(0, 10)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Ingatlan leírása</label>
                            <textarea className="form-control" name="leiras" rows="3"></textarea>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" name="tehermentes" checked />
                            <label className="form-check-label" htmlFor="creditFree">Tehermentes ingatlan</label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pictureUrl" className="form-label">Fénykép az ingatlanról</label>
                            <input type="url" className="form-control" name="kepUrl" />
                        </div>
                        <div className="mb-3 text-center">
                            <button className="btn btn-primary px-5">Küldés</button>
                        </div>

                        <div className="alert alert-danger alert-dismissible" role="alert">
                            <strong>Hiba szövege</strong>
                            <button type="button" className="btn-close"></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}