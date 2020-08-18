import { writable } from 'svelte/store';

export const corretoras = {
    1: {"name":"Bradesco", "group":"player-institucional-br" },
    2: {"name":"Ideal", "group":"player-estrangeiro" },
    3: {"name":"UBS", "group":"player-hft" }
}

export const lastPrice = writable(5384.5);

export const offers = writable({
    5380.5: [{player_id:1,lots:5},{player_id:2,lots:15}],
    5384.0: [{player_id:1,lots:10, iceberg:true}],
})

export const agressions = writable(
    [
        {agressor_id:1,time:121,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:2,time:122,price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:3,time:122,price:5381.5,ticks_consumed:3,lots:300,type:'buy'},
        {agressor_id:3,time:122,price:5382.0,ticks_consumed:0,lots:5,type:'buy'},
        {agressor_id:3,time:122,price:5382.5,ticks_consumed:0,lots:5,type:'buy'},
        {agressor_id:3,time:123,price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:2,time:124,price:5383.5,ticks_consumed:0,lots:100,type:'sell'},
        {agressor_id:2,time:124,price:5383.0,ticks_consumed:2,lots:100,type:'sell'},
        {agressor_id:1,time:124,price:5383.0,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:124,price:5384.0,ticks_consumed:1,lots:10,type:'sell'}
    ]
)



