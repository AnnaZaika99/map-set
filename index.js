var map_a = new Map();
map_a.set('vir1','tov1');
map_a.set('vir2','tov1');
map_a.set('vir3','tov2');
map_a.set('vir4','tov2');
map_a.set('vir5','tov3');

var map_b = new Map();
map_a.set(10,'vir1');
map_a.set(101,'vir2');
map_a.set(111,'vir2');
map_a.set(121,'vir3');
map_a.set(120,'vir3');

var map_c = new Map();
map_a.set(1,'vir1');
map_a.set(7,'vir1');
map_a.set(3,'vir2');
map_a.set(5,'vir3');
map_a.set(2,'vir3');

function mapFunc() {
    var price = []
    var time = []
    for(key of map_b.keys()){
        price.push(key)
        
    }
    var maxPrice = (Math.max(...price))
    var minPrice = (Math.min(...price))

    for(key of map_c.keys()){
        time.push(key)
        
    }
    var maxTime = (Math.max(...time))
    var minTime = (Math.min(...time))

    console.log('Найменша ціна', map_a.get(map_b.get(minPrice)), minPrice, map_b.get(minPrice), getKeyByValue(map_c, map_b.get(minPrice)))

    console.log('Найбільша ціна', map_a.get(map_b.get(maxPrice)), maxPrice, map_b.get(maxPrice), getKeyByValue(map_c, map_b.get(maxPrice)))

    console.log("Найменший час", map_a.get(map_c.get(minTime)), getKeyByValue(map_b, map_c.get(minTime)), map_c.get(minTime), minTime)

    console.log("Найбільший час", map_a.get(map_c.get(maxTime)), getKeyByValue(map_b, map_c.get(maxTime)), map_c.get(maxTime), maxTime)

}

mapFunc()

function getKeyByValue(ob, str){
    for(key of ob.keys()){
        if(ob.get(key) === str)
            return key
    }
}