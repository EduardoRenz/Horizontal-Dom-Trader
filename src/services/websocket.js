var wsUri = "ws://webfeeder.cedrotech.com/ws";
let websocket = new WebSocket(wsUri);
let token = "1f50c44b-8cf5-44b6-bfa1-3058e9dfa858"

const  headers = new Headers()
websocket.onopen = async  (evt) =>{
    console.log("Connected to Endpoint!");
    await login()
    getQuote("petr4")
    getTrades("petr4")
};
websocket.onmessage = function (evt) {
    console.log("Message Received: " + evt.data);
    let data = JSON.parse(evt.data)
    if(data.token){
        token = data.token
    }
    if(data.type)
        handleType(data)
};
websocket.onerror = function (evt) {
    console.error("ERROR: " + evt.data);
};


function login(){
    return new Promise((resolve,reject)=>{
        try {
            websocket.send(`{  
                "module": "login",  
                "service": "authentication",  
                "parameters": {"login": "dudarenz", "password": "102030"}  
            } `);
            setTimeout(()=>resolve('ok'),3000)
    
        } catch (error) {
            reject('Erro ao logar',error)
        }
    })

}

//Retorna cotação
function getQuote(ativo) {
    const data = {  
        "token": token,  
        "module": "quotes",  
        "service": "quote",  
        "parameterGet": ativo,  
        "parameters": {"subsbribetype": "1", "filter": "2,3,4", "delay":"400"}  
        }
    websocket.send(JSON.stringify(data));
}

//Retorna cotação
function getTrades(ativo) {
    const    data = {"token": token,  
        "module": "quotes",  
        "service": "quoteTrade",  
        "parameterGet": ativo,  
        "parameters": {"subsbribetype": "1", "quantidade": "2" ,"delay": "600"}
    } 
    websocket.send(JSON.stringify(data));
}

function handleType(data){

    let handles = {
        "QuoteType":(data)=>console.log('lidando com quotes'),
        "BusinessBookType":saveBook,
    }
    handles[data.type](data)

}

async function saveBook(data){
    let configs = { method: 'POST',
                    headers,
                    mode: 'cors',
                    cache: 'default',
                    body:JSON.stringify(data)
                
                };
    //await fetch('http://127.0.0.1:5001/trades',configs)
}


export default websocket
