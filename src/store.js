import { writable } from 'svelte/store';




export const lastPrice = writable(5384.5);
export const offers = writable({
    5380.5: [{player_id:1,lots:5},{player_id:2,lots:15}],
    5384.0: [{player_id:1,lots:10}],
})

export const corretoras = {
    1: {"name":"Bradesco", "group":"player-institucional-br" },
    2: {"name":"Teste", "group":"player-institucional-br" }
}
  corretoras