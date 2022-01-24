import React from "react";

function List (props){
        return (
            <div className="container">
                <h1 className="font-weight-bold text-center" style={{color:"blue"}}>LISTE DE COMPTES</h1>
                <table className="table table-bordered table-responsive-xl">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Numéro</th>
                            <th scope="col">Libelle</th>
                            <th scope="col">Classe</th>
                            <th scope="col">Déscription</th>
                            <th scope="col">Opérations</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.listComptes.map((compte)=>{
                        return (
                            <tr key={compte.numero}>
                                <td>{compte.numero}</td>
                                <td>{compte.libelle}</td>
                                <td>{compte.classe}</td>
                                <td>{compte.description}</td>
                                <td>
                                    <button className="btn btn-primary" style={{marginRight:"5px"}}>
                                        Editer
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
}

export default List;