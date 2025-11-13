import React from 'react'
import { Table } from 'react-bootstrap'
import '../../bootstrap.min.css'

export default class Offers extends React.Component {
    render() {
        return (
            <div className='page-wrapper'>
                <h1 className='text-center'>Ajánlataink</h1>
                <Table striped bordered hover>
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
                        <tr>
                            <td>Ház</td>
                            <td>Leírás</td>
                            <td>2025.11.13.</td>
                            <td>Igen</td>
                            <td><img src="https://almafa.png" alt="" /></td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}