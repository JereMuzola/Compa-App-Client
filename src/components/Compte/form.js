import React from "react";

function Form (props){
        return (
            <div className="container" style={{marginTop:"15px"}}>
                <form style={{border:"black 2px solid",paddingLeft:"10px",paddingRight:"10px"}} onSubmit={props.submitInfos}>
                    <legend>Formulaire d'ajout des comptes</legend>
                    <div className="form-group">
                        <label htmlFor="Numero">Numéro</label>
                        <input className="form-control" type="text" id="numero"  value={props.numero} name="numero"
                               placeholder="2 caractères seulement SVP"
                        onChange={props.changeNumero}/>
                        <label htmlFor="Libelle">Libelle</label>
                        <input className="form-control" type="text" id="libelle" value={props.libelle}
                               name="nom" placeholder="Le libelle du compte" onChange={props.changeLibelle}/>
                        <div className="form-group">
                        <label htmlFor="classe">Classe</label>
                        <div className="row">
                        <input type="text" value={props.indexClasse}
                               placeholder="Le numero de la classe"
                               className="form-control col-2"
                               style={{marginLeft:"15px",marginRight:"15px"}}
                               onChange={props.changeIndexClasse}
                        />
                        <select name="classe" id="classe" className="form-control col-9"
                                value={props.classe} onChange={props.changeClasse} autoComplete="on">
                            <option></option>
                            {
                                props.listClasses.map((classe)=>{
                                    return (<option key={classe.code} data-key={classe.code}>{classe.libelle}</option>)
                                })
                            }
                        </select>
                        </div>
                        </div>
                        <label htmlFor="sorte">Sorte de Compte</label>
                        <select className="form-control" onChange={props.changeSorte} value={props.sorte}>
                            <option></option>
                            {
                                props.listSortes.map((sorte)=>{
                                    return (<option key={sorte.numero} data-key={sorte.numero}>{sorte.libelle}</option>)
                                })
                            }
                        </select>
                        <label htmlFor="type">Type de compte</label>
                        <select className="form-control" onChange={props.changeType} value={props.typeC}>
                            <option></option>
                            {
                                props.listTypes.map((typeCompt)=>{
                                    return (<option key={typeCompt.numero} data-key={typeCompt.numero}>{typeCompt.libelle}</option>)
                                })
                            }
                        </select>
                        <label htmlFor="description">Déscription</label>
                        <textarea className="form-control" placeholder="Déscription du compte"
                                  onChange={props.changeDescription} value={props.description} style={{marginBottom:"20px"}}></textarea>
                        {
                            props.message===""?<p className="font-weight-bold bg-primary"></p>:<p className="font-weight-bold bg-danger">{props.message}</p>
                        }
                        <button className="btn btn-block btn-primary" style={{marginTop:"10px"}} type="submit">AJOUTER LE COMPTE</button>
                    </div>
                </form>
            </div>
        );
}
export default Form;