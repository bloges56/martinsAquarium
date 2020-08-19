import { useFish } from './Fish/FishDataProvider.js'
import { FishList } from './Fish/FishList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()