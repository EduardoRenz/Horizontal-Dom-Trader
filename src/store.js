import { writable } from 'svelte/store';

export const corretoras = {
    1: {"name":"Bradesco", "group":"player-institucional-br" },
    2: {"name":"Ideal", "group":"player-estrangeiro" },
    3: {"name":"UBS", "group":"player-hft" }
}

export let lastPrice = writable(5384.5); // Last Price agression
export let maxVolume = writable(0); // Max agression volume on price

export const offers = writable({
    5380.5: [{player_id:1,lots:5},{player_id:2,lots:15}],
    5381.0: [
        {player_id:1,lots:5},
        {player_id:3,lots:10},
        {player_id:3,lots:100},
        {player_id:3,lots:100},
        {player_id:3,lots:100},
        {player_id:3,lots:100},
        {player_id:3,lots:100},
        {player_id:1,lots:100},
        {player_id:3,lots:100},
        {player_id:2,lots:100},
        
    ],
    5384.0: [{player_id:1,lots:10, iceberg:true}],
})

export const agressions = writable(
    [
        {agressor_id:1,time:121,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:2,time:122,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:3,time:122,price:5381.5,ticks_consumed:3,lots:300,type:'buy'},
        {agressor_id:3,time:123,price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:3,time:123,price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:2,time:124,price:5383.0,ticks_consumed:2,lots:100,type:'sell'},
        {agressor_id:1,time:124,price:5383.0,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:124,price:5384.0,ticks_consumed:1,lots:10,type:'sell'},
        {agressor_id:2,time:124,price:5384.0,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:124,price:5384.5,ticks_consumed:2,lots:200,type:'sell'},
        {agressor_id:2,time:124,price:5384.5,ticks_consumed:1,lots:200,type:'sell'},
        {agressor_id:2,time:124,price:5384.5,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:100,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:5,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:5000,type:'buy'},
    ]
)



