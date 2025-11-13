import React from 'react'
import { Table } from 'react-bootstrap'
import '../../bootstrap.min.css'

export default class Offers extends React.Component {
    render() {
        return (
            <div className='page-wrapper'>
                <div className='container'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        )
    }
}