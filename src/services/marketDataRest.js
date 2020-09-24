const headers = new Headers()
headers.set('Access-Control-Allow-Origin','*')
headers.set('Access-Control-Allow-Headers','*')
//headers.set('Access-Control-Allow-Credentials', 'true')
headers.set('Accept', '*/*')
headers.set('Accept-Encoding','gzip, deflate')
headers.set('Origin', 'maximum.blog')

export async function getMarketData(ativo){
    const request = await fetch(`http://127.0.0.1:5001/quote/${ativo}`,{method:'GET',mode:'cors',headers})
    return await request.json()
}