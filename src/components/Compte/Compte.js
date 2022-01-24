import React,{Component} from "react";
import Form from './form';
import List from './list';
import axios from "axios";



class compte extends Component{

    constructor(props) {
        super(props);
        this.state={
            url:['http://localhost:8000/api/classe/index',
                'http://localhost:8000/api/sorteCompte/index',
                'http://localhost:8000/api/typeCompte/index',
                'http://localhost:8000/api/compte/store',
                'http://localhost:8000/api/compte/index'
            ],
            classes:[],
            typeComptes:[],
            sortes:[],
            comptes:[],
            numero:'',
            libelle:'',
            classe:'',
            index_classe:'',
            sorte:'',
            index_sorte:'',
            typeCom:'',
            index_type:'',
            description:'',
            messages:""
        }
    }

    async getClasses(){
        await axios.get(this.state.url[0]).then((res)=>{
            this.setState(
                {classes:res.data
                }
            )
        },(error)=>{
            console.log(error);
        }).catch((error)=>{
            console.log(error)
        });
    }
    async getSortes(){
        await axios.get(this.state.url[1]).then((res)=>{
            this.setState(
                {sortes:res.data,
                }
            )
        },(error)=>{
            console.log(error);
        }).catch((error)=>{
            console.log(error)
        });
    }
    async getTypeCompte(){
        await axios.get(this.state.url[2]).then((res)=>{
            this.setState(
                {typeComptes:res.data
                }
            )
        },(error)=>{
            console.log(error);
        }).catch((error)=>{
            console.log(error)
        });
    }
    async getComptes(){
        await axios.get(this.state.url[4]).then((response)=>{
            this.setState({comptes:response.data})
        }).catch((error)=>{
            console.log(error)
        })
    }
    handleSubmit= async (event)=>{
        event.preventDefault();
        await axios.post(this.state.url[3],{numero:this.state.numero,
            libelle:this.state.libelle,
            classe:this.state.index_classe,
            type:this.state.index_type,
            sorte:this.state.index_sorte,
            description:this.state.description}).then((response)=>{
            this.setState({messages:response.data.message,
                numero:'',
                libelle:'',
                classe:'',
                index_classe:'',
                sorte:'',
                typeCom:'',
                description:''});
            this.getComptes();

        }).catch((error)=>{
            console.log(error)
        });
    }
    componentDidMount() {
        this.getClasses();
        this.getSortes();
        this.getTypeCompte();
        this.getComptes();
       /* const selectedIndex=event.target.options.selectedIndex;
        const index_classe=event.target.options[selectedIndex].getAttribute('data-key');
        this.setState({classe:event.target.value,index_classe:index_classe});
        const selectedIndex1=event.target.options.selectedIndex;
        const index_sorte=event.target.options[selectedIndex1].getAttribute('data-key');
        this.setState({sorte:event.target.value,index_sorte:index_sorte});
        const selectedIndex2=event.target.options.selectedIndex;
        const index_compte=event.target.options[selectedIndex2].getAttribute('data-key');
        this.setState({typeCom:event.target.value,index_type:index_compte})*/
    }
    numeroChange(event){
        if(event.target.value.substring(0,1)!=="" && parseInt(event.target.value.substring(0,1))>=1 && parseInt(event.target.value.substring(0,1))<=7){
            const classe=this.state.classes[parseInt(event.target.value.substring(0,1))-1].libelle;
            if(parseInt(event.target.value.substring(0,1))!==6 && parseInt(event.target.value.substring(0,1))!==7) {
                const sorte=this.state.sortes[0].libelle;
                if(parseInt(event.target.value.substring(0,1))!==1 && parseInt(event.target.value.substring(0,1))!==4){
                    this.setState({
                        numero:event.target.value,
                        index_classe:event.target.value.substring(0,1),
                        classe:classe,
                        sorte:sorte,
                        index_sorte:this.state.sortes[0].numero,
                        typeCom:this.state.typeComptes[0].libelle,
                        index_type:this.state.typeComptes[0].numero
                    });
                }else{
                    this.setState({
                        numero: event.target.value,
                        index_classe: event.target.value.substring(0, 1),
                        classe: classe,
                        sorte: sorte,
                        index_sorte:this.state.sortes[0].numero,
                        typeCom: this.state.typeComptes[2].libelle,
                        index_type:this.state.typeComptes[2].numero
                    });
                }
            }else{
                const sorte=this.state.sortes[1].libelle;
                if(parseInt(event.target.value.substring(0,1))===6){
                    this.setState({
                        numero: event.target.value,
                        index_classe: event.target.value.substring(0, 1),
                        classe: classe,
                        sorte: sorte,
                        index_sorte:this.state.sortes[1].numero,
                        typeCom:this.state.typeComptes[1].libelle,
                        index_type:this.state.typeComptes[1].numero,
                    });
                }else{
                    this.setState({
                        numero: event.target.value,
                        index_classe: event.target.value.substring(0, 1),
                        classe: classe,
                        sorte: sorte,
                        index_sorte:this.state.sortes[1].numero,
                        typeCom:this.state.typeComptes[3].libelle,
                        index_type:this.state.typeComptes[3].numero
                    });
                }
            }

        }else{
            this.setState({
                numero:"",
                index_classe:"",
                classe:"",
                sorte:"",
                index_sorte:"",
                typeCom:"",
                index_type:""
            });
        }
        //this.setState({numero:event.target.value});
        //console.log(this.state.numero);
    }
    libelleChange(event){
        this.setState({libelle:event.target.value});
        //console.log(this.state.libelle);
    }
    classeChange(event){
        if(event.target.value!=="") {
            const selectedIndex = event.target.options.selectedIndex;
            const index_classe = event.target.options[selectedIndex].getAttribute('data-key');
            this.setState({classe: event.target.value, index_classe: index_classe});
            //console.log(this.state.index_classe);
        }else{
            this.setState({
                classe:"",
                index_classe:""
            })
        }
    }
    sorteChange(event){
        const selectedIndex=event.target.options.selectedIndex;
        const index_sorte=event.target.options[selectedIndex].getAttribute('data-key');
        this.setState({sorte:event.target.value,index_sorte:index_sorte});
        console.log(this.state.index_sorte);
    }
    typeComChange(event){
        const selectedIndex=event.target.options.selectedIndex;
        const index_compte=event.target.options[selectedIndex].getAttribute('data-key');
        this.setState({typeCom:event.target.value,index_type:index_compte})
    }
    descChange(event){
        this.setState({description:event.target.value})
    }
    indexClasseChange(event){
        if(event.target.value!=="" && parseInt(event.target.value)>=1 && parseInt(event.target.value)<=7){
            const classe=this.state.classes[parseInt(event.target.value)-1].libelle;
            this.setState({
                index_classe:event.target.value,
                classe:classe
            });
        }else{
            this.setState({
               index_classe:"",
               classe:""
            });
        }
    }

    render() {
        return (
          <div className="container">
              <List listComptes={this.state.comptes}/>
              <Form listClasses={this.state.classes}
                    listSortes={this.state.sortes}
                    listTypes={this.state.typeComptes}
                    numero={this.state.numero}
                    libelle={this.state.libelle}
                    classe={this.state.classe}
                    sorte={this.state.sorte}
                    typeC={this.state.typeCom}
                    indexClasse={this.state.index_classe}
                    changeIndexClasse={(e)=>this.indexClasseChange(e)}
                    description={this.state.description}
                    changeNumero={(e)=>this.numeroChange(e)}
                    changeLibelle={(e)=>this.libelleChange(e)}
                    changeClasse={(e)=>this.classeChange(e)}
                    changeSorte={(e)=>this.sorteChange(e)}
                    changeType={(e)=>this.typeComChange(e)}
                    changeDescription={(e)=>this.descChange(e)}
                    submitInfos={this.handleSubmit}
                    message={this.state.messages}
              />
          </div>
        );
    }
}
export default compte;
