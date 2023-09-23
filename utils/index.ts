
export async function fetchCars(){
    const headers ={
            'X-RapidAPI-Key': '484aee40a3msh3de3d892007e0b5p17b34cjsncd01a63afae2',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {headers:headers,});

    const result = await response.json();

    return result;
} 