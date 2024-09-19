import React, { useMemo } from 'react'

const RHome = (props) => {
    const { currData, predResults } = props;
    const rows = useMemo(() => {
        if (currData.length > 0) {
            return currData.slice().reverse().slice(0, 50).map((object, index) => {
                return <tr style={{ marginTop: '2rem',backgroundColor:'black',color:'white'}} key={index}>
                    <td>{object["Air temperature [K]"]}</td>
                    <td>{object["Process temperature [K]"]}</td>
                    <td>{object["Rotational speed [rpm]"]}</td>
                    <td>{object["Torque [Nm]"]}</td>
                    <td>{object["Tool wear [min]"]}</td>
                    <td>{predResults}</td>
                </tr>
            });
        } else {
            return null; // Or display a placeholder message
        }
    }, [currData])

    return (
        <div>
            <div className="heroRight" style={{ overflow: 'hidden',position:'relative',backgroundColor:'black' }}>
                <div className="table" style={{overflowY :'auto',maxHeight: 'calc(100vh - 5rem)',position:'relative' }}>
                    <table style={{ width: '100%', backgroundColor: 'black', borderSpacing: '0 1rem', color: 'white', marginTop: '0.1rem', borderCollapse: 'separate' }}>
                        <thead style={{position:'sticky',top:0 }}>
                            <tr style={{backgroundColor:'black',color:'white'}}>
                                <th>Air temperature [K]</th>
                                <th>Process temperature [K]</th>
                                <th>Rotational speed [rpm]</th>
                                <th>Torque [Nm]</th>
                                <th>Tool wear [min]</th>
                                <th>Failures</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RHome
