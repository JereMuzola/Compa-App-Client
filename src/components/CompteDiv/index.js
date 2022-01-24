import React, {useEffect, useState} from "react";
import axios from "axios";
import {Toast,Col,Row} from "react-bootstrap";
import "react-bootstrap/esm/index"

export default function Index(props){
    const [comptes,setComptes]=useState([]);
    const [num,setNum]=useState('');
    const [show, setShow] = useState(false);
    const [numCompte,setNumCompte]=useState('');
    const [libCompte,setLibCompte]=useState('');
    const [numeroCompte,setNumeroCompte]=useState('');
    const [libelle,setLibelle]=useState('');
    const [liste,setListe]=useState([]);
    const [texte,setTexte]=useState('');
    const [objReceive,setObjReceive]=useState(null);
    async function getComptes(){
        await axios.get('http://localhost:8000/api/compte/index').then((response)=>{
                    setComptes(response.data);
        }).catch((error)=>{
            console.log("Erreur"+error)
        })
    }
    /*async function getOneCompte(numero){
        await axios.get('http://localhost:8000/api/compte/show/'+numero)
            .then((response)=>{
                setNumCompte(response.data.numero_compte);
                setLibCompte(response.data.libelle);
            }).catch((error)=>{
                console.log("Erreur :"+error);
            })
    }*/
    async function getListe(){
        await axios.get('http://localhost:8000/api/compteDiv/index').then((response)=>{
            setListe(response.data);
        }).catch((error)=>{
            console.log("Erreur"+error)
        })
    }
    async function addCompteDiv(){
        await axios.post('http://localhost:8000/api/compteDiv/store',{numero:num,libelle:libelle,compte:numCompte})
            .then((response)=>{
                if(response.data.objet!==null){
                    setTexte(response.data.message);
                    setNum('');
                    setLibelle('');
                    setNumCompte('');
                    setLibCompte('');
                    getListe();
                }
            })
    }
    function showToast(){
        return (
            <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={4500} autohide>
                        <Toast.Header>
                            <strong className="mr-auto">Succes</strong>
                        </Toast.Header>
                        <Toast.Body>{texte}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        )
    }

    useEffect(function LoadApp(){
       getListe();
       getComptes();
      // getOneCompte(num);
    })
    return(
        <div className="container">
            <h1 className="font-weight-bold text-center" style={{color:"blue"}}>LISTE DE COMPTE DIVISIONNAIRES</h1>
            <table className="table table-bordered table-responsive-xl">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Numéro</th>
                    <th scope="col">Libelle</th>
                    <th scope="col">N° Compte</th>
                    <th scope="col">Libelle Compte</th>
                    <th scope="col">Opérations</th>
                </tr>
                </thead>
                <tbody>
                    {
                        liste.map(ele=>{
                            return (
                                <tr key={ele.NumCompteDiv}>
                                    <td>{ele.NumCompteDiv}</td>
                                    <td>{ele.LibCompteDiv}</td>
                                    <td>{ele.NumCompte}</td>
                                    <td>{ele.LibelleCompte}</td>
                                    <td>
                                        <button className="btn btn-primary" style={{marginRight:"5px"}}>Editer</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <form style={{border:"black 2px solid",paddingLeft:"10px",paddingRight:"10px"}}
            onSubmit={(event)=> {
                event.preventDefault();
                addCompteDiv();
            }}>
                <legend>Formulaire d'ajout des compte divisionnaires</legend>
                <div className="form-group">
                    <label htmlFor="numero">Numéro</label>
                    <input type="text" id="numero" className="form-control"
                           placeholder="3 caractères seulement SVP"
                           value={num}
                           onChange=
                               {
                                   (e)=>{
                                       //const index_compte=event.target.options[selectedIndex].getAttribute('data-key');
                                       //getOneCompte(parseInt(e.target.value.substring(0,2)));
                                       setNum(e.target.value);
                                       //setNumCompte(e.target.value.substring(0,2));
                                       if(parseInt(e.target.value.substring(0,2))>=10 && parseInt(e.target.value.substring(0,2))<=79){
                                           setNumCompte(e.target.value.substring(0,2));
                                       }else{
                                           setLibCompte("");
                                           setNumCompte("");
                                       }
                                       //let lib="";
                                       //aaa
                                   }
                               }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="libelle">Libelle</label>
                    <input type="text" id="libelle"
                           className="form-control" placeholder="libelle"
                           value={libelle}
                           onChange={
                               (event)=>{
                                   setLibelle(event.target.value)
                               }
                           }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="compte">Compte</label>
                    <div className="row">
                    <select className="form-control col-2"
                            style={{marginLeft:"15px",marginRight:"15px"}}
                            value={numCompte}
                            onChange={(event)=>{
                                setNumCompte(event.target.value);
                                const selectedIndex=event.target.options.selectedIndex;
                                const lib_compte=event.target.options[selectedIndex].getAttribute('data-key');
                                if(event.target.value!==""){
                                    setLibCompte(lib_compte);
                                }else{
                                    setLibCompte('');
                                }
                            }}>
                        <option></option>
                        {
                            comptes.map(compte=>{
                                return (<option key={compte.libelle} data-key={compte.libelle}>{compte.numero}</option>)
                            })
                        }
                    </select>
                    <select name="compte"
                            className="form-control col-9"
                            autoComplete="on"
                            value={libCompte}
                            onChange={
                                event => {
                                    setLibCompte(event.target.value)
                                    const selectedIndex=event.target.options.selectedIndex;
                                    const index_compte=event.target.options[selectedIndex].getAttribute('data-key');
                                    if (event.target.value!==""){
                                        setNumCompte(index_compte);
                                    }else{
                                     setNumCompte('');
                                    }
                                }
                            }
                    >
                        <option></option>
                        {
                            comptes.map(compte=>{
                                return (<option key={compte.numero} data-key={compte.numero}>{compte.libelle}</option>)
                            })
                        }

                    </select>
                    </div>
                </div>
                {
                    texte===''?<p className="font-weight-bold bg-primary"></p>:<p className="font-weight-bold bg-danger">{texte}</p>
                }
                <button className="btn btn-block btn-primary"
                        style={{marginTop:"10px",marginBottom:"10px"}}
                        type="submit">
                    AJOUTER LE COMPTE DIVISIONNAIRE</button>

            </form>
        </div>
    )
}