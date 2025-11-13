import React from 'react'
import { Table } from 'react-bootstrap'
import '../../bootstrap.min.css'

export default class Offers extends React.Component {
    state = {
        tableData : []
    }

    componentDidMount() {
        fetch('http://localhost:3333/api/ingatlan')
        .then((res) => res.json())
        .then((tableData) => {
            this.setState({tableData})
        })
        .catch(console.warn)
        .finally( () => {} )
    }

    render() {
        return (
            <div className='page-wrapper mx-auto'>
                <h1 className='text-center'>Ajánlataink</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Kategória</th>
                            <th>Leírás</th>
                            <th>Hirdetés<br />dátuma</th>
                            <th>Tehermentes</th>
                            <th>Fénykép</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tableData.map( element => 
                                <tr key={element.id}>
                                    <td>{element.kategoria}</td>
                                    <td>{element.leiras}</td>
                                    <td>{element.hirdetesDatuma}</td>

                                    {
                                        element.tehermentes
                                        ?
                                        <td style={{color: 'green'}}>Igen</td>
                                        : 
                                        <td style={{color: 'red'}}>Nem</td>
                                    }

                                    <td><img src={element.kepUrl} alt="<property image placeholder>" width={200}/></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}