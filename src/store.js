import { writable,derived } from 'svelte/store';
import cors from "../public/assets/corretoras.json"
//Configs
export let absortion_factor = 10 // Percent for consider an absortion related to counter agression
export const corretoras = cors
// Configuration
export let follow_last_price = writable(false) // Use in Magnet button, for following the last price
export let agressions_limit_show = writable(100) // max number of agressions to stay on screen
export let color_config = writable({
    offers:true,
    agressions:true,
    ranges:[
        {min:100,max:200,color:'#059E5C',text_color:"#ffffff"},
        {min:201,max:300,color:'#e38520',text_color:"#ffffff"},
        {min:301,max:9999,color:'#BD1502',text_color:"#ffffff"},
    ]
})
// Config of simulation component, with the simulation file
export let simulation = writable({
    status:null,
    speed:1,
    current_step:null,
    agressions:[]
})

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
    5384.5: [],
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
        {agressor_id:2,time:new Date('2020-08-29 09:32:23'),price:5386.0,ticks_consumed:1,lots:400,type:'buy'},
        {agressor_id:2,time:new Date('2020-08-29 09:32:26'),price:5386.0,ticks_consumed:2,lots:140,type:'buy'},
        {agressor_id:3,time:new Date('2020-08-29 09:32:28'),price:5386.0,ticks_consumed:1,lots:5,type:'sell'},
    ]
)
export let last_agression_time  = derived(agressions,$agressions=>$agressions.map(agr=> agr.time).reduce((acc,agg) => acc.getTime() > agg.getTime()  ? acc : agg ));

export const indicators  = writable([
    {name:'Payroll', time:new Date('2020-08-29 09:30:00'), relevance:3},
    {name:'Indicador X longest name', time:new Date(), relevance:1},
    {name:'Fally', time:new Date('2020-10-29 23:43:00'), relevance:2}
])
