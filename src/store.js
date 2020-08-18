import { writable } from 'svelte/store';

export const corretoras = {
    1: {"name":"Bradesco", "group":"player-institucional-br" },
    2: {"name":"Ideal", "group":"player-estrangeiro" }
}

export const lastPrice = writable(5384.5);

export const offers = writable({
    5380.5: [{player_id:1,lots:5},{player_id:2,lots:15}],
    5384.0: [{player_id:1,lots:10, iceberg:true}],
})

export const agressions = writable(
    {
        5381.5: [{agressor_id:1,lots:5,type:'buy'}],
        5382.5: [{agressor_id:2,lots:5,type:'buy'},{agressor_id:2,lots:15,type:'buy'}],
        5384.5: [{agressor_id:1,lots:5,type:'sell'}],
        5382.0: [{agressor_id:1,lots:10,type:'sell'}],
    }
)



