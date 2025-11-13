import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../bootstrap.min.css'

async function fetchCategories(setCategories) {
    const json = await fetch('http://localhost:3333/api/kategoriak')
    const data = await json.json()
    setCategories(data)
}

export default function NewAd(props) {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetchCategories(setCategories);
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        const formData = {
            kategoria: +form.kategoriaId.value,
            leiras: form.leiras.value,
            hirdetesDatuma: form.hirdetesDatuma.value,
            tehermentes: form.tehermentes.checked,
            kepUrl: form.kepUrl.value
        }

        const requestBodyJson = JSON.stringify(formData)
        const responseJson = await fetch('http://localhost:3333/api/ujingatlan', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: requestBodyJson
        })
        
        if (responseJson.ok) {
            form.reset()
            navigate('/offers')
        } else {
            setErrorMessage(`HTTP failure response for http://localhost:3333/api/ujingatlan: ${responseJson.status} ${responseJson.statusText}`)
        }
    }

    return (
        <div className='page-wrapper'>
            <div className="container">
                <h2 className="mb-4 text-center">Új hirdetés elküldése</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Ingatlan kategóriája</label>
                                <select className="form-select" name="kategoriaId">
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
                                <textarea className="form-control" name="leiras" rows="3" required></textarea>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" name="tehermentes" checked />
                                <label className="form-check-label" htmlFor="creditFree">Tehermentes ingatlan</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pictureUrl" className="form-label">Fénykép az ingatlanról</label>
                                <input type="url" className="form-control" name="kepUrl" required/>
                            </div>
                            <div className="mb-3 text-center">
                                <button className="btn btn-primary px-5">Küldés</button>
                            </div>

                            {
                                errorMessage &&
                                    <div className="alert alert-danger alert-dismissible" role="alert">
                                        <strong>{errorMessage}</strong>
                                        <button type="button" className="btn-close"></button>
                                    </div>
                            }
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}