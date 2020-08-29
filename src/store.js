import { writable } from 'svelte/store';

//Configs
export let absortion_factor = 10 // Percent for consider an absortion related to counter agression

export const corretoras = {
    1: {"name":"Bradesco", "group":"player-institucional-br" },
    2: {"name":"Ideal", "group":"player-estrangeiro" },
    3: {"name":"UBS", "group":"player-hft" }
}

// Day Info
export let last_price = writable(5384.5); // Last Price agression
export let min = writable(5380.5) // min price of the day
export let max = writable(5389.0) // max price of the day
export let max_volume = writable(0); // Max agression volume on price


// Market Actions
export const offers = writable({
    5380.5: [{player_id:1,lots:5},{player_id:2,lots:15}],
    5381.0: [
        {player_id:1,lots:5},
        {player_id:3,lots:10},
        {player_id:2,lots:100},
        {player_id:3,lots:100},
        {player_id:1,lots:100},
        {player_id:3,lots:100},
        {player_id:3,lots:20},
        {player_id:1,lots:10},
        {player_id:3,lots:5},
        {player_id:2,lots:100},
        {player_id:3,lots:5},
        {player_id:1,lots:100},
        
        
    ],
    5384.0: [{player_id:1,lots:10, iceberg:true}],
})

export const agressions = writable(
    [
        {agressor_id:1,time:121,price:5381.0,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:2,time:121,price:5381.0,ticks_consumed:1,lots:50,type:'buy'},
        {agressor_id:2,time:122,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:1,time:121,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:2,time:122,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:3,time:122,price:5381.5,ticks_consumed:3,lots:300,type:'buy'},
        {agressor_id:1,time:123,price:5382.0,ticks_consumed:1,lots:320,type:'sell'},
        {agressor_id:3,time:123,price:5382.0,ticks_consumed:1,lots:30,type:'buy'},
        {agressor_id:3,time:123,price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:3,time:123,price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:2,time:124,price:5383.0,ticks_consumed:2,lots:100,type:'sell'},
        {agressor_id:1,time:124,price:5383.0,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:124,price:5384.0,ticks_consumed:1,lots:5,type:'sell'},
        {agressor_id:2,time:124,price:5384.0,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:124,price:5384.5,ticks_consumed:2,lots:200,type:'sell'},
        {agressor_id:2,time:124,price:5384.5,ticks_consumed:1,lots:200,type:'sell'},
        {agressor_id:2,time:124,price:5384.5,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:124,price:5385.5,ticks_consumed:1,lots:100,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:5,type:'sell'},
        {agressor_id:2,time:124,price:5385.5,ticks_consumed:1,lots:250,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:1,lots:20,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:1,lots:20,type:'buy'},
        {agressor_id:1,time:124,price:5386.0,ticks_consumed:1,lots:50,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:1,lots:40,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:2,lots:140,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:1,lots:40,type:'buy'},
        {agressor_id:2,time:124,price:5386.0,ticks_consumed:2,lots:140,type:'buy'},
        {agressor_id:3,time:124,price:5386.0,ticks_consumed:1,lots:5,type:'sell'},
    ]
)



