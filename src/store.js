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
export let time_now = writable(new Date())

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
    5385.0: [{player_id:2,lots:20},{player_id:3,lots:40}],
})

export const agressions = writable(
    [
        {agressor_id:1,time:new Date('2020-08-29 09:30:01'),price:5381.0,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:30:02'),price:5381.0,ticks_consumed:1,lots:50,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:30:03'),price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:30:04'),price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:30:05'),price:5381.5,ticks_consumed:1,lots:5,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:30:05'),price:5381.5,ticks_consumed:3,lots:300,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:30:05'),price:5382.0,ticks_consumed:1,lots:320,type:'sell'},
        {agressor_id:3,time:new Date('2020-08-29 09:30:06'),price:5382.0,ticks_consumed:1,lots:30,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:30:07'),price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:30:10'),price:5382.5,ticks_consumed:1,lots:15,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:30:12'),price:5383.0,ticks_consumed:2,lots:100,type:'sell'},
        {agressor_id:1,time:new Date('2020-08-29 09:30:15'),price:5383.0,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:30:25'),price:5384.0,ticks_consumed:1,lots:5,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:30:37'),price:5384.0,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:30:48'),price:5384.5,ticks_consumed:2,lots:200,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:33:53'),price:5384.5,ticks_consumed:1,lots:200,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:31:01'),price:5384.5,ticks_consumed:1,lots:100,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:31:12'),price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:1,time:new Date('2020-08-29 09:31:23'),price:5385.5,ticks_consumed:1,lots:15,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:31:25'),price:5385.5,ticks_consumed:1,lots:10,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:31:26'),price:5385.5,ticks_consumed:1,lots:100,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:31:27'),price:5385.5,ticks_consumed:1,lots:5,type:'sell'},
        {agressor_id:2,time:new Date('2020-08-29 09:31:31'),price:5385.5,ticks_consumed:1,lots:250,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:32:00'),price:5385.5,ticks_consumed:1,lots:250,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:02'),price:5386.0,ticks_consumed:1,lots:20,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:10'),price:5386.0,ticks_consumed:1,lots:20,type:'buy'},
        {agressor_id:1,time:new Date('2020-08-29 09:32:12'),price:5386.0,ticks_consumed:1,lots:50,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:15'),price:5386.0,ticks_consumed:1,lots:40,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:16'),price:5386.0,ticks_consumed:2,lots:140,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:23'),price:5386.0,ticks_consumed:1,lots:40,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:26'),price:5386.0,ticks_consumed:2,lots:140,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:32:28'),price:5386.0,ticks_consumed:1,lots:5,type:'sell'},
    ]
)
export let last_agression_time  = writable(null);

export const indicators  = writable([
    {name:'Payroll', time:new Date('2020-08-29 09:30:00'), relevance:3},
    {name:'Indicador X longest name', time:new Date('2020-08-29 22:48:00'), relevance:1},
    {name:'Fally', time:new Date('2020-08-29 23:43:00'), relevance:2}
])
