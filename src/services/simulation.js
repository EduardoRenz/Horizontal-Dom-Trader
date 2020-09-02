import { agressions, offers, last_price } from '../store'


export function simulate($last_price,$offers) {
    last_price.update(last => {
        let newn = Math.random() <= 0.5 ? -0.5 : 0.5
        if (last + newn >= 5389.0 || last + newn <= 5380.5)
            return last
        return last + newn
    });

    agressions.update(agr => {
        return [
            {
                agressor_id: Math.floor(Math.random() * 3) + 1,
                time: new Date(), price: $last_price,
                ticks_consumed: 1, //Math.floor(Math.random() * 3) + 1,
                lots: Math.floor(Math.random() * 50) + 5,
                type: Math.floor(Math.random() * 2) + 1 == 1 ? 'sell' : 'buy'
            }, ...agr]
    })


    offers.update(offrs => {
        let new_offers = offrs
        let keys = Object.keys(new_offers)
        let key_rand = Math.floor(Math.random() * keys.length)
        let key = keys[key_rand]

        let random_offer = Math.floor(Math.random() * new_offers[key].length)

        new_offers[key].splice(random_offer, 1)

        return new_offers
    })
    offers.update(offrs => {
        let new_offers = $offers
        if (!new_offers[$last_price])
            new_offers[$last_price] = []
        new_offers[$last_price] = [...new_offers[$last_price], { player_id: Math.floor(Math.random() * 3) + 1, lots: Math.floor(Math.random() * 100) + 1 }]
        return new_offers
    })



}


