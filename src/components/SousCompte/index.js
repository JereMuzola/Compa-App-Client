import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function () {
    const [numero,setNumero]=useState("");
    const [liste,setListe]=useState([]);
    const [compteDivs,setComteDivs]=useState([]);
    const [texte,setTexte]=useState('');
    const [libelle,setLibelle]=useState("");
    const [desc,setDesc]=useState('');
    const [numCompteDiv,setNumCompteDiv]=useState('');
    const [libCompteDiv,setLibCompteDiv]=useState('');
    async function getAll() {
        await axios.get('http://localhost:8000/api/sousCompte/index')
            .then((response)=>{
                setListe(response.data);
            }).catch((error)=>{
                console.log("Error :"+error);
            })
    }
    async function getAllCompteDiv(){
        await axios.get('http://localhost:8000/api/compteDiv/index')
            .then((response)=>{
                setComteDivs(response.data);
            }).catch((error)=>{
                console.log("Error :"+error);
            })
    }
    async function getOneCompteDiv(numero){
        await axios.get('http://localhost:8000/api/compteDiv/show/'+numero)
            .then((response)=>{
                setNumCompteDiv(response.data.numero_compte_div);
                setLibCompteDiv(response.data.libelle);
            }).catch((error)=>{
                console.log("Error :"+error)
            })
    }
    async function addSous_Compte(){
        await axios.post('http://localhost:8000/api/sousCompte/store',{
            numero:numero,
            libelle:libelle,
            description:desc,
            compteDiv:numCompteDiv
        }).then((response)=>{
            setTexte(response.data.message);
            getAll();
            setNumero('');
            setLibelle('');
            setDesc('');
            setNumCompteDiv('');
            setLibCompteDiv('');
        }).catch((error)=>{
            console.log("Error :"+error);
        })
    }
    useEffect(function () {
        getAll();
        getAllCompteDiv();
    })
    return(
      <div className="container">
          <h1 className="font-weight-bold text-center" style={{color:"blue"}}>LISTE DE SOUS-COMPTES</h1>
          <table className="table table-bordered table-responsive-xl">
              <thead className="thead-light">
              <tr>
                  <th scope="col">Numéro</th>
                  <th scope="col">Libelle</th>
                  <th scope="col">N° du Compte divisionnaire</th>
                  <th scope="col">Libelle du Compte divisionnaire</th>
                  <th scope="col">Déscription</th>
                  <th scope="col">Opérations</th>
              </tr>
              </thead>
              <tbody>
              {
                  liste.map((sous_compte)=>{
                      return (<tr>
                          <td>{sous_compte.numero}</td>
                          <td>{sous_compte.libelle}</td>
                          <td>{sous_compte.NumCompteDiv}</td>
                          <td>{sous_compte.LibCompteDiv}</td>
                          <td>{sous_compte.description}</td>
                          <td>
                              <button className="btn btn-primary" style={{marginRight:"5px"}}>Editer</button>
                          </td>
                      </tr>)
                  })
              }
              </tbody>
          </table>
          <form style={{border:"black 2px solid",paddingLeft:"10px",paddingRight:"10px"}}
          onSubmit={
              (event)=>{
                  event.preventDefault();
                  addSous_Compte();
              }
          }>
              <legend>Formulaire d'ajout des compte divisionnaires</legend>
              <div className="form-group">
                    <label htmlFor="numero">Numéro</label>
                    <input type="text" className="form-control"
                    id="numero" placeholder="Numéro de sous-comptes" value={numero}
                    onChange={(event)=>{
                        setNumero(event.target.value);
                        if(parseInt(event.target.value.substring(0,3))>=100 && parseInt(event.target.value.substring(0,3))<800){
                            getOneCompteDiv(event.target.value.substring(0,3));
                        }else{
                            setNumCompteDiv('');
                            setLibCompteDiv('');
                        }
                    }}/>
                    <div className="form-group">
                    <label htmlFor="libelle">Libelle</label>
                    <input type="text" placeholder="le libelle du sous-compte"
                    value={libelle} className="form-control"
                    onChange={
                        (event)=>{
                            setLibelle(event.target.value);
                        }
                    }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="compteDiv">Compte Divisionnaire</label>
                        <div className="row">
                            <input type="text" value={numCompteDiv} placeholder="numéro du compte divisionnaire"
                            className="form-control col-2"
                                   style={{marginLeft:"15px",marginRight:"15px"}}
                            id="compteDiv" onChange={
                                (event)=>{
                                    setNumCompteDiv(event.target.value);
                                }
                            }/>
                            <select value={libCompteDiv} className="form-control col-9"
                            autoComplete="on"
                            onChange={
                                (event)=>{
                                    setLibCompteDiv(event.target.value);
                                    const selectedIndex=event.target.options.selectedIndex;
                                    const index_compte=event.target.options[selectedIndex].getAttribute('data-key');
                                    if (event.target.value!==""){
                                        setNumCompteDiv(index_compte);
                                    }else{
                                        setNumCompteDiv('');
                                    }
                                }
                            }>
                                <option></option>
                                {
                                    compteDivs.map((compteDiv)=>{
                                        return (<option key={compteDiv.NumCompteDiv} data-key={compteDiv.NumCompteDiv}>{compteDiv.LibCompteDiv}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea value={desc} className="form-control"
                            onChange={
                                (event)=>{
                                    setDesc(event.target.value);
                                }
                            }>

                            </textarea>
                        </div>
                    </div>
              </div>
              {
                  texte===''?<p className="font-weight-bold bg-primary"></p>:<p className="font-weight-bold bg-danger">{texte}</p>
              }
              <button className="btn btn-block btn-primary"
                      style={{marginTop:"10px",marginBottom:"10px"}}
                      type="submit">
                  AJOUTER LE SOUS-COMPTE</button>
          </form>
      </div>
    );
}