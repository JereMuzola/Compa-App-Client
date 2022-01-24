import React, {useState,useEffect} from "react";
import axios from 'axios';

export default function Index() {
    const [journalsList, setJournalsList] = useState([])
    const [sousCompteList, setSousCompteList] = useState([])
    const [montant, setMonatant] = useState('');
    const [ref_op, setRef_op] = useState('');
    const [, setTauxDuJour] = useState(0.00000)
    const [sens, setSens] = useState('');
    const [motif, setMotif] = useState('');
    const [date_op, setDateOp] = useState(Date.now);
    const [journal, setJournal] = useState('');
    const [journalNum, setJournalNum] = useState('')
    const [um, setUm] = useState('');
    const [sousCompte, setSousCompte] = useState('');
    const [sousCompteNum, setSousCompteNum] = useState(0)
    const [total1, setTotal1] = useState(0.00000);
    const [total2, setTotal2] = useState(0.00000);
    const [total, setTotal] = useState(0.00000)
    const [description, setDescription] = useState('');


    const getJournals = async () => {
        await axios
            .get("http://localhost:8000/api/operation/journals")
            .then(res => setJournalsList(res.data))
            .catch(err => console.error(err));
    }

    async function getSousComptes() {
        await axios
            .get('http://localhost:8000/api/sousCompte/index')
            .then(res => setSousCompteList(res.data))
            .catch(err => console.error(err))
    }

    async function addOperation() {
        await axios.post('http://localhost:8000/api/operation/store', {}).then(((response) => {

        })).catch((error) => {
            console.log('Error :' + error);
        })
    }


    useEffect(function loadApp() {
        getJournals()
        getSousComptes()
    })

    return (
        <div className="container">
            <h1 className="font-weight-bold text-center" style={{color: "blue"}}>Journalisation des opérations</h1>
            <form style={{paddingLeft: "10px", paddingRight: "10px"}}>
                <div className="form-group">
                    <div className="row form-group">
                        <label htmlFor="journal" className="col col-4">Journal</label>
                        <label htmlFor="total_doc" className="col col-4">Total du document</label>
                        <label htmlFor="date_op" className="col col-4">Date de l'opération</label>
                    </div>
                    <div className="row" style={{marginRight: '5px', marginLeft: '3px'}}>
                        <select className="col col-4 form-control" style={{paddingRight: "3px"}}
                                value={journal} onChange={(event) => {
                            setJournal(event.target.value)
                            setJournalNum(event.target.options[event.target.options.selectedIndex].getAttribute('data-key'))
                        }}>
                            {
                                journalsList.map(journal => {
                                    return (<option key={journal.code_journal}
                                                    data-key={journal.code_journal}>{journal.libelle}</option>)
                                })
                            }
                        </select>
                        <input type="text" className="col col-4 form-control" placeholder="total du document"
                               style={{paddingRight: "3px"}}/>
                        <input type="date" className="col col-4 form-control"
                               value={date_op}
                               onChange={
                                   (event) => {
                                       setDateOp(event.target.value)
                                   }
                               }/>
                    </div>
                </div>
                <div className="form-group border">
                    <h5 className="font-weight-bold text-center" style={{color: "black"}}>Saisie des informations sur
                        les sous-comptes mouvementés</h5>
                    <div className="form-group">
                        <label htmlFor="ref_doc">Référence du document</label>
                        <input type="text" className="form-control" id="ref_doc"/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <label htmlFor="sous_compte">Sous compte</label>
                        </div>
                        <div className="row">
                            <select className="col-6 form-control"
                                    value={sousCompteNum}
                                    onChange={(event)=>{
                                        setSousCompteNum(event.target.value)
                                        setSousCompte(event.target.options[event.target.options.selectedIndex].getAttribute('data-key'))
                                    }}>
                                {
                                    sousCompteList.map((sc) => {
                                        return (<option key={sc.libelle} data-key={sc.libelle}>{sc.numero}</option>)
                                    })
                                }
                            </select>
                            <select className="col-6 form-control" value={sousCompte}
                                    onChange={(event) => {
                                        setSousCompte(event.target.value)
                                        setSousCompteNum(event.target.options[event.target.options.selectedIndex].getAttribute('data-key'))
                                    }}>
                                {
                                    sousCompteList.map((sc) => {
                                        return (<option key={sc.numero} data-key={sc.numero}>{sc.libelle}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group" style={{padding:"5px"}}>
                            <label htmlFor="sexe" style={{marginRight:"10px"}}>Sens:</label>
                            <div className="form-check-inline">
                                <label className="form-check-label" htmlFor="debit">
                                    <input type="radio" className="form-check-input" name="sens" id="debit"/>débit
                                </label>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label" htmlFor="credit">
                                    <input type="radio" className="form-check-input" name="sens" id="credit"/>crédit
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="montant">Montant</label>
                            <input className="form-control" type="text" value={montant}
                            onChange={
                                (event)=>{
                                    if(!isNaN(parseFloat(event.target.value))){
                                        setMonatant(parseFloat(event.target.value))
                                    }else{
                                        setMonatant('')
                                    }
                                }
                            }/>
                        </div>
                        <div className="form-group">
                          <label htmlfor="description">Motif</label>
                            <textarea className="form-control" value={description} id="description" rows="3"
                            onChange={(event)=>{
                                setDescription(event.target.value)
                            }}></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" type="submit" className="btn btn-primary btn-lg btn-block">VALIDER</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}