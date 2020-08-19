import { useFish } from './Fish/FishDataProvider.js'
import { FishList } from './Fish/FishList.js'
import { TipList } from './tips/TipList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
TipList()